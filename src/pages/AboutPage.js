import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>
                Hello, my name is Ziyong. I'm a rising sophmore at <a href="https://www.harvard.edu/" target="_blank" style={{color: "maroon"}}>Harvard</a> intending to concentrate in Mathematics and Statistics. 
                I am currently interning at <a href="https://hazelcast.com/" target="_blank" style={{color: "darkblue"}}>Hazelcast</a>. My work involves integrating the Hazelcast Jet Platform with an autoencoder model to estimate component wear. You can check out my current progress here. 
            </p>

            <p>
            I enjoy thinking about problems involving probability, dynamic programming, and machine learning. <a href="/site/problems" rel="noopener noreferrer">Here</a> is a collection of my favorite problems (and solutions).
            </p>

            <p>  
                I have not taken many classes at Harvard so far but some of my favorites include
                <ul>
                    <li>Math55a and Math55b (Studies in Algebra and Group Theory + Studies in Real and Complex Analysis)</li>
                    <li>Stat110 and Stat111 (Introduction to Probability + Introduction to Statistical Inference)</li>
                    <li>CS124 (Introduction to Algorithms and Data Structures)</li>
                </ul> 
            </p>

            <p>
                I spend a lot of time thinking about random things. Occasionally, I decided to write down my thoughts in my "blog" which can be found here.
            </p>

            <p>
                I really enjoy reading. I have compiled a collection of my favorite quotes from books I have enjoyed <a href="/site/quote" rel="noopener noreferrer">here</a>.
            </p>

            <p>
                If for whatever reason you would like to reach out to chat, please do so here. I look forward to meeting you!
            </p>
            </Content>
        </div>
    );

}

export default AboutPage;