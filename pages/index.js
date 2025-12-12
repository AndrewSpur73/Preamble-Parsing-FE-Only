/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';

function Home() {
  // State to store whatever the user types into the textarea
  const [text, setText] = useState('');
  // State to store the results
  const [results, setResults] = useState(null);

  // Create function that counts the words for each requirement
  const analyzeText = (input) => {
  // Asked ChatGPT for all possible conversions that a user may input
  // Converts all letters to lowercase, takes out everything that isn't a letter or space, split on whitespace into individual words, and filters an accidental empty strings
    const words = input
      .toLowerCase()
      .replace(/[^a-z\s]/g, '')
      .split(/\s+/)
      .filter(Boolean);

    // Counters for each requirement, intial value is declared as 0
    let startsWithT = 0;
    let endsWithE = 0;
    let startsWithTEndsWithE = 0;

    // Loop through every word using forEach. This would just be a simple "for loop" for vanilla JS
    words.forEach((word) => {
      const startsT = word.startsWith('t');
      const endsE = word.endsWith('e');
      // Adds one to each value if the requirement is met
      if (startsT) startsWithT += 1;
      if (endsE) endsWithE += 1;
      if (startsT && endsE) startsWithTEndsWithE += 1;
    });
    // The results come back as an object
    return {
      startsWithT,
      endsWithE,
      startsWithTEndsWithE,
    };
  };

  // A function that runs when the user clicks the Analyze Button. Invokes the analyzeText function using the current text state, then saves the result and re-renders
  const handleAnalyze = () => {
    const parsed = analyzeText(text);
    setResults(parsed);
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '70vh',
        padding: '30px',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h1>Hello!</h1>
      <h4>
        This generator is very specific. Please place your text below(Some would suggest using the United States Preamble), and the program will return a count of how many words begin with 't', how many end with 'e', and how many begin with 't' and end with 'e'. Enjoy!
      </h4>
      {/* Text box placed for user input */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="6"
        cols="50"
        placeholder="Paste or type your text here..."
        style={{ marginTop: '40px', marginBottom: '20px' }}
      />
      {/* Button that triggers the analyzeText function */}
      <button onClick={handleAnalyze}>Analyze Text</button>

      {/* Conditionally render the results only if we have them */}
      {results && (
        <div style={{ marginTop: '20px' }}>
          <p>Words starting with 't': {results.startsWithT}</p>
          <p>Words ending with 'e': {results.endsWithE}</p>
          <p>Words starting with 't' and ending with 'e': {results.startsWithTEndsWithE}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
