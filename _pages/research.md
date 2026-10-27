---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

<style>
/* Research-page-only styling. Does not modify the site's navigation or other pages. */
.research-refresh { --rs-ink:#293e50; --rs-muted:#657b89; --rs-line:#dfe8ef; --rs-blue:#356e99; color:#394d5b; }
.research-refresh, .research-refresh * { box-sizing:border-box; }
.research-refresh a { color:#2e6c99; text-underline-offset:2px; }
.research-refresh a:focus-visible { outline:2px solid #8bbbdc; outline-offset:3px; border-radius:3px; }
.research-refresh .rs-lead { margin:.3rem 0 1.0rem; font-size:.95rem; line-height:1.85; color:#425768; }
.research-refresh .rs-question { margin:1.18rem 0 1.18rem; padding:1.18rem 1.32rem; border:1px solid #dde9f2; border-radius:11px; background:#f5f9fc; color:#2d5877; font-size:1.01rem; font-weight:650; line-height:1.7; }
.research-refresh .rs-follow { font-size:.92rem; line-height:1.8; margin:0 0 2.5rem; color:#526a7b; }
.research-refresh .rs-section { margin:2.55rem 0 0; }
.research-refresh .rs-head { border-bottom:1px solid var(--rs-line); padding:0 0 .65rem; margin:0 0 1.1rem; }
.research-refresh .rs-head h2 { font-size:1.45rem; line-height:1.32; font-weight:720; margin:0; padding:0; border:0; color:#273e51; }
.research-refresh .rs-cards { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); align-items:stretch; gap:1rem; }
.research-refresh .rs-card { display:flex; flex-direction:column; min-width:0; padding:1.08rem 1.13rem 1.02rem; background:#fff; border:1px solid #dce7ef; border-radius:11px; box-shadow:0 3px 13px rgba(26,56,78,.04); transition:box-shadow .2s ease,border-color .2s ease,transform .2s ease; }
.research-refresh .rs-card:hover { box-shadow:0 7px 19px rgba(31,60,79,.065); border-color:#cddfea; transform:translateY(-1px); }
.research-refresh .rs-card-head { display:flex; gap:.65rem; align-items:center; margin:0 0 .47rem; }
.research-refresh .rs-icon { width:40px; height:40px; flex:0 0 40px; object-fit:contain; border:0; background:transparent; }
.research-refresh .rs-card h3 { color:#294c65; font-size:1.01rem; line-height:1.36; font-weight:720; margin:0; padding:0; border:0; }
.research-refresh .rs-desc { color:#566e7d; font-size:.87rem; line-height:1.56; margin:0 0 .65rem; }
.research-refresh .rs-rule { display:none; }
.research-refresh .rs-label { color:#3d6683; font-size:.83rem; line-height:1.4; font-weight:700; letter-spacing:0; text-transform:none; margin:0 0 .22rem; }
.research-refresh .rs-results { margin:0 0 .57rem; padding:0 0 0 1.1rem; list-style:disc; }
.research-refresh .rs-results li { padding-left:.08rem; margin:.08rem 0; color:#566d7c; font-size:.83rem; line-height:1.42; }
.research-refresh .rs-results li::marker { color:#8eafc4; }
.research-refresh .rs-pubs { margin-top:auto; border-top:1px solid #e9eef3; display:flex; align-items:center; flex-wrap:wrap; column-gap:.35rem; row-gap:.27rem; padding-top:.57rem; }
.research-refresh .rs-pubs-label { color:#778997; font-size:.75rem; font-weight:650; margin-right:.2rem; }
.research-refresh .rs-ref { background:#f1f7fb; border:1px solid #d9e8f2; border-radius:6px; padding:.19rem .4rem; color:#356f99!important; font-size:.74rem; font-weight:735; text-decoration:none; line-height:1.3; }
.research-refresh .rs-ref:hover { background:#e6f1f8; border-color:#c2d9e9; text-decoration:none; }
.research-refresh .rs-vision { border:1px solid #e0e8ef; border-radius:11px; background:#fbfdfe; padding:1.12rem 1.3rem; margin:0; color:#536a7b; font-size:.90rem; line-height:1.82; }
@media(max-width:650px){
 .research-refresh .rs-cards { grid-template-columns:1fr; }
 .research-refresh .rs-card { padding:1.05rem; }
 .research-refresh .rs-card-head { gap:.7rem; }
 .research-refresh .rs-card h3 { font-size:1.03rem; }
 .research-refresh .rs-icon { width:40px; height:40px; flex-basis:40px; }
 .research-refresh .rs-question { padding:1rem 1.05rem; font-size:.96rem; }
 .research-refresh .rs-head h2 { font-size:1.33rem; }
 .research-refresh .rs-vision { padding:1rem; }
}
@media(prefers-reduced-motion:reduce){.research-refresh .rs-card{transition:none}.research-refresh .rs-card:hover{transform:none}}
</style>

<div class="research-refresh">
 <p class="rs-lead">My research is motivated by the following fundamental question:</p>
 <div class="rs-question">What performance guarantees are achievable in learning systems under the challenges encountered in practice, and how can we design algorithms that attain these guarantees?</div>
 <p class="rs-follow">To answer this question, I aim to identify and exploit structural properties of the underlying problem, which may arise from stochastic dynamics of training or statistical properties of the data. I have pursued this agenda in two directions: robust and reliable stochastic optimization and collaborative learning over heterogeneous networks.</p>
<section class="rs-section" aria-labelledby="rs-heading-0"><div class="rs-head"><h2 id="rs-heading-0">Robust and Reliable Stochastic Optimization</h2></div><div class="rs-cards">
<article class="rs-card">
  <div class="rs-card-head"><img class="rs-icon" src="/icons/heavy-tails.png" alt="" loading="lazy"><h3>Robust Optimization under Heavy-Tailed Noise</h3></div>
  <p class="rs-desc">Exploiting the interplay of noise symmetry and nonlinear gradient transformations to establish convergence guarantees beyond classical moment assumptions.</p><div class="rs-rule" aria-hidden="true"></div>
  <p class="rs-label">Key results</p><ul class="rs-results"><li>Unified framework for nonlinear SGD</li><li>Moment-independent guarantees</li><li>Novel symmetrization-based methods</li></ul>
  <div class="rs-pubs"><span class="rs-pubs-label">Representative publications:</span><a class="rs-ref" href="/publications/#J1">[J1]</a><a class="rs-ref" href="/publications/#J2">[J2]</a><a class="rs-ref" href="/publications/#C4">[C4]</a></div>
</article>
<article class="rs-card">
  <div class="rs-card-head"><img class="rs-icon" src="/icons/reliable.png" alt="" loading="lazy"><h3>Long-Term Reliability of SGD-based Methods</h3></div>
  <p class="rs-desc">Characterizing the long-term decay of the probability of failing to reach a target accuracy during training in non-convex optimization.</p><div class="rs-rule" aria-hidden="true"></div>
  <p class="rs-label">Key results</p><ul class="rs-results"><li>Exponentially decaying tail probability</li><li>Order-of-magnitude faster decay rates</li><li>Nearly matching lower bounds</li></ul>
  <div class="rs-pubs"><span class="rs-pubs-label">Representative publication:</span><a class="rs-ref" href="/publications/#C1">[C1]</a></div>
</article>
</div></section>
<section class="rs-section" aria-labelledby="rs-heading-1"><div class="rs-head"><h2 id="rs-heading-1">Collaborative Learning over Heterogeneous Networks</h2></div><div class="rs-cards">
<article class="rs-card">
  <div class="rs-card-head"><img class="rs-icon" src="/icons/heterogeneous.png" alt="" loading="lazy"><h3>Personalized Learning under Structured Heterogeneity</h3></div>
  <p class="rs-desc">Leveraging the clustered structure of data heterogeneity to achieve statistically optimal personalized learning with minimal communication.</p><div class="rs-rule" aria-hidden="true"></div>
  <p class="rs-label">Key results</p><ul class="rs-results"><li>A family of client-server methods using a single communication round</li><li>Statistically optimal mean-squared error performance</li><li>Trade-offs between clustering methods, prior knowledge, and sample complexity</li></ul>
  <div class="rs-pubs"><span class="rs-pubs-label">Representative publications:</span><a class="rs-ref" href="/publications/#J4">[J4]</a><a class="rs-ref" href="/publications/#C7">[C7]</a></div>
</article>
<article class="rs-card">
  <div class="rs-card-head"><img class="rs-icon" src="/icons/decentralized.png" alt="" loading="lazy"><h3>Reliable Optimization over Decentralized Networks</h3></div>
  <p class="rs-desc">Establishing convergence guarantees and collaboration benefits for individual training runs in decentralized learning, including under heavy-tailed noise.</p><div class="rs-rule" aria-hidden="true"></div>
  <p class="rs-label">Key results</p><ul class="rs-results"><li>Optimal rates for decentralized SGD and gradient tracking under light-tailed noise</li><li>Optimal rates for clipped DSGD under heavy-tailed noise</li><li>Linear speed-up in the number of agents for individual training runs</li></ul>
  <div class="rs-pubs"><span class="rs-pubs-label">Representative publications:</span><a class="rs-ref" href="/publications/#C2">[C2]</a><a class="rs-ref" href="/publications/#P1">[P1]</a><a class="rs-ref" href="/publications/#P3">[P3]</a></div>
</article>
</div></section>
<section class="rs-section" aria-labelledby="rs-vision-heading"><div class="rs-head"><h2 id="rs-vision-heading">Research Vision and Impact</h2></div>
<p class="rs-vision">These directions contribute to my long-term vision of developing theoretical foundations for efficient and reliable learning systems in which intelligent agents can adapt to their environment and autonomously decide when and with whom to collaborate. Beyond theoretical advances, my research aims to make learning systems more resource-efficient and dependable, and potentially more accessible, especially in resource-constrained environments.</p></section>
</div>
