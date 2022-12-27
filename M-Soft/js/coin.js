var coinOne = document.getElementById("coin1");
var coinOneInitialWidth = coinOne.offsetWidth;
var coinOneInitialHeight = coinOne.offsetHeight;
var coinOneWidth;
var coinOneHeight;
var scrollYPosition = 0;
var meter = document.getElementById("meter");
var startAnimation = false;

function coin1()
{
    if(startAnimation == false)
    {
        coinOne.style.animation = "pound 50s infinite normal";
        startAnimation = true;
    }
    if(window.scrollY > scrollYPosition && coinOne.offsetWidth < 600)
    {
        coinOneWidth = coinOne.offsetWidth;
        coinOneHeight = coinOne.offsetHeight;
        coinOne.style.width = coinOneWidth + 1 + "px";
        coinOne.style.height = coinOneHeight + 1 + "px";
    }
    else if(coinOneWidth > coinOneInitialWidth || coinOneHeight > coinOneInitialHeight)
    {
        if(window.scrollY < scrollYPosition)
        {
            coinOneWidth = coinOne.offsetWidth;
            coinOneHeight = coinOne.offsetHeight;
            coinOne.style.width = coinOneWidth - 2 + "px";
            coinOne.style.height = coinOneHeight - 2 + "px";
        }
    }
    
    // meter.innerHTML = scrollYPosition + " | " + window.scrollY + " | " + coinOneWidth;

    scrollYPosition = window.scrollY;
}
