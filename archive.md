---
layout: default
title: "Archive"
description: "Semua tulisan Kak Ojal."
permalink: /archive/
---

<div class="page-container">
  <p class="section-label">Archive</p>
  <div class="post-list">
    {% for post in site.posts %}
    <div class="post-entry">
      <h2 class="post-entry__title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h2>
      <p class="post-entry__meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
      </p>
    </div>
    {% endfor %}
  </div>
</div>
