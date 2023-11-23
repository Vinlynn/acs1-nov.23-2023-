//  one image only to be clicked
// const imageClick = document.querySelector("#img1");
// imageClick.addEventListener("click", function(){
//  document.querySelector("#modalImage").src = this.src;

//     console.log("image is click")

// })

// FOR RANDON IMAGES TO CLICKED

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("#img").forEach((element) =>{
        element.addEventListener("click", function() {
            document.querySelector("#modalImage").src = this.src;
            modalImage.className = "d-block mx-auto w-50"
        })
    })
})

