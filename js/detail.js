window.addEventListener('load', function () {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview_img.addEventListener('mousemove', function (e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskx = x - mask.offsetWidth / 2;
        var masky = y - mask.offsetHeight / 2;

        var maskmax = preview_img.offsetWidth - mask.offsetWidth
        if (maskx <= 0) {
            maskx = 0;
        } else if (maskx >= maskmax) {
            maskx = maskmax;
        } if (masky <= 0) {
            masky = 0;
        } else if (masky >= maskmax) {
            masky = maskmax;
        }
        mask.style.left = maskx + 'px';
        mask.style.top = masky + 'px';
        var bigImg = document.querySelector('.bigImg');
        var bigmax = bigImg.offsetWidth - big.offsetWidth;
        // 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        var bigx = maskx * bigmax / maskmax;
        var bigy = masky * bigmax / maskmax;
        bigImg.style.left = -bigx + 'px';
        bigImg.style.top = - bigy + 'px';
    })

})