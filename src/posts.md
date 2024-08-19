---
layout: layouts/base.html
title: All Posts
permalink: "/posts.html"
---
<ul class="post-list">
{% assign top_posts = collections.post | reverse %}
  {%- for post in top_posts  -%}
<li><a href="{{ post.data.permalink }}"> {{ post.data.title }} ☆ {{ post.data.date | readableDate }}</a></li>
  {% endfor %}
</ul>
