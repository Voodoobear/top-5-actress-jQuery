// selecting the default items
$(function() {

    let $mainMenuItems = $('#main-menu ul').children('li'),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = -1,

    init = () => {

        $mainMenuItems.children(".images").click(function() {
            
            let newIndex = $(this).parent().index(),
            $item = $mainMenuItems.eq(newIndex);

            if(openedIndex === newIndex) {
                animateItem($item, false, speed);
                openedIndex = -1;
            } else {

                if (validIndex) {
                    animateItem($mainMenuItems.eq(openedIndex), false, 350);
                    openedIndex = newIndex;
                    animateItem($item, true, 350);
                }
            }
        });
    },

    validIndex = function(indexToCheck) {
        return (indexToCheck >= 0) && ( indexToCheck <= totalMainMenuItems);
    },

    animateItem = function($item, toOpen, speed) {

            let $colorImage = $item.find(".color"),
            itemParam = toOpen ? {width: "420px"} : {width: "140px"},
            colorImagesParam = toOpen ? {left: "0px"} : {left: "140px"};
            $colorImage.animate(colorImagesParam, speed);
            $item.animate(itemParam, speed);

    };
    
    init();

});