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
        screen.innerHtml+=items.id;
    }
})