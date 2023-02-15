import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from '../reducers/bookingReducer';

export const useBookings = ({ status, autoFetch = true }) => {
  const dispatch = useDispatch();
  const [bookings, setBookings] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const bookingsResponse = useSelector(
    state => state?.bookingReducer?.bookings,
  );

  React.useEffect(() => {
    if(autoFetch){
      fetch();
    }
  }, []);

  const fetch = () => {
    setLoading(true);
    dispatch(fetchBookings());
  };

  React.useEffect(() => {
    if (loading) {
      if (bookingsResponse?.success) {
        setBookings(bookingsResponse?.data);
      }
      setLoading(false);
    }
  }, [bookingsResponse]);

  return {
    bookings: bookings?.filter(x => x.status === status),
    loading,
    refetch: fetch,
  };
};
