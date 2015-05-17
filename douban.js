(function() {
    // 2015-05-17
    var revertDoumail = function() {
        var doumail = document.querySelector('#top-nav-doumail-link');

        doumail.innerText = doumail.innerText.replace('私信', '豆邮');
    };

    revertDoumail();
})();
