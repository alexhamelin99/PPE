import React from 'react'

const Index = () => {
    return (
        <div>
            <header className="masthead text-center text-white">
                <div className="masthead-content">
                    <div className="container">
                        <h1 className="masthead-heading mb-0">Envie de prendre</h1>
                        <h2 className="masthead-subheading mb-0">le large avec TRIP-COVID ?</h2>
                        <a className="btn btn-primary btn-xl rounded-pill mt-5" role="button" href="/aboutus.html">En savoir plus</a>
                    </div>
                </div>
            </header>
            <section>
        <div className="container">
            <div className="justify-content-xl-center p-5">
                <h2 className="text-center d-md-flex d-lg-flex justify-content-lg-center display-4" >La carte intéractive.&nbsp;</h2>
                <div className="d-xl-flex justify-content-xl-center">
                  <iframe title="map" src="https://www.google.com/maps/d/u/0/embed?mid=1ucTwZ_BC_tUbL5NBEzQOLrkUzXw8ui-B" width="740" height="480"></iframe>
                    <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="COVID-19 Travel Recommendations by Destination - Global" src="//onemap.cdc.gov/Portal/apps/Embed/index.html?webmap=616fc3a204494e13a9a4dc2f6a93819f&amp;extent=-180.6655,-20.5982,180,50.683&amp;home=true&amp;zoom=true&amp;previewImage=false&amp;scale=true&amp;search=true&amp;searchextent=false&amp;disable_scroll=true&amp;theme=light"></iframe>
                </div>
                <h3 className="text-center d-md-flex d-lg-flex justify-content-md-center justify-content-lg-center display-4" >Où souhaitez-vous allez ?</h3>
                <div className="container-fluid form-group d-md-flex justify-content-md-center" data-aos="fade" data-aos-duration="1000">
                    <input className="bg-light border rounded shadow form-control-lg d-flex col-sm" type="text" placeholder="Départ" required="" autofocus="" autocomplete="on" name="départ"/>
                    <input className="bg-light border rounded shadow form-control-lg d-flex col-sm" type="text" placeholder="Destination"  autofocus="" autocomplete="on" required="" name="destination"/>
                    <input className="bg-light border rounded shadow form-control-lg d-flex col-sm" type="date"/>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Index
