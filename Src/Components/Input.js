// Library
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

// Utils
import {hp, wp} from '../Utils/Responsive';
import Colors from '../Utils/Colors';
import VectorIcon from '../Utils/VectorIcon';

// varables
const Size = hp(3);
export default function Input({
  title,
  placeholder,
  secureTextEntry,
  onChangeSecureTextEntry,
  isPassword,
  containerStyle,
}) {
  return (
    <View style={{...styles.inputContainer, ...containerStyle}}>
      <Text style={styles.inputTxt}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.Grey}
        style={styles.inputStyle}
        secureTextEntry={secureTextEntry}
      />
      {!isPassword ? null : (
        <TouchableOpacity onPress={() => onChangeSecureTextEntry()}>
          <VectorIcon
            type="Entypo"
            name={secureTextEntry ? 'eye-with-line' : 'eye'}
            size={Size}
            color={Colors.White}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: hp(0.1),
    borderColor: Colors.White,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(5),

    paddingVertical: Platform.OS === 'ios' ? hp(2) : hp(0),
    paddingHorizontal: wp(1.3),
  },
  inputStyle: {
    width: '90%',
    color: Colors.White,
    fontSize: hp(2.5),
    paddingRight: wp(5),
  },
  inputTxt: {
    fontSize: Platform.OS === 'ios' ? hp(3) : hp(2.5),
    position: 'absolute',
    top: Platform.OS === 'ios' ? hp(-2.5) : hp(-2),
    left: wp(1),
    backgroundColor: Colors.Primary,
    color: Colors.White,
  },
});
