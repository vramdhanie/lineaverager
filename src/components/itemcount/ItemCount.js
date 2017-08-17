import React, { Component } from 'react';
import './ItemCount.css';
import {connect} from "react-redux";
import { incrementCount, decrementCount } from "../../actions/index";
import upArrow from './up.svg';
import downArrow from './down.svg';
import { Container, Row, Col, ButtonGroup, Button, Card } from 'reactstrap';


class ItemCount extends Component {

    constructor(props){
        super(props);
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
    }

    up(){
        this.props.dispatch( incrementCount() );
    }

    down(){
        this.props.dispatch( decrementCount() );
    }

    render() {

        return (
            <div className="ItemCount">
                <Container>
                    <Row noGutters>
                        <Col xs={{size:3, offset: 4}}>

                                <div className="ItemCount__count">{this.props.count}</div>

                        </Col>
                        <Col xs={{size:3}}>
                            <ButtonGroup vertical>
                                <Button onClick={this.up}>UP</Button>
                                <Button onClick={this.down}>DN</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="ItemCount__subtle">{ this.props.label }</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  count: state.count
})


export default connect(mapStateToProps)(ItemCount);