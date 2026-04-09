---
layout: default
title: "Archive"
description: "Semua tulisan Kak Ojal."
permalink: /archive/
---

<div class="page-wrap">

  <h1 class="page-title fade-up">Archive</h1>
  <p class="page-subtitle fade-up">
    {{ site.posts.size | plus: 4 }} tulisan — tata kelola, kekayaan, mindset, dan kehidupan yang dijalani dengan sadar.
  </p>

  <!-- Filter pills -->
  <div class="filter-bar fade-up" id="filterBar">
    <button class="filter-btn is-active" data-cat="">Semua</button>
    <button class="filter-btn" data-cat="Governance">Governance</button>
    <button class="filter-btn" data-cat="Wealth">Wealth</button>
    <button class="filter-btn" data-cat="Mindset">Mindset</button>
    <button class="filter-btn" data-cat="BXC">BXC</button>
  </div>

  <!-- 2026 -->
  <div class="archive-group fade-up" id="group-2026">
    <p class="archive-year">2026</p>
    <div class="post-list">
      {% for post in site.posts %}
        {% if post.date | date: "%Y" == "2026" %}
          {%- assign cat_cls = post.category | downcase | default: 'default' -%}
          <a href="{{ post.url | relative_url }}"
             class="post-list-item"
             data-category="{{ post.category }}">
            <div class="post-list-item__meta">
              <time class="post-list-item__date" datetime="{{ post.date | date_to_xmlschema }}">
                {{ post.date | date: "%b %-d" }}
              </time>
              {% if post.category %}
              <span class="post-list-item__cat post-list-item__cat--{{ cat_cls }}">
                {{ post.category }}
              </span>
              {% endif %}
            </div>
            <h2 class="post-list-item__title">{{ post.title }}</h2>
            {% if post.subtitle %}
            <p class="post-list-item__excerpt">{{ post.subtitle }}</p>
            {% endif %}
          </a>
        {% endif %}
      {% endfor %}

      <!-- Manual: Governance static pages (2026) -->
      <a href="/dasar-hukum-mr/" class="post-list-item" data-category="Governance">
        <div class="post-list-item__meta">
          <time class="post-list-item__date" datetime="2026-04-09">Apr 9</time>
          <span class="post-list-item__cat post-list-item__cat--governance">Governance</span>
        </div>
        <h2 class="post-list-item__title">Dasar Hukum Manajemen Risiko di Indonesia</h2>
        <p class="post-list-item__excerpt">Hierarki regulasi dan kerangka hukum manajemen risiko untuk instansi pemerintah.</p>
      </a>
      <a href="/dasar-hukum-uki/" class="post-list-item" data-category="Governance">
        <div class="post-list-item__meta">
          <time class="post-list-item__date" datetime="2026-04-09">Apr 9</time>
          <span class="post-list-item__cat post-list-item__cat--governance">Governance</span>
        </div>
        <h2 class="post-list-item__title">Dasar Hukum Unit Kepatuhan Internal (UKI)</h2>
        <p class="post-list-item__excerpt">Hierarki regulasi dari UUD 1945 hingga KM 42/2019.</p>
      </a>
      <a href="/dasar-hukum-spip/" class="post-list-item" data-category="Governance">
        <div class="post-list-item__meta">
          <time class="post-list-item__date" datetime="2026-04-09">Apr 9</time>
          <span class="post-list-item__cat post-list-item__cat--governance">Governance</span>
        </div>
        <h2 class="post-list-item__title">Dasar Hukum SPIP di Indonesia</h2>
        <p class="post-list-item__excerpt">Hierarki regulasi dari UUD 1945 hingga PM Kemenhub 25/2018.</p>
      </a>
    </div>
  </div>

  <!-- 2025 -->
  {%- assign posts_2025 = site.posts | where_exp: "p", "p.date contains '2025'" -%}
  {%- if posts_2025.size > 0 -%}
  <div class="archive-group fade-up" id="group-2025">
    <p class="archive-year">2025</p>
    <div class="post-list">
      {% for post in site.posts %}
        {% if post.date | date: "%Y" == "2025" %}
          {%- assign cat_cls = post.category | downcase | default: 'default' -%}
          <a href="{{ post.url | relative_url }}"
             class="post-list-item"
             data-category="{{ post.category }}">
            <div class="post-list-item__meta">
              <time class="post-list-item__date" datetime="{{ post.date | date_to_xmlschema }}">
                {{ post.date | date: "%b %-d" }}
              </time>
              {% if post.category %}
              <span class="post-list-item__cat post-list-item__cat--{{ cat_cls }}">
                {{ post.category }}
              </span>
              {% endif %}
            </div>
            <h2 class="post-list-item__title">{{ post.title }}</h2>
            {% if post.subtitle %}
            <p class="post-list-item__excerpt">{{ post.subtitle }}</p>
            {% endif %}
          </a>
        {% endif %}
      {% endfor %}
    </div>
  </div>
  {%- endif -%}

  <!-- 2024 -->
  <div class="archive-group fade-up" id="group-2024">
    <p class="archive-year">2024</p>
    <div class="post-list">
      <a href="/dasar-hukum-sakip/" class="post-list-item" data-category="Governance">
        <div class="post-list-item__meta">
          <time class="post-list-item__date" datetime="2024-12-01">Dec 1</time>
          <span class="post-list-item__cat post-list-item__cat--governance">Governance</span>
        </div>
        <h2 class="post-list-item__title">Dasar Hukum SAKIP di Indonesia</h2>
        <p class="post-list-item__excerpt">Hierarki regulasi dari UUD 1945 hingga Permen PANRB 88/2021.</p>
      </a>
    </div>
  </div>

</div><!-- /.page-wrap -->

<script>
(function () {
  'use strict';
  var params    = new URLSearchParams(window.location.search);
  var activeCat = params.get('category') || '';
  var filterBar = document.getElementById('filterBar');
  var allItems  = document.querySelectorAll('.post-list-item');

  function filterItems(cat) {
    allItems.forEach(function (item) {
      var match = !cat || (item.getAttribute('data-category') || '') === cat;
      item.setAttribute('data-hidden', match ? 'false' : 'true');
      item.style.display = match ? '' : 'none';
    });
    // Hide year groups with no visible items
    document.querySelectorAll('.archive-group').forEach(function (group) {
      var visible = group.querySelectorAll('.post-list-item:not([style*="none"])').length;
      group.setAttribute('data-hidden', visible ? 'false' : 'true');
      group.style.display = visible ? '' : 'none';
    });
  }

  if (filterBar) {
    var btns = filterBar.querySelectorAll('.filter-btn');
    // Set initial active from URL
    if (activeCat) {
      btns.forEach(function (b) {
        b.classList.toggle('is-active', b.getAttribute('data-cat') === activeCat);
      });
      filterItems(activeCat);
    }
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cat = btn.getAttribute('data-cat');
        var url = new URL(window.location.href);
        cat ? url.searchParams.set('category', cat)
            : url.searchParams.delete('category');
        window.history.replaceState({}, '', url);
        btns.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        filterItems(cat);
      });
    });
  }
})();
</script>
