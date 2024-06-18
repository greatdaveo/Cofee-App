import React from 'react';
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
import {COLORS, SPACING} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/loader/EmptyListAnimation';
import FavoriteItemCard from '../components/favorites/FavoriteItemCard';

const FavoriteScreen = ({navigation}: any) => {
  const favoriteList = useStore((state: any) => state.FavoritesList);

  const tabBarHeight = useBottomTabBarHeight();

  // To Add To Favorite
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  // To Delete From Favorite
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  //   To Toggle favorite value
  const ToggleFavorite = (favorite: boolean, type: string, id: string) => {
    favorite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View
          style={[styles.scrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.itemContainer}>
            <HeaderBar title="Favorites" />

            {favoriteList.length == 0 ? (
              <EmptyListAnimation title={'No Favorites...'} />
            ) : (
              <View style={styles.listItem}>
                {favoriteList.map((data: any) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Details', {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      });
                    }}
                    key={data.id}>
                    <>
                      <FavoriteItemCard
                        id={data.id}
                        name={data.name}
                        imagelink_portrait={data.imagelink_portrait}
                        special_ingredient={data.special_ingredient}
                        roasted={data.roasted}
                        type={data.type}
                        ingredients={data.ingredients}
                        average_rating={data.average_rating}
                        ratings_count={data.ratings_count}
                        description={data.description}
                        favorite={data.favorite}
                        ToggleFavoriteItem={ToggleFavorite}
                      />
                    </>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
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
    gap: SPACING.space_20,
  },
});
export default FavoriteScreen;
