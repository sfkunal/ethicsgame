import React, { useState, useContext } from 'react';
import { Button, Typography, RadioGroup, FormControlLabel, Radio, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AnswersContext } from '../App';

function QuestionText() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');
  const { answers, setAnswers } = useContext(AnswersContext);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const nextQuestion = () => {
    if (selectedValue) {
			setAnswers({ ...answers, question1: selectedValue });
      navigate('/question2'); // replace with the path to the next question
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
      style={{ minHeight: '100vh' }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        What is your stance on internet ethics?
      </Typography>
      <RadioGroup
        aria-label="quiz"
        name="quiz"
        value={selectedValue}
        onChange={handleChange}
      >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="option4" control={<Radio />} label="Option 4" />
          </Grid>
        </Grid>
      </RadioGroup>
      <Button variant="contained" color="primary" onClick={nextQuestion}>
        Next
      </Button>
    </Grid>
  );
}

export default QuestionText;