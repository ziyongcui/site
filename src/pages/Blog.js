import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Card from '../components/Card';

function Blog(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Content>
            <p>
                Testing 1 2 3!
            </p>
            </Content>
        </div>
    );

}

export default Blog;