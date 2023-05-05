import React from "react";
import Form from "./Form"; // Import the Form component

function App() {
  // Function to handle form data submission
  function sendFormDataSomewhere(formData) {
    // Perform desired action with the form data, e.g. send it to a server
    console.log("Form data submitted:", formData);
  }

  return (
    <div>
      {/* Render the Form component and pass the sendFormDataSomewhere function as props */}
      <Form sendFormDataSomewhere={sendFormDataSomewhere} />
    </div>
  );
}

export default App;