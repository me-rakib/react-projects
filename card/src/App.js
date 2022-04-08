import pic from "./images/user.png";
import { useState } from "react";
import Star from "./Star";

export default function App() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "no@mail.com",
    isFavourite: false,
  });

  function makeFavourite() {
    setContact((prevState) => {
      return {
        ...prevState,
        isFavourite: !prevState.isFavourite,
      };
    });
  }

  return (
    <main>
      <div className="card">
        <img className="card-img" src={pic} alt="profile-pic"></img>
        <Star isFavourite = {contact.isFavourite} handleClick={makeFavourite}/>
        <p>{`${contact.firstName} ${contact.lastName}`}</p>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>
    </main>
  );
}
