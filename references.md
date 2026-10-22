---
layout: page_toc
title: "ARR guidelines on problematic references"
permalink: /references
redirect_from: /refs
---

This document is intended to supplement the existing [policy on review and citation](https://www.aclweb.org/adminwiki/index.php/ACL_Policies_for_Review_and_Citation), providing clarification on cases that arose in recent practice at \*CL venues, in particular due to widespread use of generative AI. This document provides guidance for handling common cases observed so far. It may evolve with practice.

# Severe violations

The following cases are considered 'severe', and the chairs have the discretion to recommend desk rejection for submissions found to contain such cases.  

## Non-existing references

E.g.

```
Bethard Steven, Schwartz Roy. 2026. On the challenges of coming up with peer review policies. arXiv preprint arXiv:2312.06752.
```

There is no such paper, and the listed arXiv ID (2312.06752) leads to an unrelated paper on quantum circuits.

## The hyperlink, DOI or identifier points to another paper

E.g. in paper:


```
Bethard S. 2022. We need to talk about random seeds. Preprint, arXiv:2005.00636
```

but the cited url goes to a different paper: [https://arxiv.org/abs/2005.00636](https://arxiv.org/abs/2005.00636) "We need to talk about random splits"

The correct reference should have been:

```
Bethard S. 2022. We need to talk about random seeds. Preprint, arXiv:2210.13393
```

If multiple identifiers are included, all of them should be pointing to the same resource.

Note that per [ACL formatting guidelines](https://acl-org.github.io/ACLPUB/formatting.html#references), all web-based resources are expected to come with a link. DOI is preferable to URLs when it is available.

## More than 1 author or more than 20% of the authors are listed incorrectly

E.g. a partly incorrect version:

```
Tobias Gårdhus, Nikolas Vitzilaios, Lejre Frederiksen, Anna Rogers, Hjalmar Carlsson. 2026. AInterviewer: A Platform for Designing and Conducting AI-led Qualitative Interviews. ACL 2026, https://aclanthology.org/2026.acl-demo.12
```

The real reference:

> Tobias Gårdhus, Nikolas Vitsakis, Fie Lejre Frederiksen, Anna Rogers, Hjalmar Bang Carlsen. 2026. AInterviewer: A Platform for Designing and Conducting AI-led Qualitative Interviews. ACL 2026, https://aclanthology.org/2026.acl-demo.12/

(there are no other versions of this paper with the stated list of authors)

The cases where the author list is incomplete have to adhere to the official truncation rules set by the ACL style files. As with other formatting rules, the authors are expected to follow the latest official style sheet. For example, the following is disallowed, since the truncation currently only applies to very long author lists: 

```
Gårdhus T. and others. AInterviewer: A Platform for Designing and Conducting AI-led Qualitative Interviews. ACL 2026, https://aclanthology.org/2026.acl-demo.12/ 
```

## Citations that misrepresent the content of the cited sources

All cited sources are expected to be adequately represented in submissions. If the reference itself is real, but the accompanying text does not accurately represent its content, this suggests that the authors have not considered the cited text in sufficient detail.

Whether such citations are a result of 'vibe citing', or simply poor reading practices, this is a serious flaw indicating that the submission is not ready for serious consideration by the scholarly community. This includes claims taken out of context: e.g. in skimming a paper it may be unclear that the cited claim has an important further clarification. Misrepresenting the similarity to the existing work is a particularly egregious case.

# Mild violations

Sometimes there are good-faith mistakes and errors in the references that are due to external factors, which do not indicate a malpractice and could be treated more leniently. In such cases, the chairs have the discretion to only issue a warning for a fix in camera-ready, and authors should confirm that this will be done. In particular the following cases could be considered 'mild':  

- Accidental small typos (e.g. a few letters or a number incorrect), provided that the rest of the reference is correct and the paper is unambiguously identified by the title, author list and the URL 
- incorrectly formatted references or incomplete references that can be proved to have been sourced from common resources such as Google Scholar, DBLP or Semantic Scholar
- URLs which appear non-existing because the original resources went down, but which can be documented with e.g. Wayback Machine
- differences in author lists that can be attributed to several existing versions of paper with different author lists
- errors in only the year of publication, given that the authors, title and identifier are correct, especially when this is due to several existing copies (e.g. if a preprint came out in 2024, but the final publication is from 2025)
- incorrectly formatted references that can be proved to be caused by a software bug (e.g. Zotero recently had an [issue](https://forums.zotero.org/discussion/93150/) that affected some of the ARR users), or incorrect export setting (e.g. biblatex/bibtex confusion)
- minor issues in citation accuracy, e.g. small mistakes in the cited numbers or minor misunderstandings

Overall, it is the authors' responsibility to ensure that the bibliography meets the standards pre-submission. The chairs and reviewers cannot be expected to investigate every problematic reference case for all the possible bugs that could have led to it. If there is a problem with a reference that led to a desk rejection, but the case can be proven to be one of the 'mild' ones, the authors can appeal and provide the evidence.

Poor citation practices may accompany literature search that is overall superficial. This by itself does not automatically trigger desk rejection. However, unlike the above cases, reviewers or area chairs finding this problem should substantially lower their overall assessment.

**Citation variations not considered problematic**

- common abbreviations. E.g. the full conference proceedings title maybe something like 'Proceedings of the 56th conference of the Association for Computational Linguistics', but it is not uncommon to see it abbreviated to 'ACL', even though this is not the official record
- omission of some common metadata fields, such as publisher. 

**What is minimally required for a reference?**

The appropriate metadata fields vary by the type of item, and not all of them are clearly described. Defining the correct formatting of all the possible fields for all possible item types is not in scope of the current policy. We acknowledge that there may be legitimate disagreements about the proper way to cite e.g. legal cases, social media posts or repository issues, and we encourage the community to further develop the documentation. We further acknowledge that there is variation in the fields even across ACL Anthology itself, which precludes any clear-cut requirements for a comprehensive set of metadata fields to include.

However, most of the references in the current submissions are for web resources. For them, a basic requirement is to correctly list the authors, title, year, and [some way to locate the resource (URL and/or DOI)](https://acl-org.github.io/ACLPUB/formatting.html#references).

# Penalties 

**Desk rejection threshold.** Submissions with citation issues may vary considerably in the volume and severity of the violations, and their cause is not always clear. The 'mild' violations, as a general recommendation, could be issued warnings to fix the problem in the camera-ready. The severe violations, as a general recommendation, qualify for a desk reject. The editors may use discretion when the cases are not clear-cut.  

# Overall best practice recommendations

We recommend that the authors of submissions to \*CL venues follow the following principles: 

- Literature search is overall the starting point of research, not something to do once the work is mostly completed. Hence, the workflows that include the suggestions of 'missing' references are inherently secondary to the initial search, and depend on its thoroughness. Furthermore, when we start from a conclusion, we bias ourselves, and introduce an incentive to cherry-pick the references and to minimize any prior work that comes too close.  
- Always get the bibtex references directly from the official sources (e.g. ACL Anthology, published OpenReview versions, arxiv). E.g. references for the same papers coming from Google scholar may already contain errors.
- Ensure that each source is correctly identified by at least the authors, year, title, and URL or identifier.
- When using Zotero or other managers to auto-fetch metadata for pdfs or automatically parse metadata for saved pages, please [check that the result is correct](https://forums.zotero.org/discussion/57418/).
- Do not use any AI for formatting references. ARR had cases for a long time when students were trying to e.g. convert APA-formatted citations to bibtex. Generative tools cannot guarantee that the copying operation is reliable, and even if they could - references formatted in different styles may not even preserve all the information needed for this conversion.
- Needless to say, ensure that each reference fully supports the claims being attributed to it! 
