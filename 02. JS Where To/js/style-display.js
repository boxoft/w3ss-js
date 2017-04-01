(function () {
    var h3 = document.getElementsByTagName('h3')[0],
        button = document.getElementsByTagName('button')[0],
        isShown = true;

    toggle();

    button.addEventListener('click', toggle);

    function toggle() {
        if (isShown) {
            h3.style.display = 'block';
            button.textContent = '隐藏按钮上方的标题';
        } else {
            h3.style.display = 'none';
            button.textContent = '显示按钮上方的标题';
        }

        isShown = !isShown;
    }
})();