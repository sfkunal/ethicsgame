import React, { useState, useContext } from 'react';
import { Button, Typography, RadioGroup, FormControlLabel, Radio, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AnswersContext } from '../App';

const imagesFromBackend = [
  { id: '1', src: 'dystopian.jpeg', desc: 'In 100 years, I think we will have a dark, gloomy, distopian future.' },
  { id: '2', src: 'utopian.jpeg', desc: 'In 100 years, I think we will have a happy, healthy utopian future.' },
  { id: '3', src: 'war.jpeg', desc: 'In 100 years, I think we will have a war-torn, conflict-filled future.' },
  { id: '4', src: 'space.jpeg', desc: 'In 100 years, I think our future will largely be multi-planetary and technological.' },
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
      setAnswers({ ...answers, question10: selectedImage.desc });
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
        How do you envision humanity in 100 years?
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