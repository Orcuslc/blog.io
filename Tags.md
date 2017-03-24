---
layout: post
title: Tags
description: Articles by Tags
image: assets/images/pic11.jpg
nav-menu: true
---

{% for tag in site.tages %}
<h2><li>{{ tag[0] }}</li></h2>
<ul class="arc-list">
    {% for post in tag[1] %}
        <li>{{ post.date | date:"%d/%m/%Y"}}, <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
{% endfor %}