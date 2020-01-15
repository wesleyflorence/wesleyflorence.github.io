function getStyleSheet() {
    var currentTime = new Date().getHours();
    if ((0 >= currentTime && currentTime < 5) || (currentTime > 19 && currentTime <=24)) {
        document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
    }
}

getStyleSheet();