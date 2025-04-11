// This is a bundled version of your main.tsx file that doesn't use ES modules
// It will be loaded as a regular script, avoiding MIME type issues

(function() {
  console.log('Loading bundled version of main.tsx');
  
  // Check if React and ReactDOM are available
  if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
    console.error('React or ReactDOM not found. Loading fallback content.');
    document.getElementById('root').innerHTML = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 50px auto; text-align: center;">
        <h1>SIG Solutions</h1>
        <p>We're experiencing technical difficulties loading our website.</p>
        <p>Please try again later or contact us directly at <a href="mailto:franz@sigsolutions.co.za">franz@sigsolutions.co.za</a>.</p>
        <button onclick="window.location.reload()">Try Again</button>
      </div>
    `;
    return;
  }
  
  try {
    // Create a simple App component
    const App = function() {
      return React.createElement('div', { className: 'app-container' },
        React.createElement('h1', null, 'SIG Solutions'),
        React.createElement('p', null, 'Welcome to our website!'),
        React.createElement('p', null, 'We\'re currently experiencing some technical difficulties with our main site.'),
        React.createElement('p', null, 'Please contact us at ', 
          React.createElement('a', { href: 'mailto:franz@sigsolutions.co.za' }, 'franz@sigsolutions.co.za')
        )
      );
    };
    
    // Render the App component
    ReactDOM.createRoot(document.getElementById('root')).render(
      React.createElement(App, null)
    );
    
    console.log('Successfully rendered App component');
  } catch (error) {
    console.error('Error rendering App component:', error);
    document.getElementById('root').innerHTML = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 50px auto; text-align: center;">
        <h1>SIG Solutions</h1>
        <p>We're experiencing technical difficulties loading our website.</p>
        <p>Error: ${error.message}</p>
        <p>Please try again later or contact us directly at <a href="mailto:franz@sigsolutions.co.za">franz@sigsolutions.co.za</a>.</p>
        <button onclick="window.location.reload()">Try Again</button>
      </div>
    `;
  }
})();
