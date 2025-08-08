import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, DollarSign, MapPin } from "lucide-react";
import { products, totalValue } from "@/data/products";

const ProductList = () => {
  const inTransitCount = products.length;

  const statusColors = {
    in_transit: "bg-primary text-primary-foreground",
    delivered: "bg-success text-success-foreground", 
    processing: "bg-warning text-warning-foreground",
  };

  const statusLabels = {
    in_transit: "In Transit",
    delivered: "Delivered",
    processing: "Processing",
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Shipment Details
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Items being delivered to Fatima del Socorro Garrido Martinez in UR.LA CENTRAL M176-L26 El pazon
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground">${totalValue.toLocaleString()}</h3>
              <p className="text-muted-foreground">Total Shipment Value</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-primary/20">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground">{inTransitCount}</h3>
              <p className="text-muted-foreground">Items In Transit</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-warning/20">
            <CardContent className="p-6 text-center">
              <Package className="h-8 w-8 text-warning mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground">{products.length}</h3>
              <p className="text-muted-foreground">Total Items</p>
            </CardContent>
          </Card>
        </div>

        {/* Items List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Package className="h-5 w-5 text-primary" />
              <span>Package Contents</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-bold text-foreground">${product.price}</p>
                      <p className="text-xs text-muted-foreground">{product.trackingCode}</p>
                    </div>
                    <Badge className={statusColors[product.status]}>
                      {statusLabels[product.status]}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t mt-6 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-foreground">Total Value:</span>
                <span className="text-2xl font-bold text-primary">${totalValue.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Info Card */}
        <Card className="mt-12 bg-muted/50">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">Delivery Information</h3>
              <div className="grid md:grid-cols-4 gap-6 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Recipient</p>
                  <p className="font-semibold text-foreground">Fatima del Socorro Garrido Martinez</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Contact</p>
                  <p className="font-semibold text-foreground">+57 304 4143024</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Email</p>
                  <p className="font-semibold text-foreground">jn3436490@gmail.com</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Address</p>
                  <p className="font-semibold text-foreground">UR.LA CENTRAL M176-L26 El pazon</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductList;