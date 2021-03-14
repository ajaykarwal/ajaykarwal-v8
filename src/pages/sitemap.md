---
layout: page
title: Sitemap
subtitle: If you can't find it here, it doesn't exist!
permalink: /sitemap/
eleventyExcludeFromCollections: true
eleventyNavigation:
    key: Sitemap
---

<ul class="sitemap">
    {%- for post in collections.all -%}
    <li>
        <a href="{{ post.url }}">{{ post.url }}</a>
    </li>
    {%- endfor -%}
</ul>
