(function() {
    // 2015-05-17
    var revertDoumail = function() {
        var doumail = document.querySelector('#top-nav-doumail-link');
        var _h1 = document.querySelector('h1');

        doumail.innerText = doumail.innerText.replace('私信', '豆邮');

        if (_h1.innerText == '私信 原“豆邮”已更名为“私信”, 不影响功能使用') {
            _h1.innerText = _h1.innerText.replace('私信 原“豆邮”已更名为“私信”, 不影响功能使用', '豆邮');
        }
    };

    revertDoumail();
})();
