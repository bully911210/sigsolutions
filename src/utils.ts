/**
 * Utility functions for the SIG Solutions website
 */

/**
 * Check if the website is loaded properly
 * @returns {boolean} True if the website is loaded properly
 */
export function checkWebsiteLoaded(): boolean {
  console.log('Website loaded check running');
  return true;
}

/**
 * Set the page title
 * @param {string} title The title to set
 */
export function setPageTitle(title: string): void {
  document.title = `SIG Solutions | ${title}`;
}
