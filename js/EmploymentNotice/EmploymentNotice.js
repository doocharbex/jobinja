// EmploymentNotice.js
import { renderItems } from './renderItems.js';

const itemsPerPage = 3;
let currentPage = 1;
let items = [];

export async function renderEmploymentNotice() {
  try {
    // <-- Enter the correct path to the JSON file -->
    const response = await fetch('js/json/dataEmploymentNotice.json'); 

    // <-- Get the JSON data as a JavaScript object -->
    items = await response.json(); 

    // <-- Display the items with the current page and the number of items per page -->
    renderItems(currentPage, itemsPerPage, items);

    // <-- Get Element Button Next And Prev -->
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // <-- Checking the status of previous and next buttons -->
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          renderItems(currentPage, itemsPerPage, items);
        }
      });

      nextBtn.addEventListener('click', () => {
        if (currentPage * itemsPerPage < items.length) {
          currentPage++;
          renderItems(currentPage, itemsPerPage, items);
        }
      });
    } else {
      console.error('دکمه‌های قبلی و بعدی پیدا نشد.');
    }
  } catch (error) {
    console.error('خطا در بارگذاری داده‌ها:', error);
  }
}
