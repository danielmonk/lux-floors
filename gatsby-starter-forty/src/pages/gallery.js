import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import gallerypic1 from '../assets/images/IMG_1644.jpg'
import gallerypic2 from '../assets/images/IMG_2125.jpg'
import gallerypic3 from '../assets/images/IMG_2132.jpg'
import gallerypic4 from '../assets/images/IMG_2133.jpg'
import gallerypic5 from '../assets/images/IMG_2156.jpg'
import gallerypic6 from '../assets/images/IMG_2533.jpg'
import gallerypic7 from '../assets/images/IMG_2534.jpg'
import gallerypic8 from '../assets/images/IMG_3266.jpg'
import gallerypic9 from '../assets/images/IMG_3505.jpg'

const Elements = (props) => (
    <Layout>
        <Helmet>
            <title>Gallery</title>
            <meta name="description" content="Gallery" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Gallery</h1>
                    </header>
                    <div className="box alt">
                        <p><span>Wooden</span> floor</p>
                        <div className="grid-wrapper">
                            <div className="col-4"><span className="image fit"><img src={gallerypic1} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic2} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic3} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic7} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic5} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic6} alt="" /></span></div>
                        </div>
                    </div>
                    <div className="box alt">
                        <p><span>Wooden</span> floor</p>
                        <div className="grid-wrapper">
                            <div className="col-4"><span className="image fit"><img src={gallerypic1} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic2} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic3} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic7} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic5} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic6} alt="" /></span></div>
                        </div>
                    </div>
                    <div className="box alt">
                        <p><span>Wooden</span> floor</p>
                        <div className="grid-wrapper">
                            <div className="col-4"><span className="image fit"><img src={gallerypic1} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic2} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic3} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic7} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic5} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic6} alt="" /></span></div>
                        </div>
                    </div>
                    <div className="box alt">
                        <p><span>Wooden</span> floor</p>
                        <div className="grid-wrapper">
                            <div className="col-4"><span className="image fit"><img src={gallerypic1} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic2} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic3} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic7} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic5} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic6} alt="" /></span></div>
                        </div>
                    </div>

                </div>
            </section>

        </div>

    </Layout>
)

export default Elements