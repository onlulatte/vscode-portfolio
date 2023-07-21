import React from 'react';
import styles from './Portfolio.module.scss';

function Resume() {
  return (
    <section className={`${styles.section} editor_section`}>
      <div class="container">
  <h3 class="page-title">Skills</h3>
  <div class="row">
    <div class="skill-title col-sm-12 col-lg-3"><b>Frontend</b></div>
    <div class="skill-list col-sm-12 col-lg-9">
      <div class="row">▪️ &ensp;JavaScript(ES6), jQuery, jsp</div>
      <div class="row">▪️ &ensp;HTML, CSS</div>
      <div class="row">▪️ &ensp;React, Redux, Redux-saga, Next</div>
      <div class="row">▪️ &ensp;styled-components, reactstrap, antd</div>
      <div class="row">▪️ &ensp;babel, webpack, eslint</div>
    </div>
  </div>
  <hr />
  <div class="back row">
    <div class="skill-title col-sm-12 col-lg-3"><b>Backend</b></div>
    <div class="skill-list col-sm-12 col-lg-9">
      <div class="row">▪️ &ensp;Java, C</div>
      <div class="row">▪️ &ensp;Spring, Junit</div>
      <div class="row">▪️ &ensp;axios, Restful API</div>
      <div class="row">▪️ &ensp;Node, NPM, express</div>
      <div class="row">▪️ &ensp;Oracle, MySQL, PostgreSQL</div>
      <div class="row">▪️ &ensp;Sequelize, Mybatis</div>
    </div>
  </div>
  <hr />
  <div class="back row">
    <div class="skill-title col-sm-12 col-lg-3"><b>Etc</b></div>
    <div class="skill-list col-sm-12 col-lg-9">
      <div class="row">▪️ &ensp;Apache Tomcat, Jenkins</div>
      <div class="row">▪️ &ensp;Git, GitHub, Sourcetree</div>
      <div class="row">▪️ &ensp;Visual Studio Code, IntelliJ, Eclipse</div>
    </div>
  </div>
  <div class="skills-continue"><a role="button" class="skills-more" href="#projects" data-animation="fade-in" data-animation-duration="500" data-animation-delay="2000" data-animation-offset="0">CONTINUE</a><a href="#projects" duration="1000" class="nav-link"><i class="fa fa-angle-down fa-2x" aria-hidden="true"></i></a></div>
</div>
    </section>
  );
}

export default Resume;
