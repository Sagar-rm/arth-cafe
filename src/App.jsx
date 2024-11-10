import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingCart, User, Menu, X, Instagram, Facebook, Twitter, MapPin, Phone, Mail, ChevronRight, Sun, Moon, Plus, Minus } from 'lucide-react';
import  Button  from "./components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "/src/components/ui/dialog.jsx";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import { Switch } from "./components/ui/switch";
import { ScrollArea } from "./components/ui/scrollarea";
import { Separator } from "./components/ui/separator";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ArthCafeLuxe = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('coffee');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.name === item.name);
      if (existingItem) {
        return prevItems.map(i => 
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    toast.success(`${item.name} added to cart!`);
  };

  const removeFromCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.name === item.name);
      if (existingItem.quantity === 1) {
        return prevItems.filter(i => i.name !== item.name);
      }
      return prevItems.map(i => 
        i.name === item.name ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (parseFloat(item.price.slice(1)) * item.quantity), 0).toFixed(2);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleReservation = (e) => {
    e.preventDefault();
    toast.success('Reservation submitted successfully! We\'ll confirm shortly.');
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success('Subscribed to newsletter! Welcome to the Arth Café family.');
  };

  const menuItems = {
    coffee: [
      { name: "Signature Espresso", description: "Bold and robust", price: "$3.99", image: "/placeholder.svg?height=150&width=200&text=Signature+Espresso" },
      { name: "Vanilla Latte", description: "Smooth with a hint of sweetness", price: "$4.99", image: "/placeholder.svg?height=150&width=200&text=Vanilla+Latte" },
      { name: "Caramel Macchiato", description: "Rich caramel flavor", price: "$5.49", image: "/placeholder.svg?height=150&width=200&text=Caramel+Macchiato" },
      { name: "Mocha Frappé", description: "Chocolatey and refreshing", price: "$5.99", image: "/placeholder.svg?height=150&width=200&text=Mocha+Frappé" },
      { name: "Iced Americano", description: "Strong and cool", price: "$4.49", image: "/placeholder.svg?height=150&width=200&text=Iced+Americano" },
      { name: "Coconut Cold Brew", description: "Smooth with tropical notes", price: "$4.99", image: "/placeholder.svg?height=150&width=200&text=Coconut+Cold+Brew" }
    ],
    food: [
      { name: "Avocado Toast Supreme", description: "With poached egg and microgreens", price: "$10.99", image: "/placeholder.svg?height=150&width=200&text=Avocado+Toast+Supreme" },
      { name: "Acai Bowl", description: "Topped with fresh fruits and granola", price: "$9.99", image: "/placeholder.svg?height=150&width=200&text=Acai+Bowl" },
      { name: "Smoked Salmon Bagel", description: "With cream cheese and capers", price: "$11.99", image: "/placeholder.svg?height=150&width=200&text=Smoked+Salmon+Bagel" },
      { name: "Quinoa Salad", description: "With roasted vegetables and feta", price: "$10.49", image: "/placeholder.svg?height=150&width=200&text=Quinoa+Salad" }
    ],
    desserts: [
      { name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: "$6.99", image: "/placeholder.svg?height=150&width=200&text=Tiramisu" },
      { name: "Matcha Cheesecake", description: "Creamy with a green tea twist", price: "$7.49", image: "/placeholder.svg?height=150&width=200&text=Matcha+Cheesecake" },
      { name: "Chocolate Lava Cake", description: "Warm with a gooey center", price: "$7.99", image: "/placeholder.svg?height=150&width=200&text=Chocolate+Lava+Cake" },
      { name: "Fruit Tart", description: "Buttery crust with seasonal fruits", price: "$6.49", image: "/placeholder.svg?height=150&width=200&text=Fruit+Tart" }
    ],
    seasonal: [
      { name: "Pumpkin Spice Latte", description: "Fall favorite", price: "$5.99", image: "/placeholder.svg?height=150&width=200&text=Pumpkin+Spice+Latte" },
      { name: "Maple Pecan Danish", description: "Flaky pastry with nutty goodness", price: "$4.99", image: "/placeholder.svg?height=150&width=200&text=Maple+Pecan+Danish" },
      { name: "Iced Lavender Latte", description: "Floral and refreshing", price: "$5.49", image: "/placeholder.svg?height=150&width=200&text=Iced+Lavender+Latte" },
      { name: "Berry Blast Smoothie", description: "Antioxidant powerhouse", price: "$6.49", image: "/placeholder.svg?height=150&width=200&text=Berry+Blast+Smoothie" }
    ]
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-[#f8f5f0] dark:bg-[#1c1917] text-[#3d2c29] dark:text-[#f8f5f0] transition-colors duration-300">
        {/* Header */}
        <header className="bg-[#3d2c29] dark:bg-[#2d201e] text-[#f8f5f0] p-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold font-serif">Arth Café</h1>
            <nav className="hidden md:flex space-x-4">
              <Button variant="ghost" onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}>Menu</Button>
              <Button variant="ghost" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</Button>
              <Button variant="ghost" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</Button>
              <Button variant="ghost"><User className="w-5 h-5" /></Button>
              <Button variant="ghost" className="relative" onClick={() => setIsCartOpen(true)}>
                <ShoppingCart className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#d4a373] text-[#3d2c29] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Button>
              <Switch
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="ml-4"
                icon={isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              />
            </nav>
            <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#3d2c29] dark:bg-[#2d201e] text-[#f8f5f0] p-4">
            <nav className="flex flex-col space-y-2">
              <Button variant="ghost" onClick={() => { document.getElementById('menu').scrollIntoView({ behavior: 'smooth' }); toggleMenu(); }}>Menu</Button>
              <Button variant="ghost" onClick={() => { document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); toggleMenu(); }}>About</Button>
              <Button variant="ghost" onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); toggleMenu(); }}>Contact</Button>
              <Button variant="ghost"><User className="w-5 h-5 mr-2" /> Account</Button>
              <Button variant="ghost" className="relative" onClick={() => { setIsCartOpen(true); toggleMenu(); }}>
                <ShoppingCart className="w-5 h-5 mr-2" /> Cart
                {cartItems.length > 0 && (
                  <span className="absolute top-1 right-1 bg-[#d4a373] text-[#3d2c29] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Button>
              <div className="flex items-center justify-between">
                <span>Dark Mode</span>
                <Switch
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                  icon={isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                />
              </div>
            </nav>
          </div>
        )}

        {/* Hero Section */}
        <section className="py-16 bg-[#d4a373] dark:bg-[#8b5e3c] text-[#3d2c29] dark:text-[#f8f5f0]">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-5xl font-bold mb-4 font-serif">Elevate Your Coffee Experience</h2>
              <p className="mb-6 text-lg">Indulge in our artisanal blends and exquisite pastries. Discover the perfect balance of flavor and ambiance at Arth Café.</p>
              <Button onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })} className="bg-[#3d2c29] hover:bg-[#2d201e] text-[#f8f5f0]">Explore Our Menu</Button>
            </div>
            <div className="md:w-1/2">
              <img src="/placeholder.svg?height=400&width=600&text=Arth+Café+Experience" alt="Arth Café Experience" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-16 bg-[#f8f5f0] dark:bg-[#1c1917]">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center font-serif">Our Curated Menu</h2>
            <Tabs defaultValue="coffee" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="coffee">Coffee</TabsTrigger>
                <TabsTrigger value="food">Food</TabsTrigger>
                <TabsTrigger value="desserts">Desserts</TabsTrigger>
                <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
              </TabsList>
              {Object.entries(menuItems).map(([category, items]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                      <Card key={item.name} className="overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                        <CardHeader>
                          <CardTitle>{item.name}</CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="font-bold text-lg">{item.price}</p>
                        </CardContent>
                        <CardFooter>
                          <Button onClick={() => addToCart(item)} className="w-full bg-[#3d2c29] hover:bg-[#2d201e] text-[#f8f5f0]">Add to Cart</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-[#d4a373] dark:bg-[#8b5e3c] text-[#3d2c29] dark:text-[#f8f5f0]">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center font-serif">Our Story</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img src="/placeholder.svg?height=400&width=600&text=Arth+Cafe+Interior" alt="Arth Café Interior" className="rounded-lg shadow-2xl" />
              </div>
              <div className="md:w-1/2">
                <p className="mb-4 text-lg">Founded in 2010, Arth Café began as a small, passionate project dedicated to bringing the finest coffee experiences to our community. Our journey started with a simple idea: to create a space where coffee isn't just a beverage, but an art form to be savored and celebrated.</p>
                <p className="mb-4 text-lg">Over the years, we've grown from a cozy corner shop to a beloved local institution, never losing sight of our core values - quality, sustainability, and community. We meticulously source our beans from ethical, environmentally conscious farms around the world, ensuring that every cup tells a story of care and craftsmanship.</p>
                <p className="text-lg">Today, Arth Café stands as a testament to the power of passion and perseverance. We're more than just a café; we're a gathering place for coffee lovers, a hub for local artists, and a proud supporter of our vibrant community. Join us in our continued journey of coffee exploration and excellence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialty Section */}
        <section className="py-16 bg-[#f8f5f0] dark:bg-[#1c1917]">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 font-serif">Our Specialties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Artisanal Roasting</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src="/placeholder.svg?height=200&width=300&text=Artisanal+Roasting" alt="Artisanal Roasting" className="w-full h-48 object-cover mb-4 rounded-lg" />
                  <p>Experience the rich flavors of our in-house roasted beans, carefully crafted to perfection.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Latte Art Mastery</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src="/placeholder.svg?height=200&width=300&text=Latte+Art" alt="Latte Art" className="w-full h-48 object-cover mb-4 rounded-lg" />
                  <p>Each cup is a canvas for our skilled baristas, turning your coffee into a visual masterpiece.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Farm-to-Cup Freshness</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src="/placeholder.svg?height=200&width=300&text=Farm+to+Cup" alt="Farm to Cup" className="w-full h-48 object-cover mb-4 rounded-lg" />
                  <p>We partner directly with farmers to bring you the freshest, most ethically sourced beans.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Reservation Section */}
        <section className="py-16 bg-[#d4a373] dark:bg-[#8b5e3c] text-[#3d2c29] dark:text-[#f8f5f0]">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 font-serif">Reserve Your Experience</h2>
            <p className="mb-8 text-lg">Elevate your visit by reserving a table at Arth Café. Perfect for intimate gatherings or special occasions.</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-[#3d2c29] hover:bg-[#2d201e] text-[#f8f5f0]">Make a Reservation</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Reserve a Table</DialogTitle>
                  <DialogDescription>
                    Book your spot at Arth Café. We'll confirm your reservation shortly.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleReservation} className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" className="col-span-3" required />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="date" className="text-right">
                      Date
                    </Label>
                    <Input id="date" type="date" className="col-span-3" required />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="time" className="text-right">
                      Time
                    </Label>
                    <Input id="time" type="time" className="col-span-3" required />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="guests" className="text-right">
                      Guests
                    </Label>
                    <Input id="guests" type="number" min="1" max="10" className="col-span-3" required />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="special-requests" className="text-right">
                      Special Requests
                    </Label>
                    <Textarea id="special-requests" className="col-span-3" />
                  </div>
                  <Button type="submit" className="w-full bg-[#3d2c29] hover:bg-[#2d201e] text-[#f8f5f0]">Reserve Now</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-[#f8f5f0] dark:bg-[#1c1917]">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center font-serif">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <MapPin className="w-6 h-6 mr-2" />
                    <span>123 Coffee Street, Beantown, CT 06510</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-6 h-6 mr-2" />
                    <span>(555) 123-4567</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-6 h-6 mr-2" />
                    <span>info@arthcafe.com</span>
                  </li>
                </ul>
                <h3 className="text-2xl font-bold mt-8 mb-4">Opening Hours</h3>
                <ul className="space-y-2">
                  <li>Monday - Friday: 7:00 AM - 8:00 PM</li>
                  <li>Saturday - Sunday: 8:00 AM - 9:00 PM</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" className="bg-white dark:bg-gray-800" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" className="bg-white dark:bg-gray-800" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" className="bg-white dark:bg-gray-800" required />
                  </div>
                  <Button type="submit" className="w-full bg-[#3d2c29] hover:bg-[#2d201e] text-[#f8f5f0]">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#3d2c29] dark:bg-[#2d201e] text-[#f8f5f0] py-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-serif">Arth Café</h3>
              <p>Elevating your coffee experience since 2010</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#d4a373]">Our Story</a></li>
                <li><a href="#" className="hover:text-[#d4a373]">Careers</a></li>
                <li><a href="#" className="hover:text-[#d4a373]">Blog</a></li>
                <li><a href="#" className="hover:text-[#d4a373]">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#d4a373]"><Facebook /></a>
                <a href="#" className="hover:text-[#d4a373]"><Instagram /></a>
                <a href="#" className="hover:text-[#d4a373]"><Twitter /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">Newsletter</h4>
              <p className="mb-2">Stay updated with our latest offers and events</p>
              <form onSubmit={handleSubscribe} className="flex">
                <Input type="email" placeholder="Your email" className="rounded-r-none bg-white dark:bg-gray-800 text-[#3d2c29] dark:text-[#f8f5f0]" required />
                <Button type="submit" className="rounded-l-none bg-[#d4a373] hover:bg-[#c4946b] text-[#3d2c29]">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="container mx-auto mt-8 pt-8 border-t border-[#5a4636] text-center">
            <p>&copy; 2024 Arth Café. All rights reserved.</p>
          </div>
        </footer>

        {/* Shopping Cart Dialog */}
        <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Your Cart</DialogTitle>
              <DialogDescription>
                Review your items before checkout.
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-[300px] rounded-md border p-4">
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="font-bold">{item.name}</h4>
                      <p>{item.price} x {item.quantity}</p>
                    </div>
                    <div className="flex items-center">
                      <Button variant="outline" size="icon" onClick={() => removeFromCart(item)}><Minus className="h-4 w-4" /></Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button variant="outline" size="icon" onClick={() => addToCart(item)}><Plus className="h-4 w-4" /></Button>
                    </div>
                  </div>
                ))
              )}
            </ScrollArea>
            {cartItems.length > 0 && (
              <>
                <Separator />
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-bold">Total:</span>
                  <span>${calculateTotal()}</span>
                </div>
                <Button className="w-full mt-4 bg-[#3d2c29] hover:bg-[#2d201e] text-[#f8f5f0]" onClick={() => toast.success('Checkout process initiated!')}>
                  Proceed to Checkout
                </Button>
              </>
            )}
          </DialogContent>
        </Dialog>

        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default ArthCafeLuxe;