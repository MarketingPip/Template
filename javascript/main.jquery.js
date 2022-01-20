$(document).ready(function () {

    /* bxslider */


    $('.slider').bxSlider({
        mode: 'fade',
        auto: true,
        speed: 2000,

        /* Controls must be true */
        controls: true,

        /* Class selectors from step 1 */
        nextSelector: '.custom-controls .bxNext',
        prevSelector: '.custom-controls .bxPrev',
        // nextSelector: '.bxNextImg',
        // prevSelector: '.bxPrevImg',

        /* Here's the heart of how to customize nav arrows.
        || Enter a HTML string for both prevText and nextText.
        || Here I used Font-Awesome icons. Sprites are commonly
        || used, but try to use only one element per option.
        */
        // nextText: '<i class="fa fa-chevron-circle-right"></i>',
        // prevText: '<i class="fa fa-chevron-circle-left"></i>',
        nextText: '',
        prevText: '',

        // prevText: '<img src="../assets/images/product-images/furniture-image-2.png" alt="furniture image" class="img-fluid" style="\width:50px\">',
        // nextText: '<img src="../assets/images/product-images/furniture-image-3.png" alt="furniture image" class="img-fluid" style="\width:50px\">',

        pager: false,
        adaptiveHeight: true

    });

})