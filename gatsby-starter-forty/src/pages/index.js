import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import garagepic from '../assets/images/IMG_1293.jpg'
import gallerypic1 from '../assets/images/IMG_1644.jpg'
import gallerypic2 from '../assets/images/IMG_2125.jpg'
import gallerypic3 from '../assets/images/IMG_2132.jpg'
import gallerypic4 from '../assets/images/IMG_2133.jpg'
import gallerypic5 from '../assets/images/IMG_2156.jpg'
import gallerypic6 from '../assets/images/IMG_2533.jpg'
import gallerypic7 from '../assets/images/IMG_2534.jpg'
import gallerypic8 from '../assets/images/IMG_3266.jpg'
import gallerypic9 from '../assets/images/IMG_3505.jpg'
import fivestars from '../assets/images/five-stars.png'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Gatsby Starter - Forty"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                <section id="one">
                    <div className="inner">
                    <header className="major smaller">
                         <h2 className="boxed">A solution for <span>all</span> your <span>flooring</span> needs</h2>
                    </header>
                    <p>Praesent ac adipiscing ullamcorper semper ut amet ac risus. Lorem sapien ut odio odio nunc. Ac adipiscing nibh porttitor erat risus justo adipiscing adipiscing amet placerat accumsan. Vis. Faucibus odio magna tempus adipiscing a non. In mi primis arcu ut non accumsan vivamus ac blandit adipiscing adipiscing arcu metus praesent turpis eu ac lacinia nunc ac commodo gravida adipiscing eget accumsan ac nunc adipiscing adipiscing.</p>
                        <div className="box alt">
                            <div className="grid-wrapper">
                                <div className="col-4"><span className="image fit"><img src={gallerypic1} alt="" /></span>
                                <p><span>Wooden</span> floor</p></div>
                                <div className="col-4"><span className="image fit"><img src={gallerypic2} alt="" /></span><p><span>Wooden</span> floor</p></div>
                                <div className="col-4"><span className="image fit"><img src={gallerypic3} alt="" /></span><p><span>Wooden</span> floor</p></div>
                                <div className="col-4"><span className="image fit"><img src={gallerypic7} alt="" /></span><p><span>Wooden</span> floor</p></div>
                                <div className="col-4"><span className="image fit"><img src={gallerypic5} alt="" /></span><p><span>Wooden</span> floor</p></div>
                                <div className="col-4"><span className="image fit"><img src={gallerypic6} alt="" /></span><p><span>Wooden</span> floor</p></div>
                            </div>
                            <ul className="actions">
                                <li><Link to="/gallery" className="button">View Full Gallery</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="three" className="spotlights">
                        <section>
                            <Link to="/generic" className="image">
                                <img src={gallerypic4} alt="" />
                            </Link>
                            <div className="content">
                                <div className="inner">
                                    <header className="major smaller">
                                        <h3 className="boxed"><strong>Lux</strong> <span>Floors</span></h3>
                                    </header>
                                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                                    <ul className="actions">
                                        <li><Link to="/generic" className="button">Learn more</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section>
                        <Link to="/generic" className="image">
                            <img src={garagepic} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major smaller">
                                    <h3 className="boxed"><strong>Lux</strong> <span>Garage</span></h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                                <ul className="actions">
                                    <li><Link to="/generic" className="button">Learn more</Link></li>
                                </ul>
                            </div>
                        </div>
                        </section>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major smaller centered">
                                <h3 className="boxed">What our <span>Clients</span> say about <span>us</span></h3>
                            </header>
                            <div className="grid-wrapper quotes">
                                <div className="col col-4">
                                    <blockquote>
                                        <img src={fivestars} alt="" />
                                        "Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis.""
                                    <br />
                                    <span className="name">John Smith</span>
                                    <p>July 2020</p>
                                    </blockquote>
                                </div>
                                <div className="col col-4">
                                    <blockquote>
                                        <img src={fivestars} alt="" />
                                        "Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis.""
                                    <br />
                                    <span className="name">John Smith</span>
                                    <p>July 2020</p>
                                    </blockquote>
                                </div>
                                <div className="col col-4">
                                    <blockquote>
                                        <img src={fivestars} alt="" />
                                        "Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis.""
                                    <br />
                                    <span className="name">John Smith</span>
                                    <p>July 2020</p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex