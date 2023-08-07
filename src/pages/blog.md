---
layout: page
title: Blog
permalink: /blog/
eleventyNavigation:
    key: Blog
    order: 0
---

<div class="blog two-col">
    <div>
        <div class="tags tags--buttons">
            <a href="/categories/popular">Popular</a>
            {%- for cat, val in collections.categoryList | dictsort -%}
                {%- if cat !== "popular" and cat !== "misc" -%}
                    <a href="/categories/{{cat}}">{{cat | capitalize }}</a>
                {%- endif -%}
            {%- endfor -%}
            <a href="/categories/misc">Misc</a>
        </div>
        <ul class="unstyled post-list">
            {%- set currentYear = "" -%}
            {%- set posts = collections.posts | reverse -%}
            {%- for post in posts -%}
                {%- if not post.data.draft -%}
                    {%- set postYear = post.date.getFullYear() -%}
                    {%- if currentYear != postYear -%}
                        {%- set currentYear = postYear -%}
                        <li class="post-list__year">
                            <h2>{{ postYear }}</h2>
                        </li>
                    {%- endif -%}
                    <li>{% include 'post-listing.njk' %}</li>
                {%- endif -%}
            {%- endfor -%}
        </ul>
    </div>
    <div>
        <h3>Tags</h3>
        <div class="tags tags--links">
            {%- for tag, val in collections.tagList | dictsort -%}
                {%- if tag !== "posts" and tag !== "newsletter" -%}
                    <a href="/tags/{{tag}}">{{tag}}</a>
                {%- endif -%}
            {%- endfor -%}
        </div>
    </div>
</div>
