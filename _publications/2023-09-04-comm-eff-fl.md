---
title: "Communication Efficient Model-aware Federated Learning for Visual Crowd Counting and Density Estimation in Smart Cities"
collection: publications
permalink: /publication/2023-09-04-comm-eff-fl
date: 2023-09-04
venue: 'EUSIPCO 2023 31st European Signal Processing Conference'
paperurl: 'https://eurasip.org/Proceedings/Eusipco/Eusipco2023/pdfs/0000875.pdf'
citation: 'Armacki, A., Milosevic, N., Bajovic, D., Kar, S., Jakovetic, D., Bakhtiarnia, A., Esterle, L., Muscat, A., & Festi, T. (2023). Communication Efficient Model-aware Federated Learning for Visual Crowd Counting and Density Estimation in Smart Cities. EUSIPCO 2023 31st European Signal Processing Conference, Helsinki, Finland.'
---

[Download paper here](https://github.com/dusanjakovetic/FLVCC/blob/main/FLforVCCv2.pdf)

Abstract: Federated learning (FL) is an attractive paradigm where a number of users can improve their local models via sharing trained models or model increments with a central server, while the users’ data is kept private. However, when model sizes are huge, FL incurs a significant communication overhead. In such scenarios, strategies that perform user sampling, so that only informative users communicate their models to the server, are desired. In this paper, we make several contributions on user sampling in FL. On the theoretical side, we consider a general framework that exhibits user heterogeneity across several dimensions: activation probabilities, gradient noise variance, number of updates per epoch, and communication channel quality. In this setting, we derive convergence rate of the FedAvg method. The rate explicitly characterizes the effects of heterogeneity and enables us to derive optimal user sampling probabilities in an offline setting, when the sampling probabilities are pre-computed. We then show how these derived probabilities naturally connect with existing optimized sampling strategies in an adaptive-online setting. On the practical side, we study visual crowd counting (VCC) as a representative deep learning application with hugesized models. We provide an implementation of the FL system over real-world data across three pilot sites–Valetta, Trento and Novi Sad. The evaluation results demonstrate significant model accuracy benefits through employing FL over the multiple cities, and significant communication savings via non-uniform user sampling strategies.