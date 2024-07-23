// Advertising display operations and before and after viewing
export function renderItems(page, itemsPerPage, items) {
    // Get Element
    const itemContainer = document.getElementById('item-list');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Check Existence Element
    if (!itemContainer || !prevBtn || !nextBtn) {
      console.error('یک یا چند عنصر مورد نظر پیدا نشد.');
      return;
    }
  
    itemContainer.innerHTML = '';
    // Manage Page Item 
    const start = (page - 1) * itemsPerPage;
    const end = Math.min(start + itemsPerPage, items.length);

    // Operetion Create Item ! 
    for (let i = start; i < end; i++) {
      const item = document.createElement('div');
      item.className = '';
      item.innerHTML = `
        <div class="flex items-center border-t pt-4" dir="rtl">
          <div class="w-1/6 flex justify-center">
            <img src="${items[i].imgSrc}" alt="Company Logo">
          </div>
          <div class="w-5/6">
            <h4 class="text-lg font-semibold">${items[i].title}</h4>
            <p class="text-gray-600">${items[i].company} | ${items[i].location}</p>
            <p class="text-gray-600">قرارداد: ${items[i].contract}</p>
          </div>
        </div>
        <button class="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">ارسال رزومه</button>
      `;
      itemContainer.appendChild(item);
    }
  
    prevBtn.disabled = page === 1;
    nextBtn.disabled = end === items.length;
  }
  