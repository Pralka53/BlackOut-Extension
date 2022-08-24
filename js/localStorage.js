    if(localStorage.getItem('BlackOut-Motive') === null){
        console.log("null")
      }
    else{
        console.log("true")
        document.querySelector("html").style.filter = "invert(95%) hue-rotate(180deg)";
        let media = document.querySelectorAll("img, picture, video");
        media.forEach((mediaItem) => {
            mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
        })
    
        if(localStorage.getItem('BlackOut-Motive') === null){
            localStorage.setItem('BlackOut-Motive', true);
        }
    }