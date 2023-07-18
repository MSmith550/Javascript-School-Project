//The JavaScript onload event handler 
window.onload = cycle;

//declaring  variables
var theExchange = 0;
var imageArray = new Array();

//calling the preload function to preload the images
preload('images/banner1.jpg, images/banner2.jpg, images/banner3.jpg');


//The function to have the images cycle through.
function cycle() {
    
/* 
    The following code increases the theExchange variable by 1. It then checks that varible against the array length and 
    if they match, the variable is reset to zero. The code then gets the image that is locaked in the array at the index of
    the theExcahange variable. The setTimeout then displays the image for 3 seconds befor running the cycle function again
*/
    theExchange++;
    if (theExchange == imageArray.length) {
        theExchange = 0;
    }
    document.getElementById("exArt").src = imageArray[theExchange];

    setTimeout(cycle, 3 * 1000);
}

/*
    This following code takes the links in the code on line 9 for the images and preloads them into an image array
    for use on the web page
*/
function preload(images) {
    if (document.images) {
        imageArray = images.split(',');
        var imageObjs = [];
        var imageObj = new Image();
        for(var i = 0; i <= imageArray.length - 1; i ++) {    
            imageObj.src = imageArray[i];
            imageObjs.push(imageObj);
        }
    }
}
