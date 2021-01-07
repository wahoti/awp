import React, { Suspense } from 'react'

import './Main.css'
import me from './img/me.jpeg' // me
import ff from './img/ff.png' // first foundry
import an from './img/an.png' // appnexus
import mf from './img/mf.png' // mcafee
import osu from './img/osu.jpg' // oregon state

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
    text,
    title,
    rounded,
    imgWidth,
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
                    alt="me"
                    className={rounded ? "rounded header-img" : "header-img"}
                    style={imgWidth ? { width: imgWidth, height: 'auto' } : {}}
                />
                {text}
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
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <Panel
            date="2018~"
            src={ff}
            imgWidth="125px"
            title="First Foundry"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <Panel
            date="2012-2017"
            src={osu}
            imgWidth="125px"
            rounded
            title="OSU"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <Panel
            date="2016 July-December"
            src={an}
            imgWidth="125px"
            title="AppNexus"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <Panel
            date="2015 April-September"
            src={mf}
            imgWidth="95px"
            title="McAfee"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
    </div>
)

  
  export default Main
  