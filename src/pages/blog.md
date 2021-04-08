---
layout: page
title: Blog
permalink: /blog/
eleventyNavigation:
    key: Blog
    order: 0
---


<div class="tags tags--buttons">
  {%- for tag in collections.tagList -%}
    <a href="/tags/{{tag}}">{{tag}}</a>
  {%- endfor -%}
</div>

<ul class="unstyled post-list">
{%- set currentYear = "" -%}
{%- for post in collections.posts.reverse() -%}
    {%- set postYear = post.date.getFullYear() -%}
    {%- if currentYear != postYear -%}
    {%- set currentYear = postYear -%}
    <li class="post-list__year"><h2>{{ postYear }}</h2></li>
    {%- endif -%}
   <li>{% include 'post-listing.njk' %}</li>
{%- endfor -%}
</ul>
<!-- 
<ul class="unstyled">
    {%- for post in collections.posts.reverse() -%}
    <li>{% include 'post-listing.njk' %}</li>
    {%- endfor -%}
</ul> -->
