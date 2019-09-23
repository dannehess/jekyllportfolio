---
layout: default
title: "Daniel Hessling"
permalink: /work/
---

<section>
<div class="big-spacer"></div>
<h2><span>WORK</span></h2>
<div class="mini-spacer"></div>
<p>
Here you can find projects I have done myself or been a part of. Both private and at my school (Nackademin).
</p>
<div class="mini-spacer"></div>
<div class="mini-spacer"></div>
<hr class="wavy-hr">
</section>

<section class="project-half">
{% for projects in site.posts %}
  {% assign mod3 = forloop.index | modulo: 2 %}
  <section class="project">
  <img src="{{ projects.image }}" class="project-thumb" alt="{{ project.title }}">
  <div class="project-thumb-overlay"><h1>{{ projects.title }}</h1></div>
  <div class="mini-spacer"></div>
  <div class="mini-spacer"></div>
  <div class="project-info-trunc">
  <div class="trunc-desc"><p>{{ projects.description | truncate: 20}}</p></div>
  <div class="trunch-link"><a href="{{projects.url}}" class="project-link project-link-mini">Read more</a></div>
  </div>
  </section>
  {% if mod3 == 0 %}</section><section class="project-half">{% endif %}
  {% if mod3 == 2 or mod3 == 2 %}<section class="project">{% endif %}
{% endfor %}
</section>
<div class="mini-spacer"></div>