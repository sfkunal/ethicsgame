import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/q1');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Welcome to the Ethics Game!
      </Typography>

      <Typography align="center" width="65%" gutterBottom>
        This final project is a 10-question quiz that is centered around a culmination of ethical dilemnas discussed in the course "INFO 351: Information Ethics and Policy". This quiz will ask your perspective on several technological standpoints, and then provide you with an analysis of your answers at the end using GPT-4. Topics included are Virtue Ethics, Privacy, Harrassment, Intellectual Property, Misinformation, and Artificial Intelligence.
      </Typography>


      <Button variant="contained" color="primary" onClick={startGame}>
        Start Game
      </Button>
    </Box>
  );
}

export default Welcome;