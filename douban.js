(function() {
    var isPath = function(path) {
        return location.pathname === path;
    };

    // 2015-05-17
    var revertDoumail = function() {
        var replaceText = function(original) {
            return original.replace(/私信/g, '豆邮');
        };

        var revertTopNav = function() {
            var doumail = document.querySelector('#top-nav-doumail-link');
            doumail.innerHTML = replaceText(doumail.innerHTML);
        };

        var revertDoumail = function() {
            var html = document.querySelector('html');
            html.innerHTML = replaceText(html.innerHTML);

            // Close tooltip.
            var tooltip = document.querySelector('#content .pop');
            tooltip.classList.add('hide');
        };

        // Works on every page:
        revertTopNav();

        // Page related actions:
        if (isPath('/doumail/')) {
            revertDoumail();
        }
    };

    revertDoumail();
})();
