// selecting the default items
$(function() {

    let $mainMenuItems = $('#main-menu ul').children('li'),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = 2,

    //function that will initiate the animation part with images
    init = () => {
        bindEvents();

        if(validIndex(openedIndex))
        {
            animateItem($mainMenuItems.eq(openedIndex), true, 800);
        }
        
    },

    bindEvents = function() {
        
        $mainMenuItems.children(".images").click(function() {
            
            let newIndex = $(this).parent().index();
            checkAndAnimateItem(newIndex);
        });

        $('.button').hover(function() {
            $(this).addClass("hovered");
        },
        function() {
            $(this).removeClass("hovered");
        });

        $('.button').click(function() {
            let newIndex = $(this).index();
            checkAndAnimateItem(newIndex);
        });
    },

    //this is to ensure we use the right indexes
    validIndex = function(indexToCheck) {
        return (indexToCheck >= 0) && ( indexToCheck <= totalMainMenuItems);
    },

    //those are to describe steps of the animations
    animateItem = function($item, toOpen, speed) {

            let $colorImage = $item.find(".color"),
            itemParam = toOpen ? {width: "420px"} : {width: "140px"},
            colorImagesParam = toOpen ? {left: "0px"} : {left: "140px"};
            $colorImage.animate(colorImagesParam, speed);
            $item.animate(itemParam, speed);

    },

    checkAndAnimateItem = function(indexToCheckAndAnimate) {
        if(openedIndex === indexToCheckAndAnimate) {
            animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 350);
            openedIndex = -1;
        } else {

            if (validIndex(indexToCheckAndAnimate)) {
                animateItem($mainMenuItems.eq(openedIndex), false, 350);
                openedIndex = indexToCheckAndAnimate;
                animateItem($mainMenuItems.eq(openedIndex), true, 350);
            }
        }
    };
    
    init();

});