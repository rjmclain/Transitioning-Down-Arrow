$(window).load(function () {
    $('.dropdown-btn , .dropdown-btn *').click(function (e) {
        e.stopPropagation();
        $(this).closest('.dropdown-btn').toggleClass('open');
    });
});