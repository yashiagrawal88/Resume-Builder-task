import ResumeForm from './Resumebuilder';
import React, { Component } from 'react';
import {
    Card,
    Row,
    Col,
} from 'antd';
import './Preview.css';

class Preview extends Component {
    render() {
        return (

            <section id="preview">
                <h1>Preview</h1>
                <Row>
                    <h2>Name: {this.props.data.fname + this.props.data.lname}</h2>
                </Row>
                <Row>
                    <h3>EmailId:<i>{this.props.data.emailId}</i></h3>
                </Row>
                <Row>
                    <h3>Contact :{this.props.data.contact}</h3>
                </Row>
                <Row>
                    <h3>Bio:{this.props.data.bio}</h3>
                </Row>

                <Row>
                    <h3>Gender:{this.props.data.gender}</h3>
                </Row>
                <Row>
                    <h3>Hobbies:{this.props.data.hobbies}</h3>
                </Row>
                <Row>
                    <h3> City:{this.props.data.city},State:{this.props.data.state}</h3>
                </Row>
                <Row>
                    <h3>Education:{this.props.data.education}</h3>
                </Row>
                {console.log(this.props.data)}

            </section>
        )
    }
}




export default Preview;