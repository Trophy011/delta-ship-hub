import { useState } from "react";
import Header from "@/components/Header";
import TrackingInput from "@/components/TrackingInput";
import ProductsSection from "@/components/ProductsSection";
import TrackingSection from "@/components/TrackingSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isTrackingValidated, setIsTrackingValidated] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {!isTrackingValidated ? (
        <TrackingInput onTrackingValidated={setIsTrackingValidated} />
      ) : (
        <>
          <ProductsSection />
          <TrackingSection />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Index;
