# AI ChatBot Application

## Overview
This project is an AI ChatBot application built using React and Google Generative AI. The application allows users to interact with an AI chatbot by entering prompts and receiving responses.

## Tech Stack
- **React**: A JavaScript library for building user interfaces.
- **Google Generative AI**: Used for generating responses to user prompts.
- **CSS**: For styling the application.

## Project Structure
/d:/Codebase/test/chatbot/ ├── public/ │ ├── index.html ├── src/ │ ├── App.jsx │ ├── App.css │ ├── index.js │ ├── index.css ├── .env ├── package.json ├── README.md

## Key Components
### App.jsx
- **State Management**: Uses `useState` to manage the prompt, response, and loading states.
- **API Integration**: Integrates with Google Generative AI to fetch responses.
- **UI Components**: Contains the main UI components including the input field, submit button, and response display area.

### App.css
- **Responsive Design**: Uses media queries to ensure the application is responsive across different screen sizes.
- **Styling**: Provides styling for the chatbot container, input field, buttons, and response display.

## Important Highlights
1. **API Key Management**: The API key for Google Generative AI is stored in an environment variable (`.env` file) and accessed using `import.meta.env.VITE_GEMINI_API_KEY`.
2. **Loading State**: The application uses a loading state to disable the input field and submit button while fetching responses to prevent multiple submissions.
3. **Auto-Scroll**: The application automatically scrolls to the latest response using a `ref` and `scrollIntoView`.
4. **Responsive Design**: The application is designed to be responsive, ensuring a good user experience on both desktop and mobile devices.

## Future Enhancements
1. **Error Handling**: Improve error handling to provide user-friendly messages in case of API failures.
2. **User Authentication**: Add user authentication to personalize the chatbot experience.
3. **Advanced Styling**: Enhance the UI with more advanced styling and animations.
4. **Backend Integration**: Integrate with a backend service to store chat history and provide more advanced features.

## How to Run
1. **Install Dependencies**: Run `npm install` to install all the necessary dependencies.
2. **Start the Application**: Run `npm start` to start the development server.
3. **Build for Production**: Run `npm run build` to create a production build of the application.

## Environment Variables
Create a `.env` file in the root directory and add the following:

## Conclusion
This AI ChatBot application demonstrates how to integrate React with Google Generative AI to create an interactive chatbot. The project is designed to be easily extendable and maintainable, with a focus on responsive design and user experience.
