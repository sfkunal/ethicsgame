import React, { useState, useContext } from 'react';
import { Button, Typography, RadioGroup, FormControlLabel, Radio, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AnswersContext } from '../App';

function QuestionOne() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');
  const { answers, setAnswers } = useContext(AnswersContext);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const nextQuestion = () => {
    if (selectedValue) {
      const answer = 'The primary virtue that should guide technological innovation is ' + selectedValue + '. ';
			setAnswers({ ...answers, question1: answer });
      navigate('/q2'); // replace with the path to the next question
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
      <Typography variant="h7" component="h1" align="center">
      What is the primary virtue that should guide technological innovation?
      </Typography>
      <Box minHeight='10vh' />
      <RadioGroup
        aria-label="quiz"
        name="quiz"
        value={selectedValue}
        onChange={handleChange}
      >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormControlLabel value="Efficiency" control={<Radio />} label="Efficiency" />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="Justice" control={<Radio />} label="Justice" />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="Profitability" control={<Radio />} label="Profitability" />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="Innovation" control={<Radio />} label="Innovation" />
          </Grid>
        </Grid>
      </RadioGroup>
      <Box minHeight='10vh' />
      <Button variant="contained" color="primary" onClick={nextQuestion}>
        Next
      </Button>
    </Grid>
  );
}

export default QuestionOne;