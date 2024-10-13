let div1=document.querySelector("#Scissor");
let div2=document.querySelector("#rock");
let div3=document.querySelector("#paper");
let usercore=document.querySelector(".uscore");
let cmpcore=document.querySelector(".cscore");
let msgContainer=document.querySelector(".msg-container");
let choices=document.querySelectorAll(".choice");
let uscore=0;
let cscore=0;
let rstbtn=document.querySelector(".rstbtn");
 let showWinner=(UserWin,Userchoice,CmpChoice)=>{
    if(UserWin){
        console.log("You win");
        uscore++;
        msgContainer.style.width="33%"
        msgContainer.style.backgroundColor="green"
        msgContainer.innerHTML=`You win Your ${Userchoice} beats ${CmpChoice}`;
        usercore.innerText=`${uscore}`;
    }
    else{
        console.log("You Lose");
        cscore++;
        msgContainer.style.width="33%"
        msgContainer.style.backgroundColor="red"
        msgContainer.innerHTML=`You lose ${CmpChoice} beats your ${Userchoice}`;
        cmpcore.innerText=`${cscore}`;
    }
 }
 const drawGame=()=>{
    console.log(`Game was drawn`);
    msgContainer.style.width="33%";
     msgContainer.style.backgroundColor="black"
    msgContainer.innerHTML="Game was drawn. Play Again!!";
    
 }
let genComputerChoice=()=>{
    const options=["Scissor","rock","paper"];
    const randchoice=Math.floor(Math.random()*3);
    return options[randchoice];
}
let playGame=(Userchoice)=>{
    console.log(`User choice was clicked `,Userchoice);
   const CmpChoice=genComputerChoice();
   console.log(`Computer choice was clicked `,CmpChoice);
   if(Userchoice=== CmpChoice)
    {
        // Game was drawn
        drawGame();
    }
    else
    {
        let UserWin=true;
        if(Userchoice==="rock")
            // paper,scissor
            UserWin = CmpChoice==="Scissor"?true:false;
        else if(Userchoice==="paper")
            UserWin = CmpChoice==="rock"?true:false;
        else
            UserWin = CmpChoice==="paper"?true:false;
        showWinner(UserWin,Userchoice,CmpChoice);
    }
  

}
choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const UserChoice=choice.getAttribute("id");
    
        playGame(UserChoice);
    })
})
rstbtn.addEventListener("click",()=>{
    resetGame();
})
const resetGame=()=>{
    uscore=0;
    cscore=0;
    msgContainer.innerText="Play Your Move";
    msgContainer.style.backgroundColor="black";
    usercore.innerText=`${uscore}`;
    cmpcore.innerText=`${cscore}`;
}