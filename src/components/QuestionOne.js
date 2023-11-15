import React, { useState, useContext } from 'react';
import { Button, Typography, RadioGroup, FormControlLabel, Radio, Grid } from '@mui/material';
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
			setAnswers({ ...answers, question1: selectedValue });
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
      <Typography variant="h7" component="h1" gutterBottom>
      As an internet moderator, you come across a post containing information that appears misleading, but the intent is unclear. What is the most appropriate course of action?
      </Typography>
      <RadioGroup
        aria-label="quiz"
        name="quiz"
        value={selectedValue}
        onChange={handleChange}
      >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormControlLabel value="option1" control={<Radio />} label="Immediately remove the post to prevent further spread." />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="option2" control={<Radio />} label="Engage with the author to seek clarification on their intent." />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="option3" control={<Radio />} label="Conduct a thorough investigation before taking any action." />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="option4" control={<Radio />} label="Flag the post for community review without making any immediate changes." />
          </Grid>
        </Grid>
      </RadioGroup>
      <Button variant="contained" color="primary" onClick={nextQuestion}>
        Next
      </Button>
    </Grid>
  );
}

export default QuestionOne;