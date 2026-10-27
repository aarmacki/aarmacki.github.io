---
permalink: /
title: "About"
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
/* All homepage design overrides are scoped to .home-refresh. */
.home-refresh { --h-ink: #283e50; --h-blue: #356e99; --h-muted: #66798a; --h-line: #e0e9f0; --h-tint: #f6f9fc; color: #374a58; }
.home-refresh * { box-sizing: border-box; }
.home-refresh .h-lead { font-size: .94rem; line-height: 1.82; margin: .3rem 0 1rem; }
.home-refresh .h-banner { display: flex; align-items: flex-start; gap: .75rem; padding: 1rem 1.15rem; border: 1px solid #dbe9f3; border-left: 3px solid #5a91b6; border-radius: 10px; background: #f6fafe; margin: 1.4rem 0 2.25rem; }
.home-refresh .h-banner-icon { display: grid; place-items: center; flex: none; width: 1.7rem; height: 1.7rem; border-radius: 8px; background:#e3eff7; color: #477ca2; }
.home-refresh .h-banner-icon svg { width: 17px; height: 17px; }
.home-refresh .h-banner p { margin:0; line-height: 1.58; font-size: .88rem; color: #3c566a; }
.home-refresh .h-banner strong { color: #315e80; }
.home-refresh .h-section { margin-top: 2.4rem; }
.home-refresh .h-head { display:flex; align-items:center; gap:.78rem; margin:0 0 1rem; padding-bottom:.6rem; border-bottom: 1px solid var(--h-line); }
.home-refresh .h-head h2 { font-size: 1.45rem; font-weight: 720; color: #273e51; line-height: 1.3; margin:0; border:none; padding:0; }
.home-refresh .h-head .h-line { flex:1; height:1px; background: #edf2f6; display:none; }
.home-refresh .h-section-desc { font-size:.91rem; line-height: 1.76; margin: .25rem 0 1.3rem; }
.home-refresh .h-topics { display:grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: .85rem; }
.home-refresh .h-topic { position: relative; border: 1px solid #e0e8ef; border-radius: 12px; padding: 1.1rem 1.1rem 1.15rem; background: linear-gradient(145deg, #f9fbfd, #fff 58%); box-shadow: 0 3px 14px rgba(33, 57, 78, .035); transition: box-shadow .2s ease, transform .2s ease, border-color .2s ease; }

.home-refresh .h-topic:hover { box-shadow: 0 8px 22px rgba(33, 57, 78, .085); transform: translateY(-2px); border-color: #ccdfeb; }
.home-refresh .h-topic h3 { color:#294b64; font-size:1.06rem; line-height:1.38; margin:0 0 .65rem; font-weight:710; }
.home-refresh .h-topic p { color:#526879; font-size:.84rem; line-height:1.7; margin:0; }
.home-refresh .h-explore { font-size:.87rem; color: #5f7280; margin:1rem 0 0; }
.home-refresh a { color: #2b6c9a; text-underline-offset: 2px; }
.home-refresh .h-explore a { font-weight:700; text-decoration: none; white-space:nowrap; }
.home-refresh .h-explore a:hover { text-decoration: underline; }
.home-refresh .h-news-head { display:flex; align-items:baseline; justify-content:space-between; gap: .9rem; }
.home-refresh .h-news-head .h-head {flex:1;}
.home-refresh .h-news-head small { color:#81909d; font-size:.74rem; white-space: nowrap; }
.home-refresh .h-timeline { position: relative; display:grid; gap:.95rem; margin:1.25rem 0 0; }
.home-refresh .h-timeline::before { content: ''; position:absolute; width:2px; top:1.05rem; bottom:1.05rem; left: 104px; background: #dce9f3; }
.home-refresh .h-event { position:relative; display:grid; grid-template-columns: 90px minmax(0,1fr); column-gap:1.9rem; align-items: start; }
.home-refresh .h-event::before { content:''; position:absolute; left:99px; top:1.11rem; width:12px; height:12px; border:3px solid #8cb3d0; border-radius:50%; background: white; z-index:1; }
.home-refresh .h-date { padding-top:.9rem; text-align:right; font-weight:750; color:#6b7f8f; font-size:.73rem; line-height:1.45; }
.home-refresh .h-date .h-month { display:block; color:#456a86; }
.home-refresh .h-date .h-year { display:block; font-weight:550; }
.home-refresh .h-update { padding: .87rem 1rem; border:1px solid #e2eaf1; border-radius:10px; background:#fff; box-shadow:0 2px 8px rgba(24,55,78,.027); min-width:0; }
.home-refresh .h-update:hover { border-color:#cadde9; }
.home-refresh .h-update-top {display:flex;gap:.65rem;align-items:center;margin-bottom:.45rem;}
.home-refresh .h-pill { display:inline-block; border-radius:999px; padding:.17rem .52rem; background:#eaf3f9; color:#42759a; font-size:.68rem; font-weight:750; letter-spacing:.02em; }
.home-refresh .h-update p { font-size:.84rem; line-height:1.65; margin:0; color:#617383; }
.home-refresh .h-update .h-paper { display:block; color:#285f89; font-size:.9rem; font-weight:680; line-height:1.5; text-decoration:none; margin:.08rem 0 .35rem; }
.home-refresh .h-update .h-paper:hover { text-decoration:underline; }
.home-refresh .h-older { margin: 1.1rem 0 2rem 118px; }
.home-refresh .h-older > summary { list-style:none; cursor:pointer; width:max-content; max-width:100%; padding:.6rem .9rem; color:#326b95; background:#f2f7fb; border:1px solid #dfebf4; border-radius:999px; font-size:.81rem; font-weight:700; transition:background .2s ease; }
.home-refresh .h-older > summary::-webkit-details-marker { display:none; }
.home-refresh .h-older > summary:hover { background:#e9f3fa; }
.home-refresh .h-older > summary:focus-visible { outline: 3px solid #80b6dd; outline-offset:3px; }
.home-refresh .h-older > summary::before { content:'+'; display:inline-block; font-weight:750; margin-right:.45rem; font-size:.95rem; }
.home-refresh .h-older[open] > summary::before {content:'−';}
.home-refresh .h-older .h-timeline { margin-top:1.3rem; margin-left:-118px; }
.home-refresh .h-footer-note {font-size:.85rem;line-height:1.75;color:#6b7d8a;margin: 1.15rem 0 0;}
@media (max-width: 700px) {
 .home-refresh .h-topics {grid-template-columns:1fr;}
 .home-refresh .h-timeline::before { left:72px; }
 .home-refresh .h-event {grid-template-columns:60px minmax(0,1fr); column-gap:1.55rem;}
 .home-refresh .h-event::before {left:67px;}
 .home-refresh .h-date {font-size:.7rem;}
 .home-refresh .h-older {margin-left:92px;}
 .home-refresh .h-older .h-timeline { margin-left:-92px; }
}
@media (max-width: 420px) {
 .home-refresh .h-timeline::before {left:59px;}
 .home-refresh .h-event {grid-template-columns:48px minmax(0,1fr); column-gap:1.35rem;}
 .home-refresh .h-event::before {left:54px;}
 .home-refresh .h-older { margin-left:78px; }
 .home-refresh .h-older .h-timeline { margin-left:-78px; }
 .home-refresh .h-update {padding:.78rem .8rem;}
 .home-refresh .h-news-head small {display:none;}
}
@media (prefers-reduced-motion: reduce) {
 .home-refresh .h-topic, .home-refresh .h-older > summary { transition:none; }
 .home-refresh .h-topic:hover {transform:none;}
}
</style>

<div class="home-refresh">
  <p class="h-lead">I am a post-doctoral researcher at EPFL, working with Prof. Ali H. Sayed. I received my PhD in Electrical and Computer Engineering from Carnegie Mellon University, where I was advised by Prof. Soummya Kar. Prior to that, I earned my Bachelor’s and Master’s degrees in Applied Mathematics from the Faculty of Sciences, University of Novi Sad.</p>
  <div class="h-banner" role="note">
    <span class="h-banner-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></svg></span>
    <p><strong>I am on the academic job market for tenure-track faculty positions starting in Fall 2027.</strong><br></p>
  </div>
  <section class="h-section" aria-labelledby="interests-title">
    <div class="h-head"><h2 id="interests-title">Research Interests</h2></div>
    <p class="h-section-desc">My research spans stochastic optimization, machine learning, and multi-agent systems. I seek to understand what performance guarantees are achievable in learning systems under challenges such as heavy-tailed noise, data heterogeneity, and communication constraints, and how to design algorithms that attain these guarantees. I pursue this agenda in two main directions:</p>
    <div class="h-topics">
      <article class="h-topic">
        <h3>Robust and reliable stochastic optimization</h3>
        <p>Understanding and improving the performance of stochastic optimization methods beyond classical noise assumptions, with an emphasis on robustness and individual-run reliability.</p>
      </article>
      <article class="h-topic">
        <h3>Collaborative learning over heterogeneous networks</h3>
        <p>Understanding the benefits and limitations of collaboration among learning agents in the presence of data heterogeneity, communication constraints, and decentralized information exchange.</p>
      </article>
    </div>
    <p class="h-explore">For more details, visit my <a href="/research/">Research page →</a> or feel free to <a href="mailto:aleksandar.armacki@epfl.ch">get in touch</a>.</p>
  </section>
  <section class="h-section" aria-labelledby="news-title">
    <div class="h-news-head"><div class="h-head"><h2 id="news-title">News</h2></div><small>Recent updates</small></div>
    <div class="h-timeline">
<article class="h-event">
  <div class="h-date"><span class="h-month">October</span><span class="h-year">2026</span></div>
  <div class="h-update"><div class="h-update-top"><span class="h-pill">Preprint</span></div>
   <a class="h-paper" href="https://arxiv.org/abs/2610.10527" target="_blank" rel="noopener noreferrer">Decentralized SGD under Heavy-Tailed Noise: Optimal Convergence Rates and the Role of Gradient Clipping ↗</a><p>A new preprint is out.</p>
  </div>
</article>
<article class="h-event">
  <div class="h-date"><span class="h-month">June</span><span class="h-year">2026</span></div>
  <div class="h-update"><div class="h-update-top"><span class="h-pill">Preprint</span></div>
   <a class="h-paper" href="https://arxiv.org/abs/2606.12124" target="_blank" rel="noopener noreferrer">A Unified Zeroth-Order Approach for Decentralized Minimax Optimization ↗</a><p>A new preprint is out.</p>
  </div>
</article>
<article class="h-event">
  <div class="h-date"><span class="h-month">May</span><span class="h-year">2026</span></div>
  <div class="h-update"><div class="h-update-top"><span class="h-pill">COLT 2026</span></div>
   <a class="h-paper" href="https://proceedings.mlr.press/v336/armacki26a.html" target="_blank" rel="noopener noreferrer">Tight Long-Term Tail Decay of (Clipped) SGD in Non-Convex Optimization ↗</a><p>Our paper was accepted for publication at the 39th Conference on Learning Theory (COLT).</p>
  </div>
</article>
<article class="h-event">
  <div class="h-date"><span class="h-month">April</span><span class="h-year">2026</span></div>
  <div class="h-update"><div class="h-update-top"><span class="h-pill">ICML 2026</span></div>
   <a class="h-paper" href="https://proceedings.mlr.press/v306/armacki26a.html" target="_blank" rel="noopener noreferrer">High-Probability Convergence Guarantees of Decentralized SGD ↗</a><p>Our paper was accepted for publication at the 43rd International Conference on Machine Learning (ICML).</p>
  </div>
</article>
<article class="h-event">
  <div class="h-date"><span class="h-month">April</span><span class="h-year">2026</span></div>
  <div class="h-update"><div class="h-update-top"><span class="h-pill">Preprint</span></div>
   <a class="h-paper" href="https://arxiv.org/abs/2605.00281" target="_blank" rel="noopener noreferrer">High-Probability Convergence in Decentralized Stochastic Optimization with Gradient Tracking ↗</a><p>A new preprint is out.</p>
  </div>
</article>
</div>
    <details class="h-older"><summary>See older news</summary>
      <div class="h-timeline">
<article class="h-event">
  <div class="h-date"><span class="h-month">March</span><span class="h-year">2026</span></div>
  <div class="h-update"><div class="h-update-top"><span class="h-pill">IEEE TIT</span></div>
   <a class="h-paper" href="https://arxiv.org/abs/2507.09093v2" target="_blank" rel="noopener noreferrer">Sharp High-Probability Rates for Nonlinear SGD under Heavy-Tailed Noise via Symmetrization ↗</a><p>Our paper was accepted for publication at IEEE Transactions on Information Theory.</p>
  </div>
</article>
<article class="h-event">
  <div class="h-date"><span class="h-month">October</span><span class="h-year">2025</span></div>
  <div class="h-update"><div class="h-update-top"><span class="h-pill">SIOPT</span></div>
   <a class="h-paper" href="https://arxiv.org/abs/2410.15637" target="_blank" rel="noopener noreferrer">Large Deviation Upper Bounds and Improved MSE Rates of Nonlinear SGD: Heavy-tailed Noise and Power of Symmetry ↗</a><p>Our paper was accepted for publication at SIAM Journal on Optimization.</p>
  </div>
</article>
<article class="h-event">
  <div class="h-date"><span class="h-month">June</span><span class="h-year">2025</span></div>
  <div class="h-update"><div class="h-update-top"><span class="h-pill">Milestone</span></div>
   <p>I defended my PhD thesis! A big thank you to my advisor and committee members, as well as the many people that I had the pleasure of collaborating with during my PhD studies. I will be joining EPFL as a post-doctoral researcher, hosted by professor Ali H. Sayed. Looking forward to getting started in September!</p>
  </div>
</article>
<article class="h-event">
  <div class="h-date"><span class="h-month">May</span><span class="h-year">2025</span></div>
  <div class="h-update"><div class="h-update-top"><span class="h-pill">EUSIPCO</span></div>
   <a class="h-paper" href="https://github.com/aarmacki/aarmacki.github.io/blob/master/publications/dist_clust_init.pdf" target="_blank" rel="noopener noreferrer">Toward Understanding the Improved Robustness to Initialization in Distributed Clustering ↗</a><p>Our paper was accepted for publication at the 33rd European Signal Processing Conference (EUSIPCO).</p>
  </div>
</article>
<article class="h-event">
  <div class="h-date"><span class="h-month">January</span><span class="h-year">2025</span></div>
  <div class="h-update"><div class="h-update-top"><span class="h-pill">AISTATS</span></div>
   <a class="h-paper" href="https://proceedings.mlr.press/v258/armacki25a.html" target="_blank" rel="noopener noreferrer">High-probability Convergence Bounds for Online Nonlinear Stochastic Gradient Descent Under Heavy-tailed Noise ↗</a><p>Our paper was accepted for publication at the 28th International Conference on Artificial Intelligence and Statistics (AISTATS).</p>
  </div>
</article>
<article class="h-event">
  <div class="h-date"><span class="h-month">January</span><span class="h-year">2025</span></div>
  <div class="h-update"><div class="h-update-top"><span class="h-pill">IEEE TSP</span></div>
   <a class="h-paper" href="https://arxiv.org/abs/2402.01302" target="_blank" rel="noopener noreferrer">Distributed Center-based Clustering: A Unified Framework ↗</a><p>Our paper was accepted for publication at IEEE Transactions on Signal Processing.</p>
  </div>
</article>
<article class="h-event">
  <div class="h-date"><span class="h-month">June</span><span class="h-year">2024</span></div>
  <div class="h-update"><div class="h-update-top"><span class="h-pill">Asilomar</span></div>
   <a class="h-paper" href="https://arxiv.org/abs/2603.20507" target="_blank" rel="noopener noreferrer">Distributed Gradient Clustering: Convergence and the Effect of Initialization ↗</a><p>Our paper was accepted for publication at the 58th Asilomar Conference on Signals, Systems, and Computers.</p>
  </div>
</article>
<article class="h-event">
  <div class="h-date"><span class="h-month">December</span><span class="h-year">2023</span></div>
  <div class="h-update"><div class="h-update-top"><span class="h-pill">IEEE TSP</span></div>
   <a class="h-paper" href="https://arxiv.org/abs/2209.10866" target="_blank" rel="noopener noreferrer">A One-shot Framework for Distributed Clustered Learning in Heterogeneous Environments ↗</a><p>Our paper was accepted for publication at IEEE Transactions on Signal Processing.</p>
  </div>
</article>
</div>
    </details>
  </section>
</div>
