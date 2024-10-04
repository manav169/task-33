import MyCard from "../../components/card"
import '../ContactUsPage/index.css'
import Search from "../../components/search"
// import CustomizedAccordions from "../../components/accordian"
import Accordian from "../../components/accordian"
import ContactOptions from "../../components/contact"
import Footer from "../../components/footer"

export const ContactUs = () =>{
    return(
        <>
            <section className="bg-container">
                <div className="container">
                <h1>HELP CENTER</h1>
                <div>Let us know how we may help you?</div>
                    <Search />
                </div>
            </section>
            <section className="card1-container">
                 <MyCard type="type1"/>
            </section>
            <section className="card2-container">
                <h1>Browse</h1>
            <MyCard type="type2"/>

            </section>
            <section>
                {/* <CustomizedAccordions /> */}
                <Accordian />
            </section>
            <section className="contactUs">
                <div>
                <h2>Any other questions?</h2>
                <div>We’re here to help. You can contact us: Weekdays: 6am to 6pm PT, Weekends: 6am to 6pm PT.</div>
                <ContactOptions />
                </div>           
            </section>
            <section>
                <Footer />
            </section>


        </>
    )
}

