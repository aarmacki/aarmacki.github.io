---
title: "Toward Understanding the Improved Robustness to Initialization in Distributed Clustering"
collection: publications
permalink: /publication/2025-05-01-toward-under-dist
date: 2025-05-01
venue: '33rd European Signal Processing Conference'
paperurl: 'https://github.com/aarmacki/aarmacki.github.io/blob/master/publications/dist_clust_init.pdf'
citation: '<b>Armacki, A.</b>, &amp; Kar, S. (2025). <i>Toward Understanding the Improved Robustness to Initialization in Distributed Clustering.</i> To appear in 33rd European Signal Processing Conference.'
---

Abstract: It is well-known that the performance of many clustering algorithms is strongly affected by center initialization. Recently, a number of papers empirically showed that distributed clustering algorithms exhibit improved robustness to center initialization compared to their centralized counterparts. In this paper we provide a theoretical justification for this phenomena, by studying the statistical guarantees of a distributed center initialization method, inspired by the celebrated $K$-means++ approach. In the presence of $K$ distinct data populations and the client-server setup, where each user contains a chunk of the data and communicates directly with the server, we establish mean-squared error (MSE) guarantees of the proposed initialization scheme, in terms of the gap from the population means. We show under mild assumptions that the probability of a population not being represented in the center initialization decays exponentially in the number of users, implying that the MSE approaches the optimal error exponentially fast as the number of users grows. Our result provides the first theoretical explanation for the improved robustness to center initialization exhibited by distributed clustering algorithms in practice.