import Card from '../../../components/Card'
import imgsuccess from '../../../assets/images/pages/img-success.png'
import { Row, Col, Form, Image, Nav, Tab, FormCheck,Button, Accordion } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Base64Downloader from "react-base64-downloader";
import { useHistory, Link } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars-2';
const FormWizard = () => {
    const [postData, setPostData] = useState({
        Regulatory_Model_Name: "",
        Product_Name: "",
        Regulatory_Family: "",
        Product_Category: "BATT",
        Product_Description: "",
        Model_Difference: "",
        Household: "",
        Commercial: "",
        Clinical: "",
        Applicable_Standards: "IEC 60086-1:2015",
        Applicant_Name_and_Address: "",
        Manufacturer_Name_and_Address: "",
        TradeMark: "",
        Family: "",
        Market: "Africa",
        
        Overall_Size_of_Equipment: "",
        WebGLShader: "mm",
        Voltage: "",
        Phase: "",
        Frequency: "",
        Power: "",
        Current: "",
        Operation_Mode: "",
        Ordinary_person: "",
        Children_likely_present: "",
        Instructed_person: "",
        Skilled_person: "",
        AC_mains: "",
        DC_mains: "",
        Battery_Powered: "",
        Skilled_person: "",

        Non_detachable_Supply_Cord: "",
        Appliance_Coupler: "",
        Direct_plug_in: "",
        Non_detachable_Supply_Cord_B: "",
        Appliance_Coupler_B: "",

        Permanent_connection: "",
        Mating_connector: "",
        Movable: "",
        Transportable: "",
        Stationary_for_building_in: "",
        Wall_ceiling_mounted_SRME_rack_mounted: "",
        Hand_held: "",
        Other: "",

        Pollution_Degree: "",
        Manufacturer_Specific_Max_Operating_Ambient: "",
        Ingree_Protection_Classification: "",
        Altitude_During_Operation: "",
        Mass_Of_Equipment: "",
        Relative_Humidity: "",
        Atmospheric_Pressure: "",
        Indoor: "",
        Outdoor: "",

        Copy_of_Marking_Plate: "",
        WarningOrCautionary_Marking: "",
        Fuse_Type: "",
        Fuse_Marking: "",

        //complaince report
        Report_Number: "No Option",
    });
    const [rfq_id, Setrfq_id] = useState();
    
    const [Name, SetName] = useState("");
    const [Work_Phone, SetWork_Phone] = useState("");
    const [Company_Name, SetCompany_Name] = useState("");
    const [vendordetails, Setvendordetails] = useState("");
    const [approver, Setapprover] = useState("");
    const [description, Setdescription] = useState("");
    const [
        any_other_instructions_for_quoting,
        Setany_other_instructions_for_quoting,
    ] = useState("");
    const [statement_for_qualification, Setstatement_for_qualification] =useState("");
    const [to, Setto] = useState("");
    const [status, Setstatus] = useState("Published");
    const [from, Setfrom] = useState("");
    
    const [postDZata, setPosZtData] = useState({
        name: '',
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

    const [showf, setshowf] = useState(true)
    const [showf1, setshowf1] = useState(true)
    const [showf2, setshowf2] = useState(true)
    const [showf3, setshowf3] = useState(true)
    const [showf4, setshowf4] = useState(true)
    const [showf5, setshowf5] = useState(true)
    const [showf6, setshowf6] = useState(true)
    const [showf7, setshowf7] = useState(true)
    const [showf8, setshowf8] = useState(true)
    const [butt, setbutt] = useState(true)
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
    useEffect(async () => { if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate.push('/auth/sign-in') }, []);
    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
            if (user.username === "Admin1") { navigate.push('/approver') }
            else if (user.username !== "Admin") { navigate.push('/ath') }
        }
        else {
            navigate.push('/auth/sign-in')
        }
    }, [])
    const disableButton=()=>{
        if (showf ===false && showf1===false && showf2===false && showf3===false && showf4===false && showf5===false && showf6===false && showf7===false && showf8===false) {
            const button = document. querySelector('#bttn')
            button.disabled = true
             
        }
       
        
    }
    useEffect(() => {
    if (showf ===false && showf1===false && showf2===false && showf3===false && showf4===false && showf5===false && showf6===false && showf7===false && showf8===false) {
        console.log('hello world')
        setbutt(false)
    }
    }, [])
    const [show, AccountShow] = useState('A');
    return (
        <>
            <div>
                <Row>
                    <Col sm="12" lg="12">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">RFQ Manager</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                           
 
                                      
                                     <div className="bd-example">
                                    <Form.Check className="form-check form-switch form-check-inline">
                                        <FormCheck.Input type="checkbox" id="switch1"  onClick={()=>setshowf(!showf )} />
                                        <FormCheck.Label className=" pl-2" htmlFor="switch1">Medical Safety</FormCheck.Label>
                                    </Form.Check>
                                    <div className="form-check form-switch form-check-inline">
                                        <FormCheck.Input type="checkbox" id="switch1" onClick={()=>setshowf1(!showf1 )}/>
                                        <FormCheck.Label className=" pl-2" htmlFor="switch1">Medical EMC</FormCheck.Label>
                                    </div>
                                    <div className="form-check form-switch form-check-inline">
                                        <FormCheck.Input type="checkbox" id="switch1" onClick={()=>setshowf2(!showf2 )}/>
                                        <FormCheck.Label className=" pl-2" htmlFor="switch1">Assurance Services</FormCheck.Label>
                                    </div>
                                    <div className="form-check form-switch form-check-inline">
                                        <FormCheck.Input type="checkbox" id="switch1" onClick={()=>setshowf3(!showf3 )}/>
                                        <FormCheck.Label className=" pl-2" htmlFor="switch1">Home Healthcare</FormCheck.Label>
                                    </div>
                                    <div className="form-check form-switch form-check-inline">
                                        <FormCheck.Input type="checkbox" id="switch1" onClick={()=>setshowf4(!showf4 )}/>
                                        <FormCheck.Label className=" pl-2" htmlFor="switch1">Laser Safety</FormCheck.Label>
                                    </div>
                                    <div className="form-check form-switch form-check-inline">
                                        <FormCheck.Input type="checkbox" id="switch1" onClick={()=>setshowf5(!showf5 )}/>
                                        <FormCheck.Label className=" pl-2" htmlFor="switch1">Infusion Pump</FormCheck.Label>
                                    </div>
                                    <div className="form-check form-switch form-check-inline">
                                        <FormCheck.Input type="checkbox" id="switch1" onClick={()=>setshowf6(!showf6 )}/>
                                        <FormCheck.Label className=" pl-2" htmlFor="switch1">Ultrasound Probe</FormCheck.Label>
                                    </div>
                                    <div className="form-check form-switch form-check-inline">
                                        <FormCheck.Input type="checkbox" id="switch1" onClick={()=>setshowf7(!showf7 )}/>
                                        <FormCheck.Label className=" pl-2" htmlFor="switch1">X-Ray</FormCheck.Label>
                                    </div>
                                    <div className="form-check form-switch form-check-inline">
                                        <FormCheck.Input type="checkbox" id="switch1" onClick={()=>setshowf8(!showf8 )}/>
                                        <FormCheck.Label className=" pl-2" htmlFor="switch1">EMS Environment</FormCheck.Label>
                                    </div>
                                 
                                    </div>
                                 
                                      
                                    <br/>
                                    <hr/>
                               

                                    <div className="bd-example">
{
    showf?
 
   
   
                                        <Accordion defaultActiveKey="0"> <h2><i>--Medical Safety</i></h2><br/>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header><b>GENERAL</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Company Name:{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Address: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        City, State Zip: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Contact: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Phone:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Email:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Model_Difference}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Model_Difference: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Engineering Contact:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header><b> DESCRIPTION OF PRODUCT / INTENDED USE</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1"> DESCRIPTION OF PRODUCT / INTENDED USE</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>



                                                        </div>
                                                    </div>                                        </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header><b>MODEL NUMBER</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="exampleInputText1">Model </Form.Label>
                                                        <Form.Control type="text" id="exampleInputText1" placeholder="Type here.." />
                                                    </Form.Group>
                                                </Accordion.Body>
                                            </Accordion.Item>



                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header><b>ELECTRICAL RATINGS</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Voltage:{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Frequency: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        City, State Zip: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Current/Power:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Other:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>                                        </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header><b>CLASSIFICATION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Stationary:	{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Portable:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Mobile:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Class I:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Fixed:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Fixed:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Body-worn:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Hand-held:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Body-worn:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Class II:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p>Note: Class I means the product has a protective earth connection, Class II does not.</p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Internally Powered:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        USB Powered:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>                                                 </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header><b>SERVICES REQUESTED</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> ETL Listing for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Listing means all applicable standards - general, collateral, and particulars - are applied during the evaluation.
                                                            </u></i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> ETL Classification for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Classification means some of the collateral standards or ISO standards were not completed during the evaluation.       </u>                     </i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>ETL Recognition for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Recognition is a component based evaluation in which all of the requirements of the standard can not be met do to the construction of the component.
                                                            </u>  </i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>FDA ASCA Pilot Program: </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: Under the ASCA Pilot, the FDA grants ASCA Recognition to qualified accreditation bodies to accredit testing laboratories to perform premarket testing for medical device companies. Relying upon international conformity assessment standards and a set of FDA-identified ASCA program specifications, the Pilot is intended to increase consistency and predictability in the FDA's approach to assessing conformance with FDA-recognized consensus standards and test methods eligible for inclusion in the ASCA Pilot in medical device premarket reviews.                            </u>  </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EU Test Reports:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>                         Note: Test reports provided for EU are not an Intertek Certification, these reports can be used to assist with your submittal to a Notified Body in the EU. </u>
                                                            </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>IEC Test Reports:					:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: Test reports provided are not an Intertek Certification, these reports can be used to assist with your submittal to the FDA or clinical trials.                            </u> </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>CB Scheme Evaluation:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Limited Production Certification::</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: LPC evaluation is the same as a listing, except the certification does not require follow-up inspections as only a limited number of products are be produced.                            </u> </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Field Label Evaluation::</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Design Review:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>


                                                            <p><i>
                                                                Note: Intertek will request a list of question or goals expected from the design review.                            </i> </p>


                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EMC Testing</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> Test Data Only:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>ROHS Evaluation:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Performance Testing:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Intertek Assurance and Consulting:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Other:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Witness Manufacturer's Testing:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Intertek Data Acceptance Program SATELLITE (CTF)</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>


                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="6">
                                                <Accordion.Header><b>REPORT REVISION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                        <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Report Numbers to be Revised:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  placeholder=" "/>
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>CDR / Listing Report:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  placeholder=" "/>
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1" />
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EU Reports:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  />
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                          
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>
                                                        </div>
                                                    </div>


                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="7">
                                                <Accordion.Header><b>INTENDED MARKET COUNTRIES</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="8">
                                                <Accordion.Header><b>SPECIAL REQUIRMENTS FOR FUNCTIONALITLY/TESTING OF THE PRODUCT</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="9">
                                                <Accordion.Header><b>REQUESTED STANDARDS FOR EVALUATION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="10">
                                                <Accordion.Header><b> STANDARDS QUESTIONS</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>:null
}
                                    </div>
                                    <div className="bd-example">
{
    showf1?
 
   
   
                                        <Accordion defaultActiveKey="0"><br/><h2><i>--Medical EMC</i></h2><br/>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header><b>GENERAL</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Company Name:{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Address: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        City, State Zip: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Contact: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Phone:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Email:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Model_Difference}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Model_Difference: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Engineering Contact:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header><b> DESCRIPTION OF PRODUCT / INTENDED USE</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1"> DESCRIPTION OF PRODUCT / INTENDED USE</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>



                                                        </div>
                                                    </div>                                        </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header><b>MODEL NUMBER</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="exampleInputText1">Model </Form.Label>
                                                        <Form.Control type="text" id="exampleInputText1" placeholder="Type here.." />
                                                    </Form.Group>
                                                </Accordion.Body>
                                            </Accordion.Item>



                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header><b>ELECTRICAL RATINGS</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Voltage:{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Frequency: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        City, State Zip: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Current/Power:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Other:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>                                        </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header><b>CLASSIFICATION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Stationary:	{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Portable:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Mobile:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Class I:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Fixed:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Fixed:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Body-worn:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Hand-held:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Body-worn:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Class II:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p>Note: Class I means the product has a protective earth connection, Class II does not.</p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Internally Powered:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        USB Powered:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>                                                 </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header><b>SERVICES REQUESTED</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> ETL Listing for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Listing means all applicable standards - general, collateral, and particulars - are applied during the evaluation.
                                                            </u></i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> ETL Classification for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Classification means some of the collateral standards or ISO standards were not completed during the evaluation.       </u>                     </i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>ETL Recognition for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Recognition is a component based evaluation in which all of the requirements of the standard can not be met do to the construction of the component.
                                                            </u>  </i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>FDA ASCA Pilot Program: </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: Under the ASCA Pilot, the FDA grants ASCA Recognition to qualified accreditation bodies to accredit testing laboratories to perform premarket testing for medical device companies. Relying upon international conformity assessment standards and a set of FDA-identified ASCA program specifications, the Pilot is intended to increase consistency and predictability in the FDA's approach to assessing conformance with FDA-recognized consensus standards and test methods eligible for inclusion in the ASCA Pilot in medical device premarket reviews.                            </u>  </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EU Test Reports:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>                         Note: Test reports provided for EU are not an Intertek Certification, these reports can be used to assist with your submittal to a Notified Body in the EU. </u>
                                                            </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>IEC Test Reports:					:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: Test reports provided are not an Intertek Certification, these reports can be used to assist with your submittal to the FDA or clinical trials.                            </u> </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>CB Scheme Evaluation:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Limited Production Certification::</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: LPC evaluation is the same as a listing, except the certification does not require follow-up inspections as only a limited number of products are be produced.                            </u> </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Field Label Evaluation::</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Design Review:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>


                                                            <p><i>
                                                                Note: Intertek will request a list of question or goals expected from the design review.                            </i> </p>


                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EMC Testing</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> Test Data Only:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>ROHS Evaluation:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Performance Testing:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Intertek Assurance and Consulting:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Other:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Witness Manufacturer's Testing:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Intertek Data Acceptance Program SATELLITE (CTF)</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>


                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="6">
                                                <Accordion.Header><b>REPORT REVISION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                        <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Report Numbers to be Revised:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  placeholder=" "/>
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>CDR / Listing Report:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  placeholder=" "/>
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1" />
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EU Reports:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  />
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                          
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>
                                                        </div>
                                                    </div>


                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="7">
                                                <Accordion.Header><b>INTENDED MARKET COUNTRIES</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="8">
                                                <Accordion.Header><b>SPECIAL REQUIRMENTS FOR FUNCTIONALITLY/TESTING OF THE PRODUCT</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="9">
                                                <Accordion.Header><b>REQUESTED STANDARDS FOR EVALUATION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="10">
                                                <Accordion.Header><b> STANDARDS QUESTIONS</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>:null
}
                                    </div>
                                    <div className="bd-example">
{
    showf2?
 
   
   
                                        <Accordion defaultActiveKey="0"><br/><h2><i>--Assurance Services</i></h2><br/>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header><b>GENERAL</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Company Name:{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Address: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        City, State Zip: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Contact: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Phone:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Email:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Model_Difference}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Model_Difference: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Engineering Contact:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header><b> DESCRIPTION OF PRODUCT / INTENDED USE</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1"> DESCRIPTION OF PRODUCT / INTENDED USE</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>



                                                        </div>
                                                    </div>                                        </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header><b>MODEL NUMBER</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="exampleInputText1">Model </Form.Label>
                                                        <Form.Control type="text" id="exampleInputText1" placeholder="Type here.." />
                                                    </Form.Group>
                                                </Accordion.Body>
                                            </Accordion.Item>



                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header><b>ELECTRICAL RATINGS</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Voltage:{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Frequency: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        City, State Zip: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Current/Power:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Other:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>                                        </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header><b>CLASSIFICATION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Stationary:	{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Portable:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Mobile:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Class I:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Fixed:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Fixed:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Body-worn:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Hand-held:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Body-worn:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Class II:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p>Note: Class I means the product has a protective earth connection, Class II does not.</p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Internally Powered:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        USB Powered:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>                                                 </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header><b>SERVICES REQUESTED</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> ETL Listing for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Listing means all applicable standards - general, collateral, and particulars - are applied during the evaluation.
                                                            </u></i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> ETL Classification for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Classification means some of the collateral standards or ISO standards were not completed during the evaluation.       </u>                     </i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>ETL Recognition for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Recognition is a component based evaluation in which all of the requirements of the standard can not be met do to the construction of the component.
                                                            </u>  </i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>FDA ASCA Pilot Program: </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: Under the ASCA Pilot, the FDA grants ASCA Recognition to qualified accreditation bodies to accredit testing laboratories to perform premarket testing for medical device companies. Relying upon international conformity assessment standards and a set of FDA-identified ASCA program specifications, the Pilot is intended to increase consistency and predictability in the FDA's approach to assessing conformance with FDA-recognized consensus standards and test methods eligible for inclusion in the ASCA Pilot in medical device premarket reviews.                            </u>  </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EU Test Reports:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>                         Note: Test reports provided for EU are not an Intertek Certification, these reports can be used to assist with your submittal to a Notified Body in the EU. </u>
                                                            </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>IEC Test Reports:					:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: Test reports provided are not an Intertek Certification, these reports can be used to assist with your submittal to the FDA or clinical trials.                            </u> </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>CB Scheme Evaluation:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Limited Production Certification::</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: LPC evaluation is the same as a listing, except the certification does not require follow-up inspections as only a limited number of products are be produced.                            </u> </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Field Label Evaluation::</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Design Review:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>


                                                            <p><i>
                                                                Note: Intertek will request a list of question or goals expected from the design review.                            </i> </p>


                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EMC Testing</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> Test Data Only:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>ROHS Evaluation:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Performance Testing:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Intertek Assurance and Consulting:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Other:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Witness Manufacturer's Testing:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Intertek Data Acceptance Program SATELLITE (CTF)</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>


                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="6">
                                                <Accordion.Header><b>REPORT REVISION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                        <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Report Numbers to be Revised:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  placeholder=" "/>
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>CDR / Listing Report:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  placeholder=" "/>
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1" />
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EU Reports:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  />
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                          
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>
                                                        </div>
                                                    </div>


                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="7">
                                                <Accordion.Header><b>INTENDED MARKET COUNTRIES</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="8">
                                                <Accordion.Header><b>SPECIAL REQUIRMENTS FOR FUNCTIONALITLY/TESTING OF THE PRODUCT</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="9">
                                                <Accordion.Header><b>REQUESTED STANDARDS FOR EVALUATION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="10">
                                                <Accordion.Header><b> STANDARDS QUESTIONS</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>:null
}
                                    </div>
                                    <div className="bd-example">
{
    showf3?
 
   
   
                                        <Accordion defaultActiveKey="0"><br/><h2><i>--Home Healthcare</i></h2><br/>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header><b>GENERAL</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Company Name:{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Address: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        City, State Zip: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Contact: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Phone:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Email:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Model_Difference}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Model_Difference: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Engineering Contact:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header><b> DESCRIPTION OF PRODUCT / INTENDED USE</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1"> DESCRIPTION OF PRODUCT / INTENDED USE</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>



                                                        </div>
                                                    </div>                                        </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header><b>MODEL NUMBER</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="exampleInputText1">Model </Form.Label>
                                                        <Form.Control type="text" id="exampleInputText1" placeholder="Type here.." />
                                                    </Form.Group>
                                                </Accordion.Body>
                                            </Accordion.Item>



                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header><b>ELECTRICAL RATINGS</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Voltage:{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Frequency: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        City, State Zip: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Current/Power:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Other:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>                                        </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header><b>CLASSIFICATION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Stationary:	{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Portable:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Mobile:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Class I:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Fixed:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Fixed:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Body-worn:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Hand-held:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Body-worn:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Class II:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p>Note: Class I means the product has a protective earth connection, Class II does not.</p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Internally Powered:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        USB Powered:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>                                                 </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header><b>SERVICES REQUESTED</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> ETL Listing for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Listing means all applicable standards - general, collateral, and particulars - are applied during the evaluation.
                                                            </u></i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> ETL Classification for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Classification means some of the collateral standards or ISO standards were not completed during the evaluation.       </u>                     </i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>ETL Recognition for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Recognition is a component based evaluation in which all of the requirements of the standard can not be met do to the construction of the component.
                                                            </u>  </i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>FDA ASCA Pilot Program: </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: Under the ASCA Pilot, the FDA grants ASCA Recognition to qualified accreditation bodies to accredit testing laboratories to perform premarket testing for medical device companies. Relying upon international conformity assessment standards and a set of FDA-identified ASCA program specifications, the Pilot is intended to increase consistency and predictability in the FDA's approach to assessing conformance with FDA-recognized consensus standards and test methods eligible for inclusion in the ASCA Pilot in medical device premarket reviews.                            </u>  </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EU Test Reports:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>                         Note: Test reports provided for EU are not an Intertek Certification, these reports can be used to assist with your submittal to a Notified Body in the EU. </u>
                                                            </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>IEC Test Reports:					:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: Test reports provided are not an Intertek Certification, these reports can be used to assist with your submittal to the FDA or clinical trials.                            </u> </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>CB Scheme Evaluation:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Limited Production Certification::</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: LPC evaluation is the same as a listing, except the certification does not require follow-up inspections as only a limited number of products are be produced.                            </u> </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Field Label Evaluation::</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Design Review:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>


                                                            <p><i>
                                                                Note: Intertek will request a list of question or goals expected from the design review.                            </i> </p>


                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EMC Testing</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> Test Data Only:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>ROHS Evaluation:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Performance Testing:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Intertek Assurance and Consulting:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Other:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Witness Manufacturer's Testing:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Intertek Data Acceptance Program SATELLITE (CTF)</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>


                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="6">
                                                <Accordion.Header><b>REPORT REVISION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                        <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Report Numbers to be Revised:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  placeholder=" "/>
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>CDR / Listing Report:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  placeholder=" "/>
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1" />
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EU Reports:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  />
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                          
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>
                                                        </div>
                                                    </div>


                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="7">
                                                <Accordion.Header><b>INTENDED MARKET COUNTRIES</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="8">
                                                <Accordion.Header><b>SPECIAL REQUIRMENTS FOR FUNCTIONALITLY/TESTING OF THE PRODUCT</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="9">
                                                <Accordion.Header><b>REQUESTED STANDARDS FOR EVALUATION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="10">
                                                <Accordion.Header><b> STANDARDS QUESTIONS</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>:null
}
                                    </div>
                                    <div className="bd-example">
{
    showf4?
 
   
   
                                        <Accordion defaultActiveKey="0"><br/><h2><i>--Laser Safety</i></h2><br/>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header><b>GENERAL</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Company Name:{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Address: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        City, State Zip: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Contact: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Phone:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Email:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Model_Difference}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Model_Difference: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Engineering Contact:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header><b> DESCRIPTION OF PRODUCT / INTENDED USE</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1"> DESCRIPTION OF PRODUCT / INTENDED USE</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>



                                                        </div>
                                                    </div>                                        </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header><b>MODEL NUMBER</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="exampleInputText1">Model </Form.Label>
                                                        <Form.Control type="text" id="exampleInputText1" placeholder="Type here.." />
                                                    </Form.Group>
                                                </Accordion.Body>
                                            </Accordion.Item>



                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header><b>ELECTRICAL RATINGS</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Voltage:{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Frequency: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        City, State Zip: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Current/Power:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Other:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>                                        </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header><b>CLASSIFICATION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Stationary:	{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Portable:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Mobile:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Class I:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Fixed:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Fixed:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Body-worn:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Hand-held:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Body-worn:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Class II:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p>Note: Class I means the product has a protective earth connection, Class II does not.</p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Internally Powered:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        USB Powered:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>                                                 </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header><b>SERVICES REQUESTED</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> ETL Listing for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Listing means all applicable standards - general, collateral, and particulars - are applied during the evaluation.
                                                            </u></i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> ETL Classification for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Classification means some of the collateral standards or ISO standards were not completed during the evaluation.       </u>                     </i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>ETL Recognition for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Recognition is a component based evaluation in which all of the requirements of the standard can not be met do to the construction of the component.
                                                            </u>  </i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>FDA ASCA Pilot Program: </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: Under the ASCA Pilot, the FDA grants ASCA Recognition to qualified accreditation bodies to accredit testing laboratories to perform premarket testing for medical device companies. Relying upon international conformity assessment standards and a set of FDA-identified ASCA program specifications, the Pilot is intended to increase consistency and predictability in the FDA's approach to assessing conformance with FDA-recognized consensus standards and test methods eligible for inclusion in the ASCA Pilot in medical device premarket reviews.                            </u>  </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EU Test Reports:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>                         Note: Test reports provided for EU are not an Intertek Certification, these reports can be used to assist with your submittal to a Notified Body in the EU. </u>
                                                            </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>IEC Test Reports:					:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: Test reports provided are not an Intertek Certification, these reports can be used to assist with your submittal to the FDA or clinical trials.                            </u> </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>CB Scheme Evaluation:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Limited Production Certification::</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: LPC evaluation is the same as a listing, except the certification does not require follow-up inspections as only a limited number of products are be produced.                            </u> </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Field Label Evaluation::</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Design Review:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>


                                                            <p><i>
                                                                Note: Intertek will request a list of question or goals expected from the design review.                            </i> </p>


                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EMC Testing</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> Test Data Only:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>ROHS Evaluation:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Performance Testing:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Intertek Assurance and Consulting:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Other:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Witness Manufacturer's Testing:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Intertek Data Acceptance Program SATELLITE (CTF)</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>


                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="6">
                                                <Accordion.Header><b>REPORT REVISION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                        <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Report Numbers to be Revised:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  placeholder=" "/>
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>CDR / Listing Report:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  placeholder=" "/>
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1" />
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EU Reports:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  />
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                          
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>
                                                        </div>
                                                    </div>


                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="7">
                                                <Accordion.Header><b>INTENDED MARKET COUNTRIES</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="8">
                                                <Accordion.Header><b>SPECIAL REQUIRMENTS FOR FUNCTIONALITLY/TESTING OF THE PRODUCT</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="9">
                                                <Accordion.Header><b>REQUESTED STANDARDS FOR EVALUATION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="10">
                                                <Accordion.Header><b> STANDARDS QUESTIONS</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>:null
}
                                    </div>
                                    <div className="bd-example">
{
    showf5?
 
   
   
                                        <Accordion defaultActiveKey="0"><br/><h2><i>--Infusion Pump</i></h2><br/>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header><b>GENERAL</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Company Name:{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Address: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        City, State Zip: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Contact: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Phone:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Email:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Model_Difference}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Model_Difference: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Engineering Contact:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header><b> DESCRIPTION OF PRODUCT / INTENDED USE</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1"> DESCRIPTION OF PRODUCT / INTENDED USE</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>



                                                        </div>
                                                    </div>                                        </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header><b>MODEL NUMBER</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="exampleInputText1">Model </Form.Label>
                                                        <Form.Control type="text" id="exampleInputText1" placeholder="Type here.." />
                                                    </Form.Group>
                                                </Accordion.Body>
                                            </Accordion.Item>



                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header><b>ELECTRICAL RATINGS</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Voltage:{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Frequency: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        City, State Zip: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Current/Power:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Other:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>                                        </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header><b>CLASSIFICATION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Stationary:	{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Portable:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Mobile:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Class I:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Fixed:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Fixed:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Body-worn:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Hand-held:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Body-worn:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Class II:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p>Note: Class I means the product has a protective earth connection, Class II does not.</p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Internally Powered:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        USB Powered:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>                                                 </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header><b>SERVICES REQUESTED</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> ETL Listing for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Listing means all applicable standards - general, collateral, and particulars - are applied during the evaluation.
                                                            </u></i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> ETL Classification for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Classification means some of the collateral standards or ISO standards were not completed during the evaluation.       </u>                     </i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>ETL Recognition for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Recognition is a component based evaluation in which all of the requirements of the standard can not be met do to the construction of the component.
                                                            </u>  </i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>FDA ASCA Pilot Program: </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: Under the ASCA Pilot, the FDA grants ASCA Recognition to qualified accreditation bodies to accredit testing laboratories to perform premarket testing for medical device companies. Relying upon international conformity assessment standards and a set of FDA-identified ASCA program specifications, the Pilot is intended to increase consistency and predictability in the FDA's approach to assessing conformance with FDA-recognized consensus standards and test methods eligible for inclusion in the ASCA Pilot in medical device premarket reviews.                            </u>  </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EU Test Reports:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>                         Note: Test reports provided for EU are not an Intertek Certification, these reports can be used to assist with your submittal to a Notified Body in the EU. </u>
                                                            </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>IEC Test Reports:					:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: Test reports provided are not an Intertek Certification, these reports can be used to assist with your submittal to the FDA or clinical trials.                            </u> </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>CB Scheme Evaluation:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Limited Production Certification::</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: LPC evaluation is the same as a listing, except the certification does not require follow-up inspections as only a limited number of products are be produced.                            </u> </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Field Label Evaluation::</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Design Review:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>


                                                            <p><i>
                                                                Note: Intertek will request a list of question or goals expected from the design review.                            </i> </p>


                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EMC Testing</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> Test Data Only:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>ROHS Evaluation:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Performance Testing:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Intertek Assurance and Consulting:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Other:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Witness Manufacturer's Testing:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Intertek Data Acceptance Program SATELLITE (CTF)</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>


                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="6">
                                                <Accordion.Header><b>REPORT REVISION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                        <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Report Numbers to be Revised:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  placeholder=" "/>
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>CDR / Listing Report:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  placeholder=" "/>
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1" />
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EU Reports:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  />
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                          
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>
                                                        </div>
                                                    </div>


                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="7">
                                                <Accordion.Header><b>INTENDED MARKET COUNTRIES</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="8">
                                                <Accordion.Header><b>SPECIAL REQUIRMENTS FOR FUNCTIONALITLY/TESTING OF THE PRODUCT</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="9">
                                                <Accordion.Header><b>REQUESTED STANDARDS FOR EVALUATION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="10">
                                                <Accordion.Header><b> STANDARDS QUESTIONS</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>:null
}
                                    </div>
                                    <div className="bd-example">
{
    showf6?
 
   
   
                                        <Accordion defaultActiveKey="0"><br/><h2><i>--Ultrasound Probe</i></h2><br/>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header><b>GENERAL</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Company Name:{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Address: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        City, State Zip: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Contact: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Phone:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Email:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Model_Difference}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Model_Difference: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Engineering Contact:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header><b> DESCRIPTION OF PRODUCT / INTENDED USE</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1"> DESCRIPTION OF PRODUCT / INTENDED USE</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>



                                                        </div>
                                                    </div>                                        </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header><b>MODEL NUMBER</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="exampleInputText1">Model </Form.Label>
                                                        <Form.Control type="text" id="exampleInputText1" placeholder="Type here.." />
                                                    </Form.Group>
                                                </Accordion.Body>
                                            </Accordion.Item>



                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header><b>ELECTRICAL RATINGS</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Voltage:{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Frequency: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        City, State Zip: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Current/Power:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Other:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>                                        </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header><b>CLASSIFICATION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Stationary:	{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Portable:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Mobile:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Class I:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Fixed:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Fixed:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Body-worn:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Hand-held:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Body-worn:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Class II:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p>Note: Class I means the product has a protective earth connection, Class II does not.</p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Internally Powered:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        USB Powered:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>                                                 </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header><b>SERVICES REQUESTED</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> ETL Listing for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Listing means all applicable standards - general, collateral, and particulars - are applied during the evaluation.
                                                            </u></i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> ETL Classification for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Classification means some of the collateral standards or ISO standards were not completed during the evaluation.       </u>                     </i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>ETL Recognition for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Recognition is a component based evaluation in which all of the requirements of the standard can not be met do to the construction of the component.
                                                            </u>  </i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>FDA ASCA Pilot Program: </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: Under the ASCA Pilot, the FDA grants ASCA Recognition to qualified accreditation bodies to accredit testing laboratories to perform premarket testing for medical device companies. Relying upon international conformity assessment standards and a set of FDA-identified ASCA program specifications, the Pilot is intended to increase consistency and predictability in the FDA's approach to assessing conformance with FDA-recognized consensus standards and test methods eligible for inclusion in the ASCA Pilot in medical device premarket reviews.                            </u>  </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EU Test Reports:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>                         Note: Test reports provided for EU are not an Intertek Certification, these reports can be used to assist with your submittal to a Notified Body in the EU. </u>
                                                            </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>IEC Test Reports:					:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: Test reports provided are not an Intertek Certification, these reports can be used to assist with your submittal to the FDA or clinical trials.                            </u> </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>CB Scheme Evaluation:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Limited Production Certification::</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: LPC evaluation is the same as a listing, except the certification does not require follow-up inspections as only a limited number of products are be produced.                            </u> </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Field Label Evaluation::</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Design Review:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>


                                                            <p><i>
                                                                Note: Intertek will request a list of question or goals expected from the design review.                            </i> </p>


                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EMC Testing</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> Test Data Only:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>ROHS Evaluation:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Performance Testing:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Intertek Assurance and Consulting:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Other:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Witness Manufacturer's Testing:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Intertek Data Acceptance Program SATELLITE (CTF)</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>


                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="6">
                                                <Accordion.Header><b>REPORT REVISION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                        <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Report Numbers to be Revised:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  placeholder=" "/>
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>CDR / Listing Report:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  placeholder=" "/>
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1" />
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EU Reports:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  />
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                          
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>
                                                        </div>
                                                    </div>


                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="7">
                                                <Accordion.Header><b>INTENDED MARKET COUNTRIES</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="8">
                                                <Accordion.Header><b>SPECIAL REQUIRMENTS FOR FUNCTIONALITLY/TESTING OF THE PRODUCT</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="9">
                                                <Accordion.Header><b>REQUESTED STANDARDS FOR EVALUATION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="10">
                                                <Accordion.Header><b> STANDARDS QUESTIONS</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>:null
}
                                    </div>
                                    <div className="bd-example">
{
    showf7?
 
   
   
                                        <Accordion defaultActiveKey="0"><br/><h2><i>--X-Ray</i></h2><br/>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header><b>GENERAL</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Company Name:{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Address: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        City, State Zip: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Contact: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Phone:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Email:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Model_Difference}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Model_Difference: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Engineering Contact:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header><b> DESCRIPTION OF PRODUCT / INTENDED USE</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1"> DESCRIPTION OF PRODUCT / INTENDED USE</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>



                                                        </div>
                                                    </div>                                        </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header><b>MODEL NUMBER</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="exampleInputText1">Model </Form.Label>
                                                        <Form.Control type="text" id="exampleInputText1" placeholder="Type here.." />
                                                    </Form.Group>
                                                </Accordion.Body>
                                            </Accordion.Item>



                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header><b>ELECTRICAL RATINGS</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Voltage:{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Frequency: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        City, State Zip: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Current/Power:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Other:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>                                        </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header><b>CLASSIFICATION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Stationary:	{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Portable:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Mobile:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Class I:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Fixed:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Fixed:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Body-worn:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Hand-held:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Body-worn:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Class II:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p>Note: Class I means the product has a protective earth connection, Class II does not.</p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Internally Powered:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        USB Powered:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>                                                 </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header><b>SERVICES REQUESTED</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> ETL Listing for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Listing means all applicable standards - general, collateral, and particulars - are applied during the evaluation.
                                                            </u></i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> ETL Classification for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Classification means some of the collateral standards or ISO standards were not completed during the evaluation.       </u>                     </i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>ETL Recognition for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Recognition is a component based evaluation in which all of the requirements of the standard can not be met do to the construction of the component.
                                                            </u>  </i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>FDA ASCA Pilot Program: </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: Under the ASCA Pilot, the FDA grants ASCA Recognition to qualified accreditation bodies to accredit testing laboratories to perform premarket testing for medical device companies. Relying upon international conformity assessment standards and a set of FDA-identified ASCA program specifications, the Pilot is intended to increase consistency and predictability in the FDA's approach to assessing conformance with FDA-recognized consensus standards and test methods eligible for inclusion in the ASCA Pilot in medical device premarket reviews.                            </u>  </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EU Test Reports:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>                         Note: Test reports provided for EU are not an Intertek Certification, these reports can be used to assist with your submittal to a Notified Body in the EU. </u>
                                                            </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>IEC Test Reports:					:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: Test reports provided are not an Intertek Certification, these reports can be used to assist with your submittal to the FDA or clinical trials.                            </u> </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>CB Scheme Evaluation:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Limited Production Certification::</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: LPC evaluation is the same as a listing, except the certification does not require follow-up inspections as only a limited number of products are be produced.                            </u> </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Field Label Evaluation::</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Design Review:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>


                                                            <p><i>
                                                                Note: Intertek will request a list of question or goals expected from the design review.                            </i> </p>


                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EMC Testing</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> Test Data Only:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>ROHS Evaluation:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Performance Testing:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Intertek Assurance and Consulting:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Other:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Witness Manufacturer's Testing:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Intertek Data Acceptance Program SATELLITE (CTF)</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>


                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="6">
                                                <Accordion.Header><b>REPORT REVISION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                        <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Report Numbers to be Revised:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  placeholder=" "/>
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>CDR / Listing Report:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  placeholder=" "/>
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1" />
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EU Reports:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  />
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                          
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>
                                                        </div>
                                                    </div>


                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="7">
                                                <Accordion.Header><b>INTENDED MARKET COUNTRIES</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="8">
                                                <Accordion.Header><b>SPECIAL REQUIRMENTS FOR FUNCTIONALITLY/TESTING OF THE PRODUCT</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="9">
                                                <Accordion.Header><b>REQUESTED STANDARDS FOR EVALUATION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="10">
                                                <Accordion.Header><b> STANDARDS QUESTIONS</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>:null
}
                                    </div>
                                    <div className="bd-example">
{
    showf8?
 
   
   
                                        <Accordion defaultActiveKey="0"><br/><h2><i>--EMS Environment</i></h2><br/>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header><b>GENERAL</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Company Name:{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Address: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        City, State Zip: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Contact: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Phone:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Email:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Model_Difference}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Model_Difference: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Engineering Contact:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header><b> DESCRIPTION OF PRODUCT / INTENDED USE</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1"> DESCRIPTION OF PRODUCT / INTENDED USE</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>



                                                        </div>
                                                    </div>                                        </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header><b>MODEL NUMBER</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="exampleInputText1">Model </Form.Label>
                                                        <Form.Control type="text" id="exampleInputText1" placeholder="Type here.." />
                                                    </Form.Group>
                                                </Accordion.Body>
                                            </Accordion.Item>



                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header><b>ELECTRICAL RATINGS</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Voltage:{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Frequency: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        City, State Zip: *
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Current/Power:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Other:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>




                                                        </div>
                                                    </div>                                        </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header><b>CLASSIFICATION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Stationary:	{" "}
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Model_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Model_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Portable:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="Product_Name"
                                                                        className="form-control"
                                                                        value={postData.Product_Name}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Name: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Mobile:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Regulatory_Family}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Regulatory_Family: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Class I:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Fixed:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Fixed:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Body-worn:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Hand-held:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Body-worn:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Class II:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p>Note: Class I means the product has a protective earth connection, Class II does not.</p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        Internally Powered:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="form-label">
                                                                        USB Powered:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postData.Product_Description}
                                                                        onChange={(e) =>
                                                                            setPostData({
                                                                                ...postData,
                                                                                Product_Description: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>                                                 </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header><b>SERVICES REQUESTED</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> ETL Listing for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Listing means all applicable standards - general, collateral, and particulars - are applied during the evaluation.
                                                            </u></i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> ETL Classification for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Classification means some of the collateral standards or ISO standards were not completed during the evaluation.       </u>                     </i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>ETL Recognition for North America:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: ETL Recognition is a component based evaluation in which all of the requirements of the standard can not be met do to the construction of the component.
                                                            </u>  </i> </p>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>FDA ASCA Pilot Program: </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: Under the ASCA Pilot, the FDA grants ASCA Recognition to qualified accreditation bodies to accredit testing laboratories to perform premarket testing for medical device companies. Relying upon international conformity assessment standards and a set of FDA-identified ASCA program specifications, the Pilot is intended to increase consistency and predictability in the FDA's approach to assessing conformance with FDA-recognized consensus standards and test methods eligible for inclusion in the ASCA Pilot in medical device premarket reviews.                            </u>  </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EU Test Reports:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>                         Note: Test reports provided for EU are not an Intertek Certification, these reports can be used to assist with your submittal to a Notified Body in the EU. </u>
                                                            </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>IEC Test Reports:					:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: Test reports provided are not an Intertek Certification, these reports can be used to assist with your submittal to the FDA or clinical trials.                            </u> </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>CB Scheme Evaluation:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Limited Production Certification::</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <p><i><u>
                                                                Note: LPC evaluation is the same as a listing, except the certification does not require follow-up inspections as only a limited number of products are be produced.                            </u> </i> </p>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Field Label Evaluation::</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Design Review:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>


                                                            <p><i>
                                                                Note: Intertek will request a list of question or goals expected from the design review.                            </i> </p>


                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EMC Testing</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label> Test Data Only:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>ROHS Evaluation:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Performance Testing:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Intertek Assurance and Consulting:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Other:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Witness Manufacturer's Testing:</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Intertek Data Acceptance Program SATELLITE (CTF)</Form.Label>
                                                                    <select className="form-select mb-3 shadow-none">
                                                                        <option defaultValue>Open this select menu</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>


                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="6">
                                                <Accordion.Header><b>REPORT REVISION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="form-card text-start">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {/* <h3 className="mb-4">Account Information: </h3> */}
                                                            </div>
                                                            <div className="col-5">
                                                                {/* <h2 className="steps">Step 1 - 4</h2> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                        <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Report Numbers to be Revised:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  placeholder=" "/>
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>CDR / Listing Report:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  placeholder=" "/>
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>Testing at Manufacturer's Premises: </Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1" />
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">


                                                                    <Form.Label>EU Reports:</Form.Label>
                                                                    <Form.Group className="form-group">
                                        <Form.Control type="text"  id="exampleInputText1"  />
                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                          
                                                            <Form.Group className="mb-3 form-group">
                                                                <Form.Label htmlFor="exampleFormControlTextarea1">Description of revision:</Form.Label>
                                                                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="5" />
                                                            </Form.Group>
                                                        </div>
                                                    </div>


                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="7">
                                                <Accordion.Header><b>INTENDED MARKET COUNTRIES</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="8">
                                                <Accordion.Header><b>SPECIAL REQUIRMENTS FOR FUNCTIONALITLY/TESTING OF THE PRODUCT</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="9">
                                                <Accordion.Header><b>REQUESTED STANDARDS FOR EVALUATION</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="10">
                                                <Accordion.Header><b> STANDARDS QUESTIONS</b></Accordion.Header>
                                                <Accordion.Body>
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>:null
}
                                    </div>
                                    <br/>

                                    {
    butt? 
    
    <button type="button" name="next" className="btn btn-primary next action-button float-end" value="Next" id='bttn' onClick={disableButton}> Submit </button>
    :null}

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default FormWizard
