import React, { Suspense } from "react";

import "./Main.css";
// import me2 from "./img/me2.png"; // me2
import ff from "./img/ff.png"; // first foundry
import an from "./img/an.png"; // appnexus
import mf from "./img/mf.png"; // mcafee
import osu from "./img/osu.jpg"; // oregon state
import judo from "./img/judo.jpg"; // judo osu
import dub from "./img/mcafeedub.jpg"; // mcafee complete
import m_e from "./img/m_e.png"; // bloom me
import pipeline from "./img/pipeline.png"; // pipeline appnexus
import boulder from "./img/boulder_logo.jpeg"; // boulder logo
import abiLina1 from "./img/abi_and_lina.jpeg"; // abi and lina 1
import abiLina2 from "./img/abi_and_lina_2.jpg"; // abi and lina 2
import boulderApp from "./img/boulder_app.png"; // boulder app
import wrestling1 from "./img/bhs_wrestling_family_1.jpeg"; // wrestling 1
import wrestling2 from "./img/bhs_wrestling_me.jpeg"; // wrestling 2
// import family1 from "./img/family_1.jpeg"; // family 1

// phase 2

// expand certain panels into their own page with more detail and pictures
// panel previous portfolio: bekaari / dark squares expand: probs just link to it
// panel hellosquare mostly,  expand: could render a copy of the game????
// panel nature pictures talk about oregon (link to nature blog?)
// panel food - link to food blog requires updating the blog lol
// panel martial arts? - get wrestling and judo pics
// panel capstone expand:
// panel pydaw? need to check if its worth sharing
// panel for discord bot?

// when u do expand the panels out - make a prop for the title being a link
// will also have to add hamburger and side panel at that point

const Panel = ({
  date,
  src,
  paragraphs,
  title,
  rounded,
  imgWidth,
  postImg,
  postImgWidth,
  postImgRounded,
}) => (
  <article className="panel primaryBorder greyBack1">
    <Suspense fallback={<h3 className="white">Loading...</h3>}>
      <header className="date spacedRow">
        <div>{date}</div>
        <div>{title}</div>
      </header>
      <p className="text-container">
        <img
          src={src}
          alt={title}
          className={rounded ? "rounded header-img" : "header-img"}
          style={imgWidth ? { width: imgWidth, height: "auto" } : {}}
        />
        {paragraphs.map((paragraph, i) => (
          <>
            {paragraph}
            <br /> <br />
          </>
        ))}
        {postImg && (
          <img
            src={postImg}
            alt={title + "post"}
            className={postImgRounded ? "rounded header-img" : "header-img"}
            style={postImgWidth ? { width: postImgWidth, height: "auto" } : {}}
          />
        )}
      </p>
    </Suspense>
  </article>
);

