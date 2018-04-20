window.addEventListener('click', handleClick);
var preview = document.getElementById('preview');
var bigScreenshot = preview.querySelector('img');
var left = preview.querySelector('.left');
var right = preview.querySelector('.right');
var viewedImage;

function handleClick(event) {
    var target = event.target;
    if (!target) {
        return;
    }
    if (target.className === 'screenshot') {
        showScreenshot(target);
    } else if (target.className === 'close-preview') {
        hideScreenshot();
    } else if (target.className === 'left') {
        prevScreenshot();
    } else if (target.className === 'right') {
        nextScreenshot();
    }
}

function getPrevious() {
    var previous = viewedImage.previousElementSibling;
    if (previous && previous.tagName.toUpperCase() == 'IMG') {
        return previous;
    }
}

function getNext() {
    var next = viewedImage.nextElementSibling;
    if (next && next.tagName.toUpperCase() == 'IMG') {
        return next;
    }
}

function showScreenshot(image) {
    document.body.style.overflow = 'hidden';
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    viewedImage = image;
    left.style.display = 'block';
    right.style.display = 'block';
    if (!getPrevious()) {
        left.style.display = 'none';
    }
    if (!getNext()) {
        right.style.display = 'none';
    }
    bigScreenshot.src = image.src;
    preview.style.display = 'block';
}

function hideScreenshot() {
    document.body.style.overflow = 'auto';
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
    preview.style.display = 'none';
}

function prevScreenshot() {
    showScreenshot(getPrevious());
}

function nextScreenshot() {
    showScreenshot(getNext());
}
