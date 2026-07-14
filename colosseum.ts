---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import MobileBar from '../../../components/MobileBar.astro';
import PlaceQuickCard from '../../../components/PlaceQuickCard.astro';
import { place } from '../../../data/rome/day1/palatin';
const base = import.meta.env.BASE_URL;
---
<BaseLayout title={`${place.title} | Day I — Empire`}>
<main class="place-page">
  <div class="container">
    <PlaceQuickCard place={place} base={base} />

    <article id="deep-dive" class="deep-dive article">
      <div class="eyebrow">Book Mode · Deep Dive</div>
      <h2>{place.title}</h2>
      <p class="deep-opening">{place.history.opening}</p>

      {place.history.sections.map((section) => (
        <section>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => <p>{paragraph}</p>)}
        </section>
      ))}

      <section>
        <h2>Expedition Lens</h2>
        <div class="lens-box">
          <b>Co právě udělej:</b>
          <p>{place.challenge}</p>
        </div>
      </section>

      <section class="detail-grid">
        <div class="mini-panel">
          <h3>Fotografický tip</h3>
          <p>{place.photoTip}</p>
        </div>
        <div class="mini-panel">
          <h3>Prakticky na místě</h3>
          <ul>{place.practical.map((item) => <li>{item}</li>)}</ul>
        </div>
      </section>

      <section>
        <h2>Co bys minul, kdyby ti to nikdo neřekl</h2>
        <ul class="fact-list">{place.history.facts.map((fact) => <li>{fact}</li>)}</ul>
      </section>

      <div class="next-stop-panel">
        <div>
          <div class="eyebrow">Next step</div>
          <h3>{place.nextStop ? place.nextStop : 'Konec Dne 1'}</h3>
        </div>
        {place.nextStopSlug ? (
          <a class="button primary" href={`${base}rome/day-1/${place.nextStopSlug}/`}>Další zastávka →</a>
        ) : (
          <a class="button primary" href={`${base}rome/day-1/`}>Zpět na Den 1</a>
        )}
      </div>
    </article>
  </div>
</main>
<MobileBar items={[
  { href: `${base}rome/day-1/`, icon: '☰', label: 'Menu' },
  { href: '#quick-read', icon: '⚡', label: 'Quick' },
  { href: '#deep-dive', icon: '▤', label: 'History' }
]} />
</BaseLayout>
