function NavigationBlock() {
    let OUTPUT = '<div class="navigation__menu">';
    OUTPUT += '<a class="menu__item" href="index.html">Главная</a>';
    OUTPUT += '<a class="menu__item" href="grid.html">Grid</a>';
    OUTPUT += '<a class="menu__item" href="flex.html">Flex</a>';
    OUTPUT += '<a class="menu__item" href="sticky.html">Sticky</a>';
    OUTPUT += '<a class="menu__item" href="fixed.html">Fixed</a>';
    OUTPUT += '<a class="menu__item" href="table.html">Table</a>';
    OUTPUT += '</div>';
    $('.navigation').html(OUTPUT);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}




