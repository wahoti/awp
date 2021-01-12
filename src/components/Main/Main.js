import React, { Suspense } from 'react'

import './Main.css'
import me from './img/me.jpeg' // me
import ff from './img/ff.png' // first foundry
import an from './img/an.png' // appnexus
import mf from './img/mf.png' // mcafee
import osu from './img/osu.jpg' // oregon state
import judo from './img/judo.jpg' // judo osu
import dub from './img/mcafeedub.jpg' // mcafee complete
import m_e from './img/m_e.png' // bloom me
import pipeline from './img/pipeline.png' // pipeline appnexus

// write out the paragraphs and mvp will be done!

// then host

// find out about dns rerouting

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
                    style={imgWidth ? { width: imgWidth, height: 'auto' } : {}}
                />
                {
                    paragraphs.map((paragraph, i) => (
                        <>
                            {paragraph}
                            <br /> <br />
                        </>
                    ))
                }
                {
                    postImg && (
                        <img
                            src={postImg}
                            alt={title + "post"}
                            className={postImgRounded ? "rounded header-img" : "header-img"}
                            style={postImgWidth ? { width: postImgWidth, height: 'auto' } : {}}
                        />
                    )
                }
            </p>
        </Suspense>
    </article>
)

const Main = () => (
    <div className="main-container">
        <Panel
            date="1993~"
            src={me}
            rounded
            title="me"
            paragraphs={[
                "Abdulwahed Wahedi is a software developer of 4 years currently employed at First Foundry. He received his Bachelors in computer science at Oregon State University in Corvallis. Professionally he has been working with web development using frameworks such as React, React Native, Nextjs, and Vuejs. He has a background scripting in Python. Abdulwahed is passionate about learning and improving as a software developer.",
                "Abdulwahed enjoys hot coffee and cold walks. He is happiest on a rainy beach or a sunny slope, but you will usually find him at home in front of a screen."
            ]}
        />

        <Panel
            date="2018~"
            src={ff}
            imgWidth="125px"
            title="First Foundry"
            paragraphs={[
                "First Foundry is a software development studio that works with its partners to deliver high quality software products. At First Foundry Abdulwahed has been involved in several product releases doing frontend development both for mobile and web applications.",
                "He has been working with a variety of frameworks and been involved with multiple teams. He continues to branch out into new technologies and learn industry practices."
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
                "While attending he took an additional year to participate in the MECOP engineering program which consisted of two 6 months paid internships at separate companies. In his senior capstone team he created a speech to text API and pre-processing scripts for the neural network. He was also a member of the OSU Judo club."
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
                "Sample mail box is a feed that operates via email. The inbox is constantly polled for messages with attachments or URLs containing malware samples. Abdulwahed setup the sample mailbox feed at Malware Ops which is now pulling thousands of samples a day." 
            ]}
            postImg={dub}
            postImgWidth="200x"
        />
    </div>
)

  
  export default Main
  