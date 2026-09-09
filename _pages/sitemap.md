---
layout: archive
title: "Sitemap"
title_en: "Sitemap"
title_zh: "网站地图"
description: "Main pages on Mingming Zhang's academic homepage."
permalink: /sitemap/
author_profile: true
---

<div class="project-grid">
  <article class="project-card" style="min-height:0;">
    <div class="project-card__topline">00</div>
    <h2 class="project-card__title"><a href="/"><span class="lang-en">Home</span><span class="lang-zh" style="display:none;">首页</span><span aria-hidden="true"> →</span></a></h2>
  </article>
  {% for link in site.data.navigation.main %}
    <article class="project-card" style="min-height:0;">
      <div class="project-card__topline">{{ forloop.index | prepend: '0' }}</div>
      <h2 class="project-card__title">
        <a href="{{ link.url }}">
          <span class="lang-en">{{ link.title_en }}</span>
          <span class="lang-zh" style="display:none;">{{ link.title_zh }}</span>
          <span aria-hidden="true"> →</span>
        </a>
      </h2>
    </article>
  {% endfor %}
</div>
