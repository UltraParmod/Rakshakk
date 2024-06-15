// library
import {
  Alert,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// Components
import CallAction from '../Components/CallAction';
import FireLight from '../Components/FireLight';
import Video from '../Components/Video';
import Header from '../Components/Header';
import Contact from '../Components/Contact';

// Utils
import Colors from '../Utils/Colors';
import {CommonStyle} from '../Utils/CommonStyle';
import {hp, wp} from '../Utils/Responsive';
import Strings from '../Utils/Strings';
import VectorIcon from '../Utils/VectorIcon';

// Server
import Api from '../Data/Api';

// Variables
const Size4 = hp(4);

const contacts = [
  {id: 1, name: 'Parmod kumar'},
  {id: 2, name: 'Sumit Sharma'},
  {id: 3, name: 'Vikash Kumar'},
  {id: 4, name: 'Sunny Paliwal'},
  {id: 5, name: 'Monu Chodharry'},
  {id: 6, name: 'Sonu Verma'},
  {id: 7, name: 'Vinita Agerwal'},
  {id: 8, name: 'Sadeep Panchal'},
];
const callsAction = [
  {
    id: 1,
    call: Strings.callpolice,
    type: 'MaterialIcons',
    name: 'local-police',
    IconColor: Colors.skyBlue,
  },
  {
    id: 2,
    call: Strings.callFire,
    type: 'FontAwesome5',
    name: 'fire-alt',
    IconColor: Colors.secondary,
  },
  {
    id: 3,
    call: Strings.callambulance,
    type: 'FontAwesome5',
    name: 'ambulance',
    IconColor: Colors.lightBlue,
  },
  {
    id: 4,
    call: Strings.callrakshak,
    type: 'FontAwesome5',
    name: 'car-side',
    IconColor: Colors.White,
  },
  {
    id: 5,
    call: Strings.yoga,
    type: 'MaterialCommunityIcons',
    name: 'yoga',
    IconColor: Colors.green,
  },
  {
    id: 6,
    call: Strings.tips,
    type: 'MaterialIcons',
    name: 'tips-and-updates',
    IconColor: Colors.yellow,
  },
];

export default function Home() {
  return (
    <View style={{...CommonStyle.container, ...styles.ContainerStyle}}>
      <Header />

      <View style={styles.innerContaier}>
        <View style={styles.leftContainer}>
          <KeyboardAwareScrollView
            extraHeight={hp(50)}
            showsVerticalScrollIndicator={false}>
            <View style={styles.leftInnerContainer}>
              <FireLight />

              <View style={styles.serviceContainer}>
                {callsAction.map(item => (
                  <CallAction
                    key={item.id}
                    call={item.call}
                    type={item.type}
                    name={item.name}
                    IconColor={item.IconColor}
                    onPress={() => Alert.alert(Strings.calling, item.call)}
                  />
                ))}
              </View>
            </View>

            <View>
              <View style={styles.headerVideoContainer}>
                <Text style={styles.headerVideoTitle}>
                  {Strings.headerVideoTitle}
                </Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder={Strings.searchVideo}
                    style={styles.input}
                    placeholderTextColor={Colors.Grey}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(Api.Base_Url);
                    }}>
                    <VectorIcon
                      type="AntDesign"
                      name="search1"
                      size={Size4}
                      color={Colors.Grey}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.videoContainer}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                  <Video key={item} />
                ))}
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>

        <View style={styles.rightContainer}>
          <Text style={styles.contactTitle}>{Strings.emergencyContact}</Text>

          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.contactCotainer}>
              {contacts.map(item => (
                <Contact
                  key={item.id}
                  name={item.name}
                  onPressCall={() => Alert.alert(Strings.calling, item.name)}
                  onPressDotted={() =>
                    Alert.alert(Strings.moreDetails, item.name)
                  }
                />
              ))}
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContaier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(2.5),
    width: '100%',
  },
  leftContainer: {
    width: '70%',
    borderRightColor: Colors.Grey,
    borderRightWidth: wp(0.1),
    paddingBottom: hp(13),
  },
  leftInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceContainer: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  rightContainer: {
    width: '30%',
  },
  contactTitle: {
    fontSize: hp(3.5),
    color: Colors.White,
    fontWeight: '500',
    marginBottom: hp(1),
    paddingLeft: wp(1.5),
  },
  headerVideoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingVertical: hp(3),
    marginTop: hp(3),
  },
  headerVideoTitle: {
    fontSize: hp(3),
    color: Colors.White,
  },
  inputContainer: {
    backgroundColor: Colors.lightGrey,
    width: '62%',
    borderWidth: wp(0.1),
    borderColor: Colors.boderColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(1),
    borderRadius: wp(1),
    marginRight: wp(1.2),
    paddingVertical: Platform.OS === 'ios' ? hp(1.5) : hp(0),
  },
  input: {
    width: '90%',
    fontSize: hp(2.5),
    color: Colors.ExtralightGrey,
  },
  videoContainer: {
    marginBottom: hp(5),
    flexDirection: 'row',
    paddingHorizontal: wp(2.5),
    flexWrap: 'wrap',
  },
  contactCotainer: {
    marginBottom: hp(30),
  },
});
