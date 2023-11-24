import React, { useContext } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AnswersContext } from '../App';

const itemsFromBackend = [
  { id: '1', content: 'Protecting individual creators' },
  { id: '2', content: 'Encouraging innovation' },
  { id: '3', content: 'Ensuring affordable access to information' },
  { id: '4', content: 'Safeguarding corporate profits' },
  { id: '5', content: 'Fostering a culture of sharing knowledge' },
  { id: '6', content: 'Balancing the rights of creators and users' },
  { id: '7', content: 'Strengthening copyright laws' },
  { id: '8', content: 'Promoting open-source initiatives' },
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
      setAnswers({ ...answers, question4: ' The most important things to me in the realm of intellectual property are ' + selectedItemsContent + '. '});
      navigate('/q5'); // replace with the path to the next question
    } else {
      alert('Please select an answer before proceeding.');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Typography variant="h7" component="h1"  align="center" gutterBottom>
        Rank the following in order of importance in the realm of intellectual property:
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

export default QuestionFour;