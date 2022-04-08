import { useState, useEffect } from "react";
// import data from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImage, setAllMemeImages] = useState([]);
  // console.log(allMemeImage);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  const GetRandomImg = () => {
    const memesArray = allMemeImage;
    const rand = Math.floor(Math.random() * memesArray.length + 1);
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: memesArray[rand].url,
      };
    });
  };

  function getText(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  return (
    <div className="px-[37px]">
      <div className="mt-[36px] grid grid-cols-2 gap-[15px]">
        <input
          className="border-2 h-[35px] indent-[5px]"
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={getText}
        ></input>
        <input
          className="border-2 h-[35px] indent-[5px]"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={getText}
        ></input>
        <button
          onClick={GetRandomImg}
          className="py-[10px] text-[18px] mb-[36px] col-span-full rounded-sm text-center bg-linera-purple text-white"
        >
          Get a new image 🖼
        </button>
      </div>
      <div className="relative">
        <h1 className="absolute text-center w-full top-5 text-white uppercase font-bold text-3xl txt-shadow">
          {meme.topText}
        </h1>
        <img src={meme.randomImage} alt="img" />
        <h1 className="absolute bottom-5 text-center w-full text-white uppercase font-bold text-3xl txt-shadow">
          {meme.bottomText}
        </h1>
      </div>
    </div>
  );
}
