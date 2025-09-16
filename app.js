let gameseq=[];
let userSeq=[];

let colors=["red","green","yellow","blue"];

let started=false;
let level =0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started==false){
        console.log("game has started");
        started=true;

        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);      
};

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randomindex=Math.floor(Math.random()*3);
    let randcolor=colors[randomindex];
    let randbtn=document.getElementById(`${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
};


function checkans(index){
    // console.log("curr level:",level);
    if (userSeq[index]==gameseq[index]){
        if (userSeq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over!Your score was <b>${level}</b>🥳<br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        document.querySelector("h1").style.color="white";
        document.querySelector("h2").style.color="white";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
            document.querySelector("h1").style.color="black";
            document.querySelector("h2").style.color="black";
        },1000)          
        resetthegame();
        
    };
}

function btnpress(){
    console.log(this);
    let btn=this;
    btnflash(btn);
    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);

    checkans(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".box");
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function resetthegame(){
    started=false;
    gameseq=[];
    userSeq=[];
    level=0;
}

