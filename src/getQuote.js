import axios from "axios";

const getQuote = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    console.log(res.data.joke);
    document.getElementById("joke").innerHTML = res.data.joke;
  } catch (e) {
    console.error(e);
    document.getElementById("joke").innerHTML =
      "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.";
  }
};

export default getQuote;
