import React, { useState, useContext } from 'react';
import { Button, Typography, RadioGroup, FormControlLabel, Radio, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AnswersContext } from '../App';

function QuestionTwo() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');
  const { answers, setAnswers } = useContext(AnswersContext);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const nextQuestion = () => {
    if (selectedValue) {
      const answer = 'The highest priority in tehcnology regulation should be ' + selectedValue + '. ';
			setAnswers({ ...answers, question2: answer });
      navigate('/q3'); // replace with the path to the next question
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
      <Typography variant="h7" component="h1" align="center">
      In the context of technology regulation, what should be the highest priority?
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
            <FormControlLabel value="Individual freedom" control={<Radio />} label="Individual freedom" />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="Social harmony" control={<Radio />} label="Social harmony" />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="Technological progress" control={<Radio />} label="Technological progress" />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="National security" control={<Radio />} label="National security" />
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

export default QuestionTwo;