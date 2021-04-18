---
layout: page
draft: true
title: Draft Posts
permalink: /drafts/
eleventyExcludeFromCollections: true
---

The following posts are still in Draft and may end up changing before the are published, or never get published at all.
<ul class="unstyled post-list">
{%- set posts = collections.posts.reverse() -%}
{%- for post in posts -%}
    {%- if post.data.draft -%}
   <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
    {%- endif -%}
{%- endfor -%}
</ul>
