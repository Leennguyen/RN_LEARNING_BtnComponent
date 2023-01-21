import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../colors';
const MyButton = ({children, onPress, type, size, label, rounded}) => {
  const SIZES = ['small', 'medium', 'large'];
  const TYPES = [
    'primary',
    'secondary',
    'accent',
    'error',
    'warning',
    'info',
    'success',
  ];
  const ROUNDED = ['small', 'medium', 'large'];

  const btnSize = SIZES.includes(size) ? size : 'small';
  const btnType = TYPES.includes(type) ? type : 'primary';
  const btnRounded = ROUNDED.includes(rounded) ? rounded : 'small';
  const btnStyle = {
    height: 50,
    width: btnSize === 'large' ? 300 : btnSize === 'medium' ? 200 : 150,
    borderRadius:
      btnRounded === 'large' ? 30 : btnRounded === 'medium' ? 15 : 5,
    backgroundColor:
      btnType === 'primary'
        ? Colors.primary
        : btnType === 'secondary'
        ? Colors.secondary
        : btnType === 'accent'
        ? Colors.accent
        : btnType === 'error'
        ? Colors.error
        : btnType === 'warning'
        ? Colors.warning
        : btnType === 'info'
        ? Colors.info
        : Colors.success,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  };

  return (
    <View>
      <TouchableOpacity style={btnStyle} onPress={onPress}>
        <Text style={styles.btn1}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  btn1: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
