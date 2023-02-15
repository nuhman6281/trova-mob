import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomFastImage from '../fastImage';
import Icons from '../../../assets/icons';
import Button from '../button';
import MoreButton from '../moreButton';
import colors from '../../../utils/colors';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import { DATE_TIME_FORMAT, SERVICE_STATUSES } from '../../../utils/constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import StatusIndicator from '../statusIndicator';
import { styles } from './styles';

const BookingCard = ({ item, onAcceptRequest, onGenerateInvoice }) => {
  const { status } = item || {};

  const renderPaymentConfirmView = useCallback(() => {
    return (
      <>
        <View style={{ marginTop: 15 }}>
          <Text style={styles.serviceCompleteText}>
            Service is complete, please confirm payment amount:
          </Text>

          <View style={styles.invoiceItemRow}>
            <CustomFastImage
              style={[{ width: 12, height: 12 }]}
              resizeMode={FastImage.resizeMode.stretch}
              source={Icons.invoice}
            />
            <Text style={styles.invoiceItemText}>Invoice Item</Text>
          </View>
          <View style={styles.sessionPriceRow}>
            <Text style={styles.sessionPriceText}>Session Price</Text>
            <Text
              style={
                styles.sessionPrice
              }>{`$${item?.sessionPrice?.toString()}`}</Text>
          </View>
        </View>

        <View style={styles.buttonsRow}>
          <Button style={styles.button} title={'Resend Invoice'} />
          <Button style={styles.button} title={'Start a Chat'} />
          <MoreButton />
        </View>
      </>
    );
  }, [item]);

  const renderCustomerAvailabilityView = useCallback(() => {
    return (
      <>
        <View style={{ marginTop: 15 }}>
          <Text style={styles.serviceCompleteText}>
            This customer is available at:
          </Text>

          <View style={styles.timeSlotsRow}>
            <View style={{ marginTop: 3 }}>
              <MaterialCommunityIcons
                color={colors.primary}
                size={12}
                name="clock-time-three-outline"
              />
            </View>
            <View>
              {item?.availableTimeSlots?.map((slot, index) => {
                return (
                  <View key={index} style={styles.timeSlotItem}>
                    <View style={{ width: '60%' }}>
                      <Text style={styles.date}>
                        {moment(slot?.date).format(DATE_TIME_FORMAT)}
                      </Text>
                    </View>
                    <View style={{ width: '40%' }}>
                      <Text style={styles.slots}>
                        {`${slot?.from} - ${slot?.to}`}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={styles.timeSlotsRow}>
            <View style={{ marginTop: 3 }}>
              <Octicons color={colors.primary} size={12} name="location" />
            </View>
            <View style={styles.timeSlotItem}>
              <View>
                <Text style={styles.address}>{item?.user?.address}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.buttonsRow}>
          <Button
            onPress={onAcceptRequest}
            style={styles.button}
            type="primary"
            title={'Accept Request'}
          />
          <Button style={styles.button} title={'Reschedule'} />
          <MoreButton />
        </View>
      </>
    );
  }, [item]);

  const renderServiceStartingTimeView = useCallback(() => {
    return (
      <>
        <View style={{ marginTop: 15 }}>
          <Text style={styles.serviceCompleteText}>
            Check in here or scan customer’s QR Code to check in when the
            service is about to start:
          </Text>

          <View style={styles.timeSlotsRow}>
            <View style={{ marginTop: 3 }}>
              <MaterialCommunityIcons
                color={colors.primary}
                size={12}
                name="clock-time-three-outline"
              />
            </View>
            <View style={styles.timeSlotItem}>
              <Text style={styles.date}>
                {moment(item?.startingAt).format(DATE_TIME_FORMAT)}
              </Text>
            </View>
          </View>

          <View style={styles.timeSlotsRow}>
            <View style={{ marginTop: 3 }}>
              <Octicons color={colors.primary} size={12} name="location" />
            </View>
            <View style={styles.timeSlotItem}>
              <View>
                <Text style={styles.address}>{item?.user?.address}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.buttonsRow}>
          <Button style={styles.button} type="primary" title={'Check In'} />
          <Button
            onPress={onGenerateInvoice}
            style={styles.button}
            title={'Generate Invoice'}
          />
          <MoreButton />
        </View>
      </>
    );
  }, [item]);

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>
            {status === SERVICE_STATUSES.PENDING
              ? `Pending Request`
              : status === SERVICE_STATUSES.ACTIVE
              ? `Upcoming Service`
              : status === SERVICE_STATUSES.PAYMENT
              ? `Pending Payment`
              : null}
          </Text>
          <Text style={styles.subtitle}>
            {moment().format(DATE_TIME_FORMAT)}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <StatusIndicator status={item?.status} />
        </View>
      </View>

      <View style={{ ...styles.rowContainer, marginTop: 15 }}>
        <View style={styles.avatarRowContainer}>
          <CustomFastImage
            style={[{ width: 45, height: 45, borderRadius: 45 }]}
            resizeMode={FastImage.resizeMode.stretch}
            source={{
              uri: item?.user?.imageUrl,
              priority: FastImage.priority.normal,
            }}
          />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.userName}>{item?.user?.name}</Text>
            <Text style={styles.userLabel}>{item?.user?.location}</Text>
          </View>
        </View>

        <View style={styles.avatarRowContainer}>
          <CustomFastImage
            style={[{ width: 30, height: 30 }]}
            resizeMode={FastImage.resizeMode.stretch}
            source={Icons.handshake}
          />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.dealHistoryText}>
              {`You and Ray had ${item?.user?.previousDeals} deals before.`}
            </Text>
          </View>
        </View>
      </View>

      {item?.status === SERVICE_STATUSES.PENDING
        ? renderCustomerAvailabilityView()
        : item?.status === SERVICE_STATUSES.ACTIVE
        ? renderServiceStartingTimeView()
        : renderPaymentConfirmView()}
    </View>
  );
};

export default BookingCard;
