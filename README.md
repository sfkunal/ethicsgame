# Content Moderation Ethics Game

## Project Installation
Make sure to download `npm` and launch the app with `npm start`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Overview
This application will consist of 12 screens: a Welcome screen, 10 Question screens, and an Insights screen. Each screen will be a separate component in React.

## Project Structure
```
src/
|-- components/
|   |-- Welcome.js
|   |-- QuestionText.js
|   |-- QuestionRanking.js
|   |-- QuestionMedia.js
|   |-- Insights.js
|-- App.js
```

## Components

### Welcome.js
This is the first screen users will see. It should contain a welcome message and a button to start the game.

### QuestionText.js, QuestionRanking.js, QuestionMedia.js
These are the question components. Each one will be used for a different type of question: text-based multiple choice, ranking, and media-based multiple choice respectively. 

Each question component will receive the question and answer options as props. It will also manage the state of the selected answer. Once an answer is selected, the component will navigate to the next question.

### Insights.js
This is the final screen users will see. It will receive all the answers as props (you can manage this using React's Context API or any state management library like Redux). Based on the answers, it will calculate and display the insights/statistics about the user's ethics beliefs.

## Navigation
React Router will be used to navigate between the different screens. Each question will have its own route (e.g., "/question1", "/question2", etc.), and there will also be routes for the Welcome screen ("/") and the Insights screen ("/insights").

## State Management
The state of the selected answers will be managed at the top level of the application (in App.js) and passed down to the components that need it via props. Alternatively, you can use a state management library like Redux or the Context API to manage the state.

## Styling
CSS modules or a CSS-in-JS library like styled-components can be used for styling the components.

## Testing
Jest and React Testing Library can be used to write unit and integration tests for the components.

## Building and Deployment
The application can be bundled for production using a tool like Webpack or Parcel. It can be deployed on a static site hosting service like Netlify or Vercel.

I hope this helps! Let me know if you have any questions or need further clarification. 😊