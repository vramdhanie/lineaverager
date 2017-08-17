import React, { Component } from 'react';
import './ItemCount.css';
import {connect} from "react-redux";
import { incrementCount, decrementCount } from "../../actions/index";
import {
    Container, Row, Col, Button, InputGroup, InputGroupButton,
    InputGroupAddon
} from 'reactstrap';


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
                        <Col md={{size:4, offset: 4}}>
                            <InputGroup>
                                <InputGroupButton>
                                    <Button onClick={this.up}>UP</Button>
                                </InputGroupButton>
                                <InputGroupAddon>
                                    <div className="ItemCount__count">{this.props.count}</div>
                                    <div className="ItemCount__subtle">{ this.props.label }</div>
                                </InputGroupAddon>
                                <InputGroupButton>
                                    <Button onClick={this.down}>DN</Button>
                                </InputGroupButton>
                            </InputGroup>
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