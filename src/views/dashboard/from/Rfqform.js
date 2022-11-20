import Card from '../../../components/Card'
import imgsuccess from '../../../assets/images/pages/img-success.png'
import { Row, Col, Form, Image } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Base64Downloader from "react-base64-downloader";
import { useHistory, Link } from "react-router-dom";

const FormWizard = () => {
    const [postData, setPostData] = useState({
        name:'',
        to: '',
        from: '',
        Dates: '',
        vendordetails: '',

        approver: '',
        description: '',
        any_other_instructions_for_quoting: '',
        statement_for_qualification: '',
        status: ''
    });

      const dispatch = useDispatch();
      const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
      const navigate = useHistory();

      const handleSubmit = async () => {
        const result = fetch("https://hjhjkjkjkkjhjhi.herokuapp.com/rfqmanagers", {
          method: "post",
          body: JSON.stringify(postData),
          headers: { "Content-Type": "application/json" },
        });
        // result = await result.json();
        if (result) {
          alert("added Succesfully!");
    
          navigate.push('/')
        }
    
      };
       useEffect(async () => {if(! localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate.push('/auth/sign-in') }, []);
      useEffect(() => {
        if(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)){
            if (user.username==="Admin1") {navigate.push('/approver')}
            else if(user.username!=="Admin"){navigate.push('/ath')}
        }
        else{
          navigate.push('/auth/sign-in')}},[])
    const [show, AccountShow] = useState('A');
    return (
        <>
        <div>
            <Row>
                <Col sm="12" lg="12">
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title"></h4>
                            </div>
                        </Card.Header>
                        <Card.Body>

                                <fieldset className={`${show === 'A' ? 'd-block' : 'd-none'}`}>
                                    <div className="form-card text-start">
                                        <div className="row">
                                            <div className="col-7">
                                                <h3 className="mb-4"> </h3>
                                            </div>
                                            <div className="col-5">

                                            </div>
                                        </div>
                                        <div className="row">
                                            {/* <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">To: </label>
                                                    <input type="text" className="form-control" name="tovendor" value={postData.to} onChange={(e) => setPostData({ ...postData, to: e.target.value })} />
                                                </div>
                                            </div> */}
                                              <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Name: </label>
                                                    <input type="text" name="Product_Name" className="form-control" value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">From: </label>
                                                    <input type="text" name="Product_Name" className="form-control" value={postData.from} onChange={(e) => setPostData({ ...postData, from: e.target.value })} />
                                                </div>
                                            </div>
                                            {/* <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Date:</label>
                                                    <input type="date" className="form-control" value={postData.Dates} onChange={(e) => setPostData({ ...postData, Dates: e.target.value })} />
                                                </div>
                                            </div> */}
                                            {/* <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Vendor Details:</label>
                                                    <Form.Group className="form-group">
                                                        <select className="form-select mb-3 shadow-none" value={postData.vendordetails} onChange={(e) => setPostData({ ...postData, vendordetails: e.target.value })}>
                                                            <input type="datetime-local" name="dateime" className="form-control" value={postData.date_and_time_picker} onChange={(e) => setPostData({ ...postData, date_and_time_picker: e.target.value })} />

                                                        </select>
                                                    </Form.Group>
                                                </div>

                                            </div> */}
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Approver: </label>
                                                    <input type="text" className="form-control" value={postData.approver} onChange={(e) => setPostData({ ...postData, approver: e.target.value })} />
                                                </div>

                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label className="form-label">Discription: </label>
                                                    <input type="text" className="form-control" value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
                                                </div>

                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label className="form-label">Any other Instructions for Quoting</label>

                                                    <input type="text" className="form-control" value={postData.any_other_instructions_for_quoting} onChange={(e) => setPostData({ ...postData, any_other_instructions_for_quoting: e.target.value })} />

                                                </div>

                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label className="form-label">Statement for Qualification</label>

                                                    <input type="text" className="form-control" value={postData.statement_for_qualification} onChange={(e) => setPostData({ ...postData, statement_for_qualification: e.target.value })} />

                                                </div>

                                            </div>
                                            {/* <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Status: </label>
                                                    <Form.Group className="form-group">
                                                        <select className="form-select mb-3 shadow-none" value={postData.status} onChange={(e) => setPostData({ ...postData, status: e.target.value })}>
                                                            <option value=" Published">Published</option>
                                                            <option value=" Draft">Draft</option>
                                                            <option value=" In Progress">In Progress</option>
                                                            <option value=" Finished">Finished</option>




                                                        </select>
                                                    </Form.Group>                                                </div>

                                            </div> */}







                                        </div>
                                    </div>
                                    <button name="next" className="btn btn-primary next action-button float-end"  onClick={handleSubmit} >Submit</button>
                                </fieldset>
                          

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    </>
    )
}

export default FormWizard
