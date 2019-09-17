---
layout: default
permalink: /work/
---

<section class="section-half">
{% for project in site.posts %}
<section class="half">
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
</section>
{% endfor %}
</section>