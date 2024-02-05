---
title: "High-probability Convergence Bounds for Nonlinear Stochastic Gradient Descent Under Heavy-tailed Noise"
collection: publications
permalink: /publication/2023-10-31-heavy-tail-nonlin
date: 2023-10-31
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2310.18784'
citation: '<b>Armacki, A.</b>, Sharma, P., Joshi, G., Bajović, D., Jakovetić, D., & Kar, S. (2023). High-probability Convergence Bounds for Nonlinear Stochastic Gradient Descent Under Heavy-tailed Noise. arxiv preprint, arxiv:2310.18784.'
---

[Download paper here](https://arxiv.org/pdf/2310.18784.pdf)

Abstract: Several recent works have studied the convergence <i>in high probability</i> of stochastic gradient descent (SGD) and its clipped variant. Compared to vanilla SGD, clipped SGD is practically more stable and has the additional theoretical benefit of logarithmic dependence on the failure probability. However, the convergence of other practical nonlinear variants of SGD, e.g., sign SGD, quantized SGD and normalized SGD, that achieve improved communication efficiency or accelerated convergence is much less understood. In this work, we study the convergence bounds <i>in high probability</i> of a broad class of nonlinear SGD methods. For strongly convex loss functions with Lipschitz continuous gradients, we prove a logarithmic dependence on the failure probability, even when the noise is heavy-tailed. Strictly more general than the results for clipped SGD, our results hold for any nonlinearity with bounded (component-wise or joint) outputs, such as clipping, normalization, and quantization. Further, existing results with heavy-tailed noise assume bounded $\eta$-th central moments, with $\eta \in (1,2]$. In contrast, our refined analysis works even for $\eta=1$, strictly relaxing the noise moment assumptions in the literature.