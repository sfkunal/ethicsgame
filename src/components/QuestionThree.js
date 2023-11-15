import React, { useState, useContext } from 'react';
import { Button, Typography, RadioGroup, FormControlLabel, Radio, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AnswersContext } from '../App';

function QuestionThree() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');
  const { answers, setAnswers } = useContext(AnswersContext);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const nextQuestion = () => {
    if (selectedValue) {
			setAnswers({ ...answers, question3: selectedValue });
      navigate('/q4'); // replace with the path to the next question
    } else {
      alert('Please select an answer before proceeding.');
    }
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh', width: '70%', margin: '0 auto' }}
    >
      <Typography variant="h4\7" component="h1" gutterBottom>
      An anonymous user consistently shares information that is later proven to be false and harmful. What steps should you take as a moderator?
      </Typography>
      <RadioGroup
        aria-label="quiz"
        name="quiz"
        value={selectedValue}
        onChange={handleChange}
      >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormControlLabel value="option1" control={<Radio />} label="Ban the anonymous user immediately to prevent further harm." />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="option2" control={<Radio />} label="Implement stricter verification measures for anonymous accounts." />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="option3" control={<Radio />} label="Engage the community in a public discussion about the false information." />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="option4" control={<Radio />} label="Encourage users to report and debunk the false information collectively." />
          </Grid>
        </Grid>
      </RadioGroup>
      <Button variant="contained" color="primary" onClick={nextQuestion}>
        Next
      </Button>
    </Grid>
  );
}

export default QuestionThree;