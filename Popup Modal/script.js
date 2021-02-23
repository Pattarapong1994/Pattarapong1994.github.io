(function() {
    let storeItems = document.querySelectorAll('.store-item');

    let lightBox = document.querySelector('.lightbox-container');

    let lightBoxItem = document.querySelector('.lightbox-item');

    let images = document.querySelectorAll('.store-img');


// set up an array for the items

    let imageList = [];

    let imageCounter = 0;
    

//use a forEach loop to get a copy of all the images and push into an array of items

    images.forEach(function(image){
        imageList.push(image.src);
    })

//Add click event listener to each store item

    storeItems.forEach(function(item){
        item.addEventListener('click',function(e){
            let image = e.target.src;

            lightBoxItem.style.backgroundImage = `url(${image})`

            lightBox.classList.add('show');

            imageCounter = imageList.indexOf(image);
        });
    });

    let btnLeft = document.querySelector('.btnLeft');
    
    btnLeft.addEventListener('click',function() {
        imageCounter--;
        if (imageCounter < 0) {
            imageCounter = imageList.length - 1;
        }
        lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
    })

    let btnRight = document.querySelector('.btnRight');

    btnRight.addEventListener('click', function() {
        imageCounter++;
        if (imageCounter >= imageList.length) {
            imageCounter = 0;
        }
        lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
    });

    let lightBoxClose = document.querySelector('.lightbox-close');

    lightBoxClose.addEventListener('click', function() {
        lightBox.classList.remove('show');
    });

})();