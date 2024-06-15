// library
import {Linking, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

// Utils
import VectorIcon from '../Utils/VectorIcon';
import Colors from '../Utils/Colors';
import {hp, wp} from '../Utils/Responsive';
import Api from '../Data/Api';

// varables
const Size5 = hp(5.5);
const activeOpacity8 = 0.8;
const Video = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={activeOpacity8}
        onPress={() => {
          Linking.openURL(Api.Base_Url);
        }}>
        <VectorIcon
          type={'AntDesign'}
          name={'youtube'}
          size={Size5}
          color={Colors.secondary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    width: wp(14),
    height: hp(22),
    borderRadius: wp(1.5),
    borderWidth: wp(0.1),
    borderColor: Colors.Grey,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(1),
    marginVertical: hp(1.5),
  },
});
