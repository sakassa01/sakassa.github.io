/**
 * Formats a price in MAD currency format (Moroccan Dirham)
 * @param price - The price to format
 * @returns Formatted price string
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('fr-MA', {
    style: 'currency',
    currency: 'MAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

/**
 * Creates a WhatsApp message link with product info
 * @param productName - The name of the product
 * @returns WhatsApp URL with pre-filled message
 */
export const createWhatsAppLink = (productName: string): string => {
  const encodedText = encodeURIComponent(
    `Hi, I'm interested in the ${productName} on computerzone.me`
  );
  return `https://wa.me/212682721588?text=${encodedText}`;
};

/**
 * Truncates text to a specified length and adds ellipsis
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};