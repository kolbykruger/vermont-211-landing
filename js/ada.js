document.addEventListener('DOMContentLoaded', function() {
    var adaBar = document.querySelector('.ada-accessibility'),
        adaButtons = adaBar.querySelectorAll('button');

    adaBar.addEventListener('focusin', function() {
        adaBar.setAttribute('aria-expanded', true)
        adaBar.classList.add('ada-accessibility-expanded');
    })
    adaBar.addEventListener('focusout', function() {
        adaBar.setAttribute('aria-expanded', false)
        adaBar.classList.remove('ada-accessibility-expanded');
    })

    for (let i = 0; i < adaButtons.length; i++) {
        adaButtons[i].addEventListener('click', function() {

            if (this.id === 'ada-navigation') {
                var nav = document.querySelector('.nav');

                //Detect mobile nav vs desktop nav
                if (window.getComputedStyle(nav).display === "none") {
                    nav = document.querySelector('.navicon');
                }
                nav.tabIndex = '0';
                nav.focus();
            }

            if (this.id === 'ada-content') {
                var content = document.querySelector('main section:first-of-type');
                content.tabIndex = '0';
                content.focus();
            }
        })
    }
})
