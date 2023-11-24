import React, { useContext } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AnswersContext } from '../App';

const itemsFromBackend = [
  { id: '1', content: 'Strengthening algorithms for content filtering' },
  { id: '2', content: 'Promoting media literacy and critical thinking' },
  { id: '3', content: 'Imposing strict regulatory measures on online platforms' },
  { id: '4', content: 'Encouraging user self-moderation and reporting' },
  { id: '5', content: 'Collaborating with fact-checking organizations' },
  { id: '6', content: 'Allowing unrestricted freedom of speech online' },
  { id: '7', content: 'Developing AI for context-aware content analysis' },
  { id: '8', content: 'Implementing clear and consistent community guidelines' },
];


const colors = ['gold', 'silver', '#cd7f32']; // Gold, Silver, Bronze

function QuestionFive() {
	const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = React.useState([]);
  const { answers, setAnswers } = useContext(AnswersContext);

  const handleItemClick = (item) => {
    if (selectedItems.includes(item) || selectedItems.length === 3) return;
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  const handleUndoClick = () => {
    setSelectedItems((prevItems) => prevItems.slice(0, -1));
  };

	const nextQuestion = () => {
    if (selectedItems.length === 3) {
			const selectedItemsContent = selectedItems.map(item => item.content).join(', ');
      setAnswers({ ...answers, question5: 'The most important approaches to me in misinformation and content moderation are ' + selectedItemsContent + '. ' });
      navigate('/q6'); // replace with the path to the next question
    } else {
      alert('Please select an answer before proceeding.');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Typography variant="h7" component="h1"  align="center" gutterBottom>
      Rank the following approaches in addressing misinformation and content moderation in order of effectiveness:
      </Typography>
      <Box minHeight='5vh' />
      <Box sx={{ width: '50%', margin: '0 auto' }}>
        {itemsFromBackend.map((item) => (
          <Box
            key={item.id}
            sx={{
              margin: 1,
              padding: 2,
              border: '1px solid black',
              borderRadius: 1,
              backgroundColor: selectedItems.includes(item) ? colors[selectedItems.indexOf(item)] : '#fff',
              cursor: 'pointer',
            }}
            onClick={() => handleItemClick(item)}
          >
            {item.content}
          </Box>
        ))}
      </Box>
      <Box minHeight='2vh' />
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="outlined" onClick={handleUndoClick} disabled={selectedItems.length === 0}>
          Undo
        </Button>
        <Button variant="contained" disabled={selectedItems.length < 3 } onClick={nextQuestion}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default QuestionFive;