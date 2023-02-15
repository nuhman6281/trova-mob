import * as React from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import colors from '../../utils/colors';
import keyExtractor from '../../utils/keyExtractor';
import Banner from '../UI/banner/banner';
import ListFooterNoMoreLabel from '../UI/listFooterNoMoreLabel';
import BookingCard from '../UI/bookingCard';
import { useBookings } from '../../hooks/useBookings';
import { SERVICE_STATUSES } from '../../utils/constants';
import { useServices } from '../../hooks/useServices';
import { useDispatch } from 'react-redux';
import { updateBookingStatus } from '../../reducers/bookingReducer';

const Services = props => {
  const dispatch = useDispatch();
  const {
    bookings = [],
    loading: bookingLoading,
    refetch: refetchBookings,
  } = useBookings({ status: SERVICE_STATUSES.ACTIVE });

  const {
    services = [],
    loading: servicesLoading,
    refetch: refetchServices,
  } = useServices();

  const onRefresh = () => {
    refetchServices();
    refetchBookings();
  };

  const onGenerateInvoice = id => {
    dispatch(updateBookingStatus({ id, status: SERVICE_STATUSES.PAYMENT }));
  };

  const onPressService = () => {
    //On press service card
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={bookings ?? []}
        extraData={bookings}
        keyExtractor={keyExtractor}
        contentContainerStyle={{ padding: 10 }}
        renderItem={props => {
          return (
            <BookingCard
              {...props}
              onGenerateInvoice={() => onGenerateInvoice(props?.item?.id)}
            />
          );
        }}
        style={{ flex: 1, width: '100%' }}
        ListHeaderComponent={
          <Banner
            autoPlay={true}
            isMainBanner
            items={services}
            onPressCard={onPressService}
            activeDotColor={colors.darkGrey}
            inactiveDotColor={colors.border}
          />
        }
        ListFooterComponent={<ListFooterNoMoreLabel />}
        refreshControl={
          <RefreshControl refreshing={bookingLoading || servicesLoading} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default Services;
