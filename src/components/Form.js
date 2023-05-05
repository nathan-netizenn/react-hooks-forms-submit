import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [error, setError] = useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (firstName.trim() === "" || lastName.trim() === "") {
      setError("Please enter first name and last name.");
      return;
    }

    const formData = {
      firstName: firstName,
      lastName: lastName,
    };
    props.sendFormDataSomewhere(formData);
    setFirstName("");
    setLastName("");
    setError("");
  }

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;