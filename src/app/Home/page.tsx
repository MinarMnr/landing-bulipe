import Banner from "./Banner";
import BannerPoint from "./BannerPoint";
import Do from "./Do";
import Ready from "./Ready";
import News from "./News";
import Testimonial from "./Testimonial";
import Partner from "./partner";
import Community from "./Community";
import Enroll from "./Enroll";
import HowItWorks from "./HowWork";

export default function Home() {
    return (
        <div className="bg-white">
            <Banner />
            <BannerPoint />
            <Do />
            <HowItWorks/>
            <Enroll />
            <Community />
            <Partner />
            <Testimonial />
            <News />
            <Ready />

        </div>)
}