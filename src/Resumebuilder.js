
//import * as firebase from "firebase";
import './Resume.css';
import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Radio,
    Upload, Button, message,
    Card,
    Select,
    Checkbox,
    Row,
    Col,
    Result
} from 'antd';
import Preview from './Preview';

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 20,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const { Option } = Select;
const Uploader = () => {
    const [fileList, updateFileList] = useState([]);
    const props = {
        fileList,
        beforeUpload: file => {
            if (file.type !== 'image/png') {
                message.error(`${file.name} is not a png file`);
            }
            return file.type === 'image/png';
        },
        onChange: info => {
            console.log(info.fileList);
            // file.status is empty when beforeUpload return false
            updateFileList(info.fileList.filter(file => !!file.status));
        },
    };
    return (
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>Upload png only</Button>
        </Upload>
    );
};

class ResumeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            emailId: '',
            contact: null,
            gender: '',
            bio: '',
            city: "",
            state: '',
            hobbies: '',
            education: '',
            preview: 'false'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.myChangeHandler = this.myChangeHandler.bind(this);
    }


    handleSubmit = (event) => {
        //console.log("hello")
        this.setState({ preview: true });
    }

    // myChangeHandler = (event) => {
    //     event.
    //     console.log(event.target.value)
    //     this.setState({ city: event.target.value });
    // }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    render() {
        let preview;
        if (this.state.preview === true) {
            preview = <Preview data={this.state} />
        }
        const handleCityChange = value => {
            this.setState({ city: value });
            console.log(value)
        };
        const handleStateChange = value => {
            this.setState({ state: value });
            console.log(value)
        };
        const handleHobbiesChange = value => {
            this.setState({ hobbies: value });
            console.log(value)
        };
        const handleEducationChange = value => {
            this.setState({ education: value });
            console.log(value)
        };
        return (

            <Row>
                <Col span={16}>
                    <div className="site-card-border-less-wrapper">
                        <Card title="Build your resume!" bordered={false}>
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{
                                    remember: true,
                                }}

                            >
                                <Row gutter={[16, 16]} id="img"><Uploader /> </Row>


                                <Form.Item
                                    label="First Name"

                                    rules={[
                                        {
                                            required: true,
                                            pattern: new RegExp(/^[a-zA-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]+$/i),
                                            message: 'Please input your valid first name!',
                                        },
                                    ]}
                                    name="fname"
                                >
                                    <Input placeholder="First Name" name="fname" onChange={this.myChangeHandler} />
                                </Form.Item>

                                <Form.Item
                                    label="Last Name"
                                    name="lname"
                                    rules={[
                                        {
                                            required: true,
                                            pattern: new RegExp(/^[a-zA-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]+$/i),
                                            message: 'Please input your valid last name!',
                                        },
                                    ]}

                                >
                                    <Input placeholder="Last Name" name="lname" onChange={this.myChangeHandler} />
                                </Form.Item>


                                <Form.Item
                                    label="Email ID"
                                    name="emailId"
                                    rules={[
                                        {
                                            required: true,
                                            type: 'email',
                                            message: 'Please input your email ID!',
                                        },
                                    ]}

                                >
                                    <Input placeholder="Email Id" name="emailId" onChange={this.myChangeHandler} />
                                </Form.Item>


                                <Form.Item
                                    label="Contact"
                                    name="contact"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your mobile number',
                                        },
                                    ]}

                                >

                                    <Input placeholder=" Mobile number" name="contact" onChange={this.myChangeHandler} />
                                </Form.Item>


                                <Row>
                                    <Col span={12}>
                                        <Form.Item label="Gender"
                                            name="gender"
                                        >
                                            <Radio.Group name="gender" onChange={this.myChangeHandler}>
                                                <Radio value="male">Male</Radio>
                                                <Radio value="female">Female</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Bio"
                                            name="bio"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your bio!',
                                                },
                                            ]}

                                        >
                                            <Input.TextArea name="bio" onChange={this.myChangeHandler} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <Form.Item

                                            label="City"
                                            name="city"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please select your city!',
                                                },
                                            ]}


                                        >
                                            <Select placeholder="Please select a city" name="city" onChange={handleCityChange} >
                                                <Option value="Jaipur">Jaipur</Option>
                                                <Option value="Jodhpur">Jodhpur</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item

                                            label="State"
                                            name="state"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please select your State!',
                                                },
                                            ]}

                                        >

                                            <Select placeholder="Please select your State" name="state" onChange={handleStateChange}>
                                                <Option value="Rajasthan">Rajasthan</Option>
                                                <Option value="Maharashtra">Maharashtra</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row> <Col span={16}>
                                    <Form.Item label="Hobbies"
                                        name="hobbies" >
                                        <Checkbox.Group name="hobbies" onChange={handleHobbiesChange}>
                                            <Row>
                                                <Col span={8}>
                                                    <Checkbox
                                                        value="Singing"
                                                        style={{
                                                            lineHeight: '32px',
                                                        }}
                                                    >
                                                        Singing              </Checkbox>
                                                </Col>
                                                <Col span={8}>
                                                    <Checkbox
                                                        value="Dancing"
                                                        style={{
                                                            lineHeight: '32px',
                                                        }}

                                                    >
                                                        Dancing
                  </Checkbox>
                                                </Col>
                                                <Col span={8}>
                                                    <Checkbox
                                                        value="NCC"
                                                        style={{
                                                            lineHeight: '32px',
                                                        }}
                                                    >
                                                        Writing
                  </Checkbox>
                                                </Col>
                                                <Col span={8}>
                                                    <Checkbox
                                                        value="Sports"
                                                        style={{
                                                            lineHeight: '32px',
                                                        }}
                                                    >
                                                        Sports
                  </Checkbox>
                                                </Col>
                                                <Col span={8}>
                                                    <Checkbox
                                                        value="Acting"
                                                        style={{
                                                            lineHeight: '32px',
                                                        }}
                                                    >
                                                        Acting
                  </Checkbox>
                                                </Col>

                                            </Row>
                                        </Checkbox.Group>
                                    </Form.Item>
                                </Col>

                                </Row>

                                <Form.Item
                                    name="education"
                                    label="Education"
                                    rules={[{ required: true, message: 'Please select your education', type: 'array' }]}

                                >
                                    <Select mode="multiple" placeholder="Please select your education" name="education" onChange={handleEducationChange}>
                                        <Option>Select degree</Option>
                                        <Option value="BE,">BE</Option>
                                        <Option value="BSc,">BSc</Option>
                                        <Option value="MSc,">MSc</Option>
                                        <Option value="ME,">ME</Option>
                                        <Option value="others">others</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Col span={24}>
                                        <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
                                            Submit
                                   </Button>
                                    </Col>
                                </Form.Item>
                            </Form>

                        </Card>
                    </div>
                </Col>
                <Col span={8} style={{ backgroundColor: "lightgrey" }}>
                    {preview}
                </Col>
            </Row>

        );


    }


}

export default ResumeForm;
//export { FirestoreRef };