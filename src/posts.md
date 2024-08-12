---
layout: layouts/base.html
title: All Posts
---
<ul class="posts">
{% assign top_posts = collections.post | reverse %}
  {%- for post in top_posts limit:3 -%}
<li><a href="collections/{{ post.data.permalink }}"> {{ post.data.title }} ☆ {{ post.data.date | readableDate }}</a></li>
  {% endfor %}
</ul>
