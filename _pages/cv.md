---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
---

<style>
/* CV-only styles: scoped to .cv-refresh; no other page or navigation is affected. */
.cv-refresh { --cv-ink:#293e50; --cv-blue:#356e99; --cv-muted:#657b8b; --cv-line:#dfe8ef; color:#394d5b; }
.cv-refresh, .cv-refresh * { box-sizing:border-box; }
.cv-refresh a { color:#2e6c99; text-underline-offset:2px; }
.cv-refresh a:focus-visible { outline:2px solid #85b7d8; outline-offset:3px; border-radius:2px; }
.cv-refresh .cv-actions { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:.85rem; margin:.1rem 0 2.2rem; }
.cv-refresh .cv-updated { color:#788995; font-size:.8rem; margin:0; }
.cv-refresh .cv-download { display:inline-flex; justify-content:center; align-items:center; gap:.5rem; padding:.6rem .92rem; text-decoration:none; border:1px solid #cee1ed; border-radius:8px; background:#f0f7fb; color:#2f6c97; font-size:.82rem; line-height:1.3; font-weight:720; transition:background-color .16s ease,border-color .16s ease; }
.cv-refresh .cv-download:hover { background:#e6f1f8; border-color:#b8d5e6; text-decoration:none; }
.cv-refresh .cv-download svg { width:16px; height:16px; }
.cv-refresh .cv-section { margin:2.45rem 0 0; }
.cv-refresh .cv-head { margin:0 0 1.1rem; border-bottom:1px solid var(--cv-line); padding:0 0 .63rem; }
.cv-refresh .cv-head h2 { color:#273e51; font-size:1.45rem; line-height:1.3; font-weight:720; border:0; margin:0; padding:0; }
.cv-refresh .cv-intro { font-size:.88rem; color:#597181; line-height:1.75; margin:0; }
.cv-refresh .cv-exp-list { position:relative; display:grid; gap:0; }
.cv-refresh .cv-exp-list::before { content:''; position:absolute; left:171px; top:16px; bottom:19px; width:2px; background:#dbe8f2; }
.cv-refresh .cv-exp { display:grid; grid-template-columns:150px 16px minmax(0,1fr); gap:14px; position:relative; padding:.2rem 0 1.34rem; }
.cv-refresh .cv-exp:last-child { padding-bottom:0; }
.cv-refresh .cv-period { text-align:right; padding-top:.1rem; color:#617f94; font-size:.76rem; font-weight:670; line-height:1.5; white-space:nowrap; }
.cv-refresh .cv-point { position:relative; align-self:start; justify-self:center; width:12px; height:12px; border:3px solid #81adcb; border-radius:50%; background:#fff; z-index:1; margin-top:.2rem; }
.cv-refresh .cv-exp-detail { min-width:0; padding:0 0 .25rem; }
.cv-refresh .cv-exp-detail h3 { color:#2a526d; font-size:1rem; font-weight:730; line-height:1.4; margin:-.12rem 0 .16rem; }
.cv-refresh .cv-org { font-size:.87rem; line-height:1.55; color:#415a6b; font-weight:570; margin:0; }
.cv-refresh .cv-meta { font-size:.8rem; line-height:1.58; color:#7a8e9c; margin:.17rem 0 0; }
.cv-refresh .cv-advisor { font-size:.81rem; line-height:1.6; color:#657b8a; margin:.14rem 0 0; }
.cv-refresh .cv-list-card { border:1px solid #e0e8ef; border-radius:11px; background:linear-gradient(155deg,#fafcfe,#fff 54%); box-shadow:0 2px 12px rgba(26,56,78,.027); overflow:hidden; }
.cv-refresh .cv-ed-row { display:flex; align-items:flex-start; justify-content:space-between; gap:1rem; padding:1.04rem 1.18rem; border-bottom:1px solid #e9eef3; }
.cv-refresh .cv-ed-row:last-child { border-bottom:0; }
.cv-refresh .cv-ed-details { min-width:0; }
.cv-refresh .cv-ed-details h3 { font-size:.96rem; color:#2d526c; font-weight:725; line-height:1.42; margin:0 0 .2rem; }
.cv-refresh .cv-ed-details p { font-size:.83rem; line-height:1.62; color:#647c8c; margin:0; }
.cv-refresh .cv-year { flex-shrink:0; font-size:.76rem; font-weight:740; line-height:1.4; background:#edf5fa; color:#43749a; border:1px solid #deebf3; border-radius:6px; padding:.3rem .52rem; white-space:nowrap; }
.cv-refresh .cv-inline-link { font-size:.87rem; line-height:1.75; margin:0; color:#526b7b; }
.cv-refresh .cv-inline-link a { font-weight:700; text-decoration:none; }
.cv-refresh .cv-inline-link a:hover { text-decoration:underline; }
.cv-refresh .cv-awards { display:grid; gap:0; }
.cv-refresh .cv-award { display:grid; grid-template-columns:55px minmax(0,1fr); gap:1.05rem; align-items:start; padding:.93rem 0; border-bottom:1px solid #e9eef2; }
.cv-refresh .cv-award:first-child { padding-top:.25rem; }
.cv-refresh .cv-award:last-child { border-bottom:0; }
.cv-refresh .cv-award .cv-year { justify-self:start; }
.cv-refresh .cv-award strong { font-size:.89rem; line-height:1.5; color:#2d4f67; display:block; font-weight:720; }
.cv-refresh .cv-award p { margin:.16rem 0 0; font-size:.83rem; line-height:1.62; color:#6a8090; }
.cv-refresh .cv-small-list { margin:0; padding:0; list-style:none; }
.cv-refresh .cv-small-list li { font-size:.86rem; color:#5b7181; line-height:1.75; margin:0 0 .75rem; }
.cv-refresh .cv-small-list li:last-child { margin-bottom:0; }
.cv-refresh .cv-small-list strong { color:#3a5d76; font-weight:720; }
.cv-refresh .cv-mentor-sublist { list-style:none; margin:.45rem 0 .15rem; padding:0 0 0 1rem; }
.cv-refresh .cv-mentor-sublist li { position:relative; margin:0 0 .38rem; padding-left:.6rem; }
.cv-refresh .cv-mentor-sublist li::before { content:'•'; position:absolute; left:-.1rem; color:#8aafc9; }
.cv-refresh .cv-inline-link.cv-detail-link { margin-top:1.12rem; }
.cv-refresh .cv-small-list a { font-weight:680; }
.cv-refresh .cv-talks { display:grid; gap:0; }
.cv-refresh .cv-talk { display:grid; grid-template-columns:57px minmax(0,1fr); gap:1rem; padding:.73rem .15rem; border-bottom:1px solid #e9eef2; align-items:start; }
.cv-refresh .cv-talk:last-child { border-bottom:0; }
.cv-refresh .cv-talk-year { font-size:.78rem; font-weight:740; color:#5d83a0; line-height:1.5; }
.cv-refresh .cv-talk-name { color:#3c596d; font-size:.86rem; line-height:1.54; font-weight:650; }
.cv-refresh .cv-talk-place { color:#8292a0; font-size:.78rem; line-height:1.55; margin-top:.1rem; }
@media(max-width:640px) {
 .cv-refresh .cv-exp-list::before { left:5px; top:11px; bottom:10px; }
 .cv-refresh .cv-exp { grid-template-columns:12px minmax(0,1fr); column-gap:16px; padding-bottom:1.27rem; }
 .cv-refresh .cv-period { grid-column:2; grid-row:1; text-align:left; padding-top:0; margin-bottom:.23rem; }
 .cv-refresh .cv-point { grid-column:1; grid-row:1/3; width:12px; height:12px; margin-top:.12rem; }
 .cv-refresh .cv-exp-detail { grid-column:2; grid-row:2; }
 .cv-refresh .cv-actions { align-items:flex-start; }
}
@media(max-width:420px) {
 .cv-refresh .cv-ed-row { padding:.9rem .85rem; gap:.7rem; }
 .cv-refresh .cv-ed-details h3 { font-size:.89rem; }
 .cv-refresh .cv-year { font-size:.72rem; }
 .cv-refresh .cv-award { gap:.65rem; }
 .cv-refresh .cv-talk { gap:.55rem; grid-template-columns:46px minmax(0,1fr); }
}
@media(prefers-reduced-motion:reduce){ .cv-refresh .cv-download { transition:none; } }
</style>

<div class="cv-refresh">
 <div class="cv-actions"><p class="cv-updated">Last updated: October 2026</p><a class="cv-download" href="/cv/AleksandarArmacki_CV.pdf" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 17v3h16v-3"/></svg> Download full CV (PDF)</a></div>
 <section class="cv-section" aria-labelledby="cv-experience"><div class="cv-head"><h2 id="cv-experience">Experience</h2></div><div class="cv-exp-list">
<article class="cv-exp">
 <div class="cv-period">Sep 2025 - Present</div><span class="cv-point" aria-hidden="true"></span>
 <div class="cv-exp-detail"><h3>Post-doctoral researcher</h3><p class="cv-org">École Polytechnique Fédérale de Lausanne (EPFL)</p><p class="cv-meta">Lausanne, Switzerland</p><p class="cv-advisor">Advisor: Prof. Ali H. Sayed</p></div>
</article>
<article class="cv-exp">
 <div class="cv-period">Aug 2020 - Aug 2025</div><span class="cv-point" aria-hidden="true"></span>
 <div class="cv-exp-detail"><h3>Graduate research assistant</h3><p class="cv-org">Carnegie Mellon University</p><p class="cv-meta">Pittsburgh, PA, USA</p><p class="cv-advisor">Advisor: Prof. Soummya Kar</p></div>
</article>
<article class="cv-exp">
 <div class="cv-period">Sep 2019 - Dec 2019</div><span class="cv-point" aria-hidden="true"></span>
 <div class="cv-exp-detail"><h3>Visiting researcher</h3><p class="cv-org">University of Pennsylvania</p><p class="cv-meta">Philadelphia, PA, USA</p><p class="cv-advisor">Advisor: Prof. Alejandro Ribeiro</p></div>
</article>
<article class="cv-exp">
 <div class="cv-period">Nov 2018 - Jun 2020</div><span class="cv-point" aria-hidden="true"></span>
 <div class="cv-exp-detail"><h3>Junior researcher</h3><p class="cv-org">Faculty of Sciences, University of Novi Sad</p><p class="cv-meta">Novi Sad, Serbia</p><p class="cv-advisor">Advisor: Prof. Dušan Jakovetić</p></div>
</article>
<article class="cv-exp">
 <div class="cv-period">Jul 2018 - Oct 2018</div><span class="cv-point" aria-hidden="true"></span>
 <div class="cv-exp-detail"><h3>Junior researcher</h3><p class="cv-org">BioSense Institute, University of Novi Sad</p><p class="cv-meta">Novi Sad, Serbia</p></div>
</article>
<article class="cv-exp">
 <div class="cv-period">Feb 2018 - Jul 2018</div><span class="cv-point" aria-hidden="true"></span>
 <div class="cv-exp-detail"><h3>Visiting researcher</h3><p class="cv-org">Faculty of Computer and Information Science, University of Ljubljana</p><p class="cv-meta">Ljubljana, Slovenia</p><p class="cv-advisor">Advisor: Prof. Blaž Zupan</p></div>
</article>
</div></section>
 <section class="cv-section" aria-labelledby="cv-education"><div class="cv-head"><h2 id="cv-education">Education</h2></div><div class="cv-list-card">
<div class="cv-ed-row"><div class="cv-ed-details"><h3>Ph.D. in Electrical and Computer Engineering</h3><p>Carnegie Mellon University · Pittsburgh, PA, USA</p></div><span class="cv-year">2025</span></div>
<div class="cv-ed-row"><div class="cv-ed-details"><h3>M.Sc. in Applied Mathematics</h3><p>Faculty of Sciences, University of Novi Sad · Novi Sad, Serbia</p></div><span class="cv-year">2018</span></div>
<div class="cv-ed-row"><div class="cv-ed-details"><h3>B.Sc. in Applied Mathematics</h3><p>Faculty of Sciences, University of Novi Sad · Novi Sad, Serbia</p></div><span class="cv-year">2016</span></div>
</div></section>
 <section class="cv-section" aria-labelledby="cv-publications"><div class="cv-head"><h2 id="cv-publications">Publications</h2></div><p class="cv-inline-link">For a complete list of journal articles, conference papers, preprints, and textbooks, see my <a href="/publications/">Publications page →</a></p></section>
 <section class="cv-section" aria-labelledby="cv-awards"><div class="cv-head"><h2 id="cv-awards">Awards and Honors</h2></div><div class="cv-awards">
<div class="cv-award"><span class="cv-year">2026</span><div><strong>ICML Gold Reviewer</strong><p>Awarded to the top 25% of reviewers based on Area Chair ratings.</p></div></div>
<div class="cv-award"><span class="cv-year">2023</span><div><strong>IBM PhD Fellowship - Finalist</strong><p>One of three nominees from the ECE Department, Carnegie Mellon University.</p></div></div>
<div class="cv-award"><span class="cv-year">2020</span><div><strong>Dean’s Fellowship</strong><p>ECE Department, Carnegie Mellon University.</p></div></div>
<div class="cv-award"><span class="cv-year">2019</span><div><strong>Annual Award of the Mathematical Institute of the Serbian Academy of Sciences and Arts - Finalist</strong><p>Award for M.Sc. students in the field of computing.</p></div></div>
</div></section>
 <section class="cv-section" aria-labelledby="cv-mentoring"><div class="cv-head"><h2 id="cv-mentoring">Mentoring and Teaching</h2></div>
  <ul class="cv-small-list">
   <li><strong>Student mentoring:</strong>
    <ul class="cv-mentor-sublist">
     <li><a href="https://people.epfl.ch/haoyuan.cai" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">Haoyuan Cai</a> - PhD student, EPFL (Fall 2025 - Present). Active supervision and research collaboration, resulting in multiple research papers.</li>
     <li><a href="https://www.linkedin.com/in/himkant-sharma-04a74327a/" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">Himkant Sharma</a> - Research intern, Carnegie Mellon University (Summer 2024). Supervised research culminating in a conference publication.</li>
    </ul>
   </li>
   <li><strong>Teaching:</strong> Served as Teaching Assistant for the graduate course <em>Linear Systems</em> at the ECE department at Carnegie Mellon University, in Fall 2022 and Fall 2023.</li>
   <li><strong>Textbook:</strong> Co-author of <em>Distributed Optimization with Applications</em> (2020), a graduate textbook developed for and used in a course at the University of Novi Sad.</li>
  </ul>
  <p class="cv-inline-link cv-detail-link">For more details, visit the <a href="/teaching/">Mentoring &amp; Teaching page →</a></p>
 </section>
 <section class="cv-section" aria-labelledby="cv-service"><div class="cv-head"><h2 id="cv-service">Academic Service</h2></div>
  <ul class="cv-small-list">
   <li><strong>Conference reviewer:</strong> IEEE ISIT, AISTATS, ICML, NeurIPS, AAAI.</li>
   <li><strong>Journal reviewer:</strong> IEEE Transactions on Signal Processing, Journal of Machine Learning Research.</li>
   <li><strong>Student council for faculty hiring:</strong> Served on the ECE Department’s student council for faculty hiring in 2023. Participated in interviewing faculty candidates to assess their potential to effectively mentor graduate students and foster healthy advisor-mentee relationships.</li>
  </ul>
 </section>
 <section class="cv-section" aria-labelledby="cv-talks"><div class="cv-head"><h2 id="cv-talks">Talks and Presentations</h2></div><div class="cv-talks">
<div class="cv-talk"><span class="cv-talk-year">2026</span><div><div class="cv-talk-name">Invited talk, “Bogoljub Stanković” Seminar</div><div class="cv-talk-place">University of Novi Sad, Serbia</div></div></div>
<div class="cv-talk"><span class="cv-talk-year">2026</span><div><div class="cv-talk-name">43rd International Conference on Machine Learning (ICML)</div><div class="cv-talk-place">Seoul, South Korea</div></div></div>
<div class="cv-talk"><span class="cv-talk-year">2026</span><div><div class="cv-talk-name">39th Conference on Learning Theory (COLT)</div><div class="cv-talk-place">San Diego, USA</div></div></div>
<div class="cv-talk"><span class="cv-talk-year">2025</span><div><div class="cv-talk-name">33rd European Signal Processing Conference (EUSIPCO)</div><div class="cv-talk-place">Palermo, Italy</div></div></div>
<div class="cv-talk"><span class="cv-talk-year">2025</span><div><div class="cv-talk-name">28th International Conference on Artificial Intelligence and Statistics (AISTATS)</div><div class="cv-talk-place">Mai Khao, Thailand</div></div></div>
<div class="cv-talk"><span class="cv-talk-year">2024</span><div><div class="cv-talk-name">58th Asilomar Conference on Signals, Systems, and Computers</div><div class="cv-talk-place">Monterey Bay, USA</div></div></div>
<div class="cv-talk"><span class="cv-talk-year">2023</span><div><div class="cv-talk-name">31st European Signal Processing Conference (EUSIPCO)</div><div class="cv-talk-place">Helsinki, Finland</div></div></div>
<div class="cv-talk"><span class="cv-talk-year">2022</span><div><div class="cv-talk-name">39th International Conference on Machine Learning (ICML)</div><div class="cv-talk-place">Baltimore, USA</div></div></div>
<div class="cv-talk"><span class="cv-talk-year">2019</span><div><div class="cv-talk-name">IEEE EUROCON 18th International Conference on Smart Technologies</div><div class="cv-talk-place">Novi Sad, Serbia</div></div></div>
<div class="cv-talk"><span class="cv-talk-year">2018</span><div><div class="cv-talk-name">US-Serbia &amp; West Balkan Data Science Workshop, NSF Serbia</div><div class="cv-talk-place">Belgrade, Serbia</div></div></div>
</div></section>
</div>
