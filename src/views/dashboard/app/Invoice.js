
import React, { useEffect, useState, useRef } from "react";
import FileBase from "react-file-base64";
import Card from '../../../components/Card'
import avatars11 from '../../../assets/images/avatars/01.png'
import avatars22 from '../../../assets/images/avatars/avtar_1.png'
import avatars33 from '../../../assets/images/avatars/avtar_2.png'
import avatars44 from '../../../assets/images/avatars/avtar_3.png'
import avatars55 from '../../../assets/images/avatars/avtar_4.png'
import { Row, Col, Image, Form, Nav, Dropdown, Tab, Table, FormControl, InputGroup, NavDropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useHistory, useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Billing = () => {
    const params = useParams()
    const navigate = useHistory()

    const [product, setproduct] = useState("");
    const [product1, setproduct1] = useState("");
    const [price, setprice] = useState('');
    const [result, setresult] = useState('')
    const [quantity, setquantity] = useState('');
    const [vendorid, setvendorid] = useState(params.id);
    const [heading, setHeading] = useState('')
    const [pdf1, setPdf1] = useState('')
    const [datapo, setDatapo] = useState([]);
    const [data, setData] = useState([]);
const [showbottom, setShowbottom] = useState(false)


    const handleSubmitforpo = async () => {
        const result = await fetch("http://localhost:5005/poattachments", {
            method: "post",
            body: JSON.stringify({
                pdf1,
                heading,
                product,
                price,
                quantity,
                vendorid,
            }),
            headers: { "Content-Type": "application/json" },
        });
        if (result) { getpo(); getpo(); getpo(); getpo(); getpo(); getpo(); setHeading(''); setproduct(''); setprice(''); setquantity(''); toast.info("Added") }
    };
    const [postemail, setpostemail] = useState({
        id: '',
        file: '',
    })
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
    const handleemail = async (e) => {
        e.preventDefault();
        const result =  await fetch(`http://localhost:5005/po/sendapprover`, {
            method: "post",
            body: JSON.stringify(postemail),
            headers: { "Content-Type": "application/json" },
        });
        // result = await result.json();

        if (result) {
            alert("Attachment added Succesfully!");


        }
        console.warn(result);
    };
    useEffect(() => {
        getpo()
        getpo()
        getpo()
        getpo()
        getproducts()
    }, []);

    const pdfGenerator = () => {
        const doc = new jsPDF()
        doc.html(document.querySelector("#print"), {
            callback: function (pdf) {
                setPdf1(pdf)
                console.warn("asasa", pdf);
                console.log("asasa", pdf1);
                setPdf1(pdf.save("mypdf"))
                console.log("asasa", pdf1);


                setPdf1(doc.output())
                console.warn("asasa", pdf);
               setShowbottom(!showbottom ) 


            },
            x: 28,
            y: 5,
            width: 180,
            windowWidth: 1000
        });
        // navigate.push(`/dashboard/app/UserProfile2/${params.id}`)
    }

    const getpo = async () => {
        let result = await fetch(`http://localhost:5005/poattachments/search/${params.id}`);
        result = await result.json();
        setDatapo(result);
        console.log(result)
    };

    const getproducts = async () => {
        let result = await fetch(`http://localhost:5005/userRFQ/view/${params.id}`);
        result = await result.json();
        setData(result);
    };
    const hell = () => {
        navigate.push(`/dashboard/app/user-profile/${params.id}`)
    }

    return (
        <>
            <Row className="">
                <Col lg="12" className="">
                    <Card>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <div className="d-flex flex-wrap align-items-center">
                                    <div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
                                        <Image className="theme-color-default-img  img-fluid rounded-pill avatar-100" src={avatars11} alt="profile-pic" />
                                        <Image className="theme-color-purple-img img-fluid rounded-pill avatar-100" src={avatars22} alt="profile-pic" />
                                        <Image className="theme-color-blue-img img-fluid rounded-pill avatar-100" src={avatars33} alt="profile-pic" />
                                        <Image className="theme-color-green-img img-fluid rounded-pill avatar-100" src={avatars55} alt="profile-pic" />
                                        <Image className="theme-color-yellow-img img-fluid rounded-pill avatar-100" src={avatars55} alt="profile-pic" />
                                        <Image className="theme-color-pink-img img-fluid rounded-pill avatar-100" src={avatars44} alt="profile-pic" />
                                    </div>
                                    <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                                        {data.map((item) => (
                                            <h4 className="me-2 h4">{item.rfq_name}</h4>
                                        ))}


                                        {data.map((item) => (
                                            <span> - {item.Name}</span>
                                        ))}                                 </div>
                                </div>
                                <Nav as="ul" className="d-flex nav-pills mb-0 text-center profile-tab" data-toggle="slider-tab" id="profile-pills-tab" role="tablist">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="first" onClick={hell}>back</Nav.Link>
                                    </Nav.Item>

                                </Nav>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title"> Add Items</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Control type="text" placeholder="Heading" value={heading} onChange={(e) => { setHeading(e.target.value) }} />
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" placeholder="Item" value={product} onChange={(e) => { setproduct(e.target.value) }} />
                                    </Col>
                                    <Col>
                                        <Form.Control type="number" placeholder="Quantity" value={quantity} onChange={(e) => { setquantity(e.target.value) }} />
                                    </Col>
                                    <Col>
                                        <Form.Control type="number" placeholder="Price" value={price} onChange={(e) => { setprice(e.target.value) }} />
                                    </Col>
                                </Row>

                                <br />
                                <Row>
                                    <Button size="25px" onClick={handleSubmitforpo} variant="btn btn-primary">Add</Button>{' '}

                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Card className="rounded">
                        <Card.Body className="">
                            <div className="row d-flex align-items-baseline" id="print">
                                <div className="row">
                                    <div className="col-x-12">
                                        <br />
                                        <br />

                                        <div className="row">
                                            <div className="col-xl">
                                                <Image className="theme-color-default-img  img-fluid rounded-pill avatar-80" src={avatars11} alt="profile-pic" />
                                                <br />
                                                <br />
                                                <h5>  <b> INTERTEK TESTING SERVICES INC</b> </h5><span style={{ color: "#5d9fc5" }}></span>
                                                <ul className="list-unstyled">
                                                    <i>
                                                        <li contenteditable="true" className="text-muted">
                                                            399 US ROUTE 11 INDUSTRIAL PARK  <span style={{ color: "#5d9fc5" }}></span>
                                                        </li>
                                                        <li contenteditable="true" className="text-muted">
                                                            CORTLAND<span style={{ color: "#5d9fc5" }}> </span>
                                                        </li>
                                                        <li contenteditable="true" className="text-muted">
                                                            CORTLAND, NY 13045 <span style={{ color: "#5d9fc5" }}></span>
                                                        </li>
                                                    </i>
                                                    <li contenteditable="true" className="text-muted">
                                                        Attn: BD Supplier <span style={{ color: "#5d9fc5" }}> </span>
                                                    </li>
                                                    <li contenteditable="true" className="text-muted">
                                                        Phone: +1(800) 967-5352 <span style={{ color: "#5d9fc5" }}> </span>
                                                    </li>
                                                    <li contenteditable="true" className="text-muted">
                                                        Fax: +1 (650) 463-2910 <span style={{ color: "#5d9fc5" }}> </span>
                                                    </li>
                                                    <li contenteditable="true" className="text-muted">
                                                        <br />


                                                        <h5 className="card-title">Ship To:</h5>
                                                        <p className="card-text">    <ul className="list-unstyled">
                                                            <i>
                                                                <li contenteditable="true" className="text-muted">
                                                                    Becton, Dickinson and Company  <span style={{ color: "#5d9fc5" }}></span>
                                                                </li>
                                                                <li contenteditable="true" className="text-muted">
                                                                    2350 Qume Drive<span style={{ color: "#5d9fc5" }}> </span>
                                                                </li>
                                                                <li contenteditable="true" className="text-muted">
                                                                    SAN JOSE, CA 95131-1812 <span style={{ color: "#5d9fc5" }}></span>
                                                                </li>
                                                                <li contenteditable="true" className="text-muted">
                                                                    23402 <span style={{ color: "#5d9fc5" }}></span>
                                                                </li>
                                                                <li contenteditable="true" className="text-muted">
                                                                    Attn <span style={{ color: "#5d9fc5" }}></span>
                                                                </li>
                                                                <li contenteditable="true" className="text-muted">
                                                                    United States  <span style={{ color: "#5d9fc5" }}></span>
                                                                </li>
                                                            </i>



                                                        </ul>
                                                        </p>

                                                        <span style={{ color: "#5d9fc5" }}> </span>
                                                    </li>
                                                    <br />


                                                </ul></div>
                                            <div className="col-xl"></div>
                                            <div className="col-xl"></div>
                                            <div className="col-xl">
                                                <br />
                                                <br />
                                                <h5>   Becton, Dickinson and Company  </h5><span style={{ color: "#5d9fc5" }}></span>

                                                <br />
                                                <ul className="list-unstyled">

                                                    <li contenteditable="true" className="text-muted">
                                                        PO NUMBER:  6900921615 <span style={{ color: "#5d9fc5" }}></span>
                                                    </li>
                                                    <li contenteditable="true" className="text-muted">
                                                        DATE: 11/02/22<span style={{ color: "#5d9fc5" }}> </span>
                                                    </li>
                                                    <li contenteditable="true" className="text-muted">
                                                        PAYMENT TERMS: 1061 Net 90 Days<span style={{ color: "#5d9fc5" }}></span>
                                                    </li>

                                                    <li contenteditable="true" className="text-muted">
                                                        SHIPPING TERMS: FCA <span style={{ color: "#5d9fc5" }}> </span>
                                                    </li>
                                                    <li contenteditable="true" className="text-muted">
                                                        CURRENCY: USD<span style={{ color: "#5d9fc5" }}> </span>
                                                    </li>
                                                    <li contenteditable="true" className="text-muted">
                                                        CONTRACT:<span style={{ color: "#5d9fc5" }}> </span>
                                                    </li>
                                                    <li contenteditable="true" className="text-muted">
                                                        CONTACT:<span style={{ color: "#5d9fc5" }}> </span>
                                                    </li>
                                                    <li contenteditable="true" className="text-muted">
                                                        <br />

                                                        <h5 className="card-title">Bill To:</h5>
                                                        <p className="card-text">    <ul className="list-unstyled">
                                                            <i>
                                                                <li contenteditable="true" className="text-muted">
                                                                    Becton, Dickinson, and Company <span style={{ color: "#5d9fc5" }}></span>
                                                                </li>
                                                                <li contenteditable="true" className="text-muted">
                                                                    PO Box 5200<span style={{ color: "#5d9fc5" }}> </span>
                                                                </li>
                                                                <li contenteditable="true" className="text-muted">
                                                                    Rantoul, IL 61866-5200 <span style={{ color: "#5d9fc5" }}></span>
                                                                </li>
                                                                <li contenteditable="true" className="text-muted">
                                                                    Attn: Accounts Payable <span style={{ color: "#5d9fc5" }}></span>
                                                                </li>
                                                                <li contenteditable="true" className="text-muted">
                                                                    United States <span style={{ color: "#5d9fc5" }}></span>
                                                                </li>

                                                            </i>
                                                        </ul>
                                                        </p>

                                                        <span style={{ color: "#5d9fc5" }}> </span>
                                                    </li>




                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className='text-center text-light'>-----------------------------------------------------------------------------------------------------------------------------------------</h5>
                                <div className="row">
                                    <div className="col-xl-15">
                                        <ul className="list-unstyled">

                                            <li contenteditable="true" className="text-muted">
                                                <b><i><u>Note: </u></i> </b>Price as per attached quote # Qu-01308416-0 <span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li contenteditable="true" className="text-muted">
                                                <b><i><u>Note: </u></i> </b>FCA - CORTLAND, NY <span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li contenteditable="true" className="text-muted">
                                                <b><i><u>Note: </u></i> </b>FedEx# 140212393 ABF<span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li contenteditable="true" className="text-muted">
                                                <b>Shipping instructions:</b><span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li contenteditable="true" className="text-muted">
                                                Small parcels less than 150 Ibs/70 kg - use BD FedEx acct<span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li contenteditable="true" className="text-muted">
                                                Parcels Over 150 Ibs/70kg ??? Use designated LTL carrier to schedule pick up else contact buyer for shipping instructions - Mohammed.zeeshan@bd.com<span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li contenteditable="true" className="text-muted">
                                                <b><i><u>Note: </u></i> </b>***Please confirm by selecting Acknowledge Order or Email- Mohammed.zeeshan@bd.com<span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li contenteditable="true" className="text-muted">
                                                *** Please see attached for Instructions on acknowledgements, invoicing and international Shipment.</li>
                                        </ul>
                                    </div>
                                </div>
                                <h5 className='text-center text-light'>------------------------------------------------------------------------------------------------------------------------------------------------------------</h5>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-md-3">

                                                <table class="table">
                                                    <b>Description</b>                </table>
                                            </div>
                                            <div class="col-md-3">

                                                <table class="table">
                                                    <b> DATE  </b>              </table>
                                            </div>
                                            <div class="col-md-2">

                                                <table class="table">
                                                    <b>  QTY  </b>              </table>
                                            </div>
                                            <div class="col-md-2">

                                                <table class="table">
                                                    <b>  PRICE</b>
                                                </table>
                                            </div>
                                            <div class="col-md-2">

                                                <table class="table">
                                                    <b>  Total</b>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        {datapo.map((item) => (
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <h6>{item.heading}</h6>
                                                    <Form.Group className="mb-3 form-group">

                                                        {item.product}
                                                    </Form.Group>


                                                </div>

                                                <div class="col-md-3">

                                                    <table class="table">
                                                        23-59-5959
                                                    </table>
                                                </div>
                                                <div class="col-md-2">

                                                    <table class="table">
                                                        {item.quantity}
                                                    </table>
                                                </div>
                                                <div class="col-md-2">

                                                    <table class="table">
                                                        {item.price}
                                                    </table>
                                                </div>
                                                <div class="col-md-2">

                                                    <table class="table">
                                                        {item.price * item.quantity}
                                                    </table>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-xl-12">
                                        <p class="text-center text-danger ">As of <u>January 4, 2021</u>, BD will no longer accept paper or PDF invoices.</p>
                                        <ul className="list-unstyled">

                                            <li className="text-center ">
                                                <b>Need help with invoice or you want to make a payment inquiry?</b><span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li className="text-center">
                                                <b>Req to Pay Customer Service:</b><span style={{ color: "#5d9fc5" }}> </span>
                                            </li>

                                            <li className="text-center">
                                                Monday through Friday<span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li className="text-center">
                                                <b>Phone:</b><span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li className="text-center">
                                                855-4BD-Help (855-423-4357)<span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li className="text-center">
                                                <b>Online:</b><span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li className="text-center">
                                                <a >BD.com/Services</a><span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li className="text-center">
                                                <b>For Terms & Condition, visit: :</b><span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li className="text-center">
                                                North America: <a>PO Terms and Conditions</a><span style={{ color: "#5d9fc5" }}> </span>
                                            </li>

                                        </ul>








                                        <p > This document isa Purchase Order from Becton, Dickinson and Company issued from our new BD BuySmart solution, powered by Coupa. Please process this order the same as you would any other PO from BD. If you have any questions or concems about thi order, please visit our BD Services Store at ww.hs.com/services (registration may be
                                            required) oc cll the Reqo-Pay customer servic team a 385-425-4957
                                        </p>
                                    </div>
                                    <div className="col-xl-3">

                                        <p className="text-black float-start">
                                            {/* <span className="text-black me-3"> Total</span> */}
                                            {/* <span style={{ fontSize: 25 }}>$1221</span> */}
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-xl-12">
                                        <p>The purchases on this Purchase Order are assumed tobe Taxable for Sales Tax unless an exemption cerfiate hs been provided sepaatly or this transaction
                                        </p>
                                    </div>

                                    <div className="col-xl-2">

                                    </div>
                                </div>
                            </div>
                            <Button size="25px" onClick={pdfGenerator} variant="btn btn-primary">GO </Button>{' '}

                        </Card.Body>
                    </Card>
                    {showbottom?
                    <>
                    <div class="file-upload-wrapper">

                        {/* <Form.Control type="file" id="customFile1" onChange={handleattachments} name="file" /> */}
                        <FileBase type="file" multiple={''} onDone={({ base64 }) => setpostemail({ ...postemail, file: base64 })} />
                        <FileBase type="file" multiple={''} onDone={({ base64 }) => setpostemail({ ...postData, file: base64 })} />


                    </div>
                    <br />

                    <button
                        type="button"
                        name="next"
                        className="btn btn-primary next action-button float-end"
                        onClick={handleemail}

                    >
                        Send For Approval
                    </button></>:null
                    }
                   
                </Col>
            </Row>
            <ToastContainer />
        </>
    )
}

export default Billing
