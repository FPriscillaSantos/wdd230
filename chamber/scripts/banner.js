document.addEventListener('DOMContentLoaded', function() {
    function isShowBannerDay() {
        const today = new Date().getDay();
        return today === 1 || today === 2 || today === 3 /*|| today === 5 || today === 6; */// Monday is 1, Tuesday is 2, Wednesday is 3, Friday is 5, Saturday is 6
    }

    if (isShowBannerDay()) {
        document.getElementById('banner').style.display = 'block';
    }

    document.getElementById('close-banner').addEventListener('click', function() {
        document.getElementById('banner').style.display = 'none';
    });
});