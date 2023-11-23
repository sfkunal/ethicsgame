import React, { useContext } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AnswersContext } from '../App';

const itemsFromBackend = [
  { id: '1', content: 'Ethical implications and societal impact' },
  { id: '2', content: 'Accuracy and efficiency of algorithmic predictions' },
  { id: '3', content: 'Transparency and explainability of AI decisions' },
  { id: '4', content: 'Mitigation of biases in algorithmic outputs' },
  { id: '5', content: 'Inclusivity and avoiding discrimination in AI applications' },
  { id: '6', content: 'Speed of algorithmic processing' },
  { id: '7', content: 'Protection of user privacy in AI data collection' },
  { id: '8', content: 'Accessibility of AI technologies to diverse populations' },
];


const colors = ['gold', 'silver', '#cd7f32']; // Gold, Silver, Bronze

function QuestionSeven() {
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
      setAnswers({ ...answers, question7: 'The most important things to me in the realm of algorithms and artificial intelligence are ' + selectedItemsContent + '. ' });
      navigate('/q8'); // replace with the path to the next question
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
      Rank the following considerations in the development and deployment of algorithms and artificial intelligence, from most to least important:
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

export default QuestionSeven;