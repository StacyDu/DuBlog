document.addEventListener("DOMContentLoaded", function (){
    var photos = {
        'Barcelona': "text for barcelona picture",
        'Venice': "text for venice picture",
        'New Year': "text for christmas picture",
    };
    var carousel = document.getElementById("mainCarousel");
    var changedText = document.getElementById("changedText");
    var rightCntrl = document.getElementsByClassName("right")[0];
    var leftCntrl = document.getElementsByClassName("left")[0];


    // var myEventFunc = function(pictureDiv){
    //     var keyWord = pictureDiv.getElementsByClassName('active')[0].firstElementChild.getAttribute("alt");
    //     changedText.innerText = photos[keyWord];
    // };

    // rightCntrl.addEventListener("click", myEventFunc(carousel));



    rightCntrl.addEventListener("click", function(){
        var keyWord = carousel.getElementsByClassName('active')[0].firstElementChild.getAttribute("alt");
        changedText.innerText = photos[keyWord];
        console.log(changedText.innerText);
        console.log(keyWord);
        
    });


    leftCntrl.addEventListener("click", function(){
        var keyWord = carousel.getElementsByClassName('active')[0].firstElementChild.getAttribute("alt");
        changedText.innerText = photos[keyWord];
        console.log(changedText.innerText);
        console.log(keyWord);
        
    });

});

