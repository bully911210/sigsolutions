// This script is a more aggressive approach to fixing MIME type issues
console.log('MIME type fix script loaded');

// Function to create a script element with the correct MIME type
function createScriptWithCorrectMimeType(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'application/javascript';
    script.src = src;
    script.onload = () => {
      console.log(`Successfully loaded script: ${src}`);
      resolve();
    };
    script.onerror = (error) => {
      console.error(`Failed to load script: ${src}`, error);
      reject(error);
    };
    document.head.appendChild(script);
  });
}

// Function to load JavaScript modules with the correct MIME type
async function loadModulesWithCorrectMimeType() {
  try {
    // Load the vendor script first
    await createScriptWithCorrectMimeType('./assets/vendor-C3d4I53_.mjs');

    // Then load the UI script
    await createScriptWithCorrectMimeType('./assets/ui-CxNYyYHo.mjs');

    // Finally load the main script
    await createScriptWithCorrectMimeType('./assets/index-DBJEwBw0.mjs');

    console.log('All scripts loaded successfully');
  } catch (error) {
    console.error('Failed to load scripts:', error);

    // If loading fails, redirect to the fallback page
    window.location.href = './fallback.html';
  }
}

// Wait for the DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadModulesWithCorrectMimeType);
} else {
  loadModulesWithCorrectMimeType();
}
