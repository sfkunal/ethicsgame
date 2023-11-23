import React, { useContext, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { AnswersContext } from '../App';

function Insights() {
  const { answers } = useContext(AnswersContext);
  const [data, setData] = useState(null);
  const results = answers.question1 + answers.question2 + answers.question3 + answers.question4 + answers.question5 + answers.question6 + answers.question7 + answers.question8 + answers.question9 + answers.question10;

  const handleSubmit = async (event) => {
    await answers;
    event.preventDefault();

    const response = await fetch(
      "https://flask-production-06fa.up.railway.app/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ results: results }),
        mode: "cors",
      }
    ).catch((error) => {
      console.error("Network error:", error);
    });

    if (response && response.ok) {
      const data = await response.json();
      console.log(data);
      setData(data);
    } else {
      console.error("Server error:", response && response.status);
    }
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
        Your Insights
      </Typography>
      <button onClick={handleSubmit}>Get Data</button> {/* Add this line */}
      {data && data.split('\n\n').map((paragraph, index) => (
        paragraph.length > 0 && (
          <Box 
            key={index} 
            sx={{ 
              bgcolor: 'grey.300', 
              m: 1, 
              borderRadius: 1, 
              p: 1 
            }}
          >
            <Typography variant="body1">
              {paragraph}
            </Typography>
          </Box>
        )
      ))}
    </Box>
  );
}

export default Insights;