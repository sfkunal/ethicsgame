import React, { useState, useContext } from 'react';
import { Button, Typography, RadioGroup, FormControlLabel, Radio, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AnswersContext } from '../App';

const imagesFromBackend = [
  { id: '1', src: 'd1.jpeg' },
  { id: '2', src: 'd2.jpeg' },
  { id: '3', src: 'd3.jpeg' },
  { id: '4', src: 'd4.jpeg' },
];

function QuestionTen() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');
  const { answers, setAnswers } = useContext(AnswersContext);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const nextQuestion = () => {
    if (selectedValue) {
			const selectedImage = imagesFromBackend.find(image => image.id === selectedValue);
      setAnswers({ ...answers, question10: selectedImage.src });
      navigate('/insights'); // replace with the path to the next question
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
        Which image do you prefer?
      </Typography>
      <RadioGroup
        aria-label="quiz"
        name="quiz"
        value={selectedValue}
        onChange={handleChange}
      >
        <Grid container spacing={3}>
          {imagesFromBackend.map((image) => (
            <Grid item xs={6} key={image.id}>
              <Box component="label">
                <img src={image.src} alt="" style={{  maxHeight: '200px' }} />
                <FormControlLabel
                  value={image.id}
                  control={<Radio />}
                  label={`Option ${image.id}`}
                  labelPlacement="bottom"
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
      <Button variant="contained" color="primary" onClick={nextQuestion}>
        Next
      </Button>
    </Grid>
  );
}

export default QuestionTen;