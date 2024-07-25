
export async function fetchAndRenderItems(jsonPath, containerId) {
    try {
      const response = await fetch(jsonPath);
      const items = await response.json();
      renderItems(1, items.length, items, containerId);
    } catch (error) {
      console.error('خطا در بارگذاری داده‌ها:', error);
    }
  }
  
  export function renderItems(page, itemsPerPage, items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; 

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToRender = items.slice(start, end);
  
    itemsToRender.forEach(item => {
      const card = `
        <div class="inline-block w-full">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2">${item.title}</h3>
              <p class="text-gray-700 mb-4">${item.description}</p>
              <a href="${item.link}" class="text-blue-600 hover:underline">مشاهده بیشتر</a>
            </div>
          </div>
        </div>
      `;
  
      container.innerHTML += card;
    });
  
    if (items.length > itemsPerPage) {
      container.classList.add('overflow-x-scroll');
      container.style.scrollBehavior = 'smooth';
    }
  }
  