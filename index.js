let boxes=document.querySelectorAll(".box");

let msg=document.querySelector("#msg");

let newbtn=document.querySelector("#new-buttn");
let msgcontainer=document.querySelector(".msg-container");
let resetBtn=document.querySelector("#reset");
 let turn0=true;
let winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetGame=()=>
{
    turn0=true;
    enabledboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        console.log("box was clicked");
        if(turn0)
        {
            box.innerText="0";
            turn0=false;
        }
        else
        {
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    })
});

const disabledboxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enabledboxes=()=>
    {
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
    }
const showWinner=(winner)=>
{
   
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
    
 
}
const checkWinner=()=>
{
    for(let pattern of winpattern)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1==pos2 && pos2==pos3)
            {
                console.log("winner");
                showWinner(pos1);

            }
      
        }
    }
}

newbtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
