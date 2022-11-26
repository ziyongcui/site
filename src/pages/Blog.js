import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Card from '../components/Card';

function Blog(props) {

    return(
        <div>
            <span className="font-link">
            <Hero title={props.title} />
            <Content>
            
                <p>
                    <h1>Nov. 26 2022, 1:15 AM</h1>
                    I miss quarantine. 

                    I remember the day things changed. We were scheduled to have a 
                    Winter Sports Award Ceremony that I was dreading. It was announced (over
                    email I believe?) that school would be canceled for two weeks due to Covid.
                    It was expected that we would return to school. Some people were saying that 
                    this two-week break would replace our Spring break. I was a little bummed
                    out by this idea but was estatic to hear that the awards ceremony was 
                    postponed. It was only the day before that we had unofficial class of 2020 photo.

                    <br>
                    </br>
                    <br>
                    </br>
                    It was a unique time. I learned Python over Zoom under the tutelage of Max and Alek.
                    By the end of the summer, we ended up creating a Virtual Yearbook for the class of 2020.
                    There was book club and movie night. We made Tiktoks, and I would stay up all night
                    playing League with the Boiz. I made whipped coffee and tried a bunch of new recipes. 
                    We had virtual graduation that included driving through notable points in Belmont (saw
                    Ms. Manca by the Chenery). The Boiz then went to Maine and (unsuccessfully) attempted
                    Pleasant Mountain. I took up biking along the Minuteman and the Charles; never again 
                    have I seen this amount of people walking along either of these trails. Skyline and the resavoir
                    were frequent places to hangout. We celebrated many birthdays that summer and took
                    a spontaneous trip to Manchester by the Sea. Then it all ended.
                     
                </p>
            
            
            </Content>
            </span>
        </div>
    );

}

export default Blog;