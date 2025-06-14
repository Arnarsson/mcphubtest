/* Blog Routing
 * Attaches click handlers to .blog-card elements so they navigate to the blog article page based on data-blog attribute.
 */
(function () {
  const cards = document.querySelectorAll('.blog-card[data-blog]');
  cards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const slug = card.getAttribute('data-blog');
      if (slug) {
        window.location.href = `/blog/${slug}.html`;
      }
    });
  });
})(); 