// This script helps fix MIME type issues with JavaScript modules
document.addEventListener('DOMContentLoaded', function() {
  // Find all script tags with type="module"
  const moduleScripts = document.querySelectorAll('script[type="module"]');
  
  // Set the correct MIME type
  moduleScripts.forEach(script => {
    script.setAttribute('data-type', 'application/javascript');
    
    // Create a new script element with the correct MIME type
    const newScript = document.createElement('script');
    newScript.type = 'module';
    newScript.src = script.src;
    newScript.setAttribute('data-type', 'application/javascript');
    newScript.crossOrigin = script.crossOrigin;
    
    // Replace the old script with the new one
    if (script.parentNode) {
      script.parentNode.replaceChild(newScript, script);
    }
  });
  
  // Find all modulepreload links
  const modulePreloads = document.querySelectorAll('link[rel="modulepreload"]');
  
  // Set the correct MIME type
  modulePreloads.forEach(link => {
    link.setAttribute('data-type', 'application/javascript');
    
    // Create a new link element with the correct MIME type
    const newLink = document.createElement('link');
    newLink.rel = 'modulepreload';
    newLink.href = link.href;
    newLink.setAttribute('data-type', 'application/javascript');
    newLink.crossOrigin = link.crossOrigin;
    
    // Replace the old link with the new one
    if (link.parentNode) {
      link.parentNode.replaceChild(newLink, link);
    }
  });
});
