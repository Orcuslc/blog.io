---
layout: post
title: Tags
description: Articles by Tags
image: assets/images/pic11.jpg
nav-menu: true
---
var dataStr = '{ {% for cat in site.categories %}{% if cat[0] != site.categories.first[0] %},{% endif %}"{{ cat[0] }}":[{% for post in cat[1] %}{% if post != cat[1].first %},{% endif %}{"url":"{{post.url}}", "title":"{{post.title}}", "date":"{{post.date | date:"%d/%m/%Y"}}"}{% endfor %}]{% endfor %} }',
    data = JSON.parse(dataStr),
    curTag = $.query.get("cat"),
    archieves = data[curTag];

{% for category in site.categories %}
<h2><li><a href = "/category.html?cat={{ category | first }}/" title="View All Posts">{{ category | first }}({{ category | last | size }})</a></li></h2>
<ul class="arc-list">
    {% for post in category.last %}
        <li>{{ post.date | date:"%d/%m/%Y"}}, <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
{% endfor %}