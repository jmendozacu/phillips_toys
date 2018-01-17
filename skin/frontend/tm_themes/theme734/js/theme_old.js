/**
 * Magento
 * Script theme
 * Andrey Rad (Hitch)
 * @category    design
 * @package     rwd_default
 * @copyright   Copyright (c) 2006-2015 X.commerce, Inc. (http://www.magento.com)
 */
// ==============================================
// script theme 
// ==============================================



function sort_block() {
	enquire.register('(min-width: ' + bp.large + 'px)', {
	    match: function () {
	        $j('#search_mini_form').insertBefore($j('.main-menu .search-position-2'));
            $j('.header-row-background').insertAfter($j('.page-header-container .skip-container'));
	    },
	    unmatch: function () {
	        $j('#search_mini_form').insertAfter($j('.search-position'));
            $j('.header-row-background').insertBefore($j('.page-header-container'));
	    }
	});
	enquire.register('(max-width: ' + bp.large + 'px)', {
	    match: function () {

            $j('.header-row-background').insertBefore($j('.page-header-container'));
	    },
	    unmatch: function () {
            $j('.header-row-background').insertAfter($j('.page-header-container .skip-container'));
	    }
	});
}


function hide_block() {
    idClick = '.id-click';
    idSlide = '.id-block';
    idClass = 'id-active';

    $j(idClick).on('click', function (e) {
        e.stopPropagation();
        var subUl = $j(this).next(idSlide);
        if (subUl.is(':hidden')) {
            subUl.effect('slide', { direction: 'right', mode: 'show' }, 350);
            $j(this).addClass(idClass);
        }
        else {
            subUl.effect('scale', { direction: 'horizontal', mode: 'hide' }, 300);
            $j(this).removeClass(idClass);
        }
        $j(idClick).not(this).next(idSlide).effect('scale', { direction: 'horizontal', mode: 'hide' }, 300);
        $j(idClick).not(this).removeClass(idClass);
        e.preventDefault();
    });

    $j(idSlide).on('click', function (e) {
        e.stopPropagation();
    });

    $j(document).on('click', function (e) {
        e.stopPropagation();
        var elementHide = $j(idClick).next(idSlide);
        $j(elementHide).effect('scale', { direction: 'horizontal', mode: 'hide' }, 300);
        $j(idClick).removeClass(idClass);
    });
}

$j(document).ready(function (){
	sort_block();
    hide_block();
});
