(function () {
    var off = true,
        bulb = document.getElementById('bulb');

    document.addEventListener('DOMContentLoaded', setImage);

    bulb.addEventListener('click', setImage);

    function setImage() {
        if (off) {
            bulb.src = '../images/pic_bulbon.gif';
            off = false;
        } else {
            bulb.src = '../images/pic_bulboff.gif';
            off = true;
        }
    }
})();