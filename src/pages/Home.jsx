import CentersSlider from "../components/CentersSlider/CentersSlider";
import Intro from "../components/Intro/Intro";
import Statistics from "../components/Statistics/Statistics";
import CourseTypes from "../components/CourseTypes/CourseTypes";
import Advantages from "../components/Advantages/Advantages";

const Home = () => {
    return (
        <main>
            <Intro />
            <Statistics />
            <CentersSlider />
            <CourseTypes />
            <Advantages />
        </main>
    );
};

export default Home;
