import Card from '../../../components/Card'
import avatars11 from '../../../assets/images/avatars/01.png'
import avatars22 from '../../../assets/images/avatars/avtar_1.png'
import avatars33 from '../../../assets/images/avatars/avtar_2.png'
import avatars44 from '../../../assets/images/avatars/avtar_3.png'
import avatars55 from '../../../assets/images/avatars/avtar_4.png'
import avatars66 from '../../../assets/images/avatars/avtar_5.png'
import avatars2 from '../../../assets/images/avatars/02.png'
import avatars3 from '../../../assets/images/avatars/03.png'
import avatars4 from '../../../assets/images/avatars/04.png'
import avatars5 from '../../../assets/images/avatars/05.png'
import chopp from '../../../assets/images/avatars/av.jpg'
import icon1 from '../../../assets/images/icons/01.png'
import icon2 from '../../../assets/images/icons/02.png'
import icon3 from '../../../assets/images/icons/03.png'
import icon4 from '../../../assets/images/icons/04.png'
import icon8 from '../../../assets/images/icons/08.png'
import icon6 from '../../../assets/images/icons/06.png'
import icon7 from '../../../assets/images/icons/07.png'
import icon5 from '../../../assets/images/icons/05.png'
import shap2 from '../../../assets/images/shapes/02.png'
import shap4 from '../../../assets/images/shapes/04.png'
import shap6 from '../../../assets/images/shapes/06.png'
import pages2 from '../../../assets/images/pages/02-page.png'
import Flatpickr from "react-flatpickr";

import ShareOffcanvas from '../../../components/partials/components/shareoffcanvas'
import React, { useEffect, useState, useRef } from "react";
import FileBase from "react-file-base64";

import FsLightbox from "fslightbox-react";
import { allUsersRoute, host } from "../utils/APIRoutes";
import axios from "axios";
import { jsPDF } from "jspdf";
import Base64Downloader from 'react-base64-downloader';
import { io } from "socket.io-client";

