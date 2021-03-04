import { NextHead } from '../components/NextHead'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { Footer } from '../components/Footer'
import { Contact } from '../components/Contact'
import { useRouter } from 'next/router'
import Link from 'next/link'

const settings = {
  showArrows: false,
  showStatus: false,
  showIndicators: true,
  showThumbs: false,
  useKeyboardArrows: false,
  stopOnHover: false,
  dynamicHeight: true,
  infiniteLoop: true,
  autoPlay: true,
  interval: 50000,
}


export default function Home() {
  const router = useRouter()
  const joinNow = () => router.push('/signup')

  return (
    <>
      <div id="landing" className="landing">
        <NextHead />
        <nav>
          <div className="header">
            <Link href="#about">About Us</Link>
            <Link href="#business">Business Plan</Link>
            <Link className="logo" href="/">
              <img src="logo.svg" alt="logo" title="Network Marketing Logo" />
            </Link>
            <Link href="#contact">Contact Us</Link>
            <Link href="/login">Login</Link>
          </div>
        </nav>
        <Carousel {...settings}>
          <div className='hero'>
            <img src="landing/hero.jpeg" alt="" />
            <div className="heading">
              <h1>JAIVIK JIV AMRUTH</h1>
              <button onClick={joinNow} >JOIN NOW</button>
            </div>
          </div>
          <div className='hero'>
            <img src="landing/hero2.jpeg" alt="" />
            <div className="heading">
              <h1>JAIVIK JIV AMRUTH</h1>
              <button onClick={joinNow} >JOIN NOW</button>
            </div>
          </div>
          <div className='hero'>
            <img src="landing/hero3.jpeg" alt="" />
            <div className="heading">
              <h1>JAIVIK JIV AMRUTH</h1>
              <button onClick={joinNow} >JOIN NOW</button>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="about">
        <div className="item">
          <img src="about/mission.svg" alt="Mission" />
          <h3>Our Mission</h3>
          <p>Our mission is to change people lives through ground-breaking innovative solution it is to change our life amazing people who deserve to have much better result in the social life.</p>
        </div>
        <div className="item">
          <img src="about/aim.svg" alt="Aim" />
          <h3>Our Vision</h3>
          <p>Our vision is to produce creative professional in the field of they want to do our company provide you powerful platform and it provide them best environmental to act and achive. </p>
        </div>
        <div className="item">
          <img src="about/objective.svg" alt="Objective" />
          <h3>Our Objective</h3>
          <p>Everyone can get job earn money. He/she rearch dream and enjoy his /her life as a royal life is too bright future happiness in our life.</p>
        </div>
      </div>
      <div id="about" className="about-us">
        <img src="about/about.jpg" alt="" />
        <div className="content">
          <h2>About Us</h2>
          <p>
            My daer friends Jaivik Jiva Amruth pvt ltd company is a one of the private  limited company.
            In this company mainly two director.
            Dear friends dear friends we want to told it is a not our company its your company.
 Jaivik jiva amruth is a one of the company it is a work different different sectors and it is create a good platform from all generation peoples.</p>
          <p>
            And it is a give give a good opportunity to do something new in your interested sectors just we want to ask invest your ideas and thoughts in a week only two to three hours only in your free time.
            Dear friends remember one of the main our intention is to give a person to to organise your own portability stability and in your running life.
            It providing an alternative platform for human beings change your  their life platform
 We are offering a good business business opportunity who want to do business in zero amount investment visa about every angles.</p>
          <p>
            Jag jeevamritha private limited company recently started company want to start help to proper  in ground level we are work in all sectors like organic  things, recycle things,24*7, home they used recycled products, in education system also. Mathura Vatsalya Education Society started in Bidar district. We are built to start an education system 100% job oriental education syllabus.</p>
        </div>
      </div>
      <div id="business" className="business">
        <div className="content">
          <h2>Business Plan</h2>
          <p>
            Our business planning is a very easy to understand. Everyone. It is a fully hybrid plan, binary, repurchasing, generation totally mixer plan. It is one of the first company working in three plants in one plan  3 in 1 plan.
        </p>
        </div>
        <div className="item">
          <img src="business/binary.png" alt="" />
          <div className="brief">
            <h4>Binary Plan</h4>
            <p>A binary compensation plan is defined by the way it’s structured. The word binary means that there are only two options—on or off, white or black, 0 or 1. When we’re talking about binary compensation structures, the two available options are for building a downline. Distributors have only two options for placing new recruits—on the left or the right side (or leg) of their downline. This is the biggest hallmark of a binary plan—every distributor can only have up to two recruits on the first level beneath them.</p>
          </div>
        </div>
        <div className="item">
          <img src="business/repurchase.jpg" alt="" />
          <div className="brief">
            <h4>Repurchase Plan</h4>
            <p>Multi-level marketing (MLM), also called network marketing or pyramid selling, is a controversial marketing strategy for the sale of products or services where the revenue of the MLM company is derived from a non-salaried workforce selling the company's products or services, while the earnings of the participants are derived from a pyramid-shaped or binary compensation commission system. In multi-level marketing, the compensation plan theoretically pays out to participants only from two potential revenue streams. The first is paid out from commissions of sales made by the participants directly to their own retail customers.</p>
          </div>
        </div>
        <div className="item">
          <img src="business/generation.jpg" alt="" />
          <div className="brief">
            <h4>Generation Plan</h4>
            <p>The Generation MLM Plan or MLM Generation Plan is a Multi-level marketing business plan based on profit sharing marketing Business. It is also called as Gap Commission Plans, Repurchase Plans in some other names. Generation Plan MLM is recognized to be the powerful MLM Plan which can be paid up to many levels deep.</p>
          </div>
        </div>
      </div>
      <div id="contact" className="contact-us">
        <h2>Contact Us</h2>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.477564518545!2d77.70846364999998!3d12.9565667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae123a391ab619%3A0x5fa98b4737bb7ef4!2sSankara%20Eye%20Hospital%20-%20Bangalore!5e0!3m2!1sen!2sin!4v1614008162585!5m2!1sen!2sin" width="100%" height="100%" allowFullscreen loading="lazy" />
        </div>
          <Contact />
      </div>
      <Footer />
    </>
  )
}
