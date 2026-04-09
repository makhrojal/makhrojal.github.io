---
layout: default
title: "Archive"
description: "All writing by Kak Ojal — governance, wealth, philosophy, and the examined life."
permalink: /archive/
---

<style>
.archive-page h1 {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--color-text);
  margin-bottom: 32px;
}
.archive-filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}
.filter-btn {
  font-family: var(--font-text);
  font-size: 13px;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 999px;
  border: 1.5px solid var(--color-divider, #d2d2d7);
  background: transparent;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 160ms ease;
  text-decoration: none;
  display: inline-block;
}
.filter-btn:hover {
  border-color: var(--color-text);
  color: var(--color-text);
}
.filter-btn.is-active {
  background: var(--color-text);
  border-color: var(--color-text);
  color: var(--color-surface, #fff);
}
.article-list-item[data-hidden="true"] {
  display: none;
}
</style>

<div class="archive-page">
  <h1>Archive</h1>

  <!-- Category filter bar -->
  <div class="archive-filter-bar" id="filterBar">
    <button class="filter-btn is-active" data-cat="">Semua</button>
    <button class="filter-btn" data-cat="Governance">Governance</button>
    <button class="filter-btn" data-cat="Wealth">Wealth</button>
    <button class="filter-btn" data-cat="Mindset">Mindset</button>
    <button class="filter-btn" data-cat="BXC">BXC</button>
  </div>

  <div class="article-list" role="list" id="articleList">
    <!-- Jekyll posts -->
    {% for post in site.posts %}
    <a href="{{ post.url | relative_url }}" class="article-list-item" role="listitem" data-category="{{ post.category }}">
      {% if post.category %}
      <span class="article-list-item__category">{{ post.category }}</span>
      {% endif %}
      <h3 class="article-list-item__title">{{ post.title }}</h3>
      {% if post.subtitle %}
      <p class="article-list-item__excerpt">{{ post.subtitle }}</p>
      {% endif %}
      <div class="article-list-item__meta">
        {% if post.reading_time %}{{ post.reading_time }} min read · {% endif %}
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
      </div>
    </a>
    {% endfor %}

    <!-- Manual entry: dasar-hukum-mr (not a Jekyll post) -->
    <a href="/dasar-hukum-mr/" class="article-list-item" role="listitem" data-category="Governance">
      <span class="article-list-item__category">Governance</span>
      <h3 class="article-list-item__title">Dasar Hukum Manajemen Risiko di Indonesia</h3>
      <p class="article-list-item__excerpt">Hierarki regulasi dan kerangka hukum manajemen risiko untuk instansi pemerintah — panduan komprehensif untuk ASN dan pemerhati tata kelola.</p>
      <div class="article-list-item__meta">
        12 min read · <time datetime="2026-04-09">Apr 9, 2026</time>
      </div>
    </a>

    <!-- Manual entry: dasar-hukum-uki (not a Jekyll post) -->
    <a href="/dasar-hukum-uki/" class="article-list-item" role="listitem" data-category="Governance">
      <span class="article-list-item__category">Governance</span>
      <h3 class="article-list-item__title">Daftar Lengkap Dasar Hukum Unit Kepatuhan Internal (UKI) di Indonesia</h3>
      <p class="article-list-item__excerpt">Hierarki regulasi dari UUD 1945 hingga KM 42/2019 — panduan komprehensif dasar hukum Unit Kepatuhan Internal untuk ASN dan pemerhati tata kelola pemerintahan.</p>
      <div class="article-list-item__meta">
        15 min read · <time datetime="2026-04-09">Apr 9, 2026</time>
      </div>
    </a>

    <!-- Manual entry: dasar-hukum-spip (not a Jekyll post) -->
    <a href="/dasar-hukum-spip/" class="article-list-item" role="listitem" data-category="Governance">
      <span class="article-list-item__category">Governance</span>
      <h3 class="article-list-item__title">Daftar Lengkap Dasar Hukum SPIP di Indonesia</h3>
      <p class="article-list-item__excerpt">Hierarki regulasi dari UUD 1945 hingga PM Kemenhub 25/2018 — panduan komprehensif untuk ASN dan pemerhati tata kelola pemerintahan.</p>
      <div class="article-list-item__meta">
        12 min read · <time datetime="2026-04-09">Apr 9, 2026</time>
      </div>
    </a>

    <!-- Manual entry: dasar-hukum-sakip (not a Jekyll post) -->
    <a href="/dasar-hukum-sakip/" class="article-list-item" role="listitem" data-category="Governance">
      <span class="article-list-item__category">Governance</span>
      <h3 class="article-list-item__title">Daftar Lengkap Dasar Hukum SAKIP di Indonesia</h3>
      <p class="article-list-item__excerpt">Hierarki regulasi dari UUD 1945 hingga Permen PANRB 88/2021 — panduan komprehensif untuk ASN.</p>
      <div class="article-list-item__meta">
        12 min read · <time datetime="2024-12-01">Dec 1, 2024</time>
      </div>
    </a>
  </div>
</div>

<script>
(function() {
  // Read ?category= from URL
  var params = new URLSearchParams(window.location.search);
  var activeCat = params.get('category') || '';

  var filterBar = document.getElementById('filterBar');
  var articleList = document.getElementById('articleList');

  // Sync filter buttons
  if (filterBar) {
    var btns = filterBar.querySelectorAll('.filter-btn');
    btns.forEach(function(btn) {
      var cat = btn.getAttribute('data-cat');
      if (cat === activeCat) {
        btns.forEach(function(b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
      }
      btn.addEventListener('click', function() {
        var selected = btn.getAttribute('data-cat');
        // Update URL without reload
        var url = new URL(window.location.href);
        if (selected) {
          url.searchParams.set('category', selected);
        } else {
          url.searchParams.delete('category');
        }
        window.history.replaceState({}, '', url);
        activeCat = selected;
        // Update active button
        btns.forEach(function(b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        // Filter items
        filterItems(selected);
      });
    });
  }

  function filterItems(cat) {
    if (!articleList) return;
    var items = articleList.querySelectorAll('.article-list-item');
    items.forEach(function(item) {
      var itemCat = item.getAttribute('data-category') || item.querySelector('.article-list-item__category');
      if (itemCat && typeof itemCat !== 'string') itemCat = itemCat.textContent.trim();
      if (!cat || itemCat === cat) {
        item.setAttribute('data-hidden', 'false');
        item.style.display = '';
      } else {
        item.setAttribute('data-hidden', 'true');
        item.style.display = 'none';
      }
    });
  }

  // Initial filter on page load
  if (activeCat) filterItems(activeCat);
})();
</script>
