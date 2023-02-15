import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Colors from '../../../utils/colors';
import CustomFastImage from '../fastImage';
import FastImage from 'react-native-fast-image';

const windowWidth = Dimensions.get('window').width;

const ServiceCard = ({
  item,
  onPressIn,
  onPressOut,
  onPressCard,
  touchDisabled,
  source,
}) => {
  const [localWindowWidth, setLocalWindowWidth] = useState(windowWidth);

  useEffect(() => {
    const orientationListener = Dimensions.addEventListener('change', e => {
      const { width: windowWidth } = e.window;
      setLocalWindowWidth(windowWidth);
    });
    return () => {
      orientationListener?.remove();
    };
  }, [item]);

  return (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPressCard}
      activeOpacity={0.9}
      disabled={touchDisabled}
      style={styles.container}>
      <View style={styles.cardContainer}>
        <CustomFastImage
          style={[
            styles.cardImage,
            {
              backgroundColor: !source?.uri
                ? Colors.primaryLight
                : 'transparent',
              width: localWindowWidth / 2.6,
              height: localWindowWidth / 3.6,
            },
          ]}
          resizeMode={FastImage.resizeMode.stretch}
          source={{
            uri: source?.uri,
            priority: FastImage.priority.normal,
          }}
        />
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{item?.title}</Text>
          <Text style={styles.cardSubtitle}>
            {item?.subtitle.toUpperCase()}
          </Text>
          <Text numberOfLines={2} style={styles.cardDescription}>
            {item?.description}
          </Text>
          <View style={styles.cardPriceContainer}>
            <Text style={styles.cardPriceLabel}>{'For one session'}</Text>
            <Text style={styles.cardPrice}>{`$${item?.price}`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 20,
  },
  cardContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  cardImage: {
    overflow: 'hidden',
  },
  cardTextContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardDescription: {
    marginTop: 5,
    color: Colors.black,
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 13,
  },
  cardPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPriceLabel: {
    color: Colors.darkGrey,
    fontSize: 10,
    fontWeight: 'bold',
  },
  cardPrice: {
    color: Colors.secondary,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
