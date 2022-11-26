import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>
                Hello, my name is Ziyong. I'm a junior at <a href="https://www.harvard.edu/" target="_blank" style={{color: "maroon"}}>Harvard</a> intending to concentrate in ???. 
                I will be working at a trading firm this summer. This past summer. I interned at <a href="weissasset.com/" target="_blank" style={{color: "darkblue"}}> Weiss Asset Management </a>  
                where I thought a lot about ETFs and energy. The summer before, I interned at <a href="https://hazelcast.com/" target="_blank" style={{color: "darkblue"}}>Hazelcast</a>  where I created a machine learning model to estimate component degredation.
            </p>

            <p>
            I enjoy puzzles. <a href="/site/problems" rel="noopener noreferrer">Here</a> is a collection of my favorite problems (and solutions).
            </p>

            <p>  
                I have a sizable amount of classes at Harvard so far and have helped teach a few which include
                <ul>
                    <li>Stat110 (Introduction to Probability)</li>
                    <li>Stat111 (Introduction to Statistical Inference)</li>
                    <li>CS124 (Introduction to Algorithms and Data Structures)</li>
                    <li>Stat210 (Graduate Probability)</li>
                </ul> 
            </p>

            <p>
                I spend a lot of time thinking about random things. Occasionally, I decided to write down my thoughts in my "blog" which can be found <a href="/site/blog" rel="noopener noreferrer">here</a>.
            </p>

            <p>
                I really enjoy reading. I have compiled a collection of my favorite quotes from books I have enjoyed <a href="/site/quote" rel="noopener noreferrer">here</a>.
            </p>

            <p>
                If for whatever reason you would like to reach out to chat, please do so <a href="/site/contact" rel="noopener noreferrer">here</a>. I look forward to meeting you!
            </p>
            </Content>
        </div>
    );

}

export default AboutPage;