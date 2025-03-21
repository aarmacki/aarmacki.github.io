---
title: "Personalized Federated Learning via Convex Clustering"
collection: publications
permalink: /publication/2022-09-26-per-fl-via-cvx-clust
date: 2022-09-26
venue: 'IEEE International Smart Cities Conference (ISC2)
'
paperurl: 'https://ieeexplore.ieee.org/abstract/document/9921863'
citation: '<b>Armacki, A.</b>, Bajović, D., Jakovetić, D., &amp; Kar, S. (2022). <i>Personalized Federated Learning via Convex Clustering.</i> In IEEE International Smart Cities Conference (ISC2), Pafos, Cyprus, pp. 1-7, doi: 10.1109/ISC255366.2022.9921863.'
---

Abstract: We propose a parametric family of algorithms for personalized federated learning with locally convex user costs. The proposed framework is based on a generalization of convex clustering in which the differences between different users' models are penalized via a sum-of-norms penalty, weighted by a penalty parameter $\lambda$. The proposed approach enables “automatic” model clustering, without prior knowledge of the hidden cluster structure, nor the number of clusters. Analytical bounds on the weight parameter, that lead to simultaneous personalization, generalization and automatic model clustering are provided. The solution to the formulated problem enables personalization, by providing different models across different clusters, and generalization, by providing models different than the per-user models computed in isolation. We then provide an efficient algorithm based on the Parallel Direction Method of Multipliers (PDMM) to solve the proposed formulation in a federated server-users setting. Numerical experiments corroborate our findings. As an interesting byproduct, our results provide several generalizations to convex clustering.