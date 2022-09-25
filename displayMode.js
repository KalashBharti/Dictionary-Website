let displayMode=document.getElementById("switchMode");
displayMode.addEventListener("click",()=>
{
    if(document.getElementById("switchMode").checked)
    {
        console.log("dark");
        document.getElementById("body").classList.add("body");
        document.getElementById("container").classList.add("dark");
       document.getElementById("modeName").style.color="white";
       document.getElementById("modeName").innerText="Default mode"
       document.getElementById("container").style.boxShadow=" 3px 0px 30px rgb(16, 16, 16),-3px 0px 30px rgb(16, 16, 16)";
      
       
    }
    else{
        console.log("not dark")
        document.getElementById("body").classList.remove("body");
        document.getElementById("container").classList.remove("dark");
        document.getElementById("modeName").style.color="black";
        document.getElementById("modeName").innerText="Dark Mode"
        document.getElementById("container").style.boxShadow="3px 0px 30px rgb(90, 90, 90),-3px 0px 30px  rgb(90, 90, 90)";
    }
})
