---
layout: post
title: Tags
description: Articles by Tags
image: assets/images/pic11.jpg
nav-menu: true
---

{% for category in site.categories %}
<h2><li><a href = "/categories{{ category | first }}/" title="View All Posts">{{ category | first }}{{ category | last | size }}</a></h2>
<ul class="arc-list">
    {% for post in category.last %}
        <li>{{ post.date | date:"%d/%m/%Y"}}<a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
{% endfor %}