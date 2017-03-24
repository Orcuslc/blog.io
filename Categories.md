---
layout: post
title: Categories
description: Articles by Categories
image: assets/images/pic11.jpg
nav-menu: true
---

{% for category in site.categories %}
<h2><li>{{ category | first }}({{ category | last | size }})</li></h2>
<ul class="arc-list">
    {% for post in category.last %}
        <li>{{ post.date | date:"%d/%m/%Y"}}, <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
{% endfor %}