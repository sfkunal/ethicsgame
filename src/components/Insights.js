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
          {`Answers: ${answers.question1 + answers.question2 + answers.question3 + answers.question4 + answers.question5 + answers.question6 + answers.question7 + answers.question8 + answers.question9 + answers.question10}`}
        </Typography>
        {/* <Typography variant="body1">
          {`Question 1: ${answers.question1}`}
        </Typography>
        <Typography variant="body1">
          {`Question 2: ${answers.question2}`}
        </Typography>
        <Typography variant="body1">
          {`Question 3: ${answers.question3}`}
        </Typography>
        <Typography variant="body1">
          {`Question 4: ${answers.question4}`}
        </Typography>
        <Typography variant="body1">
          {`Question 5: ${answers.question5}`}
        </Typography>
        <Typography variant="body1">
          {`Question 6: ${answers.question6}`}
        </Typography>
        <Typography variant="body1">
          {`Question 7: ${answers.question7}`}
        </Typography>
        <Typography variant="body1">
          {`Question 8: ${answers.question8}`}
        </Typography>
        <Typography variant="body1">
          {`Question 9: ${answers.question9}`}
        </Typography>
        <Typography variant="body1">
          {`Question 10: ${answers.question10}`}
        </Typography> */}
      </Box>
    </Box>
  );
}

export default Insights;