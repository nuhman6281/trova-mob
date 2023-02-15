import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../../utils/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SERVICE_STATUSES } from '../../../utils/constants';

const StatusIndicator = ({ status }) => {
  const isRequestCompleted =
    status === SERVICE_STATUSES.ACTIVE || status === SERVICE_STATUSES.PAYMENT;
  const isServiceCompleted = status === SERVICE_STATUSES.PAYMENT;

  return (
    <View style={styles.container}>
      {/* request */}
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <View
            style={{
              ...styles.dot,
              ...(isRequestCompleted && { backgroundColor: colors.primary }),
            }}>
            {isRequestCompleted ? (
              <FontAwesome5 size={10} color={colors.white} name="check" />
            ) : (
              <Text style={styles.statusLevelNumber}>1</Text>
            )}
          </View>
          <View
            style={{
              ...styles.line,
              ...(isRequestCompleted && { backgroundColor: colors.primary }),
            }}
          />
        </View>
        <Text
          style={{
            ...styles.statusLabel,
            ...(isRequestCompleted && { color: colors.primary }),
          }}>
          Request
        </Text>
      </View>
      {/* service */}

      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <View
            style={{
              ...styles.dot,
              ...(isServiceCompleted && { backgroundColor: colors.primary }),
            }}>
            {isServiceCompleted ? (
              <FontAwesome5 size={10} color={colors.white} name="check" />
            ) : (
              <Text style={styles.statusLevelNumber}>2</Text>
            )}
          </View>
          <View
            style={{
              ...styles.line,
              ...(isServiceCompleted && { backgroundColor: colors.primary }),
            }}
          />
        </View>
        <Text style={{
          ...styles.statusLabel,
          ...(isServiceCompleted && { color: colors.primary }),
        }}>Service</Text>
      </View>
      {/* payment */}

      <View>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <View style={styles.dot}>
            <Text style={styles.statusLevelNumber}>3</Text>
          </View>
        </View>
        <Text style={styles.statusLabel}>Payment</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    height: 18,
    width: 18,
    backgroundColor: colors.border,
    borderRadius: 18,
    borderColor: colors.white,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    height: 5,
    backgroundColor: colors.border,
    flex: 1,
  },
  statusLabel: {
    fontSize: 10,
    right: 10,
    fontWeight: 'bold',
    color: colors.border,
  },
  statusLevelNumber: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default StatusIndicator;
