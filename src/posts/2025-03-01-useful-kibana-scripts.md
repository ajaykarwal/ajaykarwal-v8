---
layout: post
title: Useful Kibana Scripts
permalink: 'blog/{{ title | slug }}/index.html'
date: '2025-03-01'
categories:
  - code
---

This is a collection of useful Kibana scripts which I often refer back to.

These are mostly just relevant to me and my day job, but may be useful to others too.

> **Some of these scripts are destructive to Elastic indexes, so use with caution**


```shell
# List all indexes in alphabetical order
GET _cat/indices?pretty&s=i

# Search an index
GET dev_collections/_search

# Delete an index
DELETE dev_collections_*

# Get mappings for an index
GET dev_collections/_mapping

# Get result by ID
GET dev_idx_*_main/_search
{
  "query": {
    "match": {
      "_id": "someId"
    }
  }
}


# Delete an entire index by query
POST dev_user_activity/_delete_by_query
{
  "query": {
    "match_all": {}
  }
}

# Delete results from an index by query
POST dev_collections/_delete_by_query
{
    "query": {
        "match": {
            "someId": "someValue"
        }
    }
}

# Update licence expiry via Painless script
POST dev_global_settings/_update_by_query
{
  "script": { "source": "ctx._source.licenseExpirationDate = '2026-12-31T00:00:00Z';" }
}


```