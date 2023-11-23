import React, { useContext } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AnswersContext } from '../App';

const itemsFromBackend = [
  { id: '1', content: 'Safety and well-being of the public' },
  { id: '2', content: 'Technological progress and innovation' },
  { id: '3', content: 'Environmental sustainability' },
  { id: '4', content: 'Honesty and transparency in engineering practices' },
  { id: '5', content: 'Fair treatment of workers and colleagues' },
  { id: '6', content: 'Cost-effectiveness in project development' },
  { id: '7', content: 'Compliance with regulations and legal standards' },
  { id: '8', content: 'Respect for cultural and social diversity' },
];


const colors = ['gold', 'silver', '#cd7f32']; // Gold, Silver, Bronze

function QuestionSix() {
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
      setAnswers({ ...answers, question6: 'The most important things to me in the realm of engineering ethics are ' + selectedItemsContent });
      navigate('/q7'); // replace with the path to the next question
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
      <Typography variant="h7" component="h1" gutterBottom>
      Rank the following principles in order of importance for engineering ethics:
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

export default QuestionSix;