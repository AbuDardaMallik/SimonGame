let gameSeq = [];
let userSeq = [];
let colors = ["red", "green", "blue", "yellow"];

let p = document.querySelector("p");

let start = false;
let level = 0;

document.addEventListener("keypress",pressKey);

function pressKey(event){
    if (start == false) {
        start = true;
        console.log("Game Started! Press any key to play.");
        levelUp();
    }
}

function buttonFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 500);
}

function levelUp(){
    level++;
    p.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random() * 4);
    let btn = colors[randomIndex];
    gameSeq.push(btn);
    userSeq = [];
    let btnClass = document.querySelector(`.${btn}`);
    buttonFlash(btnClass);
}

let btns = document.querySelectorAll(".inrc");
for (let btn of btns){
    btn.addEventListener("click",buttonPress)
}

//Misteke:
// function checkAns() {
//     if (userSeq.length === gameSeq.length) {
//         for (let i = 0; i < userSeq.length; i++) {
//             if (userSeq[i] !== gameSeq[i]) {
//                 p.innerText = "Wrong sequence! Game Over! your score is " + level + ".\n Press any key to start again.";
//                 start = false;
//                 level = 0;
//                 gameSeq = [];
//                 userSeq = [];
//                 return;
//             }
//         }
//         setTimeout(levelUp, 1000);
//     }
// }


function checkAns(index) {
    if(userSeq[index] === gameSeq[index]) {
        if (userSeq.length == gameSeq.length) {
            // alert("Correct sequence! Leveling up!");
            setTimeout(levelUp, 1000);
        }
    }else{
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 500);
        p.innerText = "Wrong sequence! Game Over! your score is " + level + ".\n Press any key to start again.";
        gameSeq = [];
        start = false;
        level = 0;
        //setTimeout(levelUp, 1000);
        return;
    }
}


function buttonPress(){
    let btn=this;
    buttonFlash(btn);
    userSeq.push(btn.classList[1]);      // Get the class name of the button <div class="inrc green" type="button"> akhane greeen print hobe and jodi ami 1 er jagai 0 dei tahole inrc print hobe
    checkAns(userSeq.length - 1); 
}
