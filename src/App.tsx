import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlightTable from './components/FlightTable';
import FlightDetail from './components/FlightDetail';
import { ErrorProvider } from './contexts/ErrorContext';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorProvider>
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<FlightTable />} />
            <Route path="/flights/:id" element={<FlightDetail />} /> {/* Route includes ':id' */}
          </Routes>
        </Router>
      </ErrorBoundary>
    </ErrorProvider>
  );
};

export default App;
