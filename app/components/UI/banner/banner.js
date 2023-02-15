import React from 'react';
import { View, FlatList, StyleSheet, Platform, Dimensions } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import PropTypes from 'prop-types';
import ServiceCard from './serviceCard';
import Colors from '../../../utils/colors';
const windowWidth = Dimensions.get('window').width;

const AUTO_PLAY_TIMEOUT = 6000;
class Banner extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      manualScrolling: false,
      viewingIndex: 0,
    };
    this.autoPlayTimeInterval = 0;
    this.orientationListener;
  }

  renderDot = (active, index) => {
    return (
      <View
        key={index}
        style={[
          styles.dotStyle,
          {
            backgroundColor: active
              ? this.props?.activeDotColor || Colors?.darkGrey
              : this.props?.inactiveDotColor || Colors?.border,
          },
        ]}
      />
    );
  };

  componentDidMount = () => {
    this.setAutoScrollingInterval();
  };

  setAutoScrollingInterval = () => {
    this.autoPlayTimeInterval = setInterval(() => {
      this.scrollToNext();
    }, AUTO_PLAY_TIMEOUT);
  };

  scrollToNext = () => {
    if (this.props.items?.length > 0 && this.props.autoPlay) {
      const { isFocused } = this.props;
      if (isFocused && !this.state.manualScrolling) {
        let index =
          this.state.viewingIndex <= this.props.items?.length - 2
            ? this.state.viewingIndex + 1
            : 0;
        this.itemListRef && this.itemListRef.scrollToIndex({ index });
      }
    }
  };

  componentWillUnmount() {
    clearInterval(this.autoPlayTimeInterval);
    this.autoPlayTimeInterval = 0;
  }

  onBeginDrag = () => {
    clearInterval(this.autoPlayTimeInterval);
    this.autoPlayTimeInterval = 0;
    this.setState({
      manualScrolling: true,
    });
  };

  onEndDrag = () => {
    this.setState(
      {
        manualScrolling: false,
      },
      () => {
        this.setAutoScrollingInterval();
      },
    );
  };

  onViewableItemsChanged = ({ viewableItems, changed }) => {
    const viewableCurrentIndex = viewableItems.filter(
      x => x.isViewable === true,
    );
    if (viewableCurrentIndex.length > 0) {
      this.setState({
        viewingIndex: viewableCurrentIndex[0].index,
      });
    }
  };

  onPressCard = item => {
    this.props.onPressCard(item);
  };

  renderImageCard = (item, index) => (
    <ServiceCard
      item={item}
      key={index}
      source={{ uri: item?.imageUrl }}
      onPressCard={() => this.onPressCard(item)}
      {...(Platform.OS === 'android' && {
        onPressIn: this.onBeginDrag,
        onPressOut: this.onEndDrag,
      })}
      isMainBanner={this.props?.isMainBanner}
      touchDisabled={this.props.touchDisabled}
    />
  );

  renderDotsRow = () => {
    return (
      <View style={[styles.dotContainer]}>
        {this.props.items?.map((item, index) => {
          const activeIndex =
            this.state.viewingIndex <= this.props.items?.length - 1
              ? this.state.viewingIndex
              : 0;
          return this.renderDot(index === activeIndex, index);
        })}
      </View>
    );
  };
  render() {
    return (
      <View style={[styles.container]}>
        <FlatList
          pagingEnabled
          onViewableItemsChanged={this.onViewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 30,
          }}
          onScrollBeginDrag={event => this.onBeginDrag(event)}
          onScrollEndDrag={event => this.onEndDrag(event)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={ref => (this.itemListRef = ref)}
          data={this.props.items}
          keyExtractor={(item, index) => '' + index}
          renderItem={({ item, index }) => {
            return this.renderImageCard(item, index);
          }}
          onScrollToIndexFailed={() => {
            /*Failed */
          }}
        />
        {this.props.items?.length > 1 && (
          <View style={styles.dotsRowContainer}>{this.renderDotsRow()}</View>
        )}
      </View>
    );
  }
}

Banner.propTypes = {
  isMainBanner: PropTypes.bool,
  touchDisabled: PropTypes.bool,
  onPressCard: PropTypes.func,
};

Banner.defaultProps = {
  isMainBanner: false,
  touchDisabled: false,
  onPressCard: () => {},
};

export default function (props) {
  const isFocused = useIsFocused();

  return <Banner {...props} isFocused={isFocused} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors?.white,
    width: windowWidth - 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  dotStyle: {
    width: 5,
    height: 5,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 0,
    marginBottom: 0,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dotsRowContainer: {
    bottom: 0,
    margin: 0,
    left: 0,
    right: 0,
    marginVertical: 10,
  },
});
