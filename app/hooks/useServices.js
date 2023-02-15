import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../reducers/serviceReducer';

export const useServices = () => {
  const dispatch = useDispatch();
  const [services, setServices] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const servicesResponse = useSelector(
    state => state?.serviceReducer?.services,
  );

  React.useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    setLoading(true);
    dispatch(fetchServices());
  };

  React.useEffect(() => {
    if (loading) {
      if (servicesResponse?.success) {
        setServices(servicesResponse?.data);
      }
      setLoading(false);
    }
  }, [servicesResponse]);

  return {
    services,
    loading,
    refetch: fetch,
  };
};
