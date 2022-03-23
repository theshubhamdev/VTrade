import {View, Text, FlatList} from 'react-native';
import React from 'react';
import FilterComponent from './FilterComponent';

const FilterBar = () => {
  const [filterOptions, setFilterOptions] = [
    {label: '24H', active: false},
    {label: '7D', active: false},
    {label: '1D', active: false},
    {label: '1M', active: true},
    {label: '3M', active: false},
    {label: '6M', active: false},
    {label: '1Y', active: false},
    {label: '5Y', active: false},
    {label: 'MAX', active: false},
  ];
  return (
    <View>
      <FlatList
        data={filterOptions}
        renderItem={({item, index}) => (
          <FilterComponent
            text={item.label}
            active={item.active}
            index={index}
            setFilterOptions={setFilterOptions}
          />
        )}
        horizontal
      />
    </View>
  );
};

export default FilterBar;
