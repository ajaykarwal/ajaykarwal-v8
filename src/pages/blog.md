---
layout: page
title: Blog
permalink: /blog/
eleventyNavigation:
    key: Blog
    order: 0
---

<div class="tags">
  {%- for tag, posts in collections | dictsort %}
  <a href="/tags/{{tag}}">{{tag}} <span>[{{ posts | length }}]</span></a>
  {%- endfor %}
</div>

<ul class="unstyled">
    {%- for post in collections.posts.reverse() -%}
    <li>{% include 'post-listing.njk' %}</li>
    {%- endfor -%}
</ul>
