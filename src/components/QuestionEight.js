import React, { useState, useContext } from 'react';
import { Button, Typography, RadioGroup, FormControlLabel, Radio, Grid, Box, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AnswersContext } from '../App';

function QuestionEight() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');
  const { answers, setAnswers } = useContext(AnswersContext);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const nextQuestion = () => {
    if (selectedValue) {
      const answer = 'In the context of intellectual property, the primary focus of legal frameworks should be ' + selectedValue + '. ';
			setAnswers({ ...answers, question8: answer });
      navigate('/q9'); // replace with the path to the next question
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
        style={{ minHeight: '100vh', width: '70%', margin: '0 auto'}}
      >
        <Typography variant="h7" component="h1" align="center">
        In the context of intellectual property, what should be the primary focus of legal frameworks?
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
              <FormControlLabel value="Protecting the rights of individual creators" control={<Radio />} label="Protecting the rights of individual creators" />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel value="Encouraging market competition and innovation" control={<Radio />} label="Encouraging market competition and innovation" />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel value="Ensuring broad access to information and knowledge" control={<Radio />} label="Ensuring broad access to information and knowledge" />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel value="Safeguarding corporate profits and investments" control={<Radio />} label="Safeguarding corporate profits and investments" />
            </Grid>
          </Grid>
        </RadioGroup>
        <Box minHeight='10vh' />
        <Button variant="contained" color="primary" onClick={nextQuestion}>
          Next
        </Button>
      </Grid>
      <LinearProgress variant="determinate" value={70} style={{ position: 'absolute', bottom: 0, width: '100%', height: '10px' }} />
    </div>
  );
}

export default QuestionEight;