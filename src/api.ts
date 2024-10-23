import { mockFlights, mockFlightDetails } from './mockData';

export const fetchFlights = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockFlights);
    }, 500); 
  });
};

export const fetchFlightDetails = async (id: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const flight = mockFlightDetails(id);
      if (flight) {
        resolve(flight);
      } else {
        reject(new Error('Flight not found'));
      }
    }, 500); 
  });
};
