import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchFlightDetails } from '../api';
import { useError } from '../contexts/ErrorContext';
import './FlightDetail.css'; 

interface FlightDetail {
  id: string;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

const FlightDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [flightDetail, setFlightDetail] = useState<FlightDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { error, setError } = useError();

  const loadFlightDetail = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchFlightDetails(id!);
      setFlightDetail(data as FlightDetail);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred while fetching flight details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFlightDetail();
  }, [id]);

  if (loading) return <div className="loading-message">Loading flight details...</div>;

  if (error) {
    return (
      <div className="error-message">
        <p>Error: {error}. Please try again later.</p>
        <button onClick={loadFlightDetail} className="retry-button">Retry</button>
      </div>
    );
  }

  return flightDetail ? (
    <div className="flight-detail-container">
      <h1 className="flight-detail-title">Flight Details</h1>
      <div className="flight-detail-content">
        <p><strong>Flight Number:</strong> {flightDetail.flightNumber}</p>
        <p><strong>Airline:</strong> {flightDetail.airline}</p>
        <p><strong>Origin:</strong> {flightDetail.origin}</p>
        <p><strong>Destination:</strong> {flightDetail.destination}</p>
        <p><strong>Departure Time:</strong> {new Date(flightDetail.departureTime).toLocaleString()}</p>
        <p><strong>Status:</strong> {flightDetail.status}</p>
      </div>
      <Link to="/" className="back-link">Back to Flight Board</Link>
    </div>
  ) : (
    <div className="flight-detail-container">
      <p className="error-message">Flight details not found.</p>
      <Link to="/" className="back-link">Back to Flight Board</Link>
    </div>
  );
};

export default FlightDetail;
