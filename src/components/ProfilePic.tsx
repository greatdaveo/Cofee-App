import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {COLORS, SPACING} from '../theme/theme';

const ProfilePic = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/app_images/avatar.png')}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    overflow: 'hidden',
  },

  img: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});

export default ProfilePic;
