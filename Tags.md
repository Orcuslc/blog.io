---
layout: post
title: Tags
description: Articles by Tags
image: assets/images/pic11.jpg
nav-menu: true
---

{% for category in site.categories %}
<li><a href = "/categories{{ category | first }}/" title="View All Posts"><h2>{{ category | first }}{{ category | last | size }}</h2></a></li>
<ul class="arc-list">
    {% for post in category.last %}
        <li>{{ post.date | date:"%d/%m/%Y"}}<a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
{% endfor %}