import React, { useState, useContext } from 'react';
import { Button, Typography, RadioGroup, FormControlLabel, Radio, Grid, Box, LinearProgress } from '@mui/material';
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
      const answer = 'Empathy is ' + selectedValue + ' in technological decision-making.';
			setAnswers({ ...answers, question3: answer });
      navigate('/q4'); // replace with the path to the next question
    } else {
      alert('Please select an answer before proceeding.');
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh', width: '70%', margin: '0 auto' }}
      >
        <Typography variant="h7" component="h1" align="center">
        What role does empathy play in technological decision-making?
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
              <FormControlLabel value="Essential for ethical development" control={<Radio />} label="Essential for ethical development" />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel value="Irrelevant, decisions should be based on logic" control={<Radio />} label="Irrelevant, decisions should be based on logic" />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel value="Nice to have but not crucial" control={<Radio />} label="Nice to have but not crucial" />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel value="Impedes progress" control={<Radio />} label="Impedes progress" />
            </Grid>
          </Grid>
        </RadioGroup>
        <Box minHeight='10vh' />
        <Button variant="contained" color="primary" onClick={nextQuestion}>
          Next
        </Button>
      </Grid>
      <LinearProgress variant="determinate" value={20} style={{ position: 'absolute', bottom: 0, width: '100%', height: '10px' }} />
      </div>
  );
}

export default QuestionThree;