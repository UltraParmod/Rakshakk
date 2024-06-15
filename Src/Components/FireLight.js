// library
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

// Utils
import {hp, wp} from '../Utils/Responsive';
import Colors from '../Utils/Colors';
import VectorIcon from '../Utils/VectorIcon';
import Strings from '../Utils/Strings';

// Variables
const Size6 = hp(5.5);
export default function FireLight() {
  return (
    <View style={styles.container}>
      <View style={styles.outerCricle}>
        <View style={styles.innerCricle}>
          <LinearGradient
            colors={[Colors.White, Colors.secondary]}
            start={{x: 2, y: 2}}
            end={{x: 1, y: 2}}
            style={styles.gradient}>
            <VectorIcon
              type="MaterialCommunityIcons"
              name="alarm-light"
              size={Size6}
              color={Colors.White}
            />
          </LinearGradient>
        </View>
      </View>
      <Text style={styles.emergencyTxt}>{Strings.emergency}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: wp(20),
    minHeight: hp(36),
    borderWidth: wp(0.1),
    borderColor: Colors.Grey,
    marginHorizontal: wp(2.5),
    borderRadius: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCricle: {
    width: wp(13.5),
    height: wp(13.5),
    borderRadius: wp(13.5),
    borderWidth: hp(0.1),
    borderColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCricle: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(10),
    borderWidth: hp(0.1),
    borderColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    width: wp(7.5),
    height: wp(7.5),
    borderRadius: wp(7.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  emergencyTxt: {
    fontSize: hp(2.1),
    marginTop: hp(2.5),
    color: Colors.White,
  },
});
