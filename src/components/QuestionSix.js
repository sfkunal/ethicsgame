import React, { useContext } from 'react';
import { Typography, Box, Button, LinearProgress } from '@mui/material';
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


const colors = ['#6ba358', '#f3fd86', '#ff8b28'];

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
      setAnswers({ ...answers, question6: 'The most important things to me in the realm of engineering ethics are ' + selectedItemsContent + '. ' });
      navigate('/q7'); // replace with the path to the next question
    } else {
      alert('Please select an answer before proceeding.');
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Typography variant="h7" component="h1"  align="center" gutterBottom>
        Rank the following principles in order of importance for engineering ethics:
        <Box minHeight='5vh' />
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
      <LinearProgress variant="determinate" value={50} style={{ position: 'absolute', bottom: 0, width: '100%', height: '10px' }} />
    </div>
  );
}

export default QuestionSix;