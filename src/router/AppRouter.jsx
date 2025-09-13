import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimalesProvider } from "../context/services";
import Loader from "../components/Loader";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const Feedback = lazy(() => import("../pages/Feedback"));
const Profile = lazy(() => import("../pages/Profile"));
const PetShellter = lazy(() => import("../pages/PetShellter"));
const FeedingGuide = lazy(() => import("../pages/FeedingGuide"));
const PetProfile = lazy(() => import("../pages/PetProfile"));
const Health = lazy(() => import("../pages/Health"));
const Training = lazy(() => import("../pages/Training"));
const ShowCaseProduct = lazy(() => import("../pages/ShowCaseProduct"));
const Auth = lazy(() => import("../pages/Auth"));
const Emergency = lazy(() => import("../pages/Emergency"));

const AppRouter = () => {
    return (
        <AnimalesProvider>
            <Router basename="/Fur-Ever-Care">
                <Suspense fallback={<Loader/>}>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/feedback" element={<Feedback />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/petshellter" element={<PetShellter />} />
                        <Route path="/feedingguide" element={<FeedingGuide />} />
                        <Route path="/petProfile" element={<PetProfile />} />
                        <Route path="/health" element={<Health />} />
                        <Route path="/training" element={<Training />} />
                        <Route path="/showCaseProduct" element={<ShowCaseProduct />} />
                        <Route path="/" element={<Auth />} />
                        <Route path="/emergency" element={<Emergency />} />
                    </Routes>
                </Suspense>
            </Router>
        </AnimalesProvider>
    );
}

export default AppRouter;
