import { NavLink } from "react-router-dom"

import pipes from "./imgs/victor-UoIiVYka3VY-unsplash.jpg"
import tokyo from "./imgs/alain-pham-P_qvsF7Yodw-unsplash.jpg"
import tate from "./imgs/joseph-pearson-LTDaDoMIdqs-unsplash.jpg"
import pipes2 from "./imgs/victor-2PJMDIgK9EA-unsplash.jpg"
import factory from "./imgs/ant-rozetsky-SLIFI67jv5k-unsplash.jpg"
import office from "./imgs/sigmund-Fa9b57hffnM-unsplash.jpg"


const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={pipes} className="d-block w-100" alt="Give a shoutout to Joseph Pearson on social." />
            <div className="carousel-caption d-none d-md-block">
                <h5>Client 1</h5>
                <p>A leading voice in their industry needed large scale industrial scans</p>
            </div>
            </div>
            <div className="carousel-item">
            <img src={pipes2} className="d-block w-100" alt="Give a shoutout to Victor on social." />
            <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    )
}

export const Homepage = () => {
    return (
        <>
        <div className="container mt-5 mb-5">
            <div className="jumbotron">
                <h1 className="display-3">Rapid deployment and delivery</h1>
                <p className="lead">We specialise in the rapid deployment and delivery of the highest resolution 3d scans to save you time and money</p>
                <hr className="my-4" />
                <p>Our dedicated team takes the hassle out of industrial scanning so you can focus on what your business does best.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
            </div>
        <div className="container pt-5 pb-5">
            <Carousel />
        </div>

        <div className="container">
            <div className="m-4">
                <h2 className="display-5">FAQs</h2>
            </div>  
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What can SiteScan do for me?
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    Deliver dedicated scanning services at half the cost. Our patented scanning technology halves the time from site to model and halves the cost because of its innovative design.
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How do I get a quote?
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>Use the quick enquiry feature in the top right hand side of your screen.</strong>You can also navigate to the <strong>contact</strong> page using the navbars in the header or footer. There are many ways to enquire! Just send us an email.
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Is my non-commercial site eligable for a scan?
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    We are not restricted to industrial sites and can scan any building no matter the intended purpose. You may need to provide us permission and/or access to the site - project dependant. We offer lower resolution scans for residential/ architectual applications
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="container">
            <div className="card text-center mt-3 mb-3">
                <img src={office} className="card-img-top" alt="Photo by Victor on Unsplash" />
                <div class="card-body">
                    <p class="card-text">We're a small team with a lot of experience providing rapid high quality scans at competative rates</p>
                    <a href="about" class="btn btn-primary">Meet the team</a>
                </div>

            </div>
        </div>

            <section className="container">

                <div className="card">
                    <img src={tokyo} className="card-img-top" alt="Photo by Victor on Unsplash" />
                    <div className="card-body">
                        <h5 className="card-title">Our Clients</h5>
                        <p className="card-text">We ask you not to judge us by our happy clients, of which there are many, but by our unhappy ones, because there are so few.</p>
                        <a href="#" class="btn btn-primary">Clients</a>
                    </div>
                </div>

            </section>

            <section className="slide-show large-block">
                  
            </section>


            <section className="text-section">

            </section>

            <br />
        </>
    )
}