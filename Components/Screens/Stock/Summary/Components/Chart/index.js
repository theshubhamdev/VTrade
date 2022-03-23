import {
  View,
  Text,
  processColor,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CandleStickChart} from 'react-native-charts-wrapper';
import {fetchStockChart} from '../../../../../Helpers/Data';
import {
  GetDate,
  GetFullDateInfo,
  GetMinutes,
  GetMonth,
} from '../../../../../Helpers/Utils/ConvertData';
import FilterBar from './FilterBar';
import {useWatchlist} from '../../../../../Contexts/WatchlistContext';

const Chart = ({route}) => {
  const [data, setData] = useState([]);
  const [timeStamps, setTimeStamps] = useState([]);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);

  const {api_key3} = useWatchlist();
  const fetchChart = async () => {
    try {
      const response = await fetchStockChart(
        route.params.data.symbol,
        api_key3,
      );
      setChartData(response);
    } catch (e) {
      console.error('error in fetchChart is', e);
    }
  };
  useEffect(() => {
    if (loading) return;
    setLoading(true);
    fetchChart();
    setLoading(false);
  }, []);
  useEffect(() => {
    updateData(chartData);
  }, [chartData]);
  const updateData = async chartData => {
    if (loading) return;
    setLoading(true);
    let updatedTimeStamps = [];
    let updatedArray = [];
    chartData?.indicators?.quote[0]?.open?.map((open, i) => {
      let object = {
        open: open,
        close: chartData.indicators.quote[0].close[i],
        shadowH: chartData.indicators.quote[0].high[i],
        shadowL: chartData.indicators.quote[0].low[i],
        marker: `${GetDate(chartData.timestamp[i])} ${GetMonth(
          chartData.timestamp[i],
        )} ₹${open.toFixed(2)}`,
        x: GetDate(chartData.timestamp[i]),
      };
      updatedArray.push(object);
      updatedTimeStamps.push(GetDate(chartData.timestamp[i]));
    });
    setData(updatedArray);
    setTimeStamps(updatedTimeStamps);
    setLoading(false);
  };
  const [marker, setMarker] = useState({
    enabled: true,
    markerColor: processColor('#2c3e50'),
    textColor: processColor('white'),
  });
  const [zoomXValue, setZoomXValue] = useState(0);

  return loading ? (
    <View style={{backgroundColor: '#0a0a0a', flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#0a0a0a',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            margin: 10,
            fontSize: 17,
          }}>
          Loading Chart...
        </Text>
      </View>
    </View>
  ) : (
    <View style={{backgroundColor: '#0a0a0a', flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#252525',
            margin: 5,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <FilterBar />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            margin: 5,
            padding: 5,
            borderRadius: 5,
          }}>
          <Text style={{color: '#0a0a0a'}}>Date → </Text>
          <Text style={{color: '#0a0a0a'}}>Price ↓</Text>
          <CandleStickChart
            chartBackgroundColor={processColor('#fff')}
            gridBackgroundColor={processColor('#0a0a0a')}
            drawBorders={true}
            borderColor={processColor('white')}
            style={{flex: 1}}
            data={{
              dataSets: [
                {
                  values: data,
                  label: route.params.data.symbol,
                  config: {
                    highlightColor: processColor('darkgray'),
                    shadowColor: processColor('black'),
                    shadowWidth: 1,
                    shadowColorSameAsCandle: true,
                    increasingColor: processColor('#71BD6A'),
                    increasingPaintStyle: 'FILL',
                    decreasingColor: processColor('#D14B5A'),
                  },
                  xAxis: {},
                  yAxis: {},
                },
              ],
            }}
            xAxis={{yOffset: 1}}
            chartDescription={{
              text: 'Developed with ♥️ by Shubham Lakhmani',
            }}
            maxVisibleValueCount={16}
            autoScaleMinMaxEnabled={true}
            marker={marker}
            legend={{
              enabled: true,
              textSize: 14,
              form: 'CIRCLE',
              wordWrapEnabled: true,
              textColor: processColor('black'),
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Chart;
