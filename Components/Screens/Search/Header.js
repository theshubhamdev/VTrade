import {View, TextInput, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({navigation, search, setSearch, SearchData}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 0.2,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="close" color={'white'} size={30} style={{marginLeft: 10}} />
      </TouchableOpacity>

      <View
        style={{
          borderWidth: 1,
          borderColor: 'white',
          height: 50,
          borderRadius: 50,
          flexDirection: 'row',
          alignItems: 'center',
          margin: 10,
          flex: 1,
        }}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={'white'}
          value={search}
          style={{
            color: 'white',
            marginLeft: 20,
          }}
          onChangeText={text => {
            setSearch(text);
          }}
          onSubmitEditing={() => SearchData()}
        />
        <TouchableOpacity
          onPress={() => SearchData()}
          style={{marginLeft: 'auto', marginRight: 10}}>
          <Icon name="search" color={'white'} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
