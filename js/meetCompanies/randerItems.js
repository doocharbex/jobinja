export function renderItems(page, itemsPerPage, items) {
    const container = document.getElementById('scrollContainerMeetCompanies');
    container.innerHTML = ''; // برای اطمینان از اینکه ظرف خالی است
  
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToRender = items.slice(start, end);
  
    itemsToRender.forEach(company => {
      const card = `
        <div class="inline-block bg-white rounded-lg shadow-md overflow-hidden mx-2">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <img src="${company.imageCompeny}" alt="لوگو" class="w-12 h-12 rounded-full">
              <div class="ml-4">
                <h3 class="text-lg font-semibold">${company.name}</h3>
                <p class="text-gray-600">${company.industry}</p>
              </div>
            </div>
            <img src="${company.image}" alt="تصویر" class="w-full mb-4">
            <p class="text-gray-700">${company.description}</p>
            <div class="mt-4">
              <div class="flex items-center justify-between text-gray-600 mb-2">
                <span>محبوبیت میان کارجویان</span>
                <span class="bg-green-100 text-green-600 rounded-full px-3 py-1 text-sm">${company.popularity}</span>
              </div>
              <div class="flex items-center justify-between text-gray-600 mb-2">
                <span>تعداد و تنوع فرصت‌های شغلی</span>
                <span class="bg-green-100 text-green-600 rounded-full px-3 py-1 text-sm">${company.jobDiversity}</span>
              </div>
              <div class="flex items-center justify-between text-gray-600">
                <span>بررسی رزومه‌های دریافتی</span>
                <span class="bg-green-100 text-green-600 rounded-full px-3 py-1 text-sm">${company.resumeReview}</span>
              </div>
            </div>
            <div class="mt-4 flex justify-between items-center">
              <span class="text-blue-500 cursor-pointer">صفحه شرکت</span>
              <span class="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm">${company.activeJobs} شغل فعال</span>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += card;
    });
  }
  