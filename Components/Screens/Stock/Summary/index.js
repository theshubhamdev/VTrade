import {View, Text, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import Description from './Components/Description';

const Summary = ({route}) => {
  const {
    regularMarketOpen,
    regularMarketDayHigh,
    regularMarketVolume,
    regularMarketDayLow,
    trailingPE,
    marketCap,
    fiftyTwoWeekHigh,
    fiftyTwoWeekLow,
    averageDailyVolume3Month,
    trailingAnnualDividendYield,
    epsTrailingTwelveMonths,
  } = route.params.data;
  return (
    <View style={{backgroundColor: '#0a0a0a', flex: 1, paddingHorizontal: 10}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 15,
            justifyContent: 'space-between',
          }}>
          <Description name="open" value={regularMarketOpen} />
          <Description name="High" value={regularMarketDayHigh} />
          <Description name="low" value={regularMarketDayLow} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 15,
            justifyContent: 'space-between',
          }}>
          <Description name="Volume" value={regularMarketVolume} />
          <Description name="P/E" value={trailingPE} />
          <Description name="Mkt Cap" value={marketCap} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 15,
            justifyContent: 'space-between',
          }}>
          <Description name="52W H" value={fiftyTwoWeekHigh} />
          <Description name="52W L" value={fiftyTwoWeekLow} />
          <Description name="Avg Vol" value={averageDailyVolume3Month} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 15,
            justifyContent: 'space-between',
          }}>
          <Description name="Yield" value={trailingAnnualDividendYield + '%'} />
          <Description name="beta" value={4207.05} />
          <Description name="EPS" value={epsTrailingTwelveMonths} />
        </View>
      </View>
    </View>
  );
};

export default Summary;
