function toggleMenu() {
    const hamburger = document.querySelector('.hamburger-icon');
    const menu = document.querySelector('.menu-links');
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
}
window.addEventListener('scroll', function() {
    const desktopNav = document.querySelector('#desktop-nav');
    if (window.scrollY > 50) {
        desktopNav.classList.add('scrolled');
    } else {
        desktopNav.classList.remove('scrolled');
    }
});
const blogPosts = [
    {
      title: "Emerging Data Science Trends in 2025",
      date: "2025-05-03",
      excerpt: "How AutoML, quantum computing, and ethics are shaping data science.",
      image: "images/trends-2025-thumb.jpg",
      slug: "emerging-trends-2025.html"
    },
    {
      title: "The Rise of TinyML in Edge Computing",
      date: "2025-04-28",
      excerpt: "Bringing real-time ML to low-power devices.",
      image: "images/tinyml-thumb.jpg",
      slug: "tinyml-edge.html"
    }
  ];
  
  // Sort posts by date descending (newest first)
  blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  const container = document.getElementById("blog-posts");
  
  blogPosts.forEach(post => {
    const card = document.createElement("a");
    card.className = "blog-card";
    card.href = post.slug;
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title} Thumbnail" />
      <div class="blog-card-content">
        <h2>${post.title}</h2>
        <p class="blog-date">${new Date(post.date).toDateString()}</p>
        <p>${post.excerpt}</p>
      </div>
    `
  });
    container.appendChild(card);

const toggleBtn = document.getElementById('theme-toggle');
  const darkModeClass = 'dark';

  // Apply saved preference on page load
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add(darkModeClass);
  }

toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle(darkModeClass);
// Save preference
if (document.documentElement.classList.contains(darkModeClass)) {
      localStorage.setItem('theme', 'dark');
    } 
else {
      localStorage.setItem('theme', 'light');
    }
})