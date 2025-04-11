// This script helps fix MIME type issues with JavaScript modules
console.log('MIME fix script loaded');

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, applying MIME type fixes');

  // Find all script tags with type="module"
  const moduleScripts = document.querySelectorAll('script[type="module"]');
  console.log('Found', moduleScripts.length, 'module scripts');

  // Set the correct MIME type
  moduleScripts.forEach(script => {
    console.log('Processing script:', script.src);
    script.setAttribute('data-type', 'application/javascript');

    // Create a new script element with the correct MIME type
    const newScript = document.createElement('script');
    newScript.type = 'module';
    newScript.src = script.src;
    newScript.setAttribute('data-type', 'application/javascript');
    newScript.crossOrigin = script.crossOrigin;

    // Add any other attributes from the original script
    Array.from(script.attributes).forEach(attr => {
      if (attr.name !== 'src' && attr.name !== 'type') {
        newScript.setAttribute(attr.name, attr.value);
      }
    });

    // Replace the old script with the new one
    if (script.parentNode) {
      console.log('Replacing script:', script.src);
      script.parentNode.replaceChild(newScript, script);
    }
  });

  // Find all modulepreload links
  const modulePreloads = document.querySelectorAll('link[rel="modulepreload"]');
  console.log('Found', modulePreloads.length, 'modulepreload links');

  // Set the correct MIME type
  modulePreloads.forEach(link => {
    console.log('Processing link:', link.href);
    link.setAttribute('data-type', 'application/javascript');

    // Create a new link element with the correct MIME type
    const newLink = document.createElement('link');
    newLink.rel = 'modulepreload';
    newLink.href = link.href;
    newLink.setAttribute('data-type', 'application/javascript');
    newLink.crossOrigin = link.crossOrigin;

    // Add any other attributes from the original link
    Array.from(link.attributes).forEach(attr => {
      if (attr.name !== 'href' && attr.name !== 'rel') {
        newLink.setAttribute(attr.name, attr.value);
      }
    });

    // Replace the old link with the new one
    if (link.parentNode) {
      console.log('Replacing link:', link.href);
      link.parentNode.replaceChild(newLink, link);
    }
  });

  console.log('MIME type fixes applied');
});
