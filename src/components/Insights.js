import React, { useContext, useState } from 'react';
import { Typography, Box, CircularProgress, Button } from '@mui/material';
import { AnswersContext } from '../App';
import { useNavigate, Link } from 'react-router-dom';

function Insights() {
  const { answers } = useContext(AnswersContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const results = answers.question1 + answers.question2 + answers.question3 + answers.question4 + answers.question5 + answers.question6 + answers.question7 + answers.question8 + answers.question9 + answers.question10;

  const handleSubmit = async (event) => {
    setLoading(true)
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

    setLoading(false);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      overflow="auto"
    >
      <Box minHeight='5vh' />
      <Typography variant="h3" component="h1" gutterBottom>
        Your Insights
      </Typography>
      {!data && !loading && (
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Get Results
        </Button>
      )}
      {loading ? (
        <CircularProgress />
      ) : (
        data && (
          <>
            {data.split('\n\n').map((paragraph, index) => (
              paragraph.length > 0 && (
                <Box 
                  key={index} 
                  sx={{ 
                    bgcolor: 'grey.300', 
                    m: 1, 
                    borderRadius: 4, 
                    p: 1,
                    width: '80%'
                  }}
                >
                  <Typography variant="body1">
                    {paragraph}
                  </Typography>
                </Box>
              )
            ))}
            <Box minHeight='2vh' />
            <Button variant="contained" color="primary" onClick={handleBack}>
              Back to Start
            </Button>
            <Box minHeight='5vh' />
          </>
        )
      )}
      <Link to="/documentation" style={{ position: 'absolute', left: '10px', top: '10px' }}>
        <Button variant="contained" color="primary">
          How It Works
        </Button>
      </Link>
      <Link to="/proposals" style={{ position: 'absolute', left: '10px', top: '60px' }}>
        <Button variant="contained" color="primary">
          Policy Proposals
        </Button>
      </Link>
    </Box>
  );
}

export default Insights;