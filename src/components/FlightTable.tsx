import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchFlights } from '../api';
import { useError } from '../contexts/ErrorContext';
import './FlightTable.css';

interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

const FlightTable: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { error, setError } = useError();

  const loadFlights = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchFlights();
      
      // Type assertion to ensure data is treated as Flight[]
      setFlights(data as Flight[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred while fetching flights.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFlights();
  }, []);

  if (loading) return <div className="loading-message">Loading flight data...</div>;

  if (error) {
    return (
      <div className="error-message">
        <p>Error: {error}. Please check your network or try again later.</p>
        <button onClick={loadFlights} className="retry-button">Retry</button>
      </div>
    );
  }

  return (
    <div className="flight-board-container">
      <div className="flight-board-header">
        <h1>Departures</h1>
        <h2>Pune International Airport (PIP)</h2>
      </div>
      <table className="flight-table">
        <thead>
          <tr>
            <th>Destination</th>
            <th>Flight</th>
            <th>Airline</th>
            <th>Departure Time</th>
            <th>Gate</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.destination}</td>
              <td>{flight.flightNumber}</td>
              <td>{flight.airline}</td>
              <td>{new Date(flight.departureTime).toLocaleTimeString()}</td>
              <td>Term {Math.ceil(Math.random() * 3)} - G{Math.floor(Math.random() * 20) + 1}</td>
              <td>{flight.status}</td>
              <td><Link to={`/flights/${flight.id}`} className="view-details-link">View Details</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightTable;
