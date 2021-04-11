import React, { Component,useState } from 'react'
import "./Home.css";
import car1 from "../images/car-1.jpg";
import car2 from "../images/car-2.jpg";
import car3 from "../images/car-3.jpg";
import logo from "../images/unibee-logo.png";
import Popup from "../Pages/Popup";


function Home() {


    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }


    return (
        
        <div>

        
                        <div class="carousel slide" data-ride="carousel" id="carouselExampleIndicators">
                {/* <ol class="carousel-indicators">
                    <li class="active" data-slide-to="0" data-target="#carouselExampleIndicators"></li>
                    <li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
                    <li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
                </ol> */}
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img alt="First slide" class="d-block w-100" src={car1}/>
                        {/* <div class="carousel-caption d-none d-md-block">
                            <h5>Slider One Item</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                        </div> */}
                    </div>
                    <div class="carousel-item">
                        <img alt="Second slide" class="d-block w-100" src={car2}/>
                        {/* <div class="carousel-caption d-none d-md-block">
                            <h5>Slider One Item</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                        </div> */}
                    </div>
                    <div class="carousel-item">
                        <img alt="Third slide" class="d-block w-100" src={car3}/>
                        {/* <div class="carousel-caption d-none d-md-block">
                            <h5>Slider One Item</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                        </div> */}
                    </div>
                </div>
                <a class="carousel-control-prev" data-slide="prev" href="#carouselExampleIndicators" role="button">
                    <span aria-hidden="true" class="carousel-control-prev-icon"></span> 
                    <span class="sr-only">Previous</span></a> 
                    <a class="carousel-control-next" data-slide="next" href="#carouselExampleIndicators" role="button">
                        <span aria-hidden="true" class="carousel-control-next-icon"></span> <span class="sr-only">Next</span></a>
                    </div>
        
   
        <div class="container gallery-container">
        
            <h1>Explore Products</h1>
           
        
            <p class="page-description text-center"></p>
            
            <div class="tz-gallery">
        
                <div class="row">
                    <div class="col-sm-6 col-md-4">
        
                    <div class="image"  >
                    <img src="https://media.istockphoto.com/photos/baby-organic-cosmetic-for-bath-on-wooden-background-picture-id622427186?k=6&m=622427186&s=612x612&w=0&h=hufIh5XX_QfLn0rS6iqXD_DN1Sw2Fxw_WEXobazXD50=" alt=""/>
                    <i class="fas fa-search fa-3x"></i>
                </div>
        
                    </div>
                    <div class="col-sm-6 col-md-4">
                    <div class="image" >
                        <img src="https://media.istockphoto.com/photos/stack-of-diapers-baby-bottle-and-pacifier-studio-shot-isolated-picture-id610954584?k=6&m=610954584&s=612x612&w=0&h=yIkSALlJysxhnXJV16PyfKfX08xq3WFnw2Y_Od90F8E=" width="300" height="300"/>
                        <i class="fas fa-search fa-3x"></i>
                </div>
        
                </div>
                <div class="col-sm-6 col-md-4">
                <div class="image">
                        <img src="https://media.istockphoto.com/photos/top-view-of-autumn-or-winter-baby-outfit-knitted-clothes-flat-lay-of-picture-id1064152214?k=6&m=1064152214&s=612x612&w=0&h=L1NOKBlNsvscupZRutjNar6jEfxyOOqY07nmjMGRBXc=" width="300" height="300"/>
                    <i class="fas fa-search fa-3x"></i>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                <div class="image">
                        <img src="https://media.istockphoto.com/photos/health-care-stock-footage-picture-id610115046?k=6&m=610115046&s=612x612&w=0&h=nz7kgcHywxaujhNfzEbQkPv1hTtJtAIMlvm00BrPC-0=" width="300" height="300"/>
                        <i class="fas fa-search fa-3x"></i>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                <div class="image">
                        <img src="https://media.istockphoto.com/photos/organic-cosmetic-children-for-bath-on-wooden-bakground-close-up-picture-id623368828?k=6&m=623368828&s=612x612&w=0&h=UvYKCRTg31q_PezWx9clpUyxBskAgGmrJDKhX3-Swz0=" width="300" height="300"/>
                        <i class="fas fa-search fa-3x"></i>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                <div class="image">
                        <img src="https://media.istockphoto.com/photos/baby-accessories-with-lavender-for-the-bathroom-on-green-background-picture-id626890548?k=6&m=626890548&s=612x612&w=0&h=o1BK7tpAxfU4ydhBLAbzumT5YA_UxangZmLMDDv4yaI=" width="300" height="300"/>
                        <i class="fas fa-search fa-3x"></i>
                    </div>
                </div>
                </div>
        
            </div>
        
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                    

        <div class="tcb-product-slider">
            
        <center>New launches by unibee</center>
       
        
            <section class="caro">

                 
      
                <div class="caro__container">
                    
                
                    <div class="caro-item">
                        <img class="caro-item__img" src="https://thumbs.dreamstime.com/b/baby-products-128709523.jpg"/>
                        {/* <div class="panel1">
                            <a href="#" class="far fa-bookmark"></a>
                        </div> */}
                        <div class="panel2" onClick={togglePopup}>
                            <a   class="fas fa-search"></a>
                        </div>
                        <div class="info mt-2">
                            <h3>Baby Kit</h3>
                            {/* <div class="stars">
                                <i class="fas fa-star"></i> (4.5/5)
                            </div> */}
                            {/* <strong class="price"><span class="mrp">1200/-</span>&nbsp;&nbsp;700/-</strong> */}
                            <strong class="price"><span>Rs. </span>700/-</strong>
                           
                        </div>
                    </div>
        
                    <div class="caro-item">
                        <img class="caro-item__img" src="https://thumbs.dreamstime.com/b/pink-lilac-wooden-new-premature-baby-items-hat-pom-booties-comfort-warmth-124118859.jpg"/>
                    
                        <div class="panel2"  onClick={togglePopup}>
                            <a class="fas fa-search"></a>
                        </div>
                        <div class="info mt-2">
                            <h3>Baby Kit</h3>
                            <strong class="price"><span>Rs. </span>700/-</strong>
                           
                        </div>
                    </div>
        
                    <div class="caro-item">
                        <img class="caro-item__img" src="https://media.istockphoto.com/photos/preparation-of-mixture-baby-feeding-on-wooden-background-picture-id626159658?k=6&m=626159658&s=612x612&w=0&h=3HfaciejvDgusC6q3FRtln7JvsmHerTGPHCoMfrRjUc="/>
                    
                        <div class="panel2"  onClick={togglePopup}>
                            <a class="fas fa-search"></a>
                        </div>
                        <div class="info mt-2">
                            <h3>Baby Kit</h3>
                            <strong class="price"><span>Rs. </span>700/-</strong>
                           
                        </div>
                    </div>
                    <div class="caro-item">
                        <img class="caro-item__img" src="https://media.istockphoto.com/photos/accessories-for-bathing-the-baby-selective-focus-picture-id1214342341?k=6&m=1214342341&s=612x612&w=0&h=MXDoBn0QJuE33dfT53ToK4h5fkO88zkO-6yZyAhDSuQ="/>
                    
                        <div class="panel2"  onClick={togglePopup}>
                            <a class="fas fa-search"></a>
                        </div>
                        <div class="info mt-2">
                            <h3>Baby Kit</h3>
                            <strong class="price"><span>Rs. </span>700/-</strong>
                           
                        </div>
                    </div>
                    <div class="caro-item">
                        <img class="caro-item__img" src="https://media.istockphoto.com/photos/accessories-for-bathing-the-baby-selective-focus-picture-id1214342301?k=6&m=1214342301&s=612x612&w=0&h=s-gpNJWri7_s8NYTIxfiT046mWsrV4KgZ1Y5I5sqH84="/>
                    
                        <div class="panel2" onClick={togglePopup}>
                            <a class="fas fa-search"></a>
                        </div>
                        <div class="info mt-2">
                            <h3>Baby Kit</h3>
                            <strong class="price"><span>Rs. </span>700/-</strong>
                           
                        </div>
                    </div>
                    <div class="caro-item">
                        <img class="caro-item__img" src="https://media.istockphoto.com/photos/baby-care-accessories-picture-id660598078?k=6&m=660598078&s=612x612&w=0&h=cpczwzEskME0tyQCIutGz-HsKdJv-wVCldoYIw3wioM="/>
                    
                        <div class="panel2" onClick={togglePopup}>
                            <a class="fas fa-search"></a>
                        </div>
                        <div class="info mt-2">
                            <h3>Baby Kit</h3>
                            <strong class="price"><span>Rs. </span>700/-</strong>
                           
                        </div>
                    </div>
                    <div class="caro-item">
                        <img class="caro-item__img" src="https://media.istockphoto.com/photos/baby-organic-cosmetic-for-bath-on-white-bakground-picture-id624744236?k=6&m=624744236&s=612x612&w=0&h=AFTBG_cg4pSltScKaTr8tPV5lmvkW0dQfwXBujT6QEc="/>
                    
                        <div class="panel2" onClick={togglePopup}>
                            <a class="fas fa-search"></a>
                        </div>
                        <div class="info mt-2">
                            <h3>Baby Kit</h3>
                            <strong class="price"><span>Rs. </span>700/-</strong>
                           
                        </div>
                    </div>
                    <div class="caro-item">
                        <img class="caro-item__img" src="https://media.istockphoto.com/photos/baby-accessories-for-bath-on-wooden-background-picture-id624744442?k=6&m=624744442&s=612x612&w=0&h=LEivnKUwrlUEKxQ_ykVuWuhBWiW8bqRrIDAkl0iQlQg="/>
                    
                        <div class="panel2" onClick={togglePopup}>
                            <a class="fas fa-search"></a>
                        </div>
                        <div class="info mt-2">
                            <h3>Baby Kit</h3>
                            <strong class="price"><span>Rs. </span>700/-</strong>
                           
                        </div>
                    </div>
                 
        
                    
        
                </div>
            </section>
            </div>
        
          <div class="aboutus">
            <div class="ptext">
            <h2><b>About us</b></h2>
            <p>
            Unibee is the best branded baby care products for nursing, feeding, clothing,and safety. We produce innovative baby products to help you create a wonderful world for your baby. Our products are made with high accuracy and careful examination of factors such as flexibility and durability. Realizing the value of our customers, we have implemented the best of service providers to support with absolute integrity and patience.
            </p>
            </div>
          </div>
        
          <div class="support-block-inner" >  
          <div className="row">
          <div class="card w-30 col mr-3 ml-3">
          <li class="grid__item wide--one-half post-large--one-half large--one-half medium--one-half small-grid__item wow fadeInUp"  data-wow-delay="ms">
                      <div class="support_section align-left">  
                        <div class="support-wrapper">                  
                          <div class="icon-img">                    
                                          
                            <div className="row">
                                <div >
                            <a href=""> <img src="//cdn.shopify.com/s/files/1/0501/2465/2704/files/shops2_medium.png?v=1603369330" alt="Become a Franchisee" /></a>
                             </div>
                            
                            <div>
                            <a href=""><h4 >Become a Franchisee</h4></a>
                             </div>
                            </div>
                            
                            
                            
                            
                          </div>
        
                          <div class="support_text"> 
                            
                            
                              <hr className="style-three"></hr>
                            <a href="/pages/franchisee-enquiry"><p class="desc">Open your own store and join the unibee family of stores.</p></a>
                                                 
                          </div>                      
                        </div>
                      </div>    
                    </li>  
        </div>
        
        <div class="card w-30 col mr-3">
          <li class="grid__item wide--one-half post-large--one-half large--one-half medium--one-half small-grid__item wow fadeInUp"  data-wow-delay="ms">
                      <div class="support_section align-left">  
                        <div class="support-wrapper">                  
                          <div class="icon-img">                    
                                          
                            <div className="row">
                                <div >
                            <a href=""> <img src="//cdn.shopify.com/s/files/1/0501/2465/2704/files/dist2_medium.png?v=1603369411" alt="Become a Distributor" /></a>
                             </div>
                            
                            <div>
                            <a href=""><h4 >Become a Distributor</h4></a>
                             </div>
                            </div>
                            
                            
                            
                            
                          </div>
        
                          <div class="support_text"> 
                            
                            
                              <hr className="style-three"></hr>
                            <a href="/pages/franchisee-enquiry"><p class="desc">Open your own store and join the unibee family of stores.</p></a>
                                                 
                          </div>                      
                        </div>
                      </div>    
                    </li>  
        </div>
        </div>
        </div>
        
        
        <footer class="footer-section">
                <div class="container">
                    <div class="footer-cta pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="cta-text">
                                        <h4>Find us</h4>
                                        <span>Company address</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-phone"></i>
                                    <div class="cta-text">
                                        <h4>Call us</h4>
                                        <span>+91-44-45126111</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="far fa-envelope"></i>
                                    <div class="cta-text">
                                        <h4>Mail us</h4>
                                        <span>unibee@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-logo">
                                        <a href=""><img src={logo} class="img-fluid" alt="logo"/></a>
                                    </div>
                                    <div class="footer-text">
                                        {/* <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                        elit,Lorem ipsum dolor sit amet.</p> */}
                                    </div>
                                    <div class="footer-social-icon">
                                    <div class="footer-widget-heading">
                                        <h3>Family with us</h3>
                                    </div>
                                    <button type="button" class="btn btn-light pr-4"><i class="bx bxs-truck"></i>Become a Distributor</button>
                                        {/* <a href="#"><i class="fab fa-facebook facebook-bg"></i></a>
                                        
                                        <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                        <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Return Policy</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Shipping & Delivery</a></li>
                                        <li><a href="#">Terms of Services</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Join unibee club</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        {/* <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p> */}
                                    </div>
                                    <div class="subscribe-form">
                                        <form action="#">
                                            <input type="email" name="email" placeholder="Email Address"/>
                                            <button>
                                                {/* <i class="fab fa-telegram-plane"></i> */}
                                                Join us</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div class="copyright-text">
                                    <p>Copyright &copy; 2021, All Right Reserved <a href="">unibee</a></p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </footer>
            {isOpen && <Popup
              content={<>
              <div className="row pt-2">
                  <div className="col pb-4">
              <img src="https://thumbs.dreamstime.com/b/baby-products-128709523.jpg" width="500" height="300"></img>
              </div>
              <div className="col content">
             
                            <h2>Baby Kit</h2>
                            <strong class="price"><span>Rs. </span>700/-</strong>
                           
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button className="btn btn-primary"><i class="bx bxs-cart icon-single pr-2"></i>Add to cart</button>
                </div>
                </div>
              </>}
              handleClose={togglePopup}
            />}
        
                    </div>
    )
}

export default Home






















