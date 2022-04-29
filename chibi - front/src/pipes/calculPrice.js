export const calculPrice = (htPrice, taxe) => {
    const ttcPrice = Number(htPrice) * Number(taxe) ;
    return ttcPrice.toFixed(2)
  }