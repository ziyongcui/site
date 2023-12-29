import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';


function Travel(props) {

    return(
        <div>
            <span className="font-link">
            <Hero title={props.title} />
            <Content>
                <h1> Countries</h1>
                <p>
                <b> United States</b> <br></br>
                <b> China </b> <br></br>
                <b> France </b> <br></br>
                <b> Mexico </b> <br></br>
                <b> Japan </b> <br></br>
                <b> Germany </b> <br></br>
                <b> Italy </b> <br></br>
                <b> Argentina </b> <br></br>
                <b> Canada </b> <br></br>
                <b> Belgium </b> <br></br>
                <b> Czech Republic </b> <br></br>
                <b> Ireland </b> <br></br>
                <b> St Lucia </b> <br></br>
                <b> St Vincent & Grenadines </b> <br></br>


                </p>

                <h1> National Parks</h1>
                <p>
                    <b> Crater Lake - Sep 2023</b> <br></br>
                    <b> Glacier Bay - Aug 2023 </b> <br></br>  
                    <b> Death Valley - Dec 2021 </b> <br></br> 
                    <b> Acadia - Oct, Aug 2021 </b> <br></br>
                    <b> Virgin Islands - Dec 2018 </b> <br></br>
                </p>
            
                
            
            </Content>
            </span>
        </div>
    );

}

export default Travel;