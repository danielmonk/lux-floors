import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
      <Helmet>
        <title>404 | Lux Floors | Peterborough Premium Bespoke Flooring & Carpets</title>
        <meta name="description" content="We specialise in supplying and fitting professional wood, stone and all other floor coverings. Effortlessly transform your home with our diverse selection of luxury flooring, with functionality for everyday life and an extensive range of patterns and colours. Lux floors products are exclusively sourced for the highest quality & ensuring unrivalled craftsmanship" />
                    <meta name="keywords" content="flooring, carpets, wooden floor, bespoke flooring, safety flooring, peterborough, cambridge, cambridgeshire, lux floors, luxurious flooring" />
        <script dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KPPZ658');</script>`,
                }}
                />
    </Helmet>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>NOT FOUND</h1>
                <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            </div>
        </section>
    </div>
  </Layout>
)

export default NotFoundPage
