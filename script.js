// selecting the default items
$(function() {

    let $mainMenuItems = $('#main-menu ul').children('li'),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = -1,

    init = () => {

        $mainMenuItems.children(".images").click(function() {
            
            let newIndex = $(this).parent().index(),
            $item = $mainMenuItems.eq(newIndex),
            $colorImage = $item.find(".color");

            $colorImage.animate({left:"0px"}, 350);
            $item.animate({width: "420px"}, 350);

            openedIndex = newIndex;
        });
    };
    
    init();

});