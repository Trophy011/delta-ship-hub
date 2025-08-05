import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, CheckCircle, Package, Truck } from "lucide-react";

const TrackingSection = () => {
  const customerInfo = {
    name: "Godswill Uzoma",
    phone: "+234904142****",
    email: "managementofficails001@gmail.com",
    address: "London, United Kingdom",
  };

  const trackingEvents = [
    {
      date: "2024-01-15",
      time: "09:15",
      status: "Out for delivery",
      location: "London Distribution Center",
      icon: Truck,
      color: "text-primary",
    },
    {
      date: "2024-01-14",
      time: "16:45",
      status: "Package arrived at facility",
      location: "Lagos Processing Center",
      icon: Package,
      color: "text-muted-foreground",
    },
    {
      date: "2024-01-13",
      time: "11:20",
      status: "Package picked up",
      location: "Origin Facility",
      icon: Clock,
      color: "text-muted-foreground",
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Package Tracking</h2>
          <p className="text-muted-foreground">Real-time updates for your shipments</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Customer Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Delivery Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Recipient</p>
                <p className="font-semibold text-foreground">{customerInfo.name}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Phone Number</p>
                <p className="font-semibold text-foreground">{customerInfo.phone}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Email Address</p>
                <p className="font-semibold text-foreground">{customerInfo.email}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Delivery Address</p>
                <p className="font-semibold text-foreground">{customerInfo.address}</p>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Order Total:</span>
                  <span className="text-lg font-bold text-primary">$3,500.00</span>
                </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-muted-foreground">Shipping Status:</span>
                <Badge className="bg-primary text-primary-foreground">In Transit</Badge>
              </div>
              </div>
            </CardContent>
          </Card>

          {/* Tracking Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Package className="h-5 w-5 text-primary" />
                <span>Tracking Timeline</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trackingEvents.map((event, index) => {
                  const IconComponent = event.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`rounded-full p-2 ${event.color} bg-muted`}>
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="font-medium text-foreground">{event.status}</p>
                        <p className="text-sm text-muted-foreground">{event.location}</p>
                        <p className="text-xs text-muted-foreground">
                          {event.date} at {event.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;