let displaybox = document.getElementById('displaybox');
let nextbtn = document.getElementById('nextbtn');


let quotes = [
    "When you have a dream, you've got to grab it and never let go. -Carol Burnett",
    "'Nothing is impossible. The word itself says 'I'm possible!'— Audrey Hepburn",
    "There is nothing impossible to they who will try.— Alexander the Great",
    "The bad news is time flies. The good news is you're the pilot.— Michael Altshuler",
    "Life has got all those twists and turns. You've got to hold on tight and off you go. — Nicole Kidman",
    "Keep your face always toward the sunshine, and shadows will fall behind you. — Walt Whitman",
    "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell. — Amal Clooney",
    "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box. — Duchess Meghan",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill"
]


function selectrandom(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    displaybox.textContent = randomQuote;
}
nextbtn.addEventListener('click', selectrandom);

const copyBtn = document.getElementById("copybtn");
const displayBox = document.getElementById("displaybox");

function copyText() {

  const range = document.createRange();
  range.selectNode(displayBox);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  document.execCommand("copy");

  window.getSelection().removeAllRanges();
}

copyBtn.addEventListener("click", copyText);

