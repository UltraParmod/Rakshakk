// library
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

// Utils
import {hp, wp} from '../Utils/Responsive';
import Colors from '../Utils/Colors';
import Images from '../Utils/Images';
import VectorIcon from '../Utils/VectorIcon';
import Strings from '../Utils/Strings';

// Variables
const Size2 = hp(3.5);
const activeOpacity8 = 0.8;

export default function Contact({onPressCall, onPressDotted, name}) {
  return (
    <View style={styles.container}>
      <View style={styles.contactCotainer}>
        <Image source={Images.user} style={styles.user} />
        <View style={styles.innerContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <TouchableOpacity
            activeOpacity={activeOpacity8}
            onPress={() => {
              onPressCall();
            }}
            style={styles.callBtn}>
            <Text style={styles.btnTxt}>{Strings.callNow}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={activeOpacity8}
          onPress={() => {
            onPressDotted();
          }}
          style={styles.dottedBtn}>
          <VectorIcon
            type="Entypo"
            name="dots-three-horizontal"
            size={Size2}
            color={Colors.Grey}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    paddingHorizontal: wp(1.5),
  },
  contactCotainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: hp(2),
    paddingTop: hp(2.5),
    borderBottomWidth: wp(0.1),
    borderBottomColor: Colors.Grey,
  },
  user: {
    width: wp(4),
    height: wp(4),
    borderRadius: wp(2),
  },
  innerContainer: {
    flex: 0.9,
  },
  name: {
    fontSize: hp(2.5),
    color: Colors.White,
    width: wp(15),
  },
  callBtn: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.8),
    backgroundColor: Colors.secondary,
    borderRadius: wp(0.6),
    width: '60%',
    marginTop: hp(1),
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: hp(2.1),
    color: Colors.White,
    letterSpacing: wp(0.1),
  },
});
