
function showNav(){
// variables
    let mainNav = document.getElementById("nav");
    let mainShadow = document.getElementById("main");
// working
    document.body.style.overflow = 'hidden';
    mainShadow.style.visibility = 'visible';
    mainShadow.style.opacity = '1';
    mainNav.style.left = '0';
}

function closeNav(){
    let mainNav = document.getElementById("nav");
    let mainShadow = document.getElementById("main");
    mainShadow.style.visibility = 'hidden';
    mainShadow.style.opacity = '0';
    mainNav.style.left = '-280px';
    document.body.style.overflow = 'initial';
}

function showList(){
    let mainList = document.getElementById("list");
    if(mainList.style.display === "none" ){
        mainList.style.display = "block";
    }
    else{
        mainList.style.display = "none";
    }

}