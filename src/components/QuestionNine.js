import React, { useState, useContext } from 'react';
import { Button, Typography, RadioGroup, FormControlLabel, Radio, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AnswersContext } from '../App';

function QuestionNine() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');
  const { answers, setAnswers } = useContext(AnswersContext);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const nextQuestion = () => {
    if (selectedValue) {
      const answer = 'When addressing misinformation, the primary responsibility of online platforms should be ' + selectedValue + '. ';
			setAnswers({ ...answers, question9: answer });
      navigate('/q10'); // replace with the path to the next question
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
      style={{ minHeight: '100vh', width: '70%', margin: '0 auto'}}
    >
      <Typography variant="h7" component="h1" gutterBottom>
      When addressing misinformation, what should be the primary responsibility of online platforms?
      </Typography>
      <RadioGroup
        aria-label="quiz"
        name="quiz"
        value={selectedValue}
        onChange={handleChange}
      >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormControlLabel value="Strengthening algorithmic content filtering" control={<Radio />} label="Strengthening algorithmic content filtering" />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="Promoting media literacy and critical thinking" control={<Radio />} label="Promoting media literacy and critical thinking" />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="Enforcing strict regulatory measures" control={<Radio />} label="Enforcing strict regulatory measures" />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="Protecting user privacy at all costs" control={<Radio />} label="Protecting user privacy at all costs" />
          </Grid>
        </Grid>
      </RadioGroup>
      <Button variant="contained" color="primary" onClick={nextQuestion}>
        Next
      </Button>
    </Grid>
  );
}

export default QuestionNine;