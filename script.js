const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

//promise chaining
/*const animated = alice1.animate(aliceTumbling, aliceTiming);
animated.finished
  .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
  .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
  .catch((error) => console.log(error));
*/

//using async-await methiod
const animated2 = async () => {
  try {
    await alice1
      .animate(aliceTumbling, aliceTiming)
      .finished.then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
      .then(() => alice3.animate(aliceTumbling, aliceTiming).finished);
  } catch {
    throw new Error(error);
  }
};
animated2();
