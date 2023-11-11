import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import QuestionText from './components/QuestionText';
import QuestionRanking from './components/QuestionRanking';
import QuestionMedia from './components/QuestionMedia';
import Insights from './components/Insights';

export const AnswersContext = React.createContext();

function App() {
  const [answers, setAnswers] = useState({});
  return (
    <AnswersContext.Provider value={{ answers, setAnswers }}>
      <Router>
        <Routes>
          <Route path="/question1" element={<QuestionText />} />
          <Route path="/question2" element={<QuestionRanking />} />
          <Route path="/question3" element={<QuestionMedia />} />
          {/* Add more routes for additional questions as needed */}
          <Route path="/insights" element={<Insights />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Router>
    </AnswersContext.Provider>
  );
}

export default App;