---
title: "End-to-End with AI: Building Farkle Score Sheet"
description: "A year and a half ago I wrote a post about AI playing every role on the team for one person. This time it actually shipped (well, almost). Farkle Score Sheet is a clean, ad-free scorekeeper for game night, and the hard part was not the code."
date: 2026-05-17
layout: layouts/blogpost-modern.njk
headerImage: assets/images/end-to-end-with-ai-farkle/entry-setup.png
headerImagePosition: "bottom"
headerImageHeight: "240px"
---

# From Thought Experiment to App Store

A year and a half ago, the idea that AI could absorb most of the specialist roles on a small project still felt like a thought experiment. That was the premise of an earlier post on [reclaiming passion projects through AI]({{ baseUrl }}posts/reclaiming-my-passion-projects-through-ai/). AI as developer, designer, architect, and rubber duck. The example then was a small travel itinerary tool built for trips with my wife.

That post was a prediction more than a story. AI would shrink the team down to one person and the parts of the job a human still needs to own.

A year and a half later, that prediction has quietly become the way things actually work, and this time there is a real iOS app to show for it, sitting in the Apple submission queue.

It is called Farkle Score Sheet. A clean, ad-free scorekeeper for the dice game my family plays on game night.

<div class="image-row">
  <div class="image-container">
    <div class="image-caption">Onboarding, home, and a new game</div>
    <a href="{{ baseUrl }}assets/images/end-to-end-with-ai-farkle/entry-setup.png" target="_blank">
      <img src="{{ baseUrl }}assets/images/end-to-end-with-ai-farkle/entry-setup.png" alt="Farkle Score Sheet onboarding and home screens on iOS and Android" class="preview-image">
    </a>
  </div>
</div>

## Why build it?

The Farkle scoring app we had been using was fine, but only fine. Slow, busy, full of ads, and built for a different kind of player than us. My family are game night purists. We just want a clean tally and a clear winner. The brief for this project was simple: keep score, get out of the way.

## Splitting the team between me and Claude

The passion projects post was really about AI bridging skill gaps. With Claude Design in the mix, that idea has gotten more interesting still.

On this build, the team was just two roles deep, and the split was clear:

- Claude was the **designer**, driving the warm, felt-table palette and the type pairings, and pushing back on choices that did not feel right.
- Claude was the **iOS developer**, writing the SwiftUI views, the state machines, and all of Farkle's tricky scoring edge cases like three pairs, two triplets, and four of a kind with a pair.
- My job was **product**: deciding what the app should be, what made the cut, what got dropped, and what the experience should feel like at the table.
- My job was also **QA**: playing real games with my family, finding the edges Claude missed, and pushing fixes back into the loop.

<div class="image-row">
  <div class="image-container">
    <div class="image-caption">Who's playing?</div>
    <a href="{{ baseUrl }}assets/images/end-to-end-with-ai-farkle/new-game.png" target="_blank">
      <img src="{{ baseUrl }}assets/images/end-to-end-with-ai-farkle/new-game.png" alt="New game setup screen with players and house rules" class="preview-image">
    </a>
  </div>
  <div class="image-container">
    <div class="image-caption">A turn in progress</div>
    <a href="{{ baseUrl }}assets/images/end-to-end-with-ai-farkle/in-game.png" target="_blank">
      <img src="{{ baseUrl }}assets/images/end-to-end-with-ai-farkle/in-game.png" alt="Active turn screen showing pending score buttons" class="preview-image">
    </a>
  </div>
</div>

A year ago, handing the design and engineering roles to AI on a real shipping project still felt like a stretch. On this build it felt normal, and that shift, more than the app itself, is the part worth paying attention to.

## Where the time actually went

The code was the fast part.

The slow part has been the App Store submission process. TestFlight builds, asset checklists, privacy disclosures, screenshot specs, review responses. None of it is technically hard, but it adds up to a lot of grinding.

Apple deserves some credit here, though. Their local development tools made the actual building painless. Xcode simulators, hot reload on device, Instruments for the parts that mattered. That side of the toolchain was a real win, and skipping it would have been a mistake. The friction is in submission, not in development.

## A small bonus feature

Once the scoring loop felt solid, one extra feature snuck in: game broadcasting. Anyone at the table can pull the live game up on their phone and watch the standings update in real time. A tiny scoreboard for the kitchen counter, essentially.

This is the kind of side feature that would have been cut from any earlier version of this project. Two more weekends was always too much. With Claude in the loop, it took an afternoon.

<div class="image-row">
  <div class="image-container">
    <div class="image-caption">Kevin wins. (Just this once.)</div>
    <a href="{{ baseUrl }}assets/images/end-to-end-with-ai-farkle/winner.png" target="_blank">
      <img src="{{ baseUrl }}assets/images/end-to-end-with-ai-farkle/winner.png" alt="Winner screen showing Kevin with 10,700 points" class="preview-image">
    </a>
  </div>
</div>

## What's next

If Apple approves the submission, Farkle Score Sheet should land in the App Store soon. If not, the rejection email gets read very carefully, and the queue starts again.

The lesson from the passion projects post still holds, only sharper. AI can take on the roles that used to require a full team of specialists, freeing me to focus on the parts that actually need a human at the wheel: deciding what to build, and judging whether it is any good. For projects like this one, the hard part is no longer building the thing. It is everything that wraps around the build.

So, what passion project have you been putting off? The team to build it might already be sitting on your laptop.
