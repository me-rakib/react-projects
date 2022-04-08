import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true,
    employment: "",
    favColor: ""
  });

  function handleClick(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleClick}
        type="text"
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
      />
      
      <input
        onChange={handleClick}
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
      />
      <input
        onChange={handleClick}
        type="email"
        placeholder="Email here"
        name="email"
        value={formData.email}
      />
      <textarea
        onChange={handleClick}
        name="comment"
        placeholder="Comment Here"
        value={formData.comment}
      />
      <input
        type="checkbox"
        id="isF"
        name="isFriendly"
        checked={formData.isFriendly}
        onChange={handleClick}
      />

      <label htmlFor="isF">Is friendly?</label>

      <p>{formData.firstName}</p>
      <p>{formData.lastName}</p>
      <p>{formData.email}</p>
      <p>{formData.comment}</p>
      <p>{formData.employment}</p>
      <p>{formData.favColor}</p>

      <fieldset>
        <legend>Current Employment status</legend>
        <input 
          type="radio" 
          id="unemployed" 
          name="employment"
          value="unemployed" 
          checked={formData.employment === "unemployed"}
          onChange={handleClick}/>

        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <input type="radio" 
          id="part-time" 
          name="employment"
          value="part-time" 
          checked={formData.employment === "part-time"}
          onChange={handleClick}/>

        <label htmlFor="part-time">Part Time</label>
        <br />
        <input 
          type="radio" 
          id="full-time" 
          name="employment" 
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleClick}/>

        <label htmlFor="full-time">Full Time</label>
      </fieldset>
      <br />
      <label htmlFor="favColor">What is your favourite color?</label>
      <select 
        id="favColor"
        value={formData.favColor}
        name="favColor"
        onChange={handleClick}
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
      </select>
      <br/>
      <button>Submit</button>
    </form>
  );
}
