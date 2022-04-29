export function findProducts(categories, searchedSlug) {
    const products = categories.filter((testedcategory) => testedcategory.category_id === searchedSlug );
    return products;
  }
  