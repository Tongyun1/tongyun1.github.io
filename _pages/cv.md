---
layout: archive
title: "Curriculum Vitae"
title_en: "Curriculum Vitae"
title_zh: "个人简历"
description: "Curriculum vitae of Mingming Zhang, a master's student and researcher at Wuhan University."
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<div class="cv-intro">
  <div>
    <div class="cv-kicker lang-en">Research profile</div>
    <div class="cv-kicker lang-zh" style="display:none;">研究简历</div>
    <h2><span class="lang-en">Mingming Zhang</span><span class="lang-zh" style="display:none;">张明鸣</span></h2>
    <p class="lang-en">Master's student at Wuhan University, working on reinforcement learning, sequential decision making, generative recommendation, and multimodal large language models.</p>
    <p class="lang-zh" style="display:none;">武汉大学硕士研究生，研究方向包括强化学习、序列决策、生成式推荐与多模态大语言模型。</p>
  </div>
  <a class="profile-button" href="mailto:{{ site.author.email }}"><span class="lang-en">Email</span><span class="lang-zh" style="display:none;">邮箱</span></a>
</div>

<div class="cv-stack">
  <section class="cv-block">
    <h2><span class="lang-en">Education</span><span class="lang-zh" style="display:none;">教育经历</span></h2>
    <div class="cv-entry">
      <div class="cv-entry__date lang-en">Sep. 2024 – Jun. 2027</div>
      <div class="cv-entry__date lang-zh" style="display:none;">2024.09 – 2027.06</div>
      <div class="cv-entry__content">
        <strong class="lang-en">Wuhan University · Master's student</strong>
        <strong class="lang-zh" style="display:none;">武汉大学 · 硕士研究生</strong>
        <p class="lang-en">Ziqiang Honors Program · Expected graduation in June 2027</p>
        <p class="lang-zh" style="display:none;">自强实验班 · 预计 2027 年 6 月毕业</p>
      </div>
    </div>
    <div class="cv-entry">
      <div class="cv-entry__date lang-en">Sep. 2020 – Jun. 2024</div>
      <div class="cv-entry__date lang-zh" style="display:none;">2020.09 – 2024.06</div>
      <div class="cv-entry__content">
        <strong class="lang-en">Wuhan University · Bachelor's degree</strong>
        <strong class="lang-zh" style="display:none;">武汉大学 · 本科</strong>
        <p class="lang-en">Ziqiang Honors Program</p>
        <p class="lang-zh" style="display:none;">自强实验班</p>
      </div>
    </div>
  </section>

  <section class="cv-block">
    <h2><span class="lang-en">Experience</span><span class="lang-zh" style="display:none;">实习经历</span></h2>
    <div class="cv-entry">
      <div class="cv-entry__date lang-en">Mar. 2025 – Present</div>
      <div class="cv-entry__date lang-zh" style="display:none;">2025.03 – 至今</div>
      <div class="cv-entry__content">
        <strong class="lang-en">Alibaba Taobao &amp; Tmall Group · Algorithm intern</strong>
        <strong class="lang-zh" style="display:none;">阿里巴巴淘天集团 · 算法实习生</strong>
        <p class="lang-en">Generative decision models, reinforcement learning for auto-bidding, action exploration, and constrained sequential decision making.</p>
        <p class="lang-zh" style="display:none;">生成式决策模型、自动出价强化学习、动作探索与约束序列决策。</p>
      </div>
    </div>
  </section>

  <section class="cv-block">
    <h2><span class="lang-en">Selected publications</span><span class="lang-zh" style="display:none;">代表性论文</span></h2>
    {% for publication in site.data.publications.accepted %}
      <div class="cv-entry">
        <div class="cv-entry__date">{{ publication.venue }}</div>
        <div class="cv-entry__content">
          <strong>{{ publication.title }}</strong>
          <p><span class="lang-en">{{ publication.role_en }}</span><span class="lang-zh" style="display:none;">{{ publication.role_zh }}</span></p>
        </div>
      </div>
    {% endfor %}
  </section>

  <section class="cv-block">
    <h2><span class="lang-en">Projects &amp; honors</span><span class="lang-zh" style="display:none;">项目与荣誉</span></h2>
    {% for project in site.data.projects %}
      <div class="cv-entry">
        <div class="cv-entry__date"><span class="lang-en">{{ project.metric | default: project.eyebrow_en }}</span><span class="lang-zh" style="display:none;">{{ project.metric_zh | default: project.eyebrow_zh }}</span></div>
        <div class="cv-entry__content">
          <strong><span class="lang-en">{{ project.name }}</span><span class="lang-zh" style="display:none;">{{ project.name_zh | default: project.name }}</span></strong>
          <p class="lang-en">{{ project.description_en }}</p>
          <p class="lang-zh" style="display:none;">{{ project.description_zh }}</p>
        </div>
      </div>
    {% endfor %}
  </section>
</div>
