import { useState } from "react";
import { Search, Filter, MapPin, Bed, Star, ArrowLeft, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Properties = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  // Mock properties data (expanded)
  const allProperties = [
    {
      id: 1,
      title: "Modern Downtown Loft",
      location: "Downtown District",
      price: 2800,
      bedrooms: 2,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500",
      rating: 4.8
    },
    {
      id: 2,
      title: "Cozy Garden Apartment",
      location: "Riverside Area",
      price: 1900,
      bedrooms: 1,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500",
      rating: 4.6
    },
    {
      id: 3,
      title: "Luxury Family Home",
      location: "Suburban Heights",
      price: 4200,
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500",
      rating: 4.9
    },
    {
      id: 4,
      title: "Studio Near University",
      location: "University District",
      price: 1200,
      bedrooms: 0,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500",
      rating: 4.3
    },
    {
      id: 5,
      title: "Penthouse with City Views",
      location: "Financial District",
      price: 5500,
      bedrooms: 3,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500",
      rating: 4.9
    },
    {
      id: 6,
      title: "Charming Victorian House",
      location: "Historic Quarter",
      price: 3200,
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500",
      rating: 4.7
    }
  ];

  // Convert USD to INR (approximate rate: 1 USD = 83 INR)
  const convertToINR = (usdPrice: number) => Math.round(usdPrice * 83);

  const filteredProperties = allProperties.filter(property => {
    const inrPrice = convertToINR(property.price);
    const matchesLocation = !searchLocation || 
      property.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
      property.title.toLowerCase().includes(searchLocation.toLowerCase());
    
    const matchesPrice = !priceRange || 
      (priceRange === "0-1500" && inrPrice <= 124500) ||
      (priceRange === "1500-3000" && inrPrice > 124500 && inrPrice <= 249000) ||
      (priceRange === "3000-5000" && inrPrice > 249000 && inrPrice <= 415000) ||
      (priceRange === "5000+" && inrPrice > 415000);
    
    const matchesBedrooms = !bedrooms ||
      (bedrooms === "studio" && property.bedrooms === 0) ||
      (bedrooms === "1" && property.bedrooms === 1) ||
      (bedrooms === "2" && property.bedrooms === 2) ||
      (bedrooms === "3" && property.bedrooms === 3) ||
      (bedrooms === "4+" && property.bedrooms >= 4);
    
    return matchesLocation && matchesPrice && matchesBedrooms;
  });

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
              <Link to="/">
                <Button variant="ghost" className="text-white hover:bg-white/20">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="ghost" className="text-white hover:bg-white/20">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">All Properties</h1>
          <p className="text-gray-300">Browse through our complete collection of rental properties</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search by location or title..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300"
              />
            </div>
            
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Prices</SelectItem>
                <SelectItem value="0-1500">₹0 - ₹1,24,500</SelectItem>
                <SelectItem value="1500-3000">₹1,24,500 - ₹2,49,000</SelectItem>
                <SelectItem value="3000-5000">₹2,49,000 - ₹4,15,000</SelectItem>
                <SelectItem value="5000+">₹4,15,000+</SelectItem>
              </SelectContent>
            </Select>

            <Select value={bedrooms} onValueChange={setBedrooms}>
              <SelectTrigger className="bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Bedrooms</SelectItem>
                <SelectItem value="studio">Studio</SelectItem>
                <SelectItem value="1">1 Bedroom</SelectItem>
                <SelectItem value="2">2 Bedrooms</SelectItem>
                <SelectItem value="3">3 Bedrooms</SelectItem>
                <SelectItem value="4+">4+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              onClick={() => {
                // Clear filters
                setSearchLocation("");
                setPriceRange("");
                setBedrooms("");
              }}
              variant="outline" 
              className="bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              <Filter className="mr-2 h-4 w-4" />
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-300">
            Showing {filteredProperties.length} of {allProperties.length} properties
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-black/50 rounded-full px-2 py-1">
                    <Star className="h-3 w-3 text-yellow-400 mr-1" />
                    <span className="text-white text-sm">{property.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-2xl font-bold text-white">
                    <IndianRupee className="h-6 w-6 mr-1" />
                    {convertToINR(property.price).toLocaleString()}
                    <span className="text-sm text-gray-300 font-normal">/month</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Bed className="h-4 w-4 mr-1" />
                    {property.bedrooms === 0 ? 'Studio' : `${property.bedrooms} bed`} • {property.bathrooms} bath
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Link to={`/property/${property.id}`} className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-white mb-2">No properties found</h3>
            <p className="text-gray-300">Try adjusting your filters to see more results</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