const Main = () => (
  <div className="main-container">
    <Panel
      date="1993~"
      src={abiLina1}
      title="Me"
      paragraphs={[
        "Abdulwahed Wahedi is a software engineer currently employed at Boulder Care. He received his Bachelors in computer science at Oregon State University in Corvallis. Professionally he has been working primarily with web and app development using React and React Native. He also has a background scripting in Python.",
        "Abdulwahed is passionate about creating software that people love to use, and that helps them in their life.",
        "Abdulwahed enjoys hot coffee, cold walks, and time with his family. He is happiest on a rainy beach, a sunny slope, or on a cozy couch. He finds inspiration in his daughter Lina, to live life with love and positivity.",
      ]}
      rounded
      postImg={abiLina2}
      postImgWidth="400px"
    />

    <Panel
      date="2021~"
      src={boulder}
      imgWidth="125px"
      title="Boulder Care"
      paragraphs={[
        `"Boulder Care offers telehealth addiction treatment grounded in kindness, respect, and unconditional support. Our program is designed by addiction medicine specialists and people with lived experience of recovery. It is rooted in years of clinical expertise, proven research, and learnings from our patients."`,
        `Abdulwahed works as an engineer on the Patient Experience team. This team specializes in software development involving the patient's experience on the Boulder platform, including things like the mobile app, enrollment, and patient communications.`,
      ]}
      rounded
      postImg={boulderApp}
      postImgWidth="400px"
    />

    <Panel
      date="2018-2021"
      src={ff}
      imgWidth="125px"
      title="First Foundry"
      paragraphs={[
        "First Foundry is a software development studio that works with its partners to deliver high quality software products.",
        "At First Foundry Abdulwahed worked in small teams on several product releases doing frontend development both for mobile and web applications. He worked with multiple frameworks including React Native, Vue Js, and Next Js.",
      ]}
      postImg={m_e}
      postImgWidth="150px"
      postImgRounded
    />

    <Panel
      date="2012-2017"
      src={osu}
      imgWidth="125px"
      rounded
      title="OSU"
      paragraphs={[
        "Oregon State University is a beautiful college in a small town surrounded by forests and parks. Abdulwahed attended for 5 years getting his Bachelors in Computer Science. In his classes he formed a strong background in maths and algorithms.",
        "While attending he took an additional year to participate in the MECOP engineering program which consisted of two 6 months paid internships at separate companies. In his senior capstone team he created a speech to text API and pre-processing scripts for the neural network. He was also a member of the OSU Judo club.",
      ]}
      postImg={judo}
      postImgWidth="320px"
    />

    <Panel
      date="2016 July-December"
      src={an}
      imgWidth="125px"
      title="AppNexus"
      paragraphs={[
        "AppNexus is a technology company whose cloud-based software platform powers and optimizes the programmatic sale and purchase of digital advertising.",
        "At AppNexus Abdulwahed worked with in the Yield Management Platform team. His time was split between front end development in React and his term project, an ad auditing system in Python.",
        "The term project involved web scraping and Naive Bayes classification. It was setup to be modular so that each piece of the pipeline could be upgraded or reused. The system is in use today processing tens of thousands of creatives each day.",
      ]}
      postImg={pipeline}
      postImgWidth={"250px"}
    />

    <Panel
      date="2015 April-September"
      src={mf}
      imgWidth="95px"
      title="McAfee"
      paragraphs={[
        "The group Abdulwahed worked with, Malware Operations - Malware Patrol, is involved with research and analysis of new malware to provide relevant protection for customers. Part of that is collecting new and relevant malware samples to analyze.",
        "Abdulwahed created an internally hosted dashboard, 'Feed Portal', that monitors the collection feeds at Malware Ops. The portal provides feed status and charts for feed value insight.",
        "Sample mail box is a feed that operates via email. The inbox is constantly polled for messages with attachments or URLs containing malware samples. Abdulwahed setup the sample mailbox feed at Malware Ops which is now pulling thousands of samples a day.",
      ]}
      postImg={dub}
      postImgWidth="200x"
    />

    <Panel
      date="2008-2012"
      src={wrestling2}
      //   imgWidth="200px"
      title="Beaverton High School"
      paragraphs={[
        "Abdulwahed attended high school at Beaverton high school. He participated in the schools rigorous AP program, and several sports (Football, Lacrosse, and Wrestling).",
        "Notably Abdulwahed clicked with the wrestling team where he developed confidence, discipline, and camaraderie. During 3 years he lost 60 pounds, going from heavy weight down to the 170 pound weight class.",
        "He learned the value in being part of a team that supports and pushes you to be your best.",
      ]}
      postImg={wrestling1}
      postImgWidth="400px"
    />

    {/* <Panel
      date="1993"
      src={family1}
      imgWidth="400px"
      title="History"
      paragraphs={[
        "Abdulwahed has lived his whole life in Oregon. His parents met at Oregon State University, where they worked together to immigrate his father's family from Afghanistan.",
      ]}
    /> */}
  </div>
);

export default Main;
