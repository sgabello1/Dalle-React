import logo from './family.png';
import './App.css';
import { useState } from "react";


const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);

function App() {
  const [userPrompt, setUserPrompt] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const generateImage = async () => {
    const imageParameters = {
      prompt: userPrompt,
      n: 1,
      size: "512x512",
    }
    const response = await openai.createImage(imageParameters);
    const urlData = response.data.data[0].url
    console.log(urlData);
    setImageUrl(urlData);
}

  return (
    <div className="App">
      {
        imageUrl
          ? <img src={imageUrl} className="image" alt="ai thing" />
          : <img src={logo} className="image" alt="logo" />
      }
      <p>What do you want to see?</p>
      <input  onkeypress="this.style.width = ((this.value.length + 1) * 8) + 'px';"
        placeholder='//                 A sunset on the Sydney Opera House       //'
        onChange={(e) => setUserPrompt(e.target.value)}
      />
      <button onClick={() => generateImage()}> Generate </button>
    </div>
  );
}




export default App;
