import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';


function Journal(props) {

    return(
        <div>
            <span className="font-link">
            <Hero title={props.title} />
            <Content>
                <p>
                    test
                </p>
            
                {/* <p>
                    <h1>Dec. 17 2022, 11:51 PM</h1>
                    It's the last night of the Ski Trip with Walden, Andy, Woojin, and Micheal. It's been snowing 
                    these last two days and I can still hear the wind outside. I am slightly worried about if we can
                    get the car out tommorow, but I guess that is a problem for the morning. I had a cough and felt some
                    nausea (stomach acid) today. It seems like I have been sick this entire semester. Hopefully spending
                    time under the warm sun in Argentina will fix this. Walden made us some steak, and it was delicious. I 
                    feel inspired to cook this summer. I also spent a little bit of time on Anki today, reviewing Japanese 
                    vocab in preparation for the big trip. I spoke with Gavin online today, and he encouraged me to take a 
                    gap semester. I am strongly considering it but a part of me has FOMO on learning. The World Cup final is 
                    tommorow morning, but we will likely be driving back for the entire duration. 
                </p> */}
            
            
            </Content>
            </span>
        </div>
    );

}

export default Journal;