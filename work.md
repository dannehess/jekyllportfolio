---
layout: default
title: "Daniel Hessling"
permalink: /work/
---

<section>
<h2><span>WORK</span></h2>
<p>
Here you can find projects I have done myself or been a part of. Both private and at my school (Nackademin).
</p>
</section>

<section class="project-half">
{% for projects in site.posts %}
  {% assign mod3 = forloop.index | modulo: 2 %}
  <section class="project">
  <img src="{{ projects.image }}" class="project-thumb" alt="{{ project.title }}">
  <h1>{{ projects.title }}</h1>
  <div class="project-info-trunc">
  <div class="trunc-desc"><p>{{ projects.description | truncate: 20}}</p></div>
  <div class="trunch-link"><a href="{{projects.url}}" class="project-link">Read more</a></div>
  </div>
  </section>
  {% if mod3 == 0 %}</section><section class="project-half">{% endif %}
  {% if mod3 == 2 or mod3 == 2 %}<section class="project">{% endif %}
{% endfor %}
</section>