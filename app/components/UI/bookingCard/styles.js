import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderWidth: 0.4,
    elevation: 2,
    borderRadius: 4,
    padding: 20,
    marginVertical: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '400',
    color: colors.darkGrey,
  },
  avatarRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
  },
  userName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.primary,
  },
  userLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.black,
  },
  dealHistoryText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.black,
  },
  serviceCompleteText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.darkGrey,
  },
  invoiceItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  invoiceItemText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.black,
    marginLeft: 10,
  },
  sessionPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
    marginLeft: 22,
  },
  sessionPriceText: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.black,
  },
  sessionPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.secondary,
    marginLeft: 22,
  },
  buttonsRow: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  timeSlotsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  date: {
    fontSize: 12,
    color: colors.black,
    fontWeight: '500',
  },
  slots: {
    fontSize: 12,
    color: colors.black,
    fontWeight: '500',
  },
  timeSlotItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  address: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    minWidth: 100,
  },
});
