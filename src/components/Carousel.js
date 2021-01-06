import React from 'react';

import Card from '../components/Card';

import sunset1 from '../assets/images/sunset1.png';
import waterski from '../assets/images/waterski.png';
import ziyong from '../assets/images/ziyong.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Sunsets',
                    subTitle: 'Some of my favorite sunsets',
                    imgSrc: sunset1,
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Ziyong',
                    subTitle: 'Some of my projects',
                    imgSrc: ziyong,
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Hobbies',
                    subTitle: 'Some things I enjoy',
                    imgSrc: waterski,
                    link: '',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;