import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>
                Hello, my name is Ziyong. I'm a senior at <a href="https://www.harvard.edu/" target="_blank" style={{color: "maroon"}}>Harvard</a> concentrating in Math and pursuing a concurrent masters in Statistics. 
                I haved worked at Jane Street, Weiss Asset Management and Hazelcast. Broadly speaking, I am interested in social network analysis.
            </p>

            <p>
            I enjoy puzzles. <a href="/site/problems" rel="noopener noreferrer">Here</a> is a collection of my favorite problems (and solutions).
            </p>

            <p>  
                I have a sizable amount of classes at Harvard so far and have helped teach a few which include
                <ul>
                    <li>Stat110 (Introduction to Probability)</li>
                    <li>Stat111 (Introduction to Statistical Inference)</li>
                    <li> Stat 175 (Statistics and Data Science of Networks)</li>
                    <li>CS124 (Introduction to Algorithms and Data Structures)</li>
                    <li>Stat210 (Graduate Probability)</li>
                    <li> CS136 (Economics and Computation)</li>
                </ul> 
            </p>

            <p>
                I spend a lot of time thinking about random things. Occasionally, I decided to write down my thoughts in my "blog" which can be found <a href="/site/blog" rel="noopener noreferrer">here</a>.
            </p>

            <p>
                I really enjoy reading. I have compiled a collection of my favorite quotes from books I have enjoyed <a href="/site/quote" rel="noopener noreferrer">here</a>.
                In addition,  <a href="/site/quote" rel="noopener noreferrer">here</a> is a page that documents my travels.
            </p>

    

            <p>
                If for whatever reason you would like to reach out to chat, please do so <a href="/site/contact" rel="noopener noreferrer">here</a>. I look forward to meeting you!
            </p>
            </Content>
        </div>
    );

}

export default AboutPage;