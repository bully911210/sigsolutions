// This script checks if the main site is working and redirects to the non-module version if it's not
(function() {
  console.log('Site loader script running');

  // Function to check if a script can be loaded
  function checkScriptLoading(url, timeout) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      let timer;

      script.type = 'module';
      script.src = url;

      script.onload = () => {
        clearTimeout(timer);
        resolve(true);
      };

      script.onerror = () => {
        clearTimeout(timer);
        resolve(false);
      };

      timer = setTimeout(() => {
        resolve(false);
      }, timeout);

      document.head.appendChild(script);

      // Remove the script after checking
      setTimeout(() => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      }, timeout + 100);
    });
  }

  // Check if we're already on the non-module version
  if (window.location.pathname.includes('index-nomodule.html')) {
    console.log('Already on non-module version');
    return;
  }

  // Check if ES modules are working
  async function checkAndRedirect() {
    try {
      console.log('Checking if ES modules are working...');

      // Try to load a test module
      const moduleWorks = await checkScriptLoading('./assets/vendor-C3d4I53_.mjs', 5000);

      if (!moduleWorks) {
        console.log('ES modules not working, redirecting to non-module version');
        window.location.href = './index-nomodule.html';
      } else {
        console.log('ES modules working correctly');
      }
    } catch (error) {
      console.error('Error checking modules:', error);
      window.location.href = './index-nomodule.html';
    }
  }

  // Run the check
  checkAndRedirect();
})();
