
/*when check button is clicked*/
/*change background color*/


function generateRandomOutcome() {
  const currentTime = new Date().getTime();
  const randomSeed = currentTime % 2 + 1;
  return randomSeed;
}

// Call the function to get a random outcome



/*the answer how to the user*/ 
const howEl = document.querySelector("p");
function how() {
    
    howEl.innerHTML = "<h1>click on the image to find the lion an win amizing money</h1>";
    
}

    
/*mark both cages when clicked*/

const cage = document.getElementById("cage1")
function markCageOne() {
    cage.style.border = "solid 5px red";
    const cageBorder = document.getElementById("cage2");
    cageBorder.style.border = "";
}
cage.onclick = markCageOne;
const cageTwo = document.getElementById("cage2");

const accountBalance = document.getElementById("accountBalance");  

function markCageTwo() {
 cage2.style.border = "5px solid red";
 const cageBorder = document.getElementById("cage1");
 cageBorder.style.border = "";
}
cageTwo.onclick = markCageTwo;


const border = document.querySelector(".cage1");



const results = document.getElementById("results");

    

function rebet() {
    const el = document.getElementById("cage1");
    el.style.backgroundColor = "lightgreen";
    const youWin = document.getElementById("youWin");
    youWin.innerHTML = "";
    const cage2 = document.getElementById("cage2");
    cage2.style.backgroundColor = "skyblue";
    
    const youLoose = document.getElementById("youLoose");
    youLoose.innerHTML = "";
    cage2.style.border = "";
    el.style.border = "";
    
    
    
}
/*const menu = document.getElementById("menus")
function menubar() {
    const home = document.getElementById("home");
    home.innerHTML = "home";
    const account = document.getElementById("accountId")
    account.innerHTML = "account";
    const about = document.getElementById("about")
   about.innerHTML = "about";
}*/





/*stake multiplier*/


function change() {
// Call the function to get a random outcome
    const randomOutcome = generateRandomOutcome();
   
    
    if (randomOutcome === 1) {
        const youWin = document.getElementById("youWin");
        youWin.innerHTML = "You Win 100!";
        const youLoose = document.getElementById("youLoose");
        youLoose.innerHTML = "you win"; 
    
    
    //else if (randomOutcome === 0) {
         //const youLoose = document.getElementById("youLoose");
        //youLoose.innerHTML = "You Loose 50$!"; 
        //const youWin = document.getElementById("youWin");
   // youWin.innerHTML = "You loose!";
    } else {
        const youWin = document.getElementById("youWin");
        youWin.innerHTML = "you loose";
        const youLoose = document.getElementById("youLoose");
        youLoose.innerHTML = "you loose";
    }
    
    
    const el = document.getElementById("cage1");
    el.style.backgroundColor = "white";
  
    const cage2 = document.getElementById("cage2");
    cage2.style.backgroundColor = "white";
    
    
    const balance = document.getElementById("accountBalance")
    balance.innerHTML = "100.57"
}
 
