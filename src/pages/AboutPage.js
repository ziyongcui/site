import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Ziyong. I'm a freshman at Harvard intending to concentrate in Mathematics and Computer Science.</p>

            <p>When I was younger, my dream was to become an astronaut. A few years later, I wanted to become a surgeon. At this moment, I'm not entirely sure what I want to do with my life. </p>

            <p>I want to learn more about the intersectiom between theoretical mathematics and computer science. In particular, I'm interested in the application of probabilistic models to machine learning and artificial intelligence. </p>

            <p>Currently, I'm working on a collection of tutorials for the FunKey Freedom and FunKey Sensor, an Arduino product for STEM, science, invention, physical computing and coding. You can check out my progress <a href="" target="_blank" rel="noopener noreferrer">here</a>.</p>

            <p>When I'm not doing math or coding, I enjoy running, cycling, reading, and playing Shengji or Poker. I am also an avid fan of FC Barcelona, the Boston Celtics, and the New England Patriots. </p>

            <p>I have compiled a collection of my favorite quotes from books I have enjoyed <a href="/site/quote" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </Content>
        </div>
    );

}

export default AboutPage;