import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState([
    {
      prompt: "Hi, how can I help you today?",
      response: "I am a chatbot, how can I help you today?",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const responseEndRef = useRef(null);

  async function fetchResponse() {
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      const newResponse = {
        prompt: prompt,
        response: data.response,
      };

      setResponse((prev) => [...prev, newResponse]);
      setPrompt("");
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse((prev) => [
        ...prev,
        {
          prompt,
          response: "Error: Unable to fetch response.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    responseEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [response]);

  return (
    <>
      <h1 className="heading">AI ChatBot</h1>
      <div className="chatbot_container">
        <div className="chatbot_response">
          {response.map((res, index) => (
            <div key={index} className="response">
              <p className="chatbot_prompt">
                <strong>User:</strong> {res.prompt}
              </p>
              <p className="chatbot_response">
                <strong>ChatBot:</strong> {res.response}
              </p>
            </div>
          ))}
          <div ref={responseEndRef} />
        </div>

        <div className="chatbot_input">
          <input
            type="text"
            name="input"
            placeholder="Ask your Query"
            className="input"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={loading}
          />
          <button type="button" onClick={fetchResponse} disabled={loading}>
            {loading ? "Generating..." : "Submit"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
