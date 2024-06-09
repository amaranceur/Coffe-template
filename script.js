let header=document.getElementById("header")
window.addEventListener("scroll",()=>{
    let value=window.scrollY

    if(value>=400)
        {
            header.style.transform="translateY(-100%)";
        }
    else {
        header.style.transform="translateY(0)";
    }
})
