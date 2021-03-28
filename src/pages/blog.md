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

<ul class="unstyled">
    {%- for post in collections.posts.reverse() -%}
    <li>{% include 'post-listing.njk' %}</li>
    {%- endfor -%}
</ul>
