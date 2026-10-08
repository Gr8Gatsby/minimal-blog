---
title: "Someone Sent Me an .html File"
description: "More of my co-workers are sending me HTML files, and I have no good way to give feedback on them. So I built something."
date: 2026-10-08
layout: layouts/blogpost-modern.njk
headerImage: assets/images/banner.jpg
headerImagePosition: "center"
headerImageHeight: "240px"
---

# Someone Sent Me an .html File

Are you noticing more HTML files being sent to you in Slack or Teams? This is definitely happening across my teams, and I love seeing the rich presentations, documents, and data visualizations. But something was missing!

It makes sense that they keep showing up. HTML is a format everyone understands, and there are libraries for almost anything you want in a document: charts, data visualizations, slides. Models have been trained on the web, so there is a ton of HTML in them, and asking an AI tool for a report or a deck often gives you one. Making a good-looking document has never been easier.

So the file arrives, and it is great. Then I want to give feedback.

<div class="image-row">
  <div class="image-container" style="max-width: 100%;">
    <img src="{{ baseUrl }}assets/images/pipeup-0-5/slack.svg" alt="A Slack channel where Sam shares q3-launch-plan.html, Ada asks if the team can hit this date, Sam asks which date, and Lee says the one in the middle of the page" class="preview-image">
    <div class="image-caption">A made up example, but it will look familiar</div>
  </div>
</div>

This is where Google Docs is amazing, and I immediately missed it. Giving feedback and having a conversation around the content is so critical to improving things. Instead I had a beautiful page that I could not comment on, so I wrote "the one in the middle" in a thread and hoped it was the spot they meant.

<div class="image-row">
  <div class="image-container" style="max-width: 100%;">
    <img src="{{ baseUrl }}assets/images/pipeup-0-5/margin.svg" alt="A document with the date July 15, 2026 highlighted and a comment beside it asking if the team can hit this date" class="preview-image">
    <div class="image-caption">What I wanted: the comment sits on the thing it is about</div>
  </div>
</div>

I wanted that for any HTML file. And since these files often come from an AI, I wanted the feedback to flow back to one easily too.

So I had an idea. A JavaScript library that is friendly for AI to use, that adds comments to any HTML document. I called it Pipeup. This blog has it on every page now, so you can select some text here and try it.

If you want the details, they are on the [Pipeup site](https://pipeup-ai.github.io/pipeup/).
