import ProductCard from "./ProductCard";
import { products, totalValue } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Package, DollarSign, MapPin } from "lucide-react";

const ProductsSection = () => {
  const deliveredCount = products.filter(p => p.status === "delivered").length;
  const inTransitCount = products.filter(p => p.status === "in_transit").length;
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Current Shipments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium goods in transit and delivered to Godswill Uzoma
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
          
          <Card className="border-2 border-success/20">
            <CardContent className="p-6 text-center">
              <Package className="h-8 w-8 text-success mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground">{deliveredCount}</h3>
              <p className="text-muted-foreground">Items Delivered</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-warning/20">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 text-warning mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground">{inTransitCount}</h3>
              <p className="text-muted-foreground">In Transit</p>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Customer Info Card */}
        <Card className="mt-12 bg-muted/50">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">Delivery Details</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Recipient</p>
                  <p className="font-semibold text-foreground">Godswill Uzoma</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Contact</p>
                  <p className="font-semibold text-foreground">+234904142****</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Address</p>
                  <p className="font-semibold text-foreground">Delta State, Abraka</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductsSection;