import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TrackingInputProps {
  onTrackingValidated: (isValid: boolean) => void;
}

const TrackingInput = ({ onTrackingValidated }: TrackingInputProps) => {
  const [trackingCode, setTrackingCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validTrackingCodes = [
    "SS2024001", "SS2024002", "SS2024003", "SS2024004",
    "SS2024005", "SS2024006", "SS2024007", "SS2024008"
  ];

  const handleTrackPackage = () => {
    if (!trackingCode.trim()) {
      toast({
        title: "Error",
        description: "Please enter a tracking code",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (validTrackingCodes.includes(trackingCode.toUpperCase())) {
        toast({
          title: "Tracking Found",
          description: "Your shipment details are now displayed below",
        });
        onTrackingValidated(true);
      } else {
        toast({
          title: "Invalid Tracking Code",
          description: "Please check your tracking code and try again",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Package className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Sky Global Delivery
            </h1>
            <p className="text-lg text-muted-foreground">
              Track your premium shipments worldwide
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Track Your Package</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Enter tracking code (e.g., SS2024001)"
                  value={trackingCode}
                  onChange={(e) => setTrackingCode(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleTrackPackage()}
                  className="flex-1"
                />
                <Button 
                  onClick={handleTrackPackage}
                  disabled={isLoading}
                  className="px-6"
                >
                  {isLoading ? "Tracking..." : "Track"}
                </Button>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>Valid tracking codes: SS2024001 - SS2024008</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrackingInput;