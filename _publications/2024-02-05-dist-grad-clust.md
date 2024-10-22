---
title: "A Unified Framework for Gradient-based Clustering of Distributed Data"
collection: publications
permalink: /publication/2024-02-05-dist-grad-clust
date: 2024-02-05
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2402.01302'
citation: '<b>Armacki, A.</b>, Bajović, D., Jakovetić, D., & Kar, S. (2024). A Unified Framework for Gradient-based Clustering of Distributed Data. arxiv preprint, arxiv:2402.01302'
---

Abstract: We develop a family of distributed clustering algorithms that work over networks of users. In the proposed scenario, users contain a local dataset and communicate only with their immediate neighbours, with the aim of finding a clustering of the full, joint data. The proposed family is parametrized by $\rho \geq 1$, controling the proximity of users' center estimates. Specialized to popular clustering losses like $K$-means and Huber loss, our family gives rise to novel distributed clustering algorithms, as well as novel clustering algorithms, e.g., based on the logistic function. We provide a unified analysis and establish several strong results, under mild assumptions. First, the sequence of centers generated by the methods converges to a well-defined notion of fixed point, under any center initialization and value of $\rho$. Second, as $\rho$ increases, the family of fixed points produced by our methods converges to a notion of consensus fixed points. We show that consensus fixed points are equivalent to fixed points of gradient clustering over the full data, guaranteeing a clustering of the full data is produced. For the special case of Bregman losses, we show that our fixed points converge to the set of Lloyd points. Numerical experiments on real data confirm our theoretical findings and demonstrate strong performance of the methods.