import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyButton from './src/components/MyButton';

const App = () => {
  return (
    <View style={styles.container} >
      <MyButton onPress={() => alert('hello')} label={'Hi'} size={"large"} rounded={'large'} type={'primary'}/>
      <MyButton onPress={() => alert('camsamita')} label={'Everyone'} size={"large"} rounded={'large'} type={'secondary'}/>
      <MyButton label={'Happy'} size={"medium"} rounded={'medium'} type={'accent'}/>
      <MyButton label={'New'} size={"medium"} rounded={'medium'} type={'error'}/>
      <MyButton label={'Year'} type={'warning'}/>
      <MyButton label={'2023'} type={'info'}/>
      <MyButton label={'Quy Mao'} type={'success'}/>

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
