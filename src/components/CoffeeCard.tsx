import {
  Dimensions,
  Image,
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';
import BGIcon from './BGIcon';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

interface coffeeCardProps {
  id: string;
  index: number;
  type: string;
  roasted: string;
  imagelink_square: ImageProps;
  name: string;
  special_ingredient: string;
  imagelink_portrait: string;
  average_rating: number;
  price: any;
  buttonPressHandler: any;
}

const CoffeeCard: React.FC<coffeeCardProps> = ({
  id,
  name,
  index,
  type,
  roasted,
  imagelink_square,
  special_ingredient,
  imagelink_portrait,
  average_rating,
  price,
  buttonPressHandler,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.cardLGContainer}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground
        source={imagelink_square}
        style={styles.cardImageBG}
        resizeMode="cover">
        <View style={styles.cardRatingContainer}>
          <CustomIcon
            name="star"
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_16}
          />
          <Text style={styles.cardRatingText}>{average_rating}</Text>
        </View>
      </ImageBackground>

      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardSubTitle}>{special_ingredient}</Text>
      <View style={styles.cardFooterRow}>
        <Text style={styles.cardPriceCurrency}>
          $<Text style={styles.cardPrice}>{price.price}</Text>
        </Text>

        <TouchableOpacity
          onPress={() => {
            buttonPressHandler({
              id,
              index,
              name,
              type,
              roasted,
              imagelink_square,
              special_ingredient,
              prices: [{...price, quantity: 1}],
            });
          }}>
          <BGIcon
            color={COLORS.primaryWhiteHex}
            name={'add'}
            BGColor={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_10}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cardLGContainer: {
    padding: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_25,
  },

  cardImageBG: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },

  cardRatingContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.space_10,
    paddingHorizontal: SPACING.space_15,
    position: 'absolute',
    borderBottomLeftRadius: BORDERRADIUS.radius_20,
    borderBottomRightRadius: BORDERRADIUS.radius_20,
    top: 0,
    right: 0,
  },

  cardRatingText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_14,
    lineHeight: 22,
  },

  cardTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
  },

  cardSubTitle: {
    fontFamily: FONTFAMILY.poppins_light,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_10,
  },

  cardFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.space_15,
  },

  cardPriceCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_18,
  },

  cardPrice: {
    color: COLORS.primaryWhiteHex,
  },
});

export default CoffeeCard;
