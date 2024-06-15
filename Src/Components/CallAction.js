// library
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

// Utils
import Colors from '../Utils/Colors';
import {hp, wp} from '../Utils/Responsive';
import VectorIcon from '../Utils/VectorIcon';

// valables
const Size5 = hp(5);
const activeOpacity = hp(0.4);

const CallAction = ({call, type, name, IconColor, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={() => {
        onPress();
      }}>
      <View style={styles.container}>
        <VectorIcon type={type} name={name} size={Size5} color={IconColor} />
        <Text style={styles.call}>{call}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CallAction;

const styles = StyleSheet.create({
  container: {
    width: wp(12),
    minHeight: hp(17),
    borderWidth: wp(0.1),
    borderColor: Colors.Grey,
    marginHorizontal: wp(1),
    marginBottom: hp(1.5),
    borderRadius: wp(1.7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  call: {
    fontSize: hp(2),
    marginTop: hp(1),
    color: Colors.White,
  },
});
