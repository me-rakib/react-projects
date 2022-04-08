import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    newsletter: true,
  });

  function formHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function formSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.confirm_password) {
      console.log("Successfully signed up.");
    } else {
      console.log("Password did not match.");
    }
    if(formData.newsletter) {
      console.log("Thanks for signing up for the newsletter.")
    }
    console.log(formData);
  }

  return (
    <form
      onSubmit={formSubmit}
      className="bg-white shadow-lg shadow-black p-10 rounded flex flex-col w-[330px] gap-y-3"
    >
      <input
        onChange={formHandler}
        value={formData.email}
        name="email"
        className="p-2 border border-black rounded"
        type="email"
        placeholder="Email Address"
      />
      <input
        onChange={formHandler}
        value={formData.password}
        name="password"
        className="p-2 border border-black rounded"
        type="password"
        placeholder="Password"
      />
      <input
        onChange={formHandler}
        value={formData.confirm_password}
        name="confirm_password"
        className="p-2 border border-black rounded"
        type="password"
        placeholder="Confirm Password"
      />
      <div>
        <input
          onChange={formHandler}
          type="checkbox"
          id="news-letter"
          name="newsletter"
          checked={formData.newsletter}
        />
        <label htmlFor="news-letter"> I want to join the newsletter</label>
      </div>
      <button className="p-2 rounded bg-[#639] text-white">Submit</button>
    </form>
  );
}
