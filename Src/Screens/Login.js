// Library
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// Components
import Input from '../Components/Input';
import ButtonPrimary from '../Components/ButtonPrimary';

// Utils
import {CommonStyle} from '../Utils/CommonStyle';
import Images from '../Utils/Images';
import {hp, wp} from '../Utils/Responsive';
import Colors from '../Utils/Colors';
import Strings from '../Utils/Strings';
import VectorIcon from '../Utils/VectorIcon';
import Screens from '../Utils/Screens';

// varabes /
const activeOpacity = 0.8;
const Size = hp(2.5);

export default function Login({navigation}) {
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <KeyboardAwareScrollView
      extraHeight={hp(50)}
      showsVerticalScrollIndicator={false}
      style={{...CommonStyle.container, ...styles.containerStyle}}>
      <Image source={Images.logo} style={styles.logo} />

      <View style={styles.innerContainer}>
        <View style={styles.imgContainer}>
          <Image source={Images.loginImg} style={styles.loginImg} />
        </View>

        <View style={styles.loginContianer}>
          <Text style={styles.loginTitle}>{Strings.login}</Text>
          <Text style={styles.loginAccessTxt}>{Strings.loginAccess}</Text>
          <Input title={Strings.email} placeholder={Strings.placeholderEmail} />
          <Input
            title={Strings.password}
            containerStyle={styles.passwordContainerStyle}
            placeholder={Strings.placeholderPassword}
            secureTextEntry={secureTextEntry}
            onChangeSecureTextEntry={() => setSecureTextEntry(!secureTextEntry)}
            isPassword={true}
          />
          <TouchableOpacity
            activeOpacity={activeOpacity}
            style={styles.checkboxBtn}
            onPress={() => setIsRememberMe(!isRememberMe)}>
            <VectorIcon
              type="Fontisto"
              name={isRememberMe ? 'checkbox-active' : 'checkbox-passive'}
              size={Size}
              color={Colors.White}
            />
            <Text style={styles.checkboxTxt}>{Strings.rememberMe}</Text>
          </TouchableOpacity>
          <ButtonPrimary
            title={Strings.login}
            onPress={() => {
              navigation.navigate(Screens.HOME);
            }}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: wp(4),
  },
  logo: {
    marginVertical: hp(3),
    width: wp(8),
    height: hp(8),
    resizeMode: 'contain',
    marginLeft: wp(0.5),
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(2),
    alignItems: 'center',
  },
  imgContainer: {
    width: wp(30),
    height: wp(40),
    borderRadius: wp(2),
  },
  loginImg: {
    width: '100%',
    height: '100%',
    borderRadius: wp(2),
  },
  loginContianer: {width: '60%'},
  loginTitle: {
    fontSize: hp(4.5),
    color: Colors.White,
    fontWeight: '600',
  },
  loginAccessTxt: {
    fontSize: Platform.OS === 'ios' ? hp(2.5) : hp(2),
    color: Colors.White,
    fontWeight: '400',
    marginBottom: hp(5),
  },
  passwordContainerStyle: {
    marginBottom: hp(3),
  },
  checkboxBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(1),
  },
  checkboxTxt: {
    color: Colors.White,
    fontSize: Platform.OS === 'ios' ? hp(2.5) : hp(2),
    marginHorizontal: wp(1),
  },
});
