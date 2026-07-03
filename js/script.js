// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form: no backend yet, so open a pre-filled email instead of failing silently.
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'website visitor'}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:abdulazeezmusa000@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // Blog list: load posts from data/posts.json if present on this page.
  const postList = document.querySelector('#post-list');
  if (postList) {
    fetch('data/posts.json')
      .then((res) => res.json())
      .then((data) => {
        const posts = data.posts || [];
        if (posts.length === 0) {
          postList.innerHTML = '<div class="empty-note">No posts published yet. New articles will appear here.</div>';
          return;
        }
        postList.innerHTML = posts
          .slice()
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((p) => {
            const thumb = p.image
              ? `<img src="${p.image}" alt="">`
              : `<span>No image</span>`;
            return `
          <a class="post-item-link" href="post.html?title=${encodeURIComponent(p.title)}">
            <article class="post-item">
              <span class="date">${p.date}</span>
              <div class="post-thumb">${thumb}</div>
              <div>
                <h3>${p.title}</h3>
                <p>${p.excerpt}</p>
              </div>
            </article>
          </a>`;
          })
          .join('');
      })
      .catch(() => {
        postList.innerHTML = '<div class="empty-note">Posts will appear here once the site is deployed online (this loader needs a live server, not a local file preview).</div>';
      });
  }

  // Single article page: read ?title= from the URL and render the matching post.
  const articleBody = document.querySelector('#article-body');
  if (articleBody) {
    const params = new URLSearchParams(window.location.search);
    const wantedTitle = params.get('title');
    fetch('data/posts.json')
      .then((res) => res.json())
      .then((data) => {
        const posts = data.posts || [];
        const post = posts.find((p) => p.title === wantedTitle);
        if (!post) {
          document.querySelector('#article-title').textContent = 'Article not found';
          articleBody.innerHTML = '<p>This post may have been moved or removed.</p>';
          return;
        }
        document.title = post.title + ' — Abdulazeez Musa';
        document.querySelector('#article-title').textContent = post.title;
        document.querySelector('#article-date').textContent = post.date;
        const mediaEl = document.querySelector('#article-media');
        mediaEl.innerHTML = post.image
          ? `<div class="article-media"><img src="${post.image}" alt=""></div>`
          : `<div class="article-media"><span>No cover image added yet</span></div>`;
        const bodyText = post.body && post.body.trim() ? post.body : post.excerpt;
        articleBody.innerHTML = bodyText
          .split(/\n\s*\n/)
          .map((para) => `<p>${para.trim()}</p>`)
          .join('');
      })
      .catch(() => {
        articleBody.innerHTML = '<div class="empty-note">Article will load once the site is deployed online (this needs a live server, not a local file preview).</div>';
      });
  }
});
