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
import ShareOffcanvas from '../../../components/partials/components/shareoffcanvas'
import React, { useEffect, useState, useRef } from "react";
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

const UserProfile =() =>{

   const navigate = useHistory();
   const socket = useRef();
   const params = useParams();
   const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
   const location = useLocation();
   const [currentUser, setCurrentUser] = useState(user);
   const [data, setData] = useState([]);
   const [com, setcom] = useState([]);
   const [att, setatt] = useState([]);
   const [data1, setData1] = useState([]);
   const [comment, setcomment] = useState("");
   const [attchdfile, setattchdfile] = useState("");
   const [userid, setuserid] = useState(params.id);
   const [vendorid, setvendorid] = useState(params.id);
   const [userattachments, setuserattachments] = useState("");
   const [contacts, setContacts] = useState([]);
   const [currentChat, setCurrentChat] = useState(contacts);
   const [currentaUser, setCurrentaUser] = useState(undefined);

   const [sendpo, setsendpo] = useState({
      file: '',
      body: '',
      to: '',
      subject: '',
    })

    const inputhandeler =  (e) => { setsendpo({ ...sendpo, [e.target.name]: e.target.value }) }
   
   
    const handleattachments =  (e) => {
      console.log(e.target.files[0])
      setsendpo({ ...sendpo, file:e.target.files[0]})
      console.log("==",sendpo.file,"===",sendpo.file.name)
    };
  
    const getcomments = async () => {
      console.log("clclclclclcclcl",params.id)
      let result = await fetch(`http://localhost:5005/commentrouter/search/${params.id}`);
      result = await result.json();
      setcom(result);
    };
  

    const sendEmail = async () => {
      const formdata = new FormData()
      formdata.append('file',sendpo.file,sendpo.file.name)
      formdata.append('to', sendpo.to)
      formdata.append('subject', sendpo.subject)
      formdata.append('body', sendpo.body)
  
      const result = await axios.post(`http://localhost:5005/po`, formdata)
  
      
      if (result.status == 200) {alert("Email sent Succesfully!");}
  
      console.warn(result);
    };
    const AddComment = async () => {
      const result = await fetch(`http://localhost:5005/CommentRouter`, {
        method: "post",
        body: JSON.stringify({ comment,userid }),
        headers: { "Content-Type": "application/json" },
      });
      // result = await result.json();
      if (result) {
        toast.info("Comment added Succesfully!");
        setcomment("");
      }
      console.warn(result);
    };
    const SendAttachments = async () => {
      const result = await fetch(`http://localhost:5005/attachments`, {
        method: "post",
        body: JSON.stringify({ userattachments,vendorid }),
        headers: { "Content-Type": "application/json" },
      });
      // result = await result.json();
      if (result) {
        setuserattachments(" ");
      }
      console.warn(result);
    };
    // useEffect(async () => {
    //   if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
    //     navigate("/authv");
    //   } else {
    //     setCurrentaUser(
    //       await JSON.parse(
    //         localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    //       )
    //     );
    //   }
    // }, []);
    useEffect(() => {
      if (currentaUser) {
        socket.current = io(host);
        socket.current.emit("add-user", currentaUser._id);
      }
    }, [currentaUser]);
    useEffect(async () => {
      if (currentaUser) {
        if (currentaUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentaUser._id}`);
          setContacts(data.data);
        } else {
       
          const data = await axios.get(`${allUsersRoute}/${currentaUser._id}`);
          setContacts(data.data);
        }
      }
    }, [currentUser]);
    useEffect(() => {
      getproducts();
      getcomments();
      getattacments()
  
      // getrfqdetail();
    }, []);
  
    const handleChatChange = (chat) => {
      setCurrentChat(chat);
      console.log("current_chat",chat);
    };
    const handleSubmit = async () => {
      const result = fetch("http://localhost:5005/commentrouter", {
        method: "post",
        body: JSON.stringify({ comment, userid }),
        headers: { "Content-Type": "application/json" },
      });
      setcomment("");
  
      result = await result.json();
      if (result) {
        setcomment("");
        
      }
    };
  
    const getproducts = async () => {
      console.log("i love toooooooooooooooooooooooooooooooo",params.id)
      let result = await fetch(`http://localhost:5005/userRFQ/view/${params.id}`);
      result = await result.json();
      setData(result);
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", data._id);
  
      let result1 = await fetch(
        `http://localhost:5005/rfqmanagers/${data.map((tn) => tn.rfq_id)}`
      );
      result1 = await result1.json();
      setData1(result1);
      console.log(data1);
    };
    console.log(data.map((tn) => tn.rfq_id));
    console.log("i love to work",data.map((tn) => tn.rfq_id));
    const getattacments = async () => {
      console.log("clclclclclcclcl",params.id)
      let result = await fetch(`http://localhost:5005/attachments/search/${params.id}`);
      result = await result.json();
      setatt(result);
      console.log(att)
    };
    const pdfGenerator=()=>{
      const doc = new jsPDF({
        orientation: "landscape",
        unit: "in",
        format: [4, 2]
      });
      
      doc.text('name', 1, 1);
    
      doc.save("PO");
    }
   
   const [toggler, setToggler] = useState(false);
  return(
      <>
         <FsLightbox
                  toggler={ toggler }
                  sources={ [icon4,shap2,icon8,shap4,icon2,shap6,icon5,shap4,icon1] }
               />
         <Tab.Container  defaultActiveKey="first">
            <Row>
               <Col lg="12">
                  <Card>
                        <Card.Body>
                           <div className="d-flex flex-wrap align-items-center justify-content-between">
                              <div className="d-flex flex-wrap align-items-center">
                                 <div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
                                    <Image className="theme-color-default-img  img-fluid rounded-pill avatar-100" src={avatars11} alt="profile-pic"/>
                                    <Image className="theme-color-purple-img img-fluid rounded-pill avatar-100" src={avatars22} alt="profile-pic"/>
                                    <Image className="theme-color-blue-img img-fluid rounded-pill avatar-100" src={avatars33} alt="profile-pic"/>
                                    <Image className="theme-color-green-img img-fluid rounded-pill avatar-100" src={avatars55} alt="profile-pic"/>
                                    <Image className="theme-color-yellow-img img-fluid rounded-pill avatar-100" src={avatars66} alt="profile-pic"/>
                                    <Image className="theme-color-pink-img img-fluid rounded-pill avatar-100" src={avatars44} alt="profile-pic"/>
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
                                    <Nav.Link eventKey="first">Feed</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item as="li">
                                    <Nav.Link eventKey="second">Activity</Nav.Link>
                                 </Nav.Item>
                              
                                 <Nav.Item as="li">
                                    <Nav.Link eventKey="fourth">P.O</Nav.Link>
                                 </Nav.Item>
                              </Nav>
                           </div>
                        </Card.Body>
                  </Card>
               </Col>
               <Col lg="3" className="col-lg-3">
                  <Card>
                     <Card.Header>
                        <div className="header-title">
                           <h4 className="card-title">Announcments</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                     {com.map((item)=>(
                        <ul className="list-inline m-0 p-0">
                           <li className="d-flex mb-2">
                              <div className="news-icon me-3">
                                 <svg width="20" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" />
                                 </svg>
                              </div>
                              <p className="news-detail mb-0">{item.comment}</p>
                              </li>
                         
                        </ul>
                              ))}
                        <Form className="comment-text d-flex align-items-center mt-3" >
                                    <Form.Control type="text" className="rounded" placeholder="Type here!"    value={comment}
                            onChange={(e) => {
                              setcomment(e.target.value);
                            }} />
                                    <div className="comment-attagement d-flex">
                                          <Link to="#" className="me-2 text-body" onClick={AddComment}>
                                                    <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                       <path fillRule  ="evenodd" clipRule="evenodd"
                                                d="M21.25 16.334V7.665C21.25 4.645 19.111 2.75 16.084 2.75H7.916C4.889 2.75 2.75 4.635 2.75 7.665L2.75 16.334C2.75 19.364 4.889 21.25 7.916 21.25H16.084C19.111 21.25 21.25 19.364 21.25 16.334Z"
                                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                   <path d="M16.0861 12H7.91406" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12.3223 8.25205L16.0863 12L12.3223 15.748" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </svg>
                                          </Link>
                                         
                                    </div>
                                 </Form>
                     </Card.Body>
                  </Card>
                 
               </Col>
               <Col lg="6">
                  <Tab.Content className="profile-content">
                     <Tab.Pane eventKey="first" id="profile-feed">
                        <Card>
                           <Card.Header className="d-flex align-items-center justify-content-between pb-4">
                              <div className="header-title">
                                 <div className="d-flex flex-wrap">
                                    <div className="media-support-user-img me-3">
                                       <Image className="rounded-pill img-fluid avatar-60 bg-soft-danger p-1 ps-2" src={avatars2} alt=""/>
                                    </div>
                                    <div className="media-support-info mt-2">
                                       <h5 className="mb-0">Description</h5>
                                       <p className="mb-0 text-primary"></p>
                                    </div>
                                 </div>
                              </div>                        
                        
                           </Card.Header>
                           <Card.Body className="p-0">
                             
                              <div className="comment-area p-3">
                                 
                               
                              {data.map((item) => (
                        <p>{item.description}</p>
                      ))}
                                 <hr/>
                            
                              </div>                              
                           </Card.Body>
                        </Card>
                        <Container>
              
                             <div className="container">
                       <Contacts contacts={contacts} changeChat={handleChatChange} />
                        {currentChat === undefined ? (
                          <Welcome />
                        ) : (
                          <ChatContainer currentChat={currentChat} socket={socket} />
                        )}
                      </div>
                  </Container>                     
                             
                        
                     </Tab.Pane>
                     <Tab.Pane eventKey="second" id="profile-activity">
                        <Card>
                           <Card.Header className="d-flex justify-content-between">
                              <div className="header-title">
                                 <h4 className="card-title">Activity</h4>
                              </div>
                           </Card.Header>
                           <Card.Body>
                                       {att.map((asd) => (
                              <div className="iq-timeline0 m-0 d-flex align-items-center justify-content-between position-relative">
                                 <ul className="list-inline p-0 m-0">
                                    <li>
                                     
                                       <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
                                       
                                     <a href={asd.files}download>   <h6 className="float-left mb-1">{asd.title}</h6></a>
                                    

                                       <small className="float-right mt-1">{asd.Dates}</small>
                                       <div className="d-inline-block w-100">
                                          <p></p>
                                       </div>
                                    </li>
                                 
                                 </ul>
                              </div>
                                       ))}

                           </Card.Body>
                        </Card>
                     </Tab.Pane >
                     <Tab.Pane eventKey="third" id="profile-friends">
                        <Card>
                           <Card.Header>
                              <div className="header-title">
                                 <h4 className="card-title">Friends</h4>
                              </div>
                           </Card.Header>
                           <Card.Body>
                              <ul className="list-inline m-0 p-0">
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image className="theme-color-default-img  rounded-pill avatar-40" src={avatars11} alt="profile-pic"/>
                                    <Image className="theme-color-purple-img rounded-pill avatar-40" src={avatars22} alt="profile-pic"/>
                                    <Image className="theme-color-blue-img rounded-pill avatar-40" src={avatars33} alt="profile-pic"/>
                                    <Image className="theme-color-green-img rounded-pill avatar-40" src={avatars55} alt="profile-pic"/>
                                    <Image className="theme-color-yellow-img rounded-pill avatar-40" src={avatars66} alt="profile-pic"/>
                                    <Image className="theme-color-pink-img rounded-pill avatar-40" src={avatars44} alt="profile-pic"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Paul Molive</h6>
                                       <p className="mb-0">Web Designer</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars5} alt="story-img" className="rounded-pill avatar-40"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Paul Molive</h6>
                                       <p className="mb-0">trainee</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars2} alt="story-img" className="rounded-pill avatar-40"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Anna Mull</h6>
                                       <p className="mb-0">Web Developer</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars3} alt="story-img" className="rounded-pill avatar-40"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Paige Turner</h6>
                                       <p className="mb-0">trainee</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars4} alt="story-img" className="rounded-pill avatar-40"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Barb Ackue</h6>
                                       <p className="mb-0">Web Designer</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars5} alt="story-img" className="rounded-pill avatar-40"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Greta Life</h6>
                                       <p className="mb-0">Tester</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars3} alt="story-img" className="rounded-pill avatar-40"/>                              <div className="ms-3 flex-grow-1">
                                       <h6>Ira Membrit</h6>
                                       <p className="mb-0">Android Developer</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars2} alt="story-img" className="rounded-pill avatar-40"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Pete Sariya</h6>
                                       <p className="mb-0">Web Designer</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                              </ul>
                           </Card.Body>
                        </Card>
                     </Tab.Pane >
                     <Tab.Pane eventKey="fourth" id="profile-profile">
                        <Card>
                           <Card.Header>
                              <div className="header-title">
                                 <h4 className="card-title">Profile</h4>
                              </div>
                           </Card.Header>
                           <Card.Body>
                              <div className="text-center">
                                 <div className="user-profile">
                                    <Image className="theme-color-default-img  rounded-pill avatar-130 img-fluid" src={avatars11} alt="profile-pic"/>
                                    <Image className="theme-color-purple-img rounded-pill avatar-130 img-fluid" src={avatars22} alt="profile-pic"/>
                                    <Image className="theme-color-blue-img rounded-pill avatar-130 img-fluid" src={avatars33} alt="profile-pic"/>
                                    <Image className="theme-color-green-img rounded-pill avatar-130 img-fluid" src={avatars55} alt="profile-pic"/>
                                    <Image className="theme-color-yellow-img rounded-pill avatar-130 img-fluid" src={avatars66} alt="profile-pic"/>
                                    <Image className="theme-color-pink-img rounded-pill avatar-130 img-fluid" src={avatars44} alt="profile-pic"/>
                                 </div>
                                 <div className="mt-3">
                                    <h3 className="d-inline-block">Austin Robertson</h3>
                                    <p className="d-inline-block pl-3"> - Web developer</p>
                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                 </div>
                              </div>
                           </Card.Body>
                        </Card>
                        <Card>
                           <Card.Header>
                              <div className="header-title">
                                 <h4 className="card-title">About User</h4>
                              </div>
                           </Card.Header>
                           <Card.Body>
                              <div className="user-bio">
                                 <p>Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer.</p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Joined:</h6>
                              <p>Feb 15, 2021</p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Lives:</h6>
                              <p>United States of America</p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Email:</h6>
                              <p><Link to="#" className="text-body"> austin@gmail.com</Link></p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Url:</h6>
                              <p><Link to="#" className="text-body" target="_blank"> www.bootstrap.com </Link></p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Contact:</h6>
                              <p><Link to="#" className="text-body">(001) 4544 565 456</Link></p>
                              </div>
                           </Card.Body>
                        </Card>
                     </Tab.Pane >
                  </Tab.Content>
               </Col>
               <Col lg="3">
                  <Card>
                     <Card.Header>
                        <div className="header-title">
                           <h4 className="card-title">About</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <p></p>
                        <div className="mb-1">Email: 
               {data.map((item) => (
                       
                        <Link to="#" className="ms-3">{item.to}</Link>
                        ))}
                        
                                    
                        </div>
               {data.map((item) => (

                        <div className="mb-1">Phone: <Link to="#" className="ms-3">{item.Work_Phone}</Link></div>
                      
                        ))}
                        <div>Location: <span className="ms-3">USA</span></div>
                     </Card.Body>
                  </Card>
               
               
               </Col>
               
            </Row>
         </Tab.Container>
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















