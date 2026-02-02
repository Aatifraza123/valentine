import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ValentineLanding from "@/pages/ValentineLanding";
import CelebrationPage from "@/pages/CelebrationPage";
import NotFound from "@/pages/NotFound";
import PageTransition from "./PageTransition";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <ValentineLanding />
            </PageTransition>
          }
        />
        <Route
          path="/celebration"
          element={
            <PageTransition>
              <CelebrationPage />
            </PageTransition>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
