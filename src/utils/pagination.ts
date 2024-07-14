/**
 * Splits an array of items into smaller arrays, each containing a specified number of items.
 *
 * This function takes an array of items and divides it into smaller arrays (pages)
 * based on the specified number of items per page. It returns an array of pages.
 *
 * @function
 * @param {any[]} items - The array of items to be paginated.
 * @param {number} itemsPerPage - The number of items each page should contain.
 * @returns {any[][]} - An array of pages, where each page is an array of items.
 *
 * @example
 * // Example usage:
 * const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 * const pages = paginate(items, 3);
 * console.log(pages); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 */
export const paginate = (items: any[], itemsPerPage: number): any[][] => {
  const pages: any[][] = [];
  for (let i = 0; i < items?.length; i += itemsPerPage) {
    pages.push(items.slice(i, i + itemsPerPage));
  }
  return pages;
};
