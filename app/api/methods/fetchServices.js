

function fetchServices() {
  try {
    const servicesJSON = require('../../mock/services.json');
    return Promise.resolve(servicesJSON);
  } catch (error) {
    return Promise.reject(error);
  }
}

export default fetchServices;
