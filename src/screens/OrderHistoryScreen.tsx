import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/loader/EmptyListAnimation';
import PopUPAnimation from '../components/loader/PopUPAnimation';
import OrderHistoryCard from '../components/order/OrderHistoryCard';

const OrderHistoryScreen = ({navigation}: any) => {
  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);
  const [showAnimation, setShowAnimation] = useState(false);

  const tabBarHeight = useBottomTabBarHeight();

  const navigationHandler = ({index, id, type}: any) => {
    navigation.push('Details', {index, id, type});
  };

  const buttonPressHandler = () => {
    setShowAnimation(true);

    setTimeout(() => {
      setShowAnimation(false);
    }, 2000);
  };

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      {showAnimation ? (
        <PopUPAnimation
          style={styles.lottieAnimation}
          source={require('../lottie/download.json')}
        />
      ) : (
        <></>
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View
          style={[styles.scrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.itemContainer}>
            <HeaderBar title="Order History" />

            {OrderHistoryList.length == 0 ? (
              <EmptyListAnimation title={'No Order History...'} />
            ) : (
              <View style={styles.listItem}>
                {OrderHistoryList.map((data: any, i: any) => (
                  <View>
                    <OrderHistoryCard
                      key={i.toString()}
                      navigationHandler={navigationHandler}
                      orderDate={data.OrderDate}
                      cartListPrice={data.CartListPrice}
                      cartList={data.CartList}
                    />
                  </View>
                ))}
              </View>
            )}
          </View>
          {OrderHistoryList.length > 0 ? (
            <TouchableOpacity
              style={styles.downloadButton}
              onPress={() => {
                buttonPressHandler();
              }}>
              <Text style={styles.buttonText}>Download</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },

  lottieAnimation: {
    height: 250,
  },

  scrollViewFlex: {
    flexGrow: 1,
  },

  scrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },

  itemContainer: {
    flex: 1,
  },

  listItem: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_30,
  },

  downloadButton: {
    margin: SPACING.space_20,
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_36 * 2,
    borderRadius: BORDERRADIUS.radius_20,
  },

  buttonText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
});

export default OrderHistoryScreen;
