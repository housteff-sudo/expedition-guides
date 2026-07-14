---
import BaseLayout from '../../layouts/BaseLayout.astro';
const base = import.meta.env.BASE_URL;
---
<BaseLayout title="Book of Expedition">
<main class="article-wrap"><article class="article">
<div class="eyebrow">Book of Expedition</div><h1>THE DNA OF THE PROJECT</h1>
<p class="lead">Tato část popisuje, proč Expedition existuje, jak mluví a jaké principy bude držet u každého budoucího města.</p>
<div class="book-list">
<a class="book-link" href={`${base}book/manifesto/`}><span>00 · Manifesto</span><span>Read →</span></a>
<a class="book-link" href={`${base}book/vision/`}><span>01 · Vision</span><span>Read →</span></a>
<a class="book-link" href={`${base}book/voice/`}><span>02 · Voice</span><span>Read →</span></a>
<a class="book-link" href={`${base}book/design-system/`}><span>03 · Design System</span><span>Read →</span></a>
</div>
</article></main>
</BaseLayout>
