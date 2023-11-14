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
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to the Ethics Game!
      </Typography>
      <Button variant="contained" color="primary" onClick={startGame}>
        Start Game
      </Button>
    </Box>
  );
}

export default Welcome;