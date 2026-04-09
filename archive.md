---
layout: default
title: "Archive"
description: "Semua tulisan Kak Ojal — tata kelola, kekayaan, filosofi, dan kehidupan yang dijalani dengan sadar."
permalink: /archive/
---

<style>
/* ── Archive page overrides ────────────────────────────── */
/* Ensures archive items hidden by filter don't CLS */
.archive-list-item[data-hidden="true"] { display: none !important; }

/* Year group headers */
.archive-year-header {
  font-family: var(--font-display, -apple-system, sans-serif);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #1d1d1f;
  margin: 0;
  padding: 36px 0 14px;
  border-bottom: 2px solid #1d1d1f;
}

/* Horizontal article row: thumbnail 160px + text */
.archive-item {
  display: flex;
  gap: 20px;
  padding: 18px 0;
  border-bottom: 1px solid #d2d2d7;
  text-decoration: none;
  color: inherit;
  align-items: flex-start;
  transition: opacity 160ms ease;
}
.archive-item:hover { opacity: 0.7; }

.archive-item__thumb {
  width: 160px;
  height: 90px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
  background: #f5f5f7;
}
.archive-item__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.archive-item__body   { flex: 1; min-width: 0; }
.archive-item__cat {
  display: block;
  font-family: var(--font-text, -apple-system, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #0071e3;
  margin-bottom: 6px;
}
.archive-item__cat--governance { color: #0071e3; }
.archive-item__cat--wealth     { color: #1c7c3c; }
.archive-item__cat--mindset    { color: #7b3fc4; }
.archive-item__cat--bxc        { color: #bf4800; }

.archive-item__title {
  font-family: var(--font-display, -apple-system, sans-serif);
  font-size: 17px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.016em;
  color: #1d1d1f;
  display: block;
  margin-bottom: 6px;
}
.archive-item__excerpt {
  font-family: var(--font-text, -apple-system, sans-serif);
  font-size: 13px;
  color: #6e6e73;
  line-height: 1.5;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.archive-item__meta {
  font-size: 12px;
  color: #aeaeb2;
}

/* Responsive: stack on small screens */
@media (max-width: 600px) {
  .archive-item__thumb { width: 80px; height: 52px; border-radius: 6px; }
}
</style>

<div class="archive-page">

  <h1>Archive</h1>
  <p class="archive-subtitle">Semua tulisan — {{ site.posts.size | plus: 4 }} artikel</p>

  <!-- ── Category filter pills ── -->
  <div class="archive-filter-bar" id="filterBar">
    <button class="filter-btn is-active" data-cat="">Semua</button>
    <button class="filter-btn" data-cat="Governance">Governance</button>
    <button class="filter-btn" data-cat="Wealth">Wealth</button>
    <button class="filter-btn" data-cat="Mindset">Mindset</button>
    <button class="filter-btn" data-cat="BXC">BXC</button>
  </div>

  <!-- ── 2026 ── -->
  <div class="archive-year-group reveal-on-scroll" id="group-2026">
    <h2 class="archive-year-header">2026</h2>

    {% for post in site.posts %}
      {% assign post_year = post.date | date: "%Y" %}
      {% if post_year == "2026" %}
        {% if post.image %}
          {% assign _img = post.image %}
        {% elsif post.category == 'Governance' %}
          {% assign _img = '/assets/images/card-governance.jpg' %}
        {% elsif post.category == 'Wealth' %}
          {% assign _img = '/assets/images/card-wealth.jpg' %}
        {% elsif post.category == 'Mindset' %}
          {% assign _img = '/assets/images/hero-knowledge.jpg' %}
        {% elsif post.category == 'BXC' %}
          {% assign _img = '/assets/images/more-bxc.jpg' %}
        {% else %}
          {% assign _img = '/assets/images/more-ai.jpg' %}
        {% endif %}
        {% assign _cat_cls = post.category | downcase %}
        <a href="{{ post.url | relative_url }}"
           class="archive-item"
           role="listitem"
           data-category="{{ post.category }}">
          <div class="archive-item__thumb">
            <img src="{{ _img | relative_url }}"
                 alt="{{ post.title }}"
                 loading="lazy" decoding="async" width="160" height="90">
          </div>
          <div class="archive-item__body">
            {% if post.category %}
            <span class="archive-item__cat archive-item__cat--{{ _cat_cls }}">{{ post.category }}</span>
            {% endif %}
            <span class="archive-item__title">{{ post.title }}</span>
            {% if post.subtitle %}
            <p class="archive-item__excerpt">{{ post.subtitle }}</p>
            {% endif %}
            <div class="archive-item__meta">
              {% if post.reading_time %}{{ post.reading_time }} menit baca · {% endif %}
              <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
            </div>
          </div>
        </a>
      {% endif %}
    {% endfor %}

    <!-- Manual: dasar-hukum-mr (static HTML, Governance, 2026) -->
    <a href="/dasar-hukum-mr/" class="archive-item" data-category="Governance">
      <div class="archive-item__thumb">
        <img src="/assets/images/card-governance.jpg" alt="Dasar Hukum Manajemen Risiko" loading="lazy" decoding="async" width="160" height="90">
      </div>
      <div class="archive-item__body">
        <span class="archive-item__cat archive-item__cat--governance">Governance</span>
        <span class="archive-item__title">Dasar Hukum Manajemen Risiko di Indonesia</span>
        <p class="archive-item__excerpt">Hierarki regulasi dan kerangka hukum manajemen risiko untuk instansi pemerintah — panduan komprehensif untuk ASN dan pemerhati tata kelola.</p>
        <div class="archive-item__meta">12 menit baca · <time datetime="2026-04-09">Apr 9, 2026</time></div>
      </div>
    </a>

    <!-- Manual: dasar-hukum-uki (static HTML, Governance, 2026) -->
    <a href="/dasar-hukum-uki/" class="archive-item" data-category="Governance">
      <div class="archive-item__thumb">
        <img src="/assets/images/card-governance.jpg" alt="Dasar Hukum UKI" loading="lazy" decoding="async" width="160" height="90">
      </div>
      <div class="archive-item__body">
        <span class="archive-item__cat archive-item__cat--governance">Governance</span>
        <span class="archive-item__title">Daftar Lengkap Dasar Hukum Unit Kepatuhan Internal (UKI) di Indonesia</span>
        <p class="archive-item__excerpt">Hierarki regulasi dari UUD 1945 hingga KM 42/2019 — panduan komprehensif dasar hukum Unit Kepatuhan Internal untuk ASN dan pemerhati tata kelola pemerintahan.</p>
        <div class="archive-item__meta">15 menit baca · <time datetime="2026-04-09">Apr 9, 2026</time></div>
      </div>
    </a>

    <!-- Manual: dasar-hukum-spip (static HTML, Governance, 2026) -->
    <a href="/dasar-hukum-spip/" class="archive-item" data-category="Governance">
      <div class="archive-item__thumb">
        <img src="/assets/images/card-governance.jpg" alt="Dasar Hukum SPIP" loading="lazy" decoding="async" width="160" height="90">
      </div>
      <div class="archive-item__body">
        <span class="archive-item__cat archive-item__cat--governance">Governance</span>
        <span class="archive-item__title">Daftar Lengkap Dasar Hukum SPIP di Indonesia</span>
        <p class="archive-item__excerpt">Hierarki regulasi dari UUD 1945 hingga PM Kemenhub 25/2018 — panduan komprehensif untuk ASN dan pemerhati tata kelola pemerintahan.</p>
        <div class="archive-item__meta">12 menit baca · <time datetime="2026-04-09">Apr 9, 2026</time></div>
      </div>
    </a>
  </div>

  <!-- ── 2025 ── -->
  {% assign has_2025 = false %}
  {% for post in site.posts %}
    {% if post.date | date: "%Y" == "2025" %}
      {% assign has_2025 = true %}
      {% break %}
    {% endif %}
  {% endfor %}
  {% if has_2025 %}
  <div class="archive-year-group reveal-on-scroll" id="group-2025">
    <h2 class="archive-year-header">2025</h2>
    {% for post in site.posts %}
      {% assign post_year = post.date | date: "%Y" %}
      {% if post_year == "2025" %}
        {% if post.image %}
          {% assign _img = post.image %}
        {% elsif post.category == 'Governance' %}
          {% assign _img = '/assets/images/card-governance.jpg' %}
        {% elsif post.category == 'Wealth' %}
          {% assign _img = '/assets/images/card-wealth.jpg' %}
        {% elsif post.category == 'Mindset' %}
          {% assign _img = '/assets/images/hero-knowledge.jpg' %}
        {% elsif post.category == 'BXC' %}
          {% assign _img = '/assets/images/more-bxc.jpg' %}
        {% else %}
          {% assign _img = '/assets/images/more-konsistensi.jpg' %}
        {% endif %}
        {% assign _cat_cls = post.category | downcase %}
        <a href="{{ post.url | relative_url }}"
           class="archive-item"
           data-category="{{ post.category }}">
          <div class="archive-item__thumb">
            <img src="{{ _img | relative_url }}"
                 alt="{{ post.title }}"
                 loading="lazy" decoding="async" width="160" height="90">
          </div>
          <div class="archive-item__body">
            {% if post.category %}
            <span class="archive-item__cat archive-item__cat--{{ _cat_cls }}">{{ post.category }}</span>
            {% endif %}
            <span class="archive-item__title">{{ post.title }}</span>
            {% if post.subtitle %}
            <p class="archive-item__excerpt">{{ post.subtitle }}</p>
            {% endif %}
            <div class="archive-item__meta">
              {% if post.reading_time %}{{ post.reading_time }} menit baca · {% endif %}
              <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
            </div>
          </div>
        </a>
      {% endif %}
    {% endfor %}

    <!-- Manual: dasar-hukum-sakip (Dec 2024, shown in 2024 group below) -->
  </div>
  {% endif %}

  <!-- ── 2024 ── -->
  <div class="archive-year-group reveal-on-scroll" id="group-2024">
    <h2 class="archive-year-header">2024</h2>

    <!-- Manual: dasar-hukum-sakip -->
    <a href="/dasar-hukum-sakip/" class="archive-item" data-category="Governance">
      <div class="archive-item__thumb">
        <img src="/assets/images/card-governance.jpg" alt="Dasar Hukum SAKIP" loading="lazy" decoding="async" width="160" height="90">
      </div>
      <div class="archive-item__body">
        <span class="archive-item__cat archive-item__cat--governance">Governance</span>
        <span class="archive-item__title">Daftar Lengkap Dasar Hukum SAKIP di Indonesia</span>
        <p class="archive-item__excerpt">Hierarki regulasi dari UUD 1945 hingga Permen PANRB 88/2021 — panduan komprehensif untuk ASN dan pemerhati tata kelola akuntabilitas kinerja.</p>
        <div class="archive-item__meta">12 menit baca · <time datetime="2024-12-01">Dec 1, 2024</time></div>
      </div>
    </a>
  </div>

</div><!-- /.archive-page -->

<script>
(function () {
  'use strict';
  var params    = new URLSearchParams(window.location.search);
  var activeCat = params.get('category') || '';
  var filterBar = document.getElementById('filterBar');
  var allItems  = document.querySelectorAll('.archive-item');

  // ── Filter utils ──────────────────────────────────────
  function filterItems(cat) {
    allItems.forEach(function (item) {
      var itemCat = item.getAttribute('data-category') || '';
      var show    = !cat || itemCat === cat;
      item.setAttribute('data-hidden', show ? 'false' : 'true');
      item.style.display = show ? '' : 'none';
    });
    // Hide year-group headers if they contain zero visible items
    document.querySelectorAll('.archive-year-group').forEach(function (group) {
      var visible = group.querySelectorAll('.archive-item:not([data-hidden="true"])').length;
      group.style.display = visible ? '' : 'none';
    });
  }

  // ── Sync buttons ─────────────────────────────────────
  if (filterBar) {
    var btns = filterBar.querySelectorAll('.filter-btn');
    btns.forEach(function (btn) {
      if (btn.getAttribute('data-cat') === activeCat) {
        btns.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
      }
      btn.addEventListener('click', function () {
        var selected = btn.getAttribute('data-cat');
        var url = new URL(window.location.href);
        selected ? url.searchParams.set('category', selected)
                 : url.searchParams.delete('category');
        window.history.replaceState({}, '', url);
        activeCat = selected;
        btns.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        filterItems(selected);
      });
    });
  }

  // Initial filter on load
  if (activeCat) filterItems(activeCat);

  // ── Reveal on scroll ─────────────────────────────────
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
    document.querySelectorAll('.reveal-on-scroll').forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal-on-scroll').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }
})();
</script>
