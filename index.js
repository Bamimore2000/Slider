const secondSection = document.querySelector(".second-section");

for(i=1; i<12; i++){
    if (i < 5){
        secondSection.innerHTML += `<div class="slider"><img src="images/img-${i}.jpg" alt=""></div>`
    }
    else if (i > 5){
        secondSection.innerHTML += `<div class="slider"><img src="images/img-${i}.png" alt=""></div>`
    }
    }

const sliders = document.querySelectorAll(".slider");

const options = {
    root: null,
    threshhold: 0.99,
};

const observer = new IntersectionObserver (function(entries, observer){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            entry.target.classList.add("fixed")
        }
        else{
            entry.target.classList.remove("fixed")
        }
    })
},options);

sliders.forEach((slide)=>{
    observer.observe(slide)
});
