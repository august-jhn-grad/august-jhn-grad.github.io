var index = 0;
var mouseover = false;
slideshow();

function slideshow() {
        if(!mouseover)
        {
        let i;
        let slides = document.getElementsByClassName('slide')
        for (i = 0; i < slides.length; i ++) {
            slides[i].style.display = "none";
        }
        index ++;
        if (index > slides.length) {
            index = 1
        }
        slides[index - 1].style.display = "block";
        setTimeout(slideshow, 8000);
    }
}

function onGallaryElementActivated(slide){
    mouseover = true;
    if(mouseover){
    index = slide;
    let i;
    let slides = document.getElementsByClassName('slide')
    for (i = 0; i < slides.length; i ++) {
        slides[i].style.display = "none";
    }
    index ++;
    if (index > slides.length) {
        index = 1
    }
    slides[index - 1].style.display = "block";
}


}

function onGallaryElementDeactivated(slide){
    mouseover = false;
}
