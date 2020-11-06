import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import gallerypic1 from '../assets/images/img_1644.jpg'
import gallerypic2 from '../assets/images/img_2125.jpg'
import gallerypic3 from '../assets/images/img_2132.jpg'
import gallerypic4 from '../assets/images/img_2133.jpg'
import gallerypic5 from '../assets/images/img_2156.jpg'
import gallerypic6 from '../assets/images/img_2533.jpg'
import gallerypic7 from '../assets/images/img_2534.jpg'
import gallerypic8 from '../assets/images/img_3266.jpg'
import gallerypic9 from '../assets/images/img_3505.jpg'
import safety1 from '../assets/images/safety2.png'
import safety2 from '../assets/images/safety3.png'
import safety3 from '../assets/images/safety4.png'
import carpet1 from '../assets/images/IMG_0497.png'
import carpet2 from '../assets/images/IMG_0496.png'
import carpet3 from '../assets/images/carpet3.png'
import bespoke1 from '../assets/images/IMG_0024@2x.png'
import garage1 from '../assets/images/IMG_1516.png'
import garage2 from '../assets/images/IMG_1515-2.png'
import garage3 from '../assets/images/img_1293.jpg'
import bespoke2 from '../assets/images/img_2133.jpg'
import bespoke3 from '../assets/images/bespoke-1.png'
import bespoke4 from '../assets/images/bespoke-2.png'
import bespoke5 from '../assets/images/bespoke-3.png'
import carpet4 from '../assets/images/carpets-1.png'
import carpet5 from '../assets/images/carpets-2.png'
import carpet6 from '../assets/images/carpets-3.png'
import carpet7 from '../assets/images/carpets-4.png'
import carpet8 from '../assets/images/carpets-5.png'
import tile1 from '../assets/images/tile-effect-1.png'
import tile2 from '../assets/images/tile-effect-2.png'
import tile3 from '../assets/images/tile-effect-3.png'
import tile4 from '../assets/images/tile-effect-4.png'
import tile5 from '../assets/images/tile-effect-5.png'
import tile6 from '../assets/images/tile-effect-6.png'
import woodeffect1 from '../assets/images/wood-effect-1.png'
import woodeffect2 from '../assets/images/wood-effect-2.png'
import woodeffect3 from '../assets/images/wood-effect-3.png'
import woodeffect4 from '../assets/images/wood-effect-4.png'
import woodeffect5 from '../assets/images/wood-effect-5.png'
import woodeffect6 from '../assets/images/wood-effect-6.png'
import woodeffect7 from '../assets/images/wood-effect-7.png'
import woodeffect8 from '../assets/images/wood-effect-8.png'


const Elements = (props) => (
    <SimpleReactLightbox>
    <Layout>
        <Helmet
            title="Gallery | Lux Floors | Peterborough Premium Bespoke Flooring & Carpets"
            meta={[
                { name: 'description', content: 'We specialise in supplying and fitting professional wood, stone and all other floor coverings. Effortlessly transform your home with our diverse selection of luxury flooring, with functionality for everyday life and an extensive range of patterns and colours. Lux floors products are exclusively sourced for the highest quality & ensuring unrivalled craftsmanship.' },
                { name: 'keywords', content: 'flooring, carpets, wooden floor, bespoke flooring, safety flooring, peterborough, cambridge, cambridgeshire, lux floors, luxurious flooring' },
            ]}
        >
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Gallery</h1>
                    </header>
                    <SRLWrapper>
                    <div className="box alt">
                        <p><span>Wooden</span> effects</p>
                        <div className="grid-wrapper gallery">
                            <div className="col-4"><span className="image fit"><img src={gallerypic2} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic7} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={bespoke2} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={woodeffect1} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={woodeffect2} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={woodeffect3} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={woodeffect4} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={woodeffect5} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={woodeffect6} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={woodeffect7} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={woodeffect8} alt="" /></span></div>
                        </div>
                    </div>
                    <div className="box alt">
                        <p><span>Bespoke</span> floor</p>
                        <div className="grid-wrapper gallery">
                            <div className="col-4"><span className="image fit"><img src={gallerypic6} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={bespoke1} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={gallerypic1} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={bespoke3} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={bespoke4} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={bespoke5} alt="" /></span></div>
                        </div>
                    </div>
                    <div className="box alt">
                        <p><span>Carpets</span></p>
                        <div className="grid-wrapper gallery">
                            <div className="col-4"><span className="image fit"><img src={carpet1} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={carpet2} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={carpet3} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={carpet4} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={carpet5} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={carpet6} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={carpet7} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={carpet8} alt="" /></span></div>
                        </div>
                    </div>
                    <div className="box alt">
                        <p><span>Safety</span> flooring</p>
                        <div className="grid-wrapper gallery">
                            <div className="col-4"><span className="image fit"><img src={safety1} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={safety2} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={safety3} alt="" /></span></div>
                        </div>
                    </div>
                    <div className="box alt">
                        <p><span>Tile</span> effect</p>
                        <div className="grid-wrapper gallery">
                            <div className="col-4"><span className="image fit"><img src={tile1} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={tile2} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={tile3} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={tile4} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={tile5} alt="" /></span></div>
                            <div className="col-4"><span className="image fit"><img src={tile6} alt="" /></span></div>
                        </div>
                    </div>
                    </SRLWrapper>
                </div>
            </section>

        </div>

    </Layout>
    </SimpleReactLightbox>
)

export default Elements