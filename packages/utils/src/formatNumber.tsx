export const formatNumber = (price: string | number) => {
  const priceStr = price.toString();
  const [whole, decimal] = priceStr.split(".");

  const reversedWhole: any = whole.split("").reverse().join("");

  const grouped = reversedWhole.match(/.{1,2}/g).join(",");

  const formattedWhole = grouped.split("").reverse().join("");

  return decimal ? `${formattedWhole}.${decimal}` : formattedWhole;
};
