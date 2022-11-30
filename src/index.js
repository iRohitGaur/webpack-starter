import "./styles/styles.css";
import getQuote from "./getQuote";
import dad from "./assets/dad.svg";

const emojiConfetti = () => {
  import("js-confetti")
    .then((module) => {
      const jsConfetti = new module.default();
      jsConfetti.addConfetti({
        emojis: ["👱‍♂️", "🤷‍♂️", "🤣"],
        emojiSize: 100,
        confettiNumber: 50,
      });
    })
    .catch((e) => console.log("Failed to import js-confetti", e));
};

document.getElementById("jokeBtn").addEventListener("click", () => {
  getQuote();
  emojiConfetti();
});

const dadImg = document.getElementById("dadImg");
dadImg.src = dad;
getQuote();
