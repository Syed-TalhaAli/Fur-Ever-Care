import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimalesProvider } from "../context/services";

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

const AppRouter = () => {
    return (
        <AnimalesProvider>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
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
                    </Routes>
                </Suspense>
            </Router>
        </AnimalesProvider>
    );
}

export default AppRouter;