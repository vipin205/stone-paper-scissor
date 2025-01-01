let userscore=0;
let compscore=0;
const usernum=document.querySelector("#userscore");
const compnum=document.querySelector("#compscore");

let msg=document.querySelector("#msg");
const box=document.querySelectorAll(".box");

const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};

const drawgame=()=>{
    msg.innerText="game was drawn!.Please try again";
    msg.style.backgroundColor="black";
    msg.style.color="white";
};
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin)
    {
        userscore++;
        usernum.innerText=userscore;
        msg.innerText="you win";
        msg.style.backgroundColor="green";
    }
    else
    {
        compscore++;
        compnum.innerText=compscore;
        msg.innerText="computer won!";
        msg.style.backgroundColor="red";
    }
};

const scorequal=()=>{
    if(userscore===compscore)
    {
       msg.innerText="Superb score's are equal!. What a game"; 
       msg.style.backgroundColor="pink";
       msg.style.color="black";
    };
}

const playgame=(userchoice)=>{
    const compchoice=gencompchoice();
    if(userchoice===compchoice)
    {
        drawgame();
    }
    else
    {
        let userwin=true;
        if(userchoice==="rock")
        {
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper")
        {
            userwin=compchoice==="scissor"?false:true;
        }
        else
        {
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
        scorequal();
    }
};

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        const userchoice=box.getAttribute("id");
        playgame(userchoice);
    });
});