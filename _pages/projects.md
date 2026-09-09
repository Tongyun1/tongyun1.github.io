---
layout: archive
title: "Projects"
title_en: "Projects"
title_zh: "项目"
description: "Open-source and applied machine-learning projects by Mingming Zhang."
permalink: /projects/
author_profile: true
---

<p class="about-copy lang-en">Open-source learning resources and applied systems that turn research ideas into useful tools.</p>
<p class="about-copy lang-zh" style="display:none;">将研究想法转化为实用工具的开源学习资源与应用系统。</p>

<div class="project-grid" style="margin-top:2rem;">
  {% for project in site.data.projects %}
    {% include project-card.html project=project %}
  {% endfor %}
</div>
