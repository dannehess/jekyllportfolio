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

<section class="section-half">
{% for project in site.posts limit: modu4%}
<section class="half">
    <img src="{{ project.image }}" class="project-thumb" alt="{{ project.title }}">
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
</section>
</section>
{% endfor %}