// <-- All pans related to the company -->
export function companySection() {
    buttonSliderCompany();
    autoScrollCompany()
}

// <-- Active Button Left / Right Slider Company Section -->
function buttonSliderCompany(){

  const scrollRight = document.getElementById('scrollRight');
  const scrollLeft = document.getElementById('scrollLeft');

  scrollRight.onclick = function () {
    document.getElementById('scrollContainer').scrollLeft += 20;
  };

  scrollLeft.onclick = function () {
    document.getElementById('scrollContainer').scrollLeft -= 20;
  };

}

// <-- Enable automatic scrolling feature -->
function autoScrollCompany(){
    const scrollContainer = document.getElementById('scrollContainer');
    let scrollAmount = 0;
    const scrollStep = 2;
    const scrollInterval = 50;
    
    function autoScroll() {
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      }
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
    
    setInterval(autoScroll, scrollInterval);
};

