import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
                    <title>Contact | Lux Floors | Peterborough Premium Bespoke Flooring & Carpets</title>
                    <meta name="description">We specialise in supplying and fitting professional wood, stone and all other floor coverings. Effortlessly transform your home with our diverse selection of luxury flooring, with functionality for everyday life and an extensive range of patterns and colours. Lux floors products are exclusively sourced for the highest quality & ensuring unrivalled craftsmanship.</meta>
                    <meta name="keywords">flooring, carpets, wooden floor, bespoke flooring, safety flooring, peterborough, cambridge, cambridgeshire, lux floors, luxurious flooring</meta>
                    <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-KPPZ658');`}</script>
                </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Contact</h1>
                    </header>
                    <p>Please use the form below to submit an enquiry, we will get back to you as soon as possible.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic