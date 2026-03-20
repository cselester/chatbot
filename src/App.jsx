import { useState, useEffect, useRef } from 'react';
import './App.css';
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState([
    {
      prompt: "Hi, how can I help you today?",
      response: "I am a chatbot, how can I help you today?",
    }
  ]);
  const [loading, setLoading] = useState(false);
  const responseEndRef = useRef(null);

  async function fetchResponse() {
    setLoading(true);
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
    console.log("Using model:", model); // Log the model details

    try {
      const result = await model.generateContent(prompt);
      const newResponse = {
        prompt: prompt,
        response: result.response.text()
      };
      setResponse([...response, newResponse]);
      setPrompt("");
    } catch (error) {
      console.error("Error fetching response:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    responseEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [response]);

  return (
    <>
      <h1 className='heading'>AI ChatBot</h1>
      <div className='chatbot_container'>
        <div className='chatbot_response'>
          {response.map((res, index) => (
            <div key={index} className='response'>
              <p className='chatbot_prompt'>
                <strong>User:</strong> {res.prompt}
              </p>
              <p className='chatbot_response'>
                <strong>ChatBot:</strong> {res.response}
              </p>
            </div>
          ))}
          <div ref={responseEndRef} />
        </div>

        <div className='chatbot_input'>
          <input
            type="text"
            name='input'
            placeholder='Ask your Query'
            className='input'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={loading}
          />
          <button type='button' onClick={fetchResponse} disabled={loading}>
            {loading ? "Generating..." : "Submit"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
