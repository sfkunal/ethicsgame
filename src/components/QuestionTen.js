import React, { useState, useContext } from 'react';
import { Button, Typography, Grid, Box, Card, CardMedia, LinearProgress } from '@mui/material';
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
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh', margin: '0 auto' }}
      >
        <Typography variant="h7" component="h1" align="center">
          How do you envision humanity in 100 years?
        </Typography>
        <Box minHeight='2vh' />
        <Grid container spacing={0}>
          {imagesFromBackend.map((image) => (
            <Grid item xs={6} key={image.id}>
              <Card 
                onClick={() => setSelectedValue(image.id)} 
                sx={{ maxWidth: "100%", border: selectedValue === image.id ? '2px solid blue' : 'none' }}
              >
                <CardMedia
                  component="img"
                  height="350"
                  image={image.src}
                  alt={image.desc}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box minHeight='2vh' />
        <Button variant="contained" color="primary" onClick={nextQuestion}>
          Next
        </Button>
      </Grid>
      <LinearProgress variant="determinate" value={90} style={{ position: 'absolute', bottom: 0, width: '100%', height: '10px' }} />
    </div>
  );
}

export default QuestionTen;