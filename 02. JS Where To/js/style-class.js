(function () {
    var button = document.getElementsByTagName('button')[0],
        noteArea = document.getElementsByClassName('w3-note')[0],
        noteAreaInitialClass = noteArea.className,
        w3Colors = ['w3-red', 'w3-pink', 'w3-orange', 'w3-yellow'],
        i = 0;

    //setColor();

    button.addEventListener('click', setColor);

    function setColor() {
        noteArea.className = noteAreaInitialClass + ' ' + w3Colors[i];

        if (i === w3Colors.length) {
            noteArea.className = noteAreaInitialClass;
            i = 0;
        } else {
            i++;
        }
    }
})();