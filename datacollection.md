---
layout: page
title: "Donation-based Peer Review Data Collection at ARR"
permalink: /datacollection
---

<p align="center" style="font-style: italic">Nils Dycke, Ilia Kuznetsov, Iryna Gurevych</p>

<p align="center">Version 0.1, 09.05.2023</p>

**TL;DR:** We want to enable the study of peer reviewing at ARR by making a dataset of donated peer reviews available. Check [How can I contribute?](#how-can-i-contribute) to see how you can contribute.

ACL Rolling Review (ARR) introduced many changes to peer reviewing in our *ACL community; to maximize openness, study the effect of these changes and to attribute reviewers for their hard work at ARR, ACL launched an initiative to make peer review data of willing reviewers and authors accessible to research. The UKP Lab led by Iryna Gurevych has taken the responsibility for carrying out this initiative. This blogpost is intended to clarify open questions on this on-going process, describe reviewers’ and authors’ options to donate data and spark a discussion on this new open science initiative in the community.


>
> - [Why do we need peer reviewing data?](#why-do-we-need-peer-reviewing-data)
> - [Why do we need peer reviewing data now?](#why-do-we-need-peer-reviewing-data-now)
> - [What is the ARR data collection initiative?](#what-is-the-arr-data-collection-initiative)
> - [Who is involved?](#who-is-involved)
> - [What makes ARR data special?](#what-makes-arr-data-special)
> - [What data is collected and how?](#what-data-is-collected-and-how)
> - [As a reviewer, what do I donate?](#as-a-reviewer-what-do-i-donate)
> - [As an author, what do I donate?](#as-an-author-what-do-i-donate)
> - [What is the legal framework around ARR data collection?](#what-is-the-legal-framework-around-arr-data-collection)
> - [Who has a say?](#who-has-a-say)
> - [What happens to protected data?](#what-happens-to-protected-data)
> - [You were collecting some metadata, too?](#you-were-collecting-some-metadata-too)
> - [What’s the status of the collection?](#whats-the-status-of-the-collection)
> - [Where can I find the public data?](#where-can-i-find-the-public-data)
> - [Can data be withdrawn?](#can-data-be-withdrawn)
> - [How can I contribute?](#how-can-i-contribute)
> - [How to reach out to us?](#how-to-reach-out-to-us)
> - [Acknowledgements](#acknowledgements)
> - [Resources](#resources)
>

## Why do we need peer reviewing data?

In the *ACL community and most other research communities, peer review is the cornerstone of scientific quality control. As such, it has been and will continue to be a point of discussion regarding its efficacy, efficiency and fairness. Yet, the systematic and empirical study of peer review at *ACL has been limited by the scarcity of publicly available data, due to its closed and confidential nature.
Making peer reviewing data accessible opens up many opportunities to study peer review empirically. Publishing data...
* increases transparency of the publication process and offers a unique opportunity for public recognition of hard reviewing work.
* enables the analysis of peer reviewing practices to quantify potential strengths and weaknesses of our existing peer reviewing system.
* enables the computational study of peer review and consequentially the development of assistance systems within this context.
* permits basic research in the field of NLP, like the study of cross-document relationships.

 
## Why do we need peer reviewing data now?

Peer-review lies at the very core of the ACL community and science in general. The explosive growth of the field and of the community leads to tension related to peer review. For example, junior reviewers are helping to evaluate papers to scale to the current submission numbers, and we need tools to support their reviewing training. However, the data that is needed to enable such tools is missing. This is the main practical reason for this initiative and the main reason why we should provide such data right now.

## What is the ARR data collection initiative?
The collection of peer reviewing data has many complex ethical and legal requirements. Peer reviewing involves multiple stakeholders who all participate in the discussion and potentially in the evolution of research ideas. This makes the resulting data confidential and requires that all stakeholders participate in the decision of publishing the data. 
Based on past experiences of collection efforts at ACL-2018 and COLING-2020 and extensive discussions, the ACL has launched the current proactive data collection initiative at ARR to enable the ethically and legally sound creation of a public *ACL peer review dataset.


## Who is involved?
To roll out this initiative within the new ARR system [under defined terms](https://www.aclweb.org/adminwiki/index.php/Review_Data_Collection_at_*ACL), in 2021 the UKP Lab received a mandate by the ACL Executive board drawing from previous practical experiences in ethical review data collection and enabling the technical realization as part of the ARR team. The [ARR Team](/organization) supports this initiative including the editorial team, the communications team and the technical team.


## What makes ARR data special?
Previous peer reviewing data, e.g. from ICLR or NIPS, lack explicit consent by reviewers and clear licenses; legally and ethically this prohibits their reuse for research though it has been common  scientific practice over the past years. The data collection initiative at ARR requires consent to donation by both authors and reviewers, and attaches clear licenses for dataset stability and re-distribution.

In addition, the resulting dataset has several advantages for the development of peer review assistance systems and the study of peer review:
* The **structured forms** and metadata enable a study of bias and can serve as auxiliary signals to define and train models.
* Residing within the **NLP community**, previous methods and models that were developed for this particular domain can be applied to the dataset.
* Due to the continuous nature of ARR, the **dataset grows** with each cycle while maintaining a unified and consistent reviewing process. Unlike comparisons between heterogeneous conferences across isolated venues, this enables a reliable study of peer review **across time**.


## What data is collected and how?

We implemented the Yes-Yes-Yes (3Y) Workflow for proactive peer reviewing data collection at ARR. The core idea is simple: all stakeholders should explicitly agree to donating a submission and its associated peer reviews to the public dataset. The 3Y Workflow has three decision stages:
* **Yes by Reviewers**: Reviewers are asked once per cycle if they are willing to donate their peer review reports. This decision is made independent of peer reviewing. Only the peer reviews that were donated this way are considered in the next stages. The default is opt-out. All data is anonymized; only if reviewers choose to be attributed, their names will be listed along their peer reviews in the dataset.
* **Yes by Program Chairs**: Only reviews of papers which are eventually accepted at an *ACL conference are included in the dataset. This avoids leakage of confidential unpublished research ideas and ensures a clear status of the paper. Only the donated reviews (step 1) of accepted papers continue with the decision process.
* **Yes by Authors**: After the review process is completed and acceptance decisions are released, the authors of accepted papers are contacted. They have the option to donate their submission draft (not the camera-ready) and the donated peer reviews of their draft. Paper drafts are always attributed to authors in the dataset. 

![3Y workflow from (Dycke et al., 2022)](/images/datacollection.png)

The result of this decision process is the 3Y-Dataset, which is made public for the community. As a by-product of the 3Y Workflow at ARR, donated reviews (step 1) are added to a so-called protected dataset to enable the study of bias in the 3Y Dataset. This dataset is not published or stored at the moment; in a one-time effort, we employed this data to analyze the implications of the 3Y Workflow on the dataset bias (see the associated [EMNLP 2022 paper](https://aclanthology.org/2022.findings-emnlp.23.pdf) for details).

At the moment, only review reports and review scores, as well as submission PDFs could be donated. Currently, we are integrating the donation of author responses and amendment notes. In the future, the collection may be extended meta-reviews if this is feasible under the given legal and ethical framework. However, these changes will not be not applied retroactively and changes to the license agreements will be publicly announced in advance.


## As a reviewer, what do I donate?

When you sign the reviewer license agreement (once per month) you donate all of your peer review reports of that cycle. This includes all textual review form fields, the review and confidence scores, but no other metadata in any form. Specifically, a reviewer’s name is only donated along with the review, if the reviewer explicitly requests this in the agreement.


## As an author, what do I donate?

As an author, you can donate the PDF of the submitted draft (not the camera-ready version) including author names for attribution and the associated peer reviews that were donated by reviewers. No other meta-data can be donated. Starting in April 2023, author responses and amendment notes are also donated.


## What is the legal framework around ARR data collection?

Peer reviewing data is personal and confidential; it hereby falls under the GDPR and requires explicit consent to processing of the data. At ARR, authors and reviewers can opt to donate their peer reviewing data; unlike enforcing their publication through terms of service (ToS) of the reviewing platform, this decouples the collection from the peer reviewing process and leaves the decision up to the individual stakeholders.


Authors and reviewers both make intellectual contributions to the data – authors in the form of the paper draft and reviewers by providing feedback, hinting at related work and suggesting new ideas. Hence, the data collection should allow for attribution and protection of intellectual property. At ARR, reviewers and authors donate their data by signing a license transfer agreement permitting the redistribution of the data under clear terms. Hereby, optional attribution and protection of intellectual property are ensured. At the same time, license transfer guarantees dataset stability, as the redistribution of data is granted as long as the conditions of the license transfer are met.


## Who has a say?

As described in [What data is collected and how?](#what-data-is-collected-and-how), we apply the 3Y-principle: reviewers, conference chairs and authors all have to agree on the donation of the paper draft and peer review data, before they are eligible for publication. 


## What happens to protected data?
As described in [What data is collected and how?](#what-data-is-collected-and-how), a by-product of the data collection is a protected dataset of peer reviews donated by reviewers. This dataset cannot be published. For internal research and record-keeping purposes, it is accessible to the ARR board and the responsible representative of the ACL Exec.

As such, protected data has been used in a one-time effort to quantify participation biases of the peer review data collection at ARR. The protected dataset is currently not stored or used in any other studies.


## You were collecting some metadata, too?
In parallel to the license-based collection of peer review reports and paper drafts using the 3Y Workflow, a consent-based collection of anonymous peer review meta-data (including only review scores) was launched. To identify the willingness of authors and reviewers to donate just this numeric, less sensitive data to research, this effort was carried out since the first iteration of ARR. Authors are asked for their consent during paper submission, while reviewers have the chance to consent after submitting a review.

Yet, technical limitations led to low visibility and low participation rates by reviewers. Consequently, the collection of metadata is discontinued henceforth.


## What’s the status of the collection?

Peer review reports of the last seven months were donated (since September 2021) and accepted authors at ACL’22, NAACL’22 and *SEM’22 could contribute their data to this effort. See the associated [EMNLP 2022 paper](https://aclanthology.org/2022.findings-emnlp.23.pdf) for an overview on the exact numbers. The data has been released [here](https://tudatalib.ulb.tu-darmstadt.de/handle/tudatalib/3618); you can find an overview on the data in the associated [ACL 2023 paper](https://arxiv.org/pdf/2211.06651.pdf). We are continuously working on improving and streamlining the process; ultimately, this collection should become part of the ACL infrastructure.


## Where can I find the public data?
The data is published through the dataset outlet of the collecting party at the UKP Lab, Technical University of Darmstadt. The data has been released [here](https://tudatalib.ulb.tu-darmstadt.de/handle/tudatalib/3618); you can find an overview on the data in the associated [ACL 2023 paper](https://arxiv.org/pdf/2211.06651.pdf). When the technical conditions for the safe data storage of licenses and provision of the reviewing data have been arranged, the data will be published directly within the ACL Anthology. This transition is in progress.

## Can data be withdrawn?
Legally, neither review reports nor paper drafts can be retracted retro-actively. When fulfilling the requirements of the license transfer agreement, the ACL has the irrevocable right to distribute the data under the given terms. This is the exact same legal mechanism underlying the publication of scientific work where authors grant this permission to the conference or journal without the option of withdrawal. 


Practically, the retraction of individual data points is not feasible after the publication of the dataset: derivative datasets, e.g. annotated versions of the corpus, distributed by third parties under the given terms are out of reach for the collecting party. Discarding data points after publication is hereby practically impossible as these cannot be removed from derivative datasets. Yet, for exceptional cases, reasonable effort will be spent to discard individual data points upon request without guaranteeing their removal from derivative datasets.

## How can I contribute?
You can contribute your data to the corpus via signing the respective license transfer agreements. If you have concerns about publishing individual reviews, you should opt out of the donation for this paper or ARR cycle. If you have any feedback, questions or concerns, please reach out to us.

As a reviewer, you can find the current cycle’s license transfer agreement in your [task log of OpenReview](https://openreview.net/tasks). Follow the link, decide on the attribution and sign the agreement digitally. 

As an author, you will be contacted by email including detailed instructions after your paper got accepted at a *ACL conference. In the forum of your accepted paper, you can find a new button “License Agreement”; after clicking this button, you decide on which data to contribute and sign the license agreement digitally. Only one of the authors has to do this on behalf of all co-authors.


## How to reach out to us?
You can reach the collecting party directly via email (arr-data [at] ukp.informatik.tu-darmstadt.de) or through an [anonymous feedback form](https://nextcloud.ukp.informatik.tu-darmstadt.de/index.php/apps/forms/s/5rg9HSesqw3eApE2bKrkZYeZ).



## Acknowledgements 

For this blogpost we thank the Editors in Chief (Jun Suzuki, Lilja Øvrelid, Mausam, Thamar Solorio, Viviane Moreira) for their comments and suggestions. The data collection has been enabled by the support of the ARR technical team and the current and former EiC board. A special thanks goes to Amanda Stent, Sebastian Riedel and Goran Glavas for their feedback and help during the initial phase of the data collection.

## Resources  

* Dycke, Nils, Ilia Kuznetsov, and Iryna Gurevych. "[Yes-yes-yes: Proactive data collection for ACL rolling review and beyond.](https://aclanthology.org/2022.findings-emnlp.23)" Findings of the Association for Computational Linguistics: Empirical Methods in Natural Language Processing (EMNLP) 2022. 2022.
* Dycke, Nils, Ilia Kuznetsov, and Iryna Gurevych. "[NLPEER: A Unified Resource for the Computational Study of Peer Review.](https://arxiv.org/pdf/2211.06651.pdf)" to appear at the 61st Annual Meeting of the Association for Computational Linguistics (ACL 2023). 2023.
