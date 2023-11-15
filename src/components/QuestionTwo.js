import React, { useState, useContext } from 'react';
import { Button, Typography, RadioGroup, FormControlLabel, Radio, Grid } from '@mui/material';
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
			setAnswers({ ...answers, question2: selectedValue });
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
      <Typography variant="h7" component="h1" gutterBottom>
      A user reports a potentially harmful post targeting another user, but upon investigation, you find it is a heated but non-threatening argument. How should you handle this situation?
      </Typography>
      <RadioGroup
        aria-label="quiz"
        name="quiz"
        value={selectedValue}
        onChange={handleChange}
      >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormControlLabel value="option1" control={<Radio />} label="Suspend both users involved to prevent escalation." />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="option2" control={<Radio />} label="Ignore the report, as it doesn't violate community guidelines." />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="option3" control={<Radio />} label="Privately counsel the users involved and encourage respectful communication." />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="option4" control={<Radio />} label="Share the report publicly, seeking the community's opinion on the matter." />
          </Grid>
        </Grid>
      </RadioGroup>
      <Button variant="contained" color="primary" onClick={nextQuestion}>
        Next
      </Button>
    </Grid>
  );
}

export default QuestionTwo;