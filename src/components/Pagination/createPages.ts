export const createPages = (totalPages: number, currentPage: number) => {
  const maxVisiblePages = 5; // Максимальное количество видимых номеров страниц
  const halfVisiblePages = Math.floor(maxVisiblePages / 2);
  let startPage, endPage;

  if (totalPages <= maxVisiblePages) {
    // Все страницы видны, если общее количество страниц меньше или равно максимальному количеству видимых страниц
    startPage = 1;
    endPage = totalPages;
  } else if (currentPage <= halfVisiblePages) {
    // Начало списка видимых страниц
    startPage = 1;
    endPage = maxVisiblePages;
  } else if (currentPage + halfVisiblePages >= totalPages) {
    // Конец списка видимых страниц
    startPage = totalPages - maxVisiblePages + 1;
    endPage = totalPages;
  } else {
    // Текущая страница находится где-то в середине списка видимых страниц
    startPage = currentPage - halfVisiblePages;
    endPage = currentPage + halfVisiblePages;
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return pages;
};
