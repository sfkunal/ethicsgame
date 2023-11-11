import React, { useContext } from 'react';
import { Typography, Box } from '@mui/material';
import { AnswersContext } from '../App';

function Insights() {
  const { answers } = useContext(AnswersContext);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Your Insights
      </Typography>
      <Typography variant="body1">
        Here are your answers:
      </Typography>
      <Box>
        <Typography variant="body1">
          {`Question 1: ${answers.question1}`}
        </Typography>
        <Typography variant="body1">
          {`Question 2: ${answers.question2}`}
        </Typography>
        <Typography variant="body1">
          {`Question 3: ${answers.question3}`}
        </Typography>
      </Box>
    </Box>
  );
}

export default Insights;