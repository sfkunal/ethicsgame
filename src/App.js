import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import QuestionOne from './components/QuestionOne';
import QuestionTwo from './components/QuestionTwo';
import QuestionThree from './components/QuestionThree';
import QuestionFour from './components/QuestionFour';
import QuestionFive from './components/QuestionFive';
import QuestionSix from './components/QuestionSix';
import QuestionSeven from './components/QuestionSeven';
import QuestionEight from './components/QuestionEight';
import QuestionNine from './components/QuestionNine';
import QuestionTen from './components/QuestionTen';
import Insights from './components/Insights';

export const AnswersContext = React.createContext();

function App() {
  const [answers, setAnswers] = useState({});
  return (
    <AnswersContext.Provider value={{ answers, setAnswers }}>
      <Router>
        <Routes>
          <Route path="/q1" element={<QuestionOne />} />
          <Route path="/q2" element={<QuestionTwo />} />
          <Route path="/q3" element={<QuestionThree />} />
          <Route path="/q4" element={<QuestionFour />} />
          <Route path="/q5" element={<QuestionFive />} />
          <Route path="/q6" element={<QuestionSix />} />
          <Route path="/q7" element={<QuestionSeven />} />
          <Route path="/q8" element={<QuestionEight />} />
          <Route path="/q9" element={<QuestionNine />} />
          <Route path="/q10" element={<QuestionTen />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Router>
    </AnswersContext.Provider>
  );
}

export default App;