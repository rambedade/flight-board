export const mockFlights = [
    {
      id: "1",
      flightNumber: "A1B4",
      airline: "Airline 1",
      origin: "Origin 1",
      destination: "Destination 1",
      departureTime: "2024-10-23T10:35:27.000Z",
      status: "Boarding"
    },
    {
      id: "2",
      flightNumber: "A2B12",
      airline: "Airline 2",
      origin: "Origin 2",
      destination: "Destination 2",
      departureTime: "2024-10-23T10:52:07.000Z",
      status: "Delayed"
    },
    {
      id: "3",
      flightNumber: "A3B4",
      airline: "Airline 3",
      origin: "Origin 3",
      destination: "Destination 3",
      departureTime: "2024-10-23T11:08:47.000Z",
      status: "Delayed"
    },
    {
      id: "4",
      flightNumber: "A4B85",
      airline: "Airline 4",
      origin: "Origin 4",
      destination: "Destination 4",
      departureTime: "2024-10-23T11:25:27.000Z",
      status: "Boarding"
    },
    {
      id: "5",
      flightNumber: "A5B15",
      airline: "Airline 5",
      origin: "Origin 5",
      destination: "Destination 5",
      departureTime: "2024-10-23T11:42:07.000Z",
      status: "On Time"
    },
    {
      id: "6",
      flightNumber: "A6B19",
      airline: "Airline 6",
      origin: "Origin 6",
      destination: "Destination 6",
      departureTime: "2024-10-23T11:58:47.000Z",
      status: "Delayed"
    },
    {
      id: "7",
      flightNumber: "A7B84",
      airline: "Airline 7",
      origin: "Origin 7",
      destination: "Destination 7",
      departureTime: "2024-10-23T12:15:27.000Z",
      status: "On Time"
    },
    {
      id: "8",
      flightNumber: "A8B49",
      airline: "Airline 8",
      origin: "Origin 8",
      destination: "Destination 8",
      departureTime: "2024-10-23T12:32:07.000Z",
      status: "Boarding"
    },
    {
      id: "9",
      flightNumber: "A9B77",
      airline: "Airline 9",
      origin: "Origin 9",
      destination: "Destination 9",
      departureTime: "2024-10-23T12:48:47.000Z",
      status: "Boarding"
    },
    {
      id: "10",
      flightNumber: "A10B2",
      airline: "Airline 10",
      origin: "Origin 10",
      destination: "Destination 10",
      departureTime: "2024-10-23T13:05:27.000Z",
      status: "Delayed"
    },
    {
      id: "11",
      flightNumber: "A11B89",
      airline: "Airline 11",
      origin: "Origin 11",
      destination: "Destination 11",
      departureTime: "2024-10-23T13:22:07.000Z",
      status: "On Time"
    },
    {
      id: "12",
      flightNumber: "A12B39",
      airline: "Airline 12",
      origin: "Origin 12",
      destination: "Destination 12",
      departureTime: "2024-10-23T13:38:47.000Z",
      status: "Boarding"
    },
    {
      id: "13",
      flightNumber: "A13B9",
      airline: "Airline 13",
      origin: "Origin 13",
      destination: "Destination 13",
      departureTime: "2024-10-23T13:55:27.000Z",
      status: "On Time"
    },
    {
      id: "14",
      flightNumber: "A14B82",
      airline: "Airline 14",
      origin: "Origin 14",
      destination: "Destination 14",
      departureTime: "2024-10-23T14:12:07.000Z",
      status: "Departed"
    },
    {
      id: "15",
      flightNumber: "A15B72",
      airline: "Airline 15",
      origin: "Origin 15",
      destination: "Destination 15",
      departureTime: "2024-10-23T14:28:47.000Z",
      status: "On Time"
    }
  ];
  
  export const mockFlightDetails = (id: string) => {
    return mockFlights.find((flight) => flight.id === id);
  };
  