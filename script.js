const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    // Clear previous content
    insert.innerHTML = '';

    const code = e.code || 'N/A';

    const htmlContent = `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-center">
            
            <!-- Key Div -->
            <div class="key-card bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-2xl fadeInUp">
              <h4 class="text-sm md:text-base text-gray-500 uppercase tracking-widest mb-2">Key</h4>
              <div class="text-3xl md:text-4xl lg:text-5xl font-bold">
                ${e.key === ' ' ? 'Space' : e.key}
              </div>
            </div>

            <!-- Code Div -->
            <div class="key-card bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-2xl fadeInUp" style="animation-delay: 0.2s;">
              <h4 class="text-sm md:text-base text-gray-500 uppercase tracking-widest mb-2">Code</h4>
              <div class="text-3xl md:text-4xl lg:text-5xl font-bold">
                ${code}
              </div>
            </div>
            
            <!-- KeyCode Div -->
              <div class="key-card bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-2xl fadeInUp" style="animation-delay: 0.1s;">
              <h4 class="text-sm md:text-base text-gray-500 uppercase tracking-widest mb-4">Code</h4>
              <div class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
                ${e.keyCode}
              </div>
            </div>


          </div>
        `;

    insert.innerHTML = htmlContent;
});