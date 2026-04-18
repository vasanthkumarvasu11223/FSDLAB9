import { useState } from "react";

function App() {

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      setError("All fields are required");
    } else {
      setError("");
      alert("Form submitted successfully");
    }
  };

  return (
    <main>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>

        <p role="alert" aria-live="assertive" style={{ color: "red" }}>
          {error}
        </p>

        <label htmlFor="name">Full Name</label><br />
        <input id="name" name="name" type="text" /><br /><br />

        <label htmlFor="email">Email Address</label><br />
        <input id="email" name="email" type="email" /><br /><br />

        <label htmlFor="message">Message</label><br />
        <textarea id="message" name="message" rows="4"></textarea><br /><br />

        <button type="submit">Send</button>
      </form>
    </main>
  );
}

export default App;