// Library
import {Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

// Utils
import Colors from '../Utils/Colors';
import {hp, wp} from '../Utils/Responsive';

// varables
const activeOpacity = 0.9;
const ButtonPrimary = ({onPress, title}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={activeOpacity}
      onPress={() => onPress()}>
      <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    marginVertical: hp(5),
  },
  btnTxt: {
    textAlign: 'center',
    paddingVertical: hp(1.5),
    color: Colors.White,
    fontSize: Platform.OS === 'ios' ? hp(3) : hp(2.5),
    fontWeight: '700',
    letterSpacing: wp(0.1),
  },
});
