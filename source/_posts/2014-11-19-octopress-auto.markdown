---
title: "Octopress + Travis + Prose + SGit + Jota"
layout: post
published: false
date: 2014-11-18-19-30-26 +0530
comments: true
category: "software"
tags: ["octopress", "travis", "blogging"]
---

I had a problem. I wanted to blog more I mostly wrote in my personal laptop though usually wouldn't have the time to finish it. And so, there goes an incomplete blog post which I never finished for weeks, all because it was in my laptop. From months I wanted to move my blogging online and I've finally done that. 

<!--- more --->

I've setup [Travis-CI][1] for my website now. If you don't know, travis is a continuous integration service for building and testing projects on Github. We can use it to autobuild octopress projects and deploy to github pages. 

To integrate travis to your octopress website, visit [Yasuoza Diary's post][2]. The post gives most of the details on what to do. Now any commit to the source branch should trigger a travis build. But it's going to do this for both the source branch and the pages branch (because there was a commit there too since a deployment was done). Just change the setting in travis to "build only if `.travis.yml` is present". This will now skip trying to build from master. 

Now that you're auto deploying, you can use [Prose][3] to create/edit posts online. Prose is brilliant even in identifying metadata of blog posts and makes your work easier. To create blog posts through Prose, refer [this gist to create Octopress posts manually][4].

To blog on my mobile, I use SGit, a git client for managing git related actions and Jota+ editor for editing. You can use a text editor of your choice, but those who give you shortcuts to insert brackets, quotes, etc are much helpful since you'll be writing in markdown where you'll be using those quite a lot. Also, Jota has pautosave on exit, which makes your changes persistent. Some editors discard content if you haven't explicitly saved. You can always use Prose on mobile too, no doubt. But you'll need a persistent Internet connection. 

PS. I wrote this post in my mobile! 

[1]: https://travis-ci.org
[2]: http://blog.yasuoza.com/2014/01/13/octopress-plus-github-pages-plus-travis/
[3]: http://prose.io
[4]: https://gist.github.com/sathyamvellal/2e73e8c70735d0c9051d