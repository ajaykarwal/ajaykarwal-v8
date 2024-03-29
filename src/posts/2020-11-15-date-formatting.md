---
layout: post
title: 'Date formatting'
permalink: 'blog/{{ title | slug }}/index.html'
date: '2020-11-15'
categories:
    - code
tags:
    - misc
---

The table below shows all the available date formatting options in _most_ programming languages.

Example's of how to use these formats include:

```csharp
@DateTime.Now.ToString("F")

@DateTime.Now.ToString("hh:mm:ss.fff")
```

| Specifier | Description                                          | Output                        |
| --------- | ---------------------------------------------------- | ----------------------------- |
| d         | Short Date                                           | 08/04/2007                    |
| D         | Long Date                                            | 08 April 2007                 |
| t         | Short Time                                           | 21:08                         |
| T         | Long Time                                            | 21:08:59                      |
| f         | Full date and time                                   | 08 April 2007 21:08           |
| F         | Full date and time (long)                            | 08 April 2007 21:08:59        |
| g         | Default date and time                                | 08/04/2007 21:08              |
| G         | Default date and time (long)                         | 08/04/2007 21:08:59           |
| M         | Day / Month                                          | 08 April                      |
| r         | RFC1123 date                                         | Sun, 08 Apr 2007 21:08:59 GMT |
| s         | Sortable date/time                                   | 2007-04-08T21:08:59           |
| u         | Universal time, local timezone                       | 2007-04-08 21:08:59Z          |
| Y         | Month / Year                                         | April 2007                    |
| dd        | Day                                                  | 08                            |
| ddd       | Short Day Name                                       | Sun                           |
| dddd      | Full Day Name                                        | Sunday                        |
| hh        | 2 digit hour                                         | 09                            |
| HH        | 2 digit hour (24 hour)                               | 21                            |
| mm        | 2 digit minute                                       | 08                            |
| MM        | Month                                                | 04                            |
| MMM       | Short Month name                                     | Apr                           |
| MMMM      | Month name                                           | April                         |
| ss        | seconds                                              | 59                            |
| fff       | milliseconds                                         | 120                           |
| FFF       | milliseconds without trailing zero                   | 12                            |
| tt        | AM/PM                                                | PM                            |
| yy        | 2 digit year                                         | 07                            |
| yyyy      | 4 digit year                                         | 2007                          |
| :         | Hours, minutes, seconds separator, e.g. {0:hh:mm:ss} | 09:08:59                      |
| /         | Year, month , day separator, e.g. {0:dd/MM/yyyy}     | 08/04/2007                    |
| .         | milliseconds separator                               |                               |

These specifiers are the same for most programming languages, making this a valuable resource for everyone.
