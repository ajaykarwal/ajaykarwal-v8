---
layout: page
title: Blog
subtitle: Blog sub
permalink: /blog/
eleventyNavigation:
    key: Blog
    order: 0
---

<ol>
  {%- for tag, posts in collections | dictsort %}
  <li>{{tag}} ({{ posts | length }})</li>
  {%- endfor %}
</ol>


<ul class="unstyled">
    {%- for post in collections.posts -%}
    <li>
        {% include 'post-listing.njk' %}
    </li>
    {%- endfor -%}
</ul>
