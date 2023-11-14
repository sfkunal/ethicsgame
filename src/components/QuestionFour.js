import React, { useContext } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AnswersContext } from '../App';

const itemsFromBackend = [
  { id: '1', content: 'Item 1' },
  { id: '2', content: 'Item 2' },
  { id: '3', content: 'Item 3' },
  { id: '4', content: 'Item 4' },
  { id: '5', content: 'Item 5' },
  { id: '6', content: 'Item 6' },
  { id: '7', content: 'Item 7' },
  { id: '8', content: 'Item 8' },
];

const colors = ['gold', 'silver', '#cd7f32']; // Gold, Silver, Bronze

function QuestionFour() {
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
      setAnswers({ ...answers, question4: selectedItemsContent });
      navigate('/q5'); // replace with the path to the next question
    } else {
      alert('Please select an answer before proceeding.');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Box sx={{ alignSelf: 'flex-end', marginRight: 2 }}>
        <Button variant="outlined" onClick={handleUndoClick} disabled={selectedItems.length === 0}>
          Undo
        </Button>
      </Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Select your top 3 items:
      </Typography>
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
      <Button variant="contained" disabled={selectedItems.length < 3 } onClick={nextQuestion}>
        Next
      </Button>
    </Box>
  );
}

export default QuestionFour;