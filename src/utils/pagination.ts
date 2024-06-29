export const paginate = (items: any[], itemsPerPage: number) => {
  const pages = [];
  for (let i = 0; i < items?.length; i += itemsPerPage) {
    pages.push(items.slice(i, i + itemsPerPage));
  }
  return pages;
};
