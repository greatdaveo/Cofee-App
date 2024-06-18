import {ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageBackgroundInfo from '../detals/ImageBackgroundInfo';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';

interface FavoritesItemCardProps {
  id: string;
  name: string;
  type: string;
  imagelink_portrait: ImageProps;
  special_ingredient: string;
  ingredients: string;
  roasted: string;
  average_rating: number;
  ratings_count: string;
  description: string;
  favorite: boolean;
  ToggleFavoriteItem: any;
}

const FavoriteItemCard: React.FC<FavoritesItemCardProps> = ({
  id,
  name,
  type,
  imagelink_portrait,
  special_ingredient,
  roasted,
  ingredients,
  average_rating,
  ratings_count,
  description,
  favorite,
  ToggleFavoriteItem,
}) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackgroundInfo
        EnableBackHandler={false}
        imageLink_portrait={imagelink_portrait}
        type={type}
        id={id}
        favorite={favorite}
        name={name}
        special_ingredient={special_ingredient}
        ingredients={ingredients}
        average_rating={average_rating}
        ratings_count={ratings_count}
        roasted={roasted}
        ToggleFavorite={ToggleFavoriteItem}
      />

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.containerLinearGradient}>
        <View>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: BORDERRADIUS.radius_25,
    overflow: 'hidden',
  },

  containerLinearGradient: {
    gap: SPACING.space_10,
    padding: SPACING.space_20,
  },

  descriptionTitle: {
    color: COLORS.secondaryLightGreyHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
  },

  descriptionText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
  },
});

export default FavoriteItemCard;
