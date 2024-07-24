import { renderItems } from './randerItems.js';

const itemsPerPage = 3;
let currentPage = 1;
let items = [];

document.addEventListener('DOMContentLoaded', (event) => {
  meetCompaniesSection();
});

export function meetCompaniesSection() {
  buttonSliderMeetCompanies();
  autoScrollMeetCompanies();
  renderMeetCompanies();
}

// <-- Send Request Json File  -->
async function renderMeetCompanies() {
  try {
    const response = await fetch('js/json/datameetCompanies.json');
    items = await response.json();

    // <-- Send Parameters To Render Items  -->
    renderItems(currentPage, itemsPerPage, items);
  } catch (error) {
    console.error('خطا در بارگذاری داده‌ها:', error);
  }
}

// <-- Control Button Lef and Right   -->
function buttonSliderMeetCompanies() {
  const scrollRightCompanies = document.getElementById('scrollRightCompanies');

  scrollRight.onclick = function () {
    scrollContainerMeetCompanies.scrollLeft += 20;
  };

  scrollLeft.onclick = function () {
    scrollContainerMeetCompanies.scrollLeft -= 20;
  };
}

function autoScrollMeetCompanies() {
  const scrollContainerMeetCompanies = document.getElementById('scrollContainerMeetCompanies');
  let scrollAmount = 0;
  const scrollStep = 2;
  const scrollInterval = 50;

  function runAutoScroll() {
    scrollAmount += scrollStep;
    if (scrollAmount >= scrollContainerMeetCompanies.scrollWidth - scrollContainerMeetCompanies.clientWidth) {
      scrollAmount = 0;
    }
    scrollContainerMeetCompanies.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }

  setInterval(runAutoScroll, scrollInterval);
}
