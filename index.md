---
layout: home
title: "Muhammad Makhrojal — Writing"
description: "Writing about governance, education, and the examined life."
---

<section class="hero container">
  <span class="hero__eyebrow fade-in">Writing by Muhammad Makhrojal</span>
  <h1 class="hero__title fade-in fade-in--delay-1">
    Ideas worth<br>thinking about.
  </h1>
  <p class="hero__subtitle fade-in fade-in--delay-2">
    Notes on governance, education, entrepreneurship, and life.
    No noise. Just thinking.
  </p>
  <a href="#writing" class="hero__cta fade-in fade-in--delay-3">Read the archive &rarr;</a>
</section>

<section class="articles" id="writing">
  <div class="container">
    <p class="section-title">All writing</p>
    <ul class="article-list">
      {% for post in site.posts %}
      <li class="article-item" data-animate>
        <a href="{{ post.url | relative_url }}">
          <div>
            <p class="article-title">{{ post.title }}</p>
            {% if post.excerpt %}
            <p class="article-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
            {% endif %}
          </div>
          <span class="article-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        </a>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="about-section" id="about">
  <div class="container">
    <p class="about-intro">Civil servant. Educator. Entrepreneur.</p>
    <p class="about-bio">
      Saya menulis tentang pemerintahan, pendidikan, dan hidup yang dijalani dengan kesadaran penuh.
      Bukan untuk audiens — untuk berpikir lebih jernih.
    </p>
    <a href="/about/" class="hero__cta" style="margin-top: 2rem; display: inline-flex;">More about me &rarr;</a>
  </div>
</section>
