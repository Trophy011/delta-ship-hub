import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  trackingCode: string;
  status: "in_transit" | "delivered" | "processing";
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
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
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-square bg-muted/30 flex items-center justify-center">
        <div className="text-center p-4">
          <h3 className="font-bold text-lg text-foreground mb-2">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.category}</p>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <Badge className={statusColors[product.status]}>
            {statusLabels[product.status]}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-foreground">${product.price}</span>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Tracking Code:</p>
            <p className="text-sm font-mono bg-muted px-2 py-1 rounded text-primary">
              {product.trackingCode}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;