import styled from "styled-components";
import { Row, Col, Image, Form, Nav, Dropdown, Tab } from "react-bootstrap";
import { useHistory, Link, useParams, useLocation } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import ChatContainer from "../MessagesForAdmin.js/ComponentsForAdmin";
import Contacts from "../MessagesForAdmin.js/Contacts";
import Welcome from "../MessagesForAdmin.js/Welcome";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = () => {

    const scrollRef = useRef();
    const navigate = useHistory();
    const socket = useRef();
    const params = useParams();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
    const location = useLocation();
    const [product, setProduct] = useState('')
    const [heading, setheading] = useState('')
    const [qty, setqty] = useState('')
    const [price, setprice] = useState('')
    const [currentUser, setCurrentUser] = useState(user);
    const [data, setData] = useState([]);
    const [com, setcom] = useState([]);
    const [data1, setData1] = useState([]);
    const [comment, setcomment] = useState("");
    const [userid, setuserid] = useState(params.id);
    const [rfq_id, setrfq_id] = useState(params.id);
    const [vendorid, setvendorid] = useState(params.id);
    const [files, setfiles] = useState("");
    const [name, setname] = useState("");
    const [status, setstatus] = useState("");
    const [note, setnote] = useState("");
    const [date, setdate] = useState(""); 
    const [expirydate, setexpirydate] = useState("");
    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(contacts);
    const [currentaUser, setCurrentaUser] = useState(undefined);
    const [postData, setPostData] = useState({
        files: '',
        userid: params.id,
        title: ''
    })
    const handleSubmitforpo = async () => {
        const result = fetch("https://hjhjkjkjkkjhjhi.herokuapp.com/clientQuoteproduct", {
           method: "post",
           body: JSON.stringify({
            heading,
              product,
              price,
              qty,
              vendorid,
           }),
           headers: { "Content-Type": "application/json" },
        });
        if (result) {
           getpo()
           getpo()
           getpo()
           getpo()
           getpo()
           getpo()
           toast.info("Added")
           setProduct('')
           setprice('')
  setqty('')
setprice('')
setheading('')
}
  
     };
     const vendorquote = async () => {
        const result = fetch("https://hjhjkjkjkkjhjhi.herokuapp.com/clientQuote", {
           method: "post",
           body: JSON.stringify({
            name,
              status,
              note,
              date,
              expirydate,
              vendorid,
           }),
           headers: { "Content-Type": "application/json" },
        });
        if (result) {
           getpo()
           getpo()
           getpo()
           getpo()
           getpo()
           getpo()
           toast.info("Added")
           setname('')
           setnote('')
  setstatus('')
setdate('')
setexpirydate('')
}
  
     };

    console.log("current_chat", contacts)
    console.log("i love to UUUUUUUUUUUUPER", data.map((tn) => tn.rfq_id));





  
   
    const sendfeed=()=>{
    navigate.push(`/athpro/${params.id}`)
 
    }
    const sendQuote=()=>{}
    useEffect(() => {
        getproducts();
        getcomments();
        console.log('this is from use eeeeeeeeeeeee', user.username)

        console.log("clclclclclcclcl", params.id)


        // getrfqdetail();
    }, []);
    const [datapo, setDatapo] = useState([])
    useEffect(() => {
        
        getpo()
      
     }, []);
    const getpo = async () => {
        let result = await fetch(`https://hjhjkjkjkkjhjhi.herokuapp.com/clientQuoteproduct/search/${params.id}`);
        result = await result.json();
        setDatapo(result);
        console.log(result)
     };

    const handleChatChange = (chat) => {
        setCurrentChat(chat);
        console.log("current_chat", chat);
    };

    console.log("clclclclclcclcl", params.id)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await fetch(`https://hjhjkjkjkkjhjhi.herokuapp.com/attachments`, {
            method: "post",
            body: JSON.stringify(postData),
            headers: { "Content-Type": "application/json" },
        });
        // result = await result.json();

        if (result) {
            toast.info("Attachment added Succesfully!");

            setPostData({
                files: '',
                title: ''
            })
        }
        console.warn(result);
    };
    const getproducts = async () => {
        let result = await fetch(`https://hjhjkjkjkkjhjhi.herokuapp.com/userRFQ/view/${params.id}`);
        result = await result.json();
        setData(result);
        console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", result._id);

        let result1 = await fetch(
            `https://hjhjkjkjkkjhjhi.herokuapp.com/rfqmanagers/${data.map((tn) => tn.rfq_id)}`
        );
        result1 = await result1.json();
        setData1(result1);
        console.log(data1);
        console.log("clclclclclcclcl", params.id)
    };
    console.log("i love to work", data.map((tn) => tn.rfq_id));
    const getcomments = async () => {
        console.log("clclclclclcclcl", params.id)
        let result = await fetch(`https://hjhjkjkjkkjhjhi.herokuapp.com/commentrouter/search/${params.id}`);
        result = await result.json();
        setcom(result);
    };


    const [toggler, setToggler] = useState(false);

    return (
        <>
            <FsLightbox
                toggler={toggler}
                sources={[icon4, shap2, icon8, shap4, icon2, shap6, icon5, shap4, icon1]}
            />
            <Tab.Container defaultActiveKey="first">
                <Row>
                    <Col lg="12">
                        <Card>
                            <Card.Body>
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
                                            <Image className="theme-color-default-img  img-fluid rounded-pill avatar-100" src={avatars11} alt="profile-pic" />
                                            <Image className="theme-color-purple-img img-fluid rounded-pill avatar-100" src={avatars22} alt="profile-pic" />
                                            <Image className="theme-color-blue-img img-fluid rounded-pill avatar-100" src={avatars33} alt="profile-pic" />
                                            <Image className="theme-color-green-img img-fluid rounded-pill avatar-100" src={avatars55} alt="profile-pic" />
                                            <Image className="theme-color-yellow-img img-fluid rounded-pill avatar-100" src={avatars66} alt="profile-pic" />
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
                                        <Button variant="primary rounded-pill"  onClick={sendfeed}>feed</Button>

                                        </Nav.Item> <Nav.Item as="li">
                                        <Button variant="primary rounded-pill"   >Quote</Button>

                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg="12">
                        <Tab.Content className="profile-content">
                            <Tab.Pane eventKey="first" id="profile-feed">
                                <Card>
                                    <Card.Header className="d-flex align-items-center justify-content-between pb-4">
                                        <div className="header-title">
                                            <div className="d-flex flex-wrap">
                                                <div className="media-support-user-img me-3">
                                                    <Image className="rounded-pill img-fluid avatar-60 bg-soft-danger p-1 ps-2" src={avatars2} alt="" />
                                                </div>
                                                <div className="media-support-info mt-2">
                                                    <h5 className="mb-0">Send Quote</h5>
                                                    <p className="mb-0 text-primary"></p>
                                                </div>
                                            </div>
                                        </div>

                                    </Card.Header>
                                    <Card.Body className="p-0">

                                        <div className="comment-area p-3">




                                            <fieldset  >
                                                <div className="form-card text-start">
                                                    <div className="row">
                                                        <div className="col-7">
                                                            <h3 className="mb-4"> </h3>
                                                        </div>
                                                        <div className="col-3"></div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label">Name: </label>

                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="tovendor"
                                                                    value={name} onChange={(e) => { setname(e.target.value) }}


                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label">Status: </label>
                                                                <Form.Group className="form-group">
                                                                    <select 
                                                                    value={status} onChange={(e) => { setstatus(e.target.value) }}
                                                                        className="form-select mb-3 shadow-none"

                                                                    >
                                                                        <option value=" Published">Published</option>
                                                                        <option value=" Draft">Draft</option>
                                                                        <option value=" In Progress">In Progress</option>
                                                                        <option value=" Finished">Finished</option>
                                                                    </select>
                                                                </Form.Group>{" "}
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label">Note: </label>
                                                                <Form.Control as="textarea" 
                                                                    value={note} onChange={(e) => { setnote(e.target.value) }}
                                                                
                                                                id="exampleFormControlTextarea1" rows="5" />

                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                        <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputdate">Date </Form.Label>
                                        <Form.Control type="date"  
                                                                    value={date} onChange={(e) => { setdate(e.target.value) }}
                                        
                                        id="exampleInputdate" defaultValue="2019-12-18"/>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label  htmlFor="exampleInputdate">Expiry Date  </Form.Label>
                                        <Form.Control type="date" 
                                                                    value={expirydate} onChange={(e) => { setexpirydate(e.target.value) }}
                                        
                                        id="exampleInputdate" defaultValue="2019-12-18"/>
                                    </Form.Group>
                                                   </div>
                                                       
                                                       
                                                    
                                              <h5 className='text-center text-light'>---------------------------------------------------------------------------------------------------------------------------------------------------------</h5>

                                              <div className="col-md-3">
                                                            <div className="form-group">
                                                                <label className="form-label">Item: </label>

                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="tovendor"
                                                                    value={heading} onChange={(e) => { setheading(e.target.value) }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="form-group">
                                                                <label className="form-label">Description: </label>

                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="tovendor"
                                                                    value={product} onChange={(e) => { setProduct(e.target.value) }}

                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="form-group">
                                                                <label className="form-label">QTY: </label>

                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    name="tovendor"
                                                                    value={qty} onChange={(e) => { setqty(e.target.value) }}

                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="form-group">
                                                                <label className="form-label">Price: </label>

                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    name="tovendor"
                                                                    value={price} onChange={(e) => { setprice(e.target.value) }}

                                                                />
                                                            </div>
                                                            
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="form-group">

                                                                <Button size="25px" onClick={handleSubmitforpo} variant="btn btn-primary">Add</Button>{' '}

                                                            </div>
                                                            
                                                        </div>


                                                        <h5 className='text-center text-light'>---------------------------------------------------------------------------------------------------------------------------------------------------------</h5>
<br/>
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
{datapo.map((item)=>(
    <div class="row">
    <div class="col-md-12">
             
        <div class="row">
            <div class="col-md-3">
                <h5>{item.heading}</h5>
                     <Form.Group className="mb-3 form-group">
            
                 {item.product}
                 </Form.Group>
               
       
          </div> 
               
            <div class="col-md-3">
           
                <table class="table">
                {item.Dates}
                </table>
            </div> 
            <div class="col-md-2">
         
                <table class="table">
              {item.qty}
                </table>
            </div> 
            <div class="col-md-2">
           
                <table class="table">
              {item.price}
                </table>
            </div>  
            <div class="col-md-2">
           
           <table class="table">
        {item.price*item.qty}
           </table>
       </div> 
        </div>
            
                       
    </div>
</div>
 
))}
   
 
 
 
                                                    </div>
                                                </div>
                                                <button onClick={vendorquote} 
                                                    className="btn btn-primary next action-button float-end"

                                                >
                                                    Submit
                                                </button>
                                            </fieldset>

                                            <ToastContainer />

                                            <hr />

                                        </div>
                                    </Card.Body>
                                </Card>





                            </Tab.Pane>



                        </Tab.Content>
                    </Col>
                   
                </Row>
            </Tab.Container>
            <ToastContainer/>
        </>
    )

}

export default UserProfile;













































const Container = styled.div`
  height: 70vh;
  width: 35vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.1rem;
  align-items: center;
  background-color:  white;
  .container {
    height: 65vh;
    width: 40vw;
    background-color: ;
    display: grid;
    grid-template-columns: 96%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
























