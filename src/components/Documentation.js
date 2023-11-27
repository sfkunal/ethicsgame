import React from 'react';
import { Typography, Box } from '@mui/material';
import docsImage from './docs.png'

function Documentation() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      overflow="auto"
      p={3}
    >
      <Typography variant="h2" component="h1" align="center" mb={2}>
        How It Works
      </Typography>
      <Typography align="center" mb={2}>
        Welcome to our online ethics quiz, a thoughtful exploration of diverse ethical perspectives across a range of topics. We carefully curated 10 questions that delve into positions and ideologies discussed in INFO 351, aiming to avoid a straightforward "right" answer for each query. Our intention was to present each question in a way that allowed users to express their unique stance on the ethical topic at hand.
      </Typography>
      <Typography align="center" mb={2}>
        Consider the question on technology regulation: "In the context of technology regulation, what should be the highest priority?". By choosing an option, users reveal their stance on the delicate balance between personal freedoms and societal needs.
      </Typography>
      {/* add image here */}
      <img src={docsImage} alt="Documentation" style={{width: '70%', maxWidth: '1000px', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', marginBottom: '30px'}} />
      <Typography align="center" mb={2}>
        After users engage with these questions, we accumulate a wealth of insights into their ethical beliefs across various topics, each corresponding to a specific week in the course syllabus. From virtue ethics and justice to algorithms and artificial intelligence, the quiz covers a broad spectrum of ethical considerations. This data is then compiled into a large text corpus and sent to OpenAI via API to generate personalized insights for users at the end of the survey.
      </Typography>
      <Typography align="center" mb={2}>
        It's crucial to note that our platform places a premium on privacy. We do not record any user traffic, and the data sent to OpenAI is intentionally designed to be non-linkable to individual users. Recognizing the concerns surrounding privacy, we are committed to providing a secure and confidential environment for users to explore and reflect on their ethical beliefs. Your engagement with our online ethics quiz is an opportunity to gain valuable insights into your ethical perspectives without compromising your privacy. Thank you for visiting this site!
      </Typography>


    </Box>
  );
}

export default Documentation;