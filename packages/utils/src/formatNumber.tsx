export const formatNumber = (price: string | number): string => {
  const priceStr = price.toString();
  const [whole, decimal] = priceStr.split(".");

  let reversedWhole = whole.split("").reverse().join("");

  let formattedWhole = reversedWhole.substring(0, 3);

  let remainingDigits: any = reversedWhole.substring(3);
  if (remainingDigits.length > 0) {
    formattedWhole += "," + remainingDigits.match(/.{1,2}/g).join(",");
  }

  formattedWhole = formattedWhole.split("").reverse().join("");

  return decimal ? `${formattedWhole}.${decimal}` : formattedWhole;
};
