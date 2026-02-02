import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ValentineLanding from "@/pages/ValentineLanding";
import FeelingsPage from "@/pages/FeelingsPage";
import PromisesPage from "@/pages/PromisesPage";
import FinalPage from "@/pages/FinalPage";
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
          path="/feelings"
          element={
            <PageTransition>
              <FeelingsPage />
            </PageTransition>
          }
        />
        <Route
          path="/promises"
          element={
            <PageTransition>
              <PromisesPage />
            </PageTransition>
          }
        />
        <Route
          path="/final"
          element={
            <PageTransition>
              <FinalPage />
            </PageTransition>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
