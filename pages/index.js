/* eslint-disable react/no-unescaped-entities */
function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h1>Hello!</h1>
      <h3>This generator is very specific. Please place your text below, and the program will return a count of how many words begin with 't', how many end with 'e', and how many begin with 't' and end with 'e'. Enjoy!</h3>
      <textarea
        id="userText"
        rows="6"
        cols="50"
        placeholder="Paste or type your text here..."
      />
    </div>
  );
}

export default Home;
