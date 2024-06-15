// library
import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
// Utils
import {hp, wp} from '../Utils/Responsive';
import Colors from '../Utils/Colors';
import Images from '../Utils/Images';
import VectorIcon from '../Utils/VectorIcon';
import Strings from '../Utils/Strings';

// Variables
const Size45 = hp(4.5);
const Size4 = hp(3.5);
const Size5 = hp(5.5);
const activeOpacity = hp(0.4);
export default function Header() {
  const [notifactionCount, setNotifactionCount] = useState('4');

  return (
    <View style={styles.container}>
      <View style={styles.userCotainer}>
        <Image source={Images.user} style={styles.user} />
        <View style={styles.titleContainer}>
          <Text style={styles.userName} numberOfLines={1}>
            Parmod Kumar
          </Text>
          <Text style={styles.welcomeTxt}>{Strings.userWelcome}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            solced
            placeholder={Strings.placeholderSearch}
            style={styles.input}
            placeholderTextColor={Colors.Grey}
          />
          <TouchableOpacity
            activeOpacity={activeOpacity}
            onPress={() => {
              Alert.alert(Strings.placeholderSearch);
            }}>
            <VectorIcon
              type="AntDesign"
              name="search1"
              size={Size45}
              color={Colors.Grey}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={() => {
            Alert.alert('Notifications');
          }}>
          <VectorIcon
            type="Octicons"
            name="bell"
            size={Size4}
            color={Colors.White}
            style={styles.notificationIcon}
          />
        </TouchableOpacity>

        <View style={styles.notifactionCountCotainer}>
          <Text style={styles.notifactionCountNo}>{notifactionCount}</Text>
        </View>

        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={() => {
            Alert.alert('Menu');
          }}>
          <VectorIcon
            type="Ionicons"
            name="menu"
            size={Size5}
            color={Colors.White}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.5),
    borderBottomWidth: hp(0.1),
    borderBottomColor: Colors.Grey,
  },
  userCotainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  user: {
    width: wp(5),
    height: wp(5),
    borderRadius: wp(5),
  },
  titleContainer: {
    marginHorizontal: wp(1),
  },
  userName: {
    fontSize: hp(3),
    color: Colors.White,

    width: wp(14),
  },
  welcomeTxt: {
    fontSize: hp(2.5),
    color: Colors.White,
  },
  inputContainer: {
    backgroundColor: Colors.White,
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(1),
    borderRadius: wp(1),
    marginLeft: wp(5.5),
    paddingVertical: Platform.OS === 'ios' ? hp(1.5) : hp(0),
  },
  input: {
    width: '90%',
    fontSize: hp(2.5),
    color: Colors.Primary,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    marginRight: wp(1.5),
    marginTop: hp(0.5),
  },
  notifactionCountCotainer: {
    width: wp(1.2),
    height: wp(1.2),
    borderRadius: wp(1.2),
    position: 'relative',
    left: wp(-2),
    top: hp(-0.5),
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  notifactionCountNo: {
    fontSize: hp(1),
    color: Colors.White,
    textAlign: 'center',
    // please don't remove this   beacouse this is not working in andriod device we will check
    // marginTop: Platform.OS === 'ios' ? hp(5) : hp(-0.2),
  },
});
