const theme=document.querySelector(".theme-toggler");
const icon=document.querySelector(".toggler-icon");
const isdark=document.querySelector(".dark");
const container=document.querySelector(".container");
const screen=document.querySelector("#display");
const buttons=document.querySelectorAll("button");
let checkDark=true;
theme.onclick = () =>
{
    container.classList.toggle("light");
    isdark.classList.toggle("dark");
    theme.classList.toggle("active");
    
    checkDark =! checkDark;
};
buttons.forEach((items) =>
{
    items.onclick = () =>
    {
        
       if(items.id==="clear")
       {
        screen.innerHTML="";
       }
       else if(items.id==="backspace")
       {
        var str=screen.innerText;
        

            screen.innerHTML=str.substring(0,str.length-1);
       }
       else if(items.id=="equal")
       {
            screen.innerHTML=eval(screen.innerText);
       }
       else
        screen.innerHTML+=items.id;
        
    }
})