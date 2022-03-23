import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const FilterComponent = ({text, active, index, setFilterOptions}) => {
  const ChangeFilter = () => {};
  return active ? (
    <Text
      style={{
        justifyContent: 'center',
        backgroundColor: '#fff',
        color: 'black',
        paddingHorizontal: 13,
        paddingVertical: 5,
        borderRadius: 5,
      }}>
      {text}
    </Text>
  ) : (
    <TouchableOpacity
      onPress={ChangeFilter}
      style={{
        justifyContent: 'center',
        backgroundColor: '#333',
        paddingHorizontal: 13,
        paddingVertical: 5,
      }}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default FilterComponent;
