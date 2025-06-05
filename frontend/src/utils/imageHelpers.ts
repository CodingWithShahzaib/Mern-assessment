/**
 * Helper functions for handling images in the application
 */

/**
 * Gets the appropriate image path for a post, prioritizing local assets
 * @param postId - The ID of the post
 * @param imagePath - The original image path from the post data (if any)
 * @returns The resolved image path to use
 */
export const getPostImagePath = (postId: number, imagePath: string | null): string => {
  // First priority: use local JPG image based on post ID
  const localJpgPath = `/assets/images/post-${postId}.jpg`;
  
  // If no image path is provided in the post data
  if (!imagePath) {
    return localJpgPath; // Use local JPG by default
  }
  
  // If the image path is from the API but points to our assets directory
  if (imagePath.includes('/assets/images/')) {
    return imagePath;
  }
  
  // For all other cases, use our local JPG image
  return localJpgPath;
};

/**
 * Handles image load errors by falling back to SVG if JPG doesn't load
 * @param event - The error event
 * @param postId - The ID of the post
 */
export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>, postId: number): void => {
  const target = event.target as HTMLImageElement;
  // If JPG fails, try SVG as fallback
  if (target.src.includes('.jpg')) {
    const svgPath = `/assets/images/post-${postId}.svg`;
    console.log(`Image load failed, using fallback: ${svgPath}`);
    target.src = svgPath;
  }
}; 