let balls = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let basket = "";

for (let i = 0; i < 3; i++) {
  basket += balls[Math.floor(Math.random() * balls.length)];
  balls.splice(balls.indexOf(parseInt(basket[i])), 1);
}

console.log(basket);

const inputBar = document.querySelector(".input-number__bar");

let numberValue;

let score = 0;

let ball = 0;

let out = 0;

let limit = 0;

inputBar.addEventListener("keyup", function (ev) {
  if (ev.keyCode === 13) {
    {
      document.querySelector(".input-number__score").textContent = "";
      document.querySelector(".ball").textContent = "";
      if (inputBar.value.length !== 3 || isNaN(parseInt(inputBar.value))) {
        alert("you should choose 3 numbers");
        inputBar.value = "";
        return;
      }

      limit++;
      document.querySelector(
        ".input-number__try"
      ).textContent = `you tried ${limit} times... ( ${limit} / 10 )`;
      console.log(limit);
      if (limit === 10) {
        document.querySelector(".input-number__save__howmuch").textContent = "";
        inputBar.remove();
        document.querySelector(
          ".input-number__score"
        ).textContent = `KKKK You Lost... the asnwer is ${basket}`;
        return;
      }
      numberValue = inputBar.value;
      inputBar.value = "";
      console.log(basket, numberValue);

      for (let i = 0; i < 3; i++) {
        if (basket[i] === numberValue[i]) {
          score++;
          if (score === 3) {
            inputBar.remove();
            document.querySelector(".input-number__save__howmuch").textContent =
              "";
            document.querySelector(".input-number__score").textContent =
              "You Win !!!!!";
            return;
          } else {
            document.querySelector(".input-number__score").textContent =
              score + "S";
          }
        } else if (
          basket[i] !== numberValue[i] &&
          basket.includes(numberValue[i])
        ) {
          ball++;
          document.querySelector(".ball").textContent = ball + "B";
        } else {
          out++;
          if (out === 3) {
            document.querySelector(".input-number__score").textContent = "OUT";
          }
        }
      }
      document.querySelector(
        ".input-number__save__howmuch"
      ).textContent += `${numberValue}(${
        document.querySelector(".input-number__score").textContent
      }${document.querySelector(".ball").textContent}) `;
      score = 0;
      ball = 0;
      out = 0;
    }
  }
});

/*
function enterKey() {
  if (window.event.keyCode === 13) {
    document.querySelector(".input-number__score").textContent = "";
    document.querySelector(".ball").textContent = "";
    if (inputBar.value.length !== 3) {
      if (inputBar.value.length !== 3) {
        alert("you should choose 3 digits");
        inputBar.value = "";
        return;
      }
    }
    numberValue = inputBar.value;
    inputBar.value = "";
    console.log(basket, numberValue);
    for (let i = 0; i < 3; i++) {
      if (basket[i] === numberValue[i]) {
        score++;
        if (score === 3) {
          document.querySelector(".input-number__score").textContent =
            "You Win!";
        } else {
          document.querySelector(".input-number__score").textContent =
            score + " Strike!";
        }
      } else if (
        basket[i] !== numberValue[i] &&
        basket.includes(numberValue[i])
      ) {
        ball++;
        document.querySelector(".ball").textContent = ball + " Ball!";
      } else {
        out++;
        if (out === 3) {
          document.querySelector(".input-number__score").textContent = "OUT!!!";
        }
      }
    }
    score = 0;
    ball = 0;
    out = 0;
  }
}

*/
