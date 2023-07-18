//calling the preload function to preload the images
preload('images/firefighter.jpg, images/work.jpg, images/silhouette.jpg, images/event.jpg');

//The function to enlarge the images.
function increaseImg(image) {
    image.style.height = "auto";
    image.style.width = "200%";
}

//function to return image to orginal size
function normalImg(image) {
    image.style.height = "125px";
    image.style.width = "180px";
}

/*
    This following code takes the links in the code on line 2 for the images and preloads them into an image array
    for use on the web page
*/
function preload(images) {
    if (document.images) {
        var imageArray = images.split(',');
        var imageObjs = [];
        var imageObj = new Image();
        for(var i = 0; i <= imageArray.length - 1; i ++) {    
            imageObj.src = imageArray[i];
            imageObjs.push(imageObj);
        }
    }
}