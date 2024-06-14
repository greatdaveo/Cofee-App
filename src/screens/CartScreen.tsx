import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useStore} from '../store/store';

const CartScreen = () => {
  const cartList = useStore((state: any) => state.CartList);
  console.log('CartList: ', cartList.length);

  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CartScreen;
