---
layout: default
title: "Archive"
description: "All writing by Kak Ojal — governance, wealth, philosophy, and the examined life."
permalink: /archive/
---

<div class="archive-page">
  <h1>Archive</h1>

  <div class="article-list" role="list">
    <!-- Jekyll posts -->
    {% for post in site.posts %}
    <a href="{{ post.url | relative_url }}" class="article-list-item" role="listitem">
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

    <!-- Manual entry: dasar-hukum-sakip (not a Jekyll post) -->
    <a href="/dasar-hukum-sakip/" class="article-list-item" role="listitem">
      <span class="article-list-item__category">Governance</span>
      <h3 class="article-list-item__title">Daftar Lengkap Dasar Hukum SAKIP di Indonesia</h3>
      <p class="article-list-item__excerpt">Hierarki regulasi dari UUD 1945 hingga Permen PANRB 88/2021 — panduan komprehensif untuk ASN.</p>
      <div class="article-list-item__meta">
        12 min read · <time datetime="2024-12-01">Dec 1, 2024</time>
      </div>
    </a>
  </div>
</div>
