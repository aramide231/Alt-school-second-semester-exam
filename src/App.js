import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import ErrorBoundary from './ErrorBoundary';
import ErrorThrower from './ErrorThrower';


function Loader() {
  return <div className="loader"></div>;
}

function Content () {
  const [counter, setCounter] = useState(0);
  const [figure, setFigure] = useState("");

  const handleIncrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev - 1);
  };

  const Reset = (event) => {
    event.preventDefault();
    setCounter(0);
  };

  const appendFigure = () => {
    setCounter((prev) => Number(String(prev) + figure));
  };

  const handleFigureChange = (event) => {
    setFigure(event.target.value);
  };
  
  return (
    <section className="center">
      <h1 className="people ">{counter}</h1>
      <h1 className= "handle">
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={Reset}>reset</button>
      </h1>
      <section className="form">
        <input
          type="text"
          placeholder="Enter a figure"
          value={figure}
          onChange={handleFigureChange}
        />
        <button className="submit" onClick={appendFigure}>append</button>
      </section>
    </section>
  );
}
function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoading ? <Loader /> : <Content />} />
        <Route path="/test-error" element={
          <ErrorBoundary>
            <ErrorThrower />
          </ErrorBoundary>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
