
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

    var counter = 0;
    changedText.innerText = photos["Barcelona"];

    rightCntrl.addEventListener("click", function(){
        counter++;
        if (counter === 0){
            changedText.innerText = photos["Barcelona"];
        }else if(counter ===1){
            changedText.innerText = photos["Venice"];               
        }else if(counter === 2){
            changedText.innerText = photos["New Year"];
        }else if(counter>2){
            counter = 0;
            changedText.innerText = photos["Barcelona"];
        }     
   });

   leftCntrl.addEventListener("click", function(){
    counter--;
    if (counter === 0){
        changedText.innerText = photos["Barcelona"];
    }else if(counter === 1){
        changedText.innerText = photos["Venice"];               
    }else if(counter === 2){
        changedText.innerText = photos["New Year"];
    }else if(counter<0){
        counter = 2;
        changedText.innerText = photos["New Year"];
    }     
});


//     leftCntrl.addEventListener("click", function(){
//         var keyWord = carousel.getElementsByClassName('active')[0].firstElementChild.getAttribute("alt");
//         changedText.innerText = photos[keyWord];
//         });


    //     rightCntrl.addEventListener("click", function(){
    //         var allChildren = carousel.children;
    //         for(i = 0; i <allChildren.length; i++){
    //             if  (allChildren[i].classList.contains("active")){
    //                 changedText.innerText = photos[allChildren[i+1].firstElementChild.getAttribute("alt")];
    //             }
    //         };

    //    });

    //    leftCntrl.addEventListener("click", function(){
    //     var allChildren = carousel.children;
    //     for(i = 0; i <allChildren.length; i++){
    //         if  (allChildren[i].classList.contains("active")){
    //             changedText.innerText = photos[allChildren[i-1].firstElementChild.getAttribute("alt")];
    //         }
    //     };

    //     });

});

