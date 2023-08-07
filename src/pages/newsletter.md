---
layout: page
title: From The Desk of Ajay Karwal
permalink: /newsletter/
eleventyNavigation:
    key: Newsletter
    order: 1
---

Sign up to **From the Desk of Ajay Karwal** &mdash; my free weekly newsletter where I share thoughts on web development, design, productivity and being a good human &mdash; directly to your inbox.

<iframe src="https://ajaykarwal.substack.com/embed" width="100%" height="320" style="border:0; margin: 2rem 0" frameborder="0" scrolling="no"></iframe>

## Past issues

<ul class="unstyled">
	{%- for post in collections.newsletter | reverse -%}
	<li>{% include 'post-listing.njk' %}</li>
	{%- endfor -%}
</ul>
