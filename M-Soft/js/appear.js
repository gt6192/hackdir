const scrollOffset = 500;
 
const scrollElement = document.querySelectorAll(".js-scroll");
 
const elementInView = (el, percentageScroll = scrollOffset) => {
    const elementTop = el.getBoundingClientRect().top;
   
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/scrollOffset))
    );
};
 
const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};  
 
const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };
   
const handleScrollAnimation = () => {
    scrollElement.forEach((el) => {
      if (elementInView(el, scrollOffset)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    })
}
 
window.addEventListener('scroll', () => {
    handleScrollAnimation();
})