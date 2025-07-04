import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Bed, Bath, Star, Mail, Phone, Calendar, IndianRupee } from "lucide-react";

const PropertyDetail = () => {
  const { id } = useParams();

  // Mock property data (in a real app, this would come from an API)
  const properties = {
    "1": {
      id: 1,
      title: "Modern Downtown Loft",
      location: "Downtown District",
      price: 2800,
      bedrooms: 2,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800",
      rating: 4.8,
      description: "Beautiful modern loft in the heart of downtown. Features high ceilings, large windows, and premium finishes throughout. Walking distance to restaurants, shopping, and public transportation.",
      amenities: ["Air Conditioning", "In-unit Laundry", "Parking", "Pet Friendly", "Gym Access"],
      landlord: {
        name: "John Smith",
        email: "john.smith@email.com",
        phone: "(555) 123-4567"
      },
      leaseTerms: ["12 months", "6 months", "Month-to-month"],
      availableFrom: "2024-02-01"
    },
    "2": {
      id: 2,
      title: "Cozy Garden Apartment",
      location: "Riverside Area",
      price: 1900,
      bedrooms: 1,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800",
      rating: 4.6,
      description: "Charming garden apartment with private patio. Perfect for those who love nature and tranquility while staying close to the city.",
      amenities: ["Private Patio", "Garden View", "Storage", "Pet Friendly"],
      landlord: {
        name: "Sarah Johnson",
        email: "sarah.johnson@email.com",
        phone: "(555) 987-6543"
      },
      leaseTerms: ["12 months", "18 months"],
      availableFrom: "2024-01-15"
    },
    "3": {
      id: 3,
      title: "Luxury Family Home",
      location: "Suburban Heights",
      price: 4200,
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
      rating: 4.9,
      description: "Spacious family home in a quiet neighborhood. Features modern kitchen, large backyard, and excellent school district.",
      amenities: ["Garage", "Backyard", "Modern Kitchen", "School District", "Quiet Neighborhood"],
      landlord: {
        name: "Mike Davis",
        email: "mike.davis@email.com",
        phone: "(555) 456-7890"
      },
      leaseTerms: ["12 months", "24 months"],
      availableFrom: "2024-03-01"
    }
  };

  const property = properties[id as keyof typeof properties];

  // Convert USD to INR (approximate rate: 1 USD = 83 INR)
  const convertToINR = (usdPrice: number) => Math.round(usdPrice * 83);

  if (!property) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Property Not Found</h1>
          <Link to="/properties">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Properties
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation Header */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-white">RentEase</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/properties">
                <Button variant="ghost" className="text-white hover:bg-white/20">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Properties
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Property Image */}
          <div className="relative">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-96 object-cover rounded-2xl"
            />
            <div className="absolute top-4 right-4">
              <div className="flex items-center bg-black/70 rounded-full px-3 py-1">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-white">{property.rating}</span>
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{property.title}</h1>
              <div className="flex items-center text-gray-300 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                {property.location}
              </div>
              <div className="flex items-center text-3xl font-bold text-white mb-4">
                <IndianRupee className="h-8 w-8 mr-1" />
                {convertToINR(property.price).toLocaleString()}
                <span className="text-lg text-gray-300 font-normal">/month</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-gray-300">
              <div className="flex items-center">
                <Bed className="h-5 w-5 mr-1" />
                {property.bedrooms === 0 ? 'Studio' : `${property.bedrooms} Bedrooms`}
              </div>
              <div className="flex items-center">
                <Bath className="h-5 w-5 mr-1" />
                {property.bathrooms} Bathrooms
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{property.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Lease Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Calendar className="h-4 w-4 mr-2" />
                  Available from: {property.availableFrom}
                </div>
                <div>
                  <p className="text-gray-300 mb-2">Available lease terms:</p>
                  <div className="flex flex-wrap gap-2">
                    {property.leaseTerms.map((term, index) => (
                      <Badge key={index} variant="outline" className="border-white/30 text-white">
                        {term}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Landlord Section */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mt-8">
          <CardHeader>
            <CardTitle className="text-white">Contact Landlord</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">{property.landlord.name}</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href={`mailto:${property.landlord.email}`} className="hover:text-white transition-colors">
                      {property.landlord.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="h-4 w-4 mr-2" />
                    <a href={`tel:${property.landlord.phone}`} className="hover:text-white transition-colors">
                      {property.landlord.phone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/20">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PropertyDetail;
