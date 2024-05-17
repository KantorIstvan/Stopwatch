let [mp, p, h] = [0, 0, 0];
const displayTime = document.querySelector(".display");
const startbtn = document.querySelector(".start");
const resetbtn = document.querySelector(".reset");
const btns = document.querySelectorAll(".btns");
let timer = null;
let isRunning = false;
const quotes = [
  "Improvise, adapt, and overcome! - Clint Eastwood",
  "I’ve failed over and over and over again in my life and that is why I succeed. - Michael Jordan",
  "You, me, or nobody is gonna hit as hard as life. But it ain’t about how hard you hit. It’s about how hard you can get hit and keep moving forward. - Rocky Balboa",
  "Going in one more round when you don’t think you can. That’s what makes all the difference in your life. – Rocky Balboa",
  "Remember, the mind is your best muscle. Big arms can move rocks, but big words can move mountains. – Rocky Balboa",
  "I'm stronger, I'm smarter, I'm better! I AM BETTER! - Homelander",
  "Don't stop when you're tired. Stop when you're done. - David Goggins",
  "Who's gonna carry the boats?! - David Goggins",
  "The future depends on what you do today. - Mahatma Gandhi",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "Winners find a way, losers find an excuse. - Andrew Tate",
  "The world owes you nothing. Work harder. - Andrew Tate",
  "Mastery is the journey of learning through failure. - Tristan Tate",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  "When something is important enough, you do it even if the odds are not in your favor. - Elon Musk",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The best revenge is massive success. - Frank Sinatra",
];
let quoteIndex = 0;
let displayQuote = document.querySelector(".idezet");
startbtn.addEventListener("click", watchStart);
resetbtn.addEventListener("click", resetTimer);
function stopwatch() {
  {
    mp++;
    if (mp == 60) {
      mp = 0;
      p++;
      if (p == 60) {
        p = 0;
        h++;
      }
    }
  }

  let ora = h < 10 ? "0" + h : h;
  let perc = p < 10 ? "0" + p : p;
  let mperc = mp < 10 ? "0" + mp : mp;

  displayTime.innerHTML = ora + ":" + perc + ":" + mperc;
}
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 32) {
    // Space gomb lenyomásának ellenőrzése (karakterkód 32)
    watchStart(); // Start/Stop funkció meghívása
  }
  if (event.keyCode === 82) {
    resetTimer();
  }
});
function watchStart() {
  if (!isRunning) {
    // Ha nem fut a stopper, akkor indítsd el
    timer = setInterval(stopwatch, 1000);
    startbtn.innerHTML = '<ion-icon name="pause"></ion-icon>';
    document.body.style.backgroundColor = "#55a630";
    displayTime.style.fontSize = "200px";
    displayTime.style.textShadow = "6px 15px 10px rgba(0, 0, 0, 0.36)";

    isRunning = true;
  } else {
    // Ha fut a stopper, akkor állítsd le
    clearInterval(timer);
    startbtn.innerHTML = '<ion-icon name="play"></ion-icon>';
    document.body.style.backgroundColor = "#0077b6";

    displayTime.style.fontSize = "175px";
    displayTime.style.textShadow = "6px 7px 0px rgba(0, 0, 0, 0.36)";

    isRunning = false;
  }
}
function resetTimer() {
  clearInterval(timer); // Állítsuk le a stoppert
  [mp, p, h] = [0, 0, 0]; // Állítsuk vissza az értékeket
  isRunning = false; // Állítsuk vissza a futási állapotot
  startbtn.innerHTML = '<ion-icon name="play"></ion-icon>';
  document.body.style.backgroundColor = "#dd384b";

  displayTime.style.fontSize = "175px";
  displayTime.style.textShadow = "6px 7px 0px rgba(0, 0, 0, 0.36)";
  displayTime.innerHTML = "00:00:00"; // Állítsuk vissza a kijelzőt
}

function changeQuote() {
  displayQuote.textContent = quotes[quoteIndex];
  quoteIndex = Math.floor(Math.random() * quotes.length);
}
setInterval(changeQuote, 30000);
