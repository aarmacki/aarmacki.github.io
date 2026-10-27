---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<style>
/* Scoped to the Publications page; no theme files need to be edited. */
.pub-page { --pub-ink: #263a4b; --pub-accent: #356e99; --pub-border: #dfe7ee; }
.pub-page, .pub-page * { box-sizing: border-box; }
.pub-page .pub-intro { color: #61717f; font-size: .92rem; line-height: 1.55; margin: .25rem 0 1.5rem; }
.pub-page .pub-accordion { display: grid; gap: 1rem; margin: 0 0 2rem; }
.pub-page details > summary { cursor: pointer; list-style: none; }
.pub-page details > summary::-webkit-details-marker { display: none; }
.pub-page details > summary:focus-visible { outline: 3px solid #81b3d6; outline-offset: -3px; }
.pub-page .pub-group {
  border: 1px solid var(--pub-border); border-radius: 12px; background: #fff;
  overflow: hidden; box-shadow: 0 3px 14px rgba(22, 48, 73, .045);
}
.pub-page .pub-group > summary {
  display: flex; align-items: center; gap: .9rem; padding: 1.1rem 1.2rem;
  background: #f6f9fc; color: var(--pub-ink); transition: background .18s ease;
}
.pub-page .pub-group > summary:hover { background: #edf4fa; }
.pub-page .pub-group[open] > summary { border-bottom: 1px solid var(--pub-border); background: #f4f8fb; }
.pub-page .pub-group-name { font-size: 1.03rem; font-weight: 700; line-height: 1.35; flex: 1; }
.pub-page .pub-count {
  padding: .22rem .62rem; font-size: .74rem; color: #52708a; background: #e6eef6;
  border-radius: 999px; font-weight: 650; white-space: nowrap;
}
.pub-page .pub-chevron { width: .62rem; height: .62rem; border-right: 2px solid #69839a;
  border-bottom: 2px solid #69839a; transform: rotate(45deg); transition: transform .2s ease;
  flex-shrink: 0; margin: -.27rem .14rem 0 .16rem; }
.pub-page details[open] > summary .pub-chevron { transform: rotate(225deg); margin-top: .28rem; }
.pub-page .pub-group-body { display: grid; gap: .75rem; padding: .95rem; }
.pub-page .pub-card {
  border: 1px solid #e4e9ee; border-left: 3px solid #b9cfe0;
  border-radius: 9px; background: #fff; transition: border-color .18s ease, box-shadow .18s ease;
}
.pub-page .pub-card:hover { border-left-color: var(--pub-accent); box-shadow: 0 4px 12px rgba(27, 55, 79, .055); }
.pub-page .pub-card[open] { border-left-color: var(--pub-accent); }
.pub-page .pub-card > summary {
  display: flex; gap: .7rem; align-items: flex-start; padding: .85rem .95rem;
  color: var(--pub-ink); line-height: 1.45; }
.pub-page .pub-ref {
  flex: 0 0 auto; font-size: .77rem; font-weight: 700; color: #376e97;
  background: #edf4fa; border-radius: 5px; padding: .16rem .4rem; margin-top: .07rem;
}
.pub-page .pub-card-title { flex: 1; min-width: 0; font-size: .9rem; font-weight: 650; }
.pub-page .pub-year { font-size: .73rem; font-weight: 600; color: #71808d; white-space: nowrap; margin-top: .1rem; }
.pub-page .pub-card .pub-chevron { width: .48rem; height: .48rem; margin: .42rem 0 0 .1rem; border-width: 1.6px; }
.pub-page .pub-card[open] > summary .pub-chevron { margin-top: .65rem; }
.pub-page .pub-card-body { padding: 0 1rem 1rem 1rem; margin-left: 2.9rem; }
.pub-page .pub-authors, .pub-page .pub-venue { font-size: .84rem; line-height: 1.55; margin: .1rem 0 .35rem; }
.pub-page .pub-authors { color: #435363; }
.pub-page .pub-venue { color: #6a7986; font-style: italic; }
.pub-page .pub-links { display: flex; flex-wrap: wrap; gap: .45rem; margin-top: .65rem; }
.pub-page .pub-links a {
  display: inline-block; border: 1px solid #d5e2ec; background: #f8fbfe;
  border-radius: 999px; padding: .3rem .72rem; color: #2a648c !important;
  text-decoration: none !important; font-size: .78rem; font-weight: 650;
  transition: background .18s ease, border-color .18s ease;
}
.pub-page .pub-links a:hover, .pub-page .pub-links a:focus-visible { background: #e8f2fa; border-color: #a6c9e2; }
@media (max-width: 600px) {
  .pub-page .pub-group > summary { padding: .9rem .85rem; gap: .55rem; }
  .pub-page .pub-group-name { font-size: .96rem; }
  .pub-page .pub-group-body { padding: .65rem; gap: .6rem; }
  .pub-page .pub-card > summary { padding: .8rem .7rem; gap: .5rem; flex-wrap: wrap; }
  .pub-page .pub-card-title { flex-basis: calc(100% - 5rem); }
  .pub-page .pub-year { margin-left: 2.4rem; }
  .pub-page .pub-card-body { margin-left: 0; padding: 0 .85rem .9rem; }
}
@media (prefers-reduced-motion: reduce) {
  .pub-page .pub-chevron, .pub-page .pub-card, .pub-page .pub-group > summary, .pub-page .pub-links a { transition: none; }
}
</style>

<div class="pub-page">
  <p class="pub-intro">Browse publications by type. Select a category to see its titles, then select any publication for authors, venue, and links. Listed in reverse chronological order within each category. <strong>*</strong> Denotes equal contribution.</p>
  <div class="pub-accordion">
    <details class="pub-group" id="journal-articles" open>
      <summary>
        <span class="pub-group-name">Journal Articles</span>
        <span class="pub-count">4 publications</span>
        <span class="pub-chevron" aria-hidden="true"></span>
      </summary>
      <div class="pub-group-body">
        <details class="pub-card" id="J1">
          <summary>
            <span class="pub-ref">[J1]</span>
            <span class="pub-card-title">Sharp High-Probability Rates for Nonlinear SGD under Heavy-Tailed Noise via Symmetrization</span>
            <span class="pub-year">2026</span>
            <span class="pub-chevron" aria-hidden="true"></span>
          </summary>
          <div class="pub-card-body">
            <p class="pub-authors"><strong>A. Armacki</strong>, D. Bajović, D. Jakovetić, S. Kar.</p>
            <p class="pub-venue">IEEE Transactions on Information Theory, 2026.</p>
            <div class="pub-links">
              <a href="https://ieeexplore.ieee.org/document/11478471" target="_blank" rel="noopener noreferrer">Published version ↗</a>
              <a href="https://arxiv.org/abs/2507.09093" target="_blank" rel="noopener noreferrer">Preprint ↗</a>
            </div>
          </div>
        </details>
        <details class="pub-card" id="J2">
          <summary>
            <span class="pub-ref">[J2]</span>
            <span class="pub-card-title">Large Deviation Upper Bounds and Improved MSE Rates of Nonlinear SGD: Heavy-Tailed Noise and Power of Symmetry</span>
            <span class="pub-year">2026</span>
            <span class="pub-chevron" aria-hidden="true"></span>
          </summary>
          <div class="pub-card-body">
            <p class="pub-authors"><strong>A. Armacki</strong>*, S. Yu*, D. Bajović, D. Jakovetić, S. Kar.</p>
            <p class="pub-venue">SIAM Journal on Optimization, 2026.</p>
            <div class="pub-links">
              <a href="https://epubs.siam.org/doi/abs/10.1137/24M1704154" target="_blank" rel="noopener noreferrer">Published version ↗</a>
              <a href="https://arxiv.org/abs/2410.15637" target="_blank" rel="noopener noreferrer">Preprint ↗</a>
            </div>
          </div>
        </details>
        <details class="pub-card" id="J3">
          <summary>
            <span class="pub-ref">[J3]</span>
            <span class="pub-card-title">Distributed Center-Based Clustering: A Unified Framework</span>
            <span class="pub-year">2025</span>
            <span class="pub-chevron" aria-hidden="true"></span>
          </summary>
          <div class="pub-card-body">
            <p class="pub-authors"><strong>A. Armacki</strong>, D. Bajović, D. Jakovetić, S. Kar.</p>
            <p class="pub-venue">IEEE Transactions on Signal Processing, 2025.</p>
            <div class="pub-links">
              <a href="https://ieeexplore.ieee.org/abstract/document/10847582" target="_blank" rel="noopener noreferrer">Published version ↗</a>
              <a href="https://arxiv.org/abs/2402.01302" target="_blank" rel="noopener noreferrer">Preprint ↗</a>
            </div>
          </div>
        </details>
        <details class="pub-card" id="J4">
          <summary>
            <span class="pub-ref">[J4]</span>
            <span class="pub-card-title">A One-shot Framework for Distributed Clustered Learning in Heterogeneous Environments</span>
            <span class="pub-year">2024</span>
            <span class="pub-chevron" aria-hidden="true"></span>
          </summary>
          <div class="pub-card-body">
            <p class="pub-authors"><strong>A. Armacki</strong>, D. Bajović, D. Jakovetić, S. Kar.</p>
            <p class="pub-venue">IEEE Transactions on Signal Processing, 2024.</p>
            <div class="pub-links">
              <a href="https://ieeexplore.ieee.org/abstract/document/10373766" target="_blank" rel="noopener noreferrer">Published version ↗</a>
              <a href="https://arxiv.org/abs/2209.10866" target="_blank" rel="noopener noreferrer">Preprint ↗</a>
            </div>
          </div>
        </details>
      </div>
    </details>
    <details class="pub-group" id="conference-papers">
      <summary>
        <span class="pub-group-name">Conference Papers</span>
        <span class="pub-count">9 publications</span>
        <span class="pub-chevron" aria-hidden="true"></span>
      </summary>
      <div class="pub-group-body">
        <details class="pub-card" id="C1">
          <summary>
            <span class="pub-ref">[C1]</span>
            <span class="pub-card-title">Tight Long-Term Tail Decay of (Clipped) SGD in Non-Convex Optimization</span>
            <span class="pub-year">2026</span>
            <span class="pub-chevron" aria-hidden="true"></span>
          </summary>
          <div class="pub-card-body">
            <p class="pub-authors"><strong>A. Armacki</strong>, D. Bajović, D. Jakovetić, S. Kar, A. H. Sayed.</p>
            <p class="pub-venue">39th Conference on Learning Theory (COLT), 2026.</p>
            <div class="pub-links">
              <a href="https://proceedings.mlr.press/v336/armacki26a.html" target="_blank" rel="noopener noreferrer">Published version ↗</a>
              <a href="https://arxiv.org/abs/2602.05657" target="_blank" rel="noopener noreferrer">Preprint ↗</a>
            </div>
          </div>
        </details>
        <details class="pub-card" id="C2">
          <summary>
            <span class="pub-ref">[C2]</span>
            <span class="pub-card-title">High-Probability Convergence Guarantees of Decentralized SGD</span>
            <span class="pub-year">2026</span>
            <span class="pub-chevron" aria-hidden="true"></span>
          </summary>
          <div class="pub-card-body">
            <p class="pub-authors"><strong>A. Armacki</strong>, A. H. Sayed.</p>
            <p class="pub-venue">43rd International Conference on Machine Learning (ICML), 2026.</p>
            <div class="pub-links">
              <a href="https://proceedings.mlr.press/v306/armacki26a.html" target="_blank" rel="noopener noreferrer">Published version ↗</a>
              <a href="https://arxiv.org/abs/2510.06141" target="_blank" rel="noopener noreferrer">Preprint ↗</a>
            </div>
          </div>
        </details>
        <details class="pub-card" id="C3">
          <summary>
            <span class="pub-ref">[C3]</span>
            <span class="pub-card-title">Toward Understanding the Improved Robustness to Initialization in Distributed Clustering</span>
            <span class="pub-year">2025</span>
            <span class="pub-chevron" aria-hidden="true"></span>
          </summary>
          <div class="pub-card-body">
            <p class="pub-authors"><strong>A. Armacki</strong>, S. Kar.</p>
            <p class="pub-venue">33rd European Signal Processing Conference (EUSIPCO), 2025.</p>
            <div class="pub-links">
              <a href="https://ieeexplore.ieee.org/abstract/document/11226550" target="_blank" rel="noopener noreferrer">Published version ↗</a>
              <a href="https://github.com/aarmacki/aarmacki.github.io/blob/master/publications/dist_clust_init.pdf" target="_blank" rel="noopener noreferrer">Preprint ↗</a>
            </div>
          </div>
        </details>
        <details class="pub-card" id="C4">
          <summary>
            <span class="pub-ref">[C4]</span>
            <span class="pub-card-title">High-probability Convergence Bounds for Online Nonlinear Stochastic Gradient Descent under Heavy-tailed Noise</span>
            <span class="pub-year">2025</span>
            <span class="pub-chevron" aria-hidden="true"></span>
          </summary>
          <div class="pub-card-body">
            <p class="pub-authors"><strong>A. Armacki</strong>, S. Yu, P. Sharma, G. Joshi, D. Bajović, D. Jakovetić, S. Kar.</p>
            <p class="pub-venue">28th International Conference on Artificial Intelligence and Statistics (AISTATS), 2025.</p>
            <div class="pub-links">
              <a href="https://proceedings.mlr.press/v258/armacki25a.html" target="_blank" rel="noopener noreferrer">Published version ↗</a>
              <a href="https://arxiv.org/abs/2410.13954" target="_blank" rel="noopener noreferrer">Preprint ↗</a>
            </div>
          </div>
        </details>
        <details class="pub-card" id="C5">
          <summary>
            <span class="pub-ref">[C5]</span>
            <span class="pub-card-title">Distributed Gradient Clustering: Convergence and the Effect of Initialization</span>
            <span class="pub-year">2024</span>
            <span class="pub-chevron" aria-hidden="true"></span>
          </summary>
          <div class="pub-card-body">
            <p class="pub-authors"><strong>A. Armacki</strong>*, H. Sharma*, D. Bajović, D. Jakovetić, M. Chakraborty, S. Kar.</p>
            <p class="pub-venue">58th Asilomar Conference on Signals, Systems, and Computers, 2024.</p>
            <div class="pub-links">
              <a href="https://ieeexplore.ieee.org/abstract/document/10942834" target="_blank" rel="noopener noreferrer">Published version ↗</a>
              <a href="https://arxiv.org/abs/2603.20507" target="_blank" rel="noopener noreferrer">Preprint ↗</a>
            </div>
          </div>
        </details>
        <details class="pub-card" id="C6">
          <summary>
            <span class="pub-ref">[C6]</span>
            <span class="pub-card-title">Communication Efficient Model-aware Federated Learning for Visual Crowd Counting and Density Estimation in Smart Cities</span>
            <span class="pub-year">2023</span>
            <span class="pub-chevron" aria-hidden="true"></span>
          </summary>
          <div class="pub-card-body">
            <p class="pub-authors"><strong>A. Armacki</strong>, N. Milošević, D. Bajović, S. Kar, D. Jakovetić, A. Bakhtiarnia, L. Esterle, A. Muscat, T. Festi.</p>
            <p class="pub-venue">31st European Signal Processing Conference (EUSIPCO), 2023.</p>
            <div class="pub-links">
              <a href="https://ieeexplore.ieee.org/abstract/document/10289938/" target="_blank" rel="noopener noreferrer">Published version ↗</a>
              <a href="https://github.com/dusanjakovetic/FLVCC/blob/main/FLforVCCv2.pdf" target="_blank" rel="noopener noreferrer">Preprint ↗</a>
            </div>
          </div>
        </details>
        <details class="pub-card" id="C7">
          <summary>
            <span class="pub-ref">[C7]</span>
            <span class="pub-card-title">Personalized Federated Learning via Convex Clustering</span>
            <span class="pub-year">2022</span>
            <span class="pub-chevron" aria-hidden="true"></span>
          </summary>
          <div class="pub-card-body">
            <p class="pub-authors"><strong>A. Armacki</strong>, D. Bajović, D. Jakovetić, S. Kar.</p>
            <p class="pub-venue">IEEE International Smart Cities Conference (ISC2), 2022.</p>
            <div class="pub-links">
              <a href="https://ieeexplore.ieee.org/abstract/document/9921863" target="_blank" rel="noopener noreferrer">Published version ↗</a>
              <a href="https://arxiv.org/abs/2202.00718" target="_blank" rel="noopener noreferrer">Preprint ↗</a>
            </div>
          </div>
        </details>
        <details class="pub-card" id="C8">
          <summary>
            <span class="pub-ref">[C8]</span>
            <span class="pub-card-title">Gradient Based Clustering</span>
            <span class="pub-year">2022</span>
            <span class="pub-chevron" aria-hidden="true"></span>
          </summary>
          <div class="pub-card-body">
            <p class="pub-authors"><strong>A. Armacki</strong>, D. Bajović, D. Jakovetić, S. Kar.</p>
            <p class="pub-venue">39th International Conference on Machine Learning (ICML), 2022.</p>
            <div class="pub-links">
              <a href="https://proceedings.mlr.press/v162/armacki22a.html" target="_blank" rel="noopener noreferrer">Published version ↗</a>
              <a href="https://arxiv.org/abs/2202.00720" target="_blank" rel="noopener noreferrer">Preprint ↗</a>
            </div>
          </div>
        </details>
        <details class="pub-card" id="C9">
          <summary>
            <span class="pub-ref">[C9]</span>
            <span class="pub-card-title">Distributed Trust-Region Method With First Order Models</span>
            <span class="pub-year">2019</span>
            <span class="pub-chevron" aria-hidden="true"></span>
          </summary>
          <div class="pub-card-body">
            <p class="pub-authors"><strong>A. Armacki</strong>, D. Jakovetić, N. Krejić, N. Krklec Jerinkić.</p>
            <p class="pub-venue">IEEE EUROCON 18th International Conference on Smart Technologies, 2019.</p>
            <div class="pub-links">
              <a href="https://ieeexplore.ieee.org/abstract/document/8861739" target="_blank" rel="noopener noreferrer">Published version ↗</a>
              <a href="https://people.dmi.uns.ac.rs/~natasa.krklec/Radovi/ajkkj.pdf" target="_blank" rel="noopener noreferrer">Preprint ↗</a>
            </div>
          </div>
        </details>
      </div>
    </details>
    <details class="pub-group" id="books-textbooks">
      <summary>
        <span class="pub-group-name">Books and Textbooks</span>
        <span class="pub-count">1 publication</span>
        <span class="pub-chevron" aria-hidden="true"></span>
      </summary>
      <div class="pub-group-body">
        <details class="pub-card" id="B1">
          <summary>
            <span class="pub-ref">[B1]</span>
            <span class="pub-card-title">Distributed Optimization with Applications</span>
            <span class="pub-year">2020</span>
            <span class="pub-chevron" aria-hidden="true"></span>
          </summary>
          <div class="pub-card-body">
            <p class="pub-authors">D. Jakovetić, <strong>A. Armacki</strong>.</p>
            <p class="pub-venue">Graduate textbook, Faculty of Sciences, University of Novi Sad, 2020.</p>
            <div class="pub-links">
              <a href="https://www.pmf.uns.ac.rs/studije/epublikacije/matinf/jakovetic_armacki_distributed_optimization_applications.pdf" target="_blank" rel="noopener noreferrer">Textbook (PDF) ↗</a>
            </div>
          </div>
        </details>
      </div>
    </details>
    <details class="pub-group" id="preprints">
      <summary>
        <span class="pub-group-name">Preprints</span>
        <span class="pub-count">3 publications</span>
        <span class="pub-chevron" aria-hidden="true"></span>
      </summary>
      <div class="pub-group-body">
        <details class="pub-card" id="P1">
          <summary>
            <span class="pub-ref">[P1]</span>
            <span class="pub-card-title">Decentralized SGD under Heavy-Tailed Noise: Optimal Convergence Rates and the Role of Gradient Clipping</span>
            <span class="pub-year">2026</span>
            <span class="pub-chevron" aria-hidden="true"></span>
          </summary>
          <div class="pub-card-body">
            <p class="pub-authors"><strong>A. Armacki</strong>, H. Cai, A. H. Sayed.</p>
            <p class="pub-venue">Under review, 2026.</p>
            <div class="pub-links">
              <a href="https://arxiv.org/abs/2610.10527" target="_blank" rel="noopener noreferrer">Preprint ↗</a>
            </div>
          </div>
        </details>
        <details class="pub-card" id="P2">
          <summary>
            <span class="pub-ref">[P2]</span>
            <span class="pub-card-title">A Unified Zeroth-Order Approach for Decentralized Minimax Optimization</span>
            <span class="pub-year">2026</span>
            <span class="pub-chevron" aria-hidden="true"></span>
          </summary>
          <div class="pub-card-body">
            <p class="pub-authors">H. Cai, Y. Zhao, <strong>A. Armacki</strong>, J. Chen, A. H. Sayed.</p>
            <p class="pub-venue">arXiv preprint, 2026.</p>
            <div class="pub-links">
              <a href="https://arxiv.org/abs/2606.12124" target="_blank" rel="noopener noreferrer">Preprint ↗</a>
            </div>
          </div>
        </details>
        <details class="pub-card" id="P3">
          <summary>
            <span class="pub-ref">[P3]</span>
            <span class="pub-card-title">High-Probability Convergence in Decentralized Stochastic Optimization with Gradient Tracking</span>
            <span class="pub-year">2026</span>
            <span class="pub-chevron" aria-hidden="true"></span>
          </summary>
          <div class="pub-card-body">
            <p class="pub-authors"><strong>A. Armacki</strong>, H. Cai, A. H. Sayed.</p>
            <p class="pub-venue">Under review, 2026.</p>
            <div class="pub-links">
              <a href="https://arxiv.org/abs/2605.00281" target="_blank" rel="noopener noreferrer">Preprint ↗</a>
            </div>
          </div>
        </details>
      </div>
    </details>
  </div>
</div>

<script>
/* The Research page links to /publications/#J1, #C2, etc.
   Open both the correct category and card before scrolling to that item. */
(function () {
  function expandAllPublications(group) {
    group.querySelectorAll('.pub-card').forEach(function (card) {
      card.open = true;
    });
  }

  document.querySelectorAll('.pub-page .pub-group').forEach(function (group) {
    // Expand publications in categories already open on page load
    if (group.open) {
      expandAllPublications(group);
    }

    // Expand all publications whenever a category is opened
    group.addEventListener('toggle', function () {
      if (group.open) {
        expandAllPublications(group);
      }
    });
  });
  function openLinkedPublication() {
    var id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    var card = document.getElementById(id);
    if (!card || !card.classList.contains('pub-card')) return;
    var group = card.closest('.pub-group');
    if (group) group.open = true;
    card.open = true;
    window.requestAnimationFrame(function () { card.scrollIntoView({ block: 'center' }); });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', openLinkedPublication);
  } else {
    openLinkedPublication();
  }
  window.addEventListener('hashchange', openLinkedPublication);
})();
</script>
