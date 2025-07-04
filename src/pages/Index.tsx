
import { useState } from "react";
import { Search, Filter, MapPin, Bed, Eco, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [ecoFriendly, setEcoFriendly] = useState(false);

  // Mock featured properties data
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Downtown Loft",
      location: "Downtown District",
      price: 2800,
      bedrooms: 2,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500",
      ecoFriendly: true,
      rating: 4.8,
      virtualTour: true
    },
    {
      id: 2,
      title: "Cozy Garden Apartment",
      location: "Riverside Area",
      price: 1900,
      bedrooms: 1,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500",
      ecoFriendly: false,
      rating: 4.6,
      virtualTour: false
    },
    {
      id: 3,
      title: "Luxury Family Home",
      location: "Suburban Heights",
      price: 4200,
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500",
      ecoFriendly: true,
      rating: 4.9,
      virtualTour: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation Header */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">RentEase</h1>
            </div>
            <div className="flex space-x-4">
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

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Find Your Perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Rental Home
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Discover amazing properties with virtual tours, neighborhood insights, and flexible lease terms. 
              Your ideal home is just a search away.
            </p>

            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-4xl mx-auto border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Enter location..."
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
                    <SelectItem value="0-1500">$0 - $1,500</SelectItem>
                    <SelectItem value="1500-3000">$1,500 - $3,000</SelectItem>
                    <SelectItem value="3000-5000">$3,000 - $5,000</SelectItem>
                    <SelectItem value="5000+">$5,000+</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={bedrooms} onValueChange={setBedrooms}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="1">1 Bedroom</SelectItem>
                    <SelectItem value="2">2 Bedrooms</SelectItem>
                    <SelectItem value="3">3 Bedrooms</SelectItem>
                    <SelectItem value="4+">4+ Bedrooms</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  <Search className="mr-2 h-4 w-4" />
                  Search Properties
                </Button>
              </div>
              
              <div className="flex items-center justify-center mt-4">
                <label className="flex items-center text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={ecoFriendly}
                    onChange={(e) => setEcoFriendly(e.target.checked)}
                    className="mr-2 rounded"
                  />
                  <Eco className="mr-1 h-4 w-4 text-green-400" />
                  Eco-friendly properties only
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Properties</h2>
          <p className="text-gray-300">Handpicked homes with the best amenities and locations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <Card key={property.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.ecoFriendly && (
                    <Badge className="bg-green-500/80 text-white">
                      <Eco className="mr-1 h-3 w-3" />
                      Eco-Friendly
                    </Badge>
                  )}
                  {property.virtualTour && (
                    <Badge className="bg-blue-500/80 text-white">
                      Virtual Tour
                    </Badge>
                  )}
                </div>
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
                  <div className="text-2xl font-bold text-white">
                    ${property.price.toLocaleString()}
                    <span className="text-sm text-gray-300 font-normal">/month</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Bed className="h-4 w-4 mr-1" />
                    {property.bedrooms} bed • {property.bathrooms} bath
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/properties">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white">
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Search</h3>
              <p className="text-gray-300">Find properties with advanced filters and location-based search</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eco className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Eco-Friendly Options</h3>
              <p className="text-gray-300">Discover sustainable properties with green certifications</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Virtual Tours</h3>
              <p className="text-gray-300">Experience properties from home with immersive virtual tours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">RentEase</h3>
              <p className="text-gray-300">Making rental property search simple and efficient.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">For Renters</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/search" className="hover:text-white transition-colors">Search Properties</Link></li>
                <li><Link to="/neighborhoods" className="hover:text-white transition-colors">Neighborhood Guide</Link></li>
                <li><Link to="/help" className="hover:text-white transition-colors">Renter Help</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">For Landlords</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/list-property" className="hover:text-white transition-colors">List Your Property</Link></li>
                <li><Link to="/landlord-tools" className="hover:text-white transition-colors">Landlord Tools</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RentEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
