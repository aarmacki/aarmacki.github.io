---
title: "Gradient Based Clustering"
collection: publications
permalink: /publication/2022-07-17-grad-based-clust
date: 2022-07-17
venue: 'Proceedings of the 39th International Conference on Machine Learning, PMLR 162:929-947'
paperurl: 'https://proceedings.mlr.press/v162/armacki22a.html'
citation: '<b>Armacki, A.</b>, Bajović, D., Jakovetić, D. &amp; Kar, S. (2022). Gradient Based Clustering. <i>Proceedings of the 39th International Conference on Machine Learning</i>, in <i>Proceedings of Machine Learning Research</i> 162:929-947.'
---

Abstract: We propose a general approach for distance based clustering, using the gradient of the cost function that measures clustering quality with respect to cluster assignments and cluster center positions. The approach is an iterative two step procedure (alternating between cluster assignment and cluster center updates) and is applicable to a wide range of functions, satisfying some mild assumptions. The main advantage of the proposed approach is a simple and computationally cheap update rule. Unlike previous methods that specialize to a specific formulation of the clustering problem, our approach is applicable to a wide range of costs, including non-Bregman clustering methods based on the Huber loss. We analyze the convergence of the proposed algorithm, and show that it converges to the set of appropriately defined fixed points, under arbitrary center initialization. In the special case of Bregman cost functions, the algorithm converges to the set of centroidal Voronoi partitions, which is consistent with prior works. Numerical experiments on real data demonstrate the effectiveness of the proposed method.