const themeToggleButton = document.getElementById('themeToggle')
const body = document.body
const nav = document.querySelector('nav')
const footer = document.querySelector('footer')

themeToggleButton.addEventListener('click', () => {
  // Toggle light-mode on body
  body.classList.toggle('light-mode')

  // Based on light-mode, change nav and footer
  if (body.classList.contains('light-mode')) {
    // Light mode styles for nav and footer
    nav.classList.remove('bg-white', 'text-black')
    nav.classList.add('bg-black', 'text-white')

    footer.classList.remove('bg-white', 'text-gray-700')
    footer.classList.add('bg-black', 'text-white')

    // Change body to light mode background and text color
    body.classList.remove('bg-gray-900', 'text-white')
    body.classList.add('bg-white', 'text-black')

    // Change only the h1 inside the nav and footer to text-yellow-200
    const navHeading = nav.querySelector('h1')
    const footerHeading = footer.querySelector('h1')

    if (navHeading) {
      navHeading.classList.remove('text-yellow-700')
      navHeading.classList.add('text-yellow-200')
    }

    if (footerHeading) {
      footerHeading.classList.remove('text-yellow-700')
      footerHeading.classList.add('text-yellow-200')
    }
  } else {
    // Dark mode styles for nav and footer
    nav.classList.remove('bg-black', 'text-white')
    nav.classList.add('bg-white', 'text-black')

    footer.classList.remove('bg-black', 'text-white')
    footer.classList.add('bg-white', 'text-gray-700')

    // Change body to dark mode background and text color
    body.classList.remove('bg-white', 'text-black')
    body.classList.add('bg-gray-900', 'text-white')

    // Change only the h1 inside the nav and footer to text-yellow-700
    const navHeading = nav.querySelector('h1')
    const footerHeading = footer.querySelector('h1')

    if (navHeading) {
      navHeading.classList.remove('text-yellow-200')
      navHeading.classList.add('text-yellow-700')
    }

    if (footerHeading) {
      footerHeading.classList.remove('text-yellow-200')
      footerHeading.classList.add('text-yellow-700')
    }
  }
})
