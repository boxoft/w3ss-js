(function () {
    var h3 = document.getElementsByTagName('h3')[0],
        button = document.getElementsByTagName('button')[0],
        fontSizes = ['2em', '1.5em', '1.17em', '1em', '0.83em', '0.67em'],
        i = 2;

    setFontSize();

    button.addEventListener('click', setFontSize);

    function setFontSize() {
        h3.style.fontSize = fontSizes[i];

        i === fontSizes.length - 1 ? i = 0 : i++;
    }
})();