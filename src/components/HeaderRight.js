import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native';
import {notification} from '../aseets';
import theme from '../theme';
import {Fonts} from '../utils/Fonts';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderRight = ({onNotifPress}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {
        <TouchableOpacity
          style={{
            backgroundColor: '#F08B61',
            marginTop: 5,
            // padding: 8,
            borderRadius: 4,
            width: 80,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
          onPress={onNotifPress}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: Fonts.Quicksand_Bold,
              // color: theme.colors.primary,
              color: 'white',
            }}>
            Post Job
          </Text>
        </TouchableOpacity>
      }
    </View>
  );
};

export const styles = StyleSheet.create({
  textStyle: {
    // fontSize: 20,

    // fontFamily: Fonts.GoogleSansBold,
    color: theme.colors.primaryDark,
  },
});
export default HeaderRight;
