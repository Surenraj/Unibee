import React, { Component } from 'react'
import "./Home.css";
import car1 from "../images/car-1.jpg";
import car2 from "../images/car-2.jpg";
import car3 from "../images/car-3.jpg";
import logo from "../images/unibee-logo.png";



export default class Home extends Component {
    render() {
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




{/* <section>

			<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 ml-5">
    <img
      src="https://5.imimg.com/data5/JH/EA/MY-51298416/baby-care-500x500.jpg"
      class="shadow-1-strong rounded mb-4" height="255" width="420"
      alt=""
    />

    <img
      src="https://assets.entrepreneur.com/content/3x2/2000/20171009103437-booties-2047596-1920.jpeg?width=700&crop=2:1"
      class="shadow-1-strong rounded mb-4" height="255" width="420"
      alt=""
    />
  </div>

  <div class="col">
    <img
      src="https://cdn.staticans.com/image/tr:h-300,w-225,cm-pad_resize/data/me-n-mom/15-03-2021/7702903.jpg"
      class="shadow-1-strong rounded mb-4" height="595" width="400"
      alt=""
    />

  </div>

  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://cdn.staticans.com/image/tr:h-300,w-225,cm-pad_resize/data/me-n-mom/939012_1.jpg"
      class="shadow-1-strong rounded mb-4" height="255" width="420"
      alt=""
    />

    <img
      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
      class="shadow-1-strong rounded mb-4" height="255" width="420"
      alt=""
    />
  </div>
</div>

</section> */}
{/* 
<section id="footer">
		<div class="container">
			<div class="row">
				<div class="col">
					<h5>Quick links</h5>
					<ul class="list-unstyled quick-links">
						<li><a href=""><i class="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>Contact us</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>Return Policy</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>Privacy Policy</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>Shipping & Delivery</a></li>
            <li><a href=""><i class="fa fa-angle-double-right"></i>Terms of Services</a></li>

					</ul>
				</div>
				<div class="col">
					<h5>Customer Services</h5>
					<ul class="list-unstyled quick-links">
          <li><a><i class="bx bxs-phone"></i>+91-44-45126111</a></li>
          <li><a><i class="bx bxs-envelope"></i>unibee@gmail.com</a></li>
					</ul>
				</div>
				<div class="col">
					<h5>Family with us</h5>
					<ul class="list-unstyled quick-links">
						<li><a href=""><i class="fa fa-angle-double-right"></i>Become a Distributor</a></li>
					
					</ul>
				</div>
        <div class="col">
					<h5>Join Unibee club</h5>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href=""><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href=""><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href=""><i class="fa fa-instagram"></i></a></li>
					</ul>
				</div>
				<hr/>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
					<p class="h6">© All right Reserved.<a class="text-green ml-2" href="" target="_blank">Unibee</a></p>
				</div>
				<hr/>
			</div>	
		</div>
	</section> */}

<div class="container gallery-container">

    <h1>Explore Products</h1>

    <p class="page-description text-center"></p>
    
    <div class="tz-gallery">

        <div class="row">
            <div class="col-sm-6 col-md-4">

            <div class="image">
            <img src="https://media.istockphoto.com/photos/baby-organic-cosmetic-for-bath-on-wooden-background-picture-id622427186?k=6&m=622427186&s=612x612&w=0&h=hufIh5XX_QfLn0rS6iqXD_DN1Sw2Fxw_WEXobazXD50=" alt=""/>
            <i class="fas fa-search fa-3x"></i>
        </div>

            </div>
            <div class="col-sm-6 col-md-4">
            <div class="image">
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
				<div class="panel2">
					<a href="#" class="fas fa-search"></a>
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
			
				<div class="panel2">
					<a href="#" class="fas fa-search"></a>
				</div>
				<div class="info mt-2">
					<h3>Baby Kit</h3>
                    <strong class="price"><span>Rs. </span>700/-</strong>
                   
				</div>
			</div>

			<div class="caro-item">
				<img class="caro-item__img" src="https://media.istockphoto.com/photos/preparation-of-mixture-baby-feeding-on-wooden-background-picture-id626159658?k=6&m=626159658&s=612x612&w=0&h=3HfaciejvDgusC6q3FRtln7JvsmHerTGPHCoMfrRjUc="/>
			
				<div class="panel2">
					<a href="#" class="fas fa-search"></a>
				</div>
				<div class="info mt-2">
					<h3>Baby Kit</h3>
                    <strong class="price"><span>Rs. </span>700/-</strong>
                   
				</div>
			</div>
			<div class="caro-item">
				<img class="caro-item__img" src="https://media.istockphoto.com/photos/accessories-for-bathing-the-baby-selective-focus-picture-id1214342341?k=6&m=1214342341&s=612x612&w=0&h=MXDoBn0QJuE33dfT53ToK4h5fkO88zkO-6yZyAhDSuQ="/>
			
				<div class="panel2">
					<a href="#" class="fas fa-search"></a>
				</div>
				<div class="info mt-2">
					<h3>Baby Kit</h3>
                    <strong class="price"><span>Rs. </span>700/-</strong>
                   
				</div>
			</div>
			<div class="caro-item">
				<img class="caro-item__img" src="https://media.istockphoto.com/photos/accessories-for-bathing-the-baby-selective-focus-picture-id1214342301?k=6&m=1214342301&s=612x612&w=0&h=s-gpNJWri7_s8NYTIxfiT046mWsrV4KgZ1Y5I5sqH84="/>
			
				<div class="panel2">
					<a href="#" class="fas fa-search"></a>
				</div>
				<div class="info mt-2">
					<h3>Baby Kit</h3>
                    <strong class="price"><span>Rs. </span>700/-</strong>
                   
				</div>
			</div>
			<div class="caro-item">
				<img class="caro-item__img" src="https://media.istockphoto.com/photos/baby-care-accessories-picture-id660598078?k=6&m=660598078&s=612x612&w=0&h=cpczwzEskME0tyQCIutGz-HsKdJv-wVCldoYIw3wioM="/>
			
				<div class="panel2">
					<a href="#" class="fas fa-search"></a>
				</div>
				<div class="info mt-2">
					<h3>Baby Kit</h3>
                    <strong class="price"><span>Rs. </span>700/-</strong>
                   
				</div>
			</div>
			<div class="caro-item">
				<img class="caro-item__img" src="https://media.istockphoto.com/photos/baby-organic-cosmetic-for-bath-on-white-bakground-picture-id624744236?k=6&m=624744236&s=612x612&w=0&h=AFTBG_cg4pSltScKaTr8tPV5lmvkW0dQfwXBujT6QEc="/>
			
				<div class="panel2">
					<a href="#" class="fas fa-search"></a>
				</div>
				<div class="info mt-2">
					<h3>Baby Kit</h3>
                    <strong class="price"><span>Rs. </span>700/-</strong>
                   
				</div>
			</div>
			<div class="caro-item">
				<img class="caro-item__img" src="https://media.istockphoto.com/photos/baby-accessories-for-bath-on-wooden-background-picture-id624744442?k=6&m=624744442&s=612x612&w=0&h=LEivnKUwrlUEKxQ_ykVuWuhBWiW8bqRrIDAkl0iQlQg="/>
			
				<div class="panel2">
					<a href="#" class="fas fa-search"></a>
				</div>
				<div class="info mt-2">
					<h3>Baby Kit</h3>
                    <strong class="price"><span>Rs. </span>700/-</strong>
                   
				</div>
			</div>
         

            

		</div>
	</section>





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
							<button type="button" class="btn btn-primary pr-4"><i class="bx bxs-truck"></i>Become a Distributor</button>
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


            </div>
        )
    }
}
