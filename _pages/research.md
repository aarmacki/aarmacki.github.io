---
layout: archive
title: ""
permalink: /research/
author_profile: true
---

<style>
/* Three introductory boxes */
.structure-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.5rem;
}

.structure-card {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1rem 1.1rem;
  background: #fafafa;
}

.structure-card h3 {
  font-size: 0.98rem;
  line-height: 1.35;
  margin: 0 0 0.6rem;
}

.structure-card ul {
  margin: 0;
  padding-left: 1.1rem;
  font-size: 0.88rem;
  line-height: 1.55;
}

.structure-card li {
  margin-bottom: 0.35rem;
}

.structure-card li:last-child {
  margin-bottom: 0;
}

/* Four research cards */
.research-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.25rem 0 2rem;
}

.research-card {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  background: #fff;
}

.research-card h3 {
  font-size: 1rem;
  line-height: 1.4;
  margin: 0 0 0.75rem;
}

.research-card p {
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0 0 0.75rem;
}

.research-card .research-papers {
  margin-top: auto;
  margin-bottom: 0;
  font-size: 0.85rem;
}

/* Responsive layout */
@media (max-width: 800px) {
  .structure-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 650px) {
  .research-grid {
    grid-template-columns: 1fr;
  }
}

.research-card .key-results {
  margin: 0 0 0.75rem;
}

.research-card .key-results p {
  margin: 0 0 0.2rem;
}

.research-card .key-results ul {
  margin: 0;
  padding-left: 1.25rem;
  font-size: 0.9rem;
  line-height: 1.5;
}

.research-card .key-results li {
  margin-bottom: 0.2rem;
}

</style>



My research is motivated by the following fundamental question:

<div style="text-align: center; margin: 1.5rem 1rem;">
  <em>What performance guarantees are achievable in learning systems under the challenges encountered in practice, and how can we design algorithms that attain these guarantees?</em>
</div>

To answer this question, I aim to identify and exploit structural properties of the underlying problem, which may arise from stochastic dynamics of training or statistical properties of the data. I have pursued this agenda in two directions: robust and reliable stochastic optimization and collaborative learning over heterogeneous networks.


## Robust and Reliable Stochastic Optimization

<div class="research-grid">

  <div class="research-card">
    <h3>Robust Optimization under Heavy-Tailed Noise</h3>
    <p>
      Exploiting the interplay of noise symmetry and nonlinear gradient transformations to establish
      convergence guarantees beyond classical moment assumptions.
    </p>
    <div class="key-results">
      <p><strong>Key results:</strong></p>
      <ul>
        <li>Unified framework for nonlinear SGD</li>
        <li>Moment-independent guarantees</li>
        <li>Novel symmetrization-based methods</li>
      </ul>
    </div>
    <p class="research-papers">
      Representative publications:
      <a href="/publications/#J1">[J1]</a>, <a href="/publications/#J2">[J2]</a>, <a href="/publications/#C4">[C4]</a>
    </p>
  </div>

  <div class="research-card">
    <h3>Long-Term Reliability of SGD-based Methods</h3>
    <p>
      Characterizing the long-term decay of the probability of failing to reach a target
      accuracy during training in non-convex optimization.
    </p>
    <div class="key-results">
      <p><strong>Key results:</strong></p>
      <ul>
        <li>Exponentially decaying tail probability</li>
        <li>Order-of-magnitude faster decay rates</li>
        <li>Nearly matching lower bounds</li>
      </ul>
    </div>
    <p class="research-papers">
      Representative publication:
      <a href="/publications/#C1">[C1]</a>
    </p>
  </div>

</div>

## Collaborative Learning over Heterogeneous Networks

<div class="research-grid">

  <div class="research-card">
    <h3>Personalized Learning under Structured Heterogeneity</h3>
    <p>
      Leveraging the clustered structure of data heterogeneity to achieve statistically optimal
      personalized learning with minimal communication.
    </p>
    <div class="key-results">
      <p><strong>Key results:</strong></p>
      <ul>
        <li>A family of methods using a single communication round</li>
        <li>Statistically optimal performance guarantees</li>
        <li>Trade-offs between clustering methods, prior knowledge, and sample complexity</li>
      </ul>
    </div>
    <p class="research-papers">
      Representative publications:
      <a href="/publications/#J4">[J4]</a>, <a href="/publications/#C7">[C7]</a>
    </p>
  </div>

  <div class="research-card">
    <h3>Reliable Optimization over Decentralized Networks</h3>
    <p>
      Establishing convergence guarantees and collaboration benefits for individual training runs in decentralized learning, including under heavy-tailed noise.
    </p>
    <div class="key-results">
      <p><strong>Key results:</strong></p>
      <ul>
        <li>Optimal rates for decentralized SGD and gradient tracking under light-tailed noise</li>
        <li>Optimal rates for clipped DSGD under heavy-tailed noise</li>
        <li>Linear speed-up in the number of agents for individual training runs</li>
      </ul>
    </div>
    <p class="research-papers">
      Representative publications:
      <a href="/publications/#C2">[C2]</a>, <a href="/publications/#P1">[P1]</a>, <a href="/publications/#P3">[P3]</a>
    </p>
  </div>

</div>

## Research Vision and Impact

These directions contribute to my long-term vision of developing theoretical foundations for efficient and reliable learning systems in which intelligent agents can adapt to their environment and autonomously decide when and with whom to collaborate. Beyond theoretical advances, my research aims to make learning systems more resource-efficient and dependable, and potentially more accessible, especially in resource-constrained environments.
