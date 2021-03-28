---
layout: page
title: Sitemap
subtitle: If you can't find it here, it doesn't exist!
permalink: /sitemap/
---

<ul class="sitemap">
    {%- for page in collections.all -%}
    <li>
        <a href="{{ page.url }}">{{ page.url }}</a>
    </li>
    {%- endfor -%}
</ul>
