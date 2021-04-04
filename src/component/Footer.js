import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer >
                <div className="row">
                    <div className="col-sm-6 col-md-4 footer-navigation">
                        <div className="d-flex justify-content-center">
                            <img className="img-fluid" src="/assets/img/logo.png" alt=""/>
                        </div>
                        <p className="links">
                             Home <strong> · </strong>
                             Blog <strong> · </strong>
                             Pricing <strong> · </strong>
                             About <strong> · </strong>
                             Faq <strong> · </strong>
                             Contact 
                        </p>
                        <p className="company-name">TRIP-COVID © 2021</p>
                    </div>
                    <div className="col-sm-6 col-md-4 footer-contacts">
                        <div><span className="fa fa-map-marker footer-contacts-icon"> </span>
                            <p><span className="new-line-span">37 Quai de Grenelle</span> Paris, France</p>
                        </div>
                        <div><i className="fa fa-phone footer-contacts-icon"></i>
                            <p className="footer-center-info email text-left"> +33 6 12 11 90 66</p>
                        </div>
                        <div><i className="fa fa-envelope footer-contacts-icon"></i>
                            <p> support@trip-covid.com</p>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-md-4 footer-about">
                        <h4>A propos</h4>
                        <p>Nous sommes une entreprise composée d'étudiant de 4e année d'école d'ingénieurs qui à pour objectif de vous faire voyager en ces temps difficiles.</p>
                        <div className="social-links social-icons">
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-linkedin"></i>
                            <i className="fa fa-github"></i>
                        </div>
                    </div>
                </div>
    </footer>
        </div>
    )
}

export default Footer
