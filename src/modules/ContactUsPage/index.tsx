import MyCard from "../../components/card";
import Search from "../../components/search";
import Accordian from "../../components/accordian";
import ContactOptions from "../../components/contact";
import Footer from "../../components/footer";

export const ContactUs = () => {
    return (
        <>
            <section className="flex justify-center items-center pb-32 bg-cover bg-center h-[70vh]" 
                     style={{ backgroundImage: "url(https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-2RgmJOxbvBbg-hr-search.png?v=1724402439)" }}>
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 className="font-semibold text-4xl text-white m-0 p-0">HELP CENTER</h1>
                    <div className="text-base font-medium mt-2 text-white">Let us know how we may help you?</div>
                    <Search />
                </div>
            </section>

            <section className="flex flex-col justify-center items-center -mt-24">
                <MyCard type="type1" />
            </section>

            <section className="flex flex-col justify-center items-center py-24">
                <h1 className="font-bold text-2xl">Browse</h1>
                <MyCard type="type2" />
            </section>

            <section>
                <Accordian />
            </section>

            <section className="flex flex-col justify-center items-center text-center h-[60vh]">
                <div>
                    <h2 className="text-xl font-semibold">Any other questions?</h2>
                    <div className="text-sm font-normal mt-2">
                        We’re here to help. You can contact us: Weekdays: 6am to 6pm PT, Weekends: 6am to 6pm PT.
                    </div>
                    <ContactOptions />
                </div>
            </section>

            <section>
                <Footer />
            </section>
        </>
    );
};
