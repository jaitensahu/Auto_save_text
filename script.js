let textInArea=document.querySelector("textarea");

textInArea.addEventListener("input",()=>{
    console.log(textInArea.value);
    localStorage.setItem("text",textInArea.value)
    
})
textInArea.value=localStorage.getItem("text")