"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, CreditCard, MapPin, ShoppingBag, Truck, Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("mobile_money")
  const [shippingMethod, setShippingMethod] = useState("standard")

  // Mock cart data - in a real app, this would come from a cart context or API
  const cart = {
    items: [
      {
        id: 1,
        name: "Smartphone X",
        price: 120000,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80&text=Smartphone",
      },
      {
        id: 2,
        name: "Designer T-Shirt",
        price: 15000,
        quantity: 2,
        image: "/placeholder.svg?height=80&width=80&text=T-Shirt",
      },
    ],
    subtotal: 150000,
    shipping: 5000,
    total: 155000,
  }

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePreviousStep = () => {
    setStep(step - 1)
  }

  const handlePlaceOrder = () => {
    // In a real app, this would submit the order to an API
    alert("Order placed successfully!")
    // Redirect to order confirmation page
    window.location.href = "/order-confirmation/12345"
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center gap-4">
        <Link href="/cart" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Cart
        </Link>
        <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <Home className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
        <p className="text-muted-foreground">Complete your purchase by providing shipping and payment information.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {step > 1 ? <Check className="h-4 w-4" /> : "1"}
              </div>
              <span className={step >= 1 ? "font-medium" : "text-muted-foreground"}>Shipping</span>
            </div>
            <div className="hidden sm:block w-16 h-[2px] bg-muted"></div>
            <div className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {step > 2 ? <Check className="h-4 w-4" /> : "2"}
              </div>
              <span className={step >= 2 ? "font-medium" : "text-muted-foreground"}>Payment</span>
            </div>
            <div className="hidden sm:block w-16 h-[2px] bg-muted"></div>
            <div className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {step > 3 ? <Check className="h-4 w-4" /> : "3"}
              </div>
              <span className={step >= 3 ? "font-medium" : "text-muted-foreground"}>Review</span>
            </div>
          </div>

          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
                <CardDescription>Enter your shipping address and contact information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+250 78 123 4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" placeholder="123 Main St" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Kigali" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="district">District</Label>
                    <Input id="district" placeholder="Gasabo" />
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-4">
                  <h3 className="font-medium">Shipping Method</h3>
                  <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                    <div className="flex items-center justify-between space-x-2 rounded-md border p-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard" className="font-normal">
                          Standard Delivery (2-3 days)
                        </Label>
                      </div>
                      <div>RWF 5,000</div>
                    </div>
                    <div className="flex items-center justify-between space-x-2 rounded-md border p-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express" className="font-normal">
                          Express Delivery (1 day)
                        </Label>
                      </div>
                      <div>RWF 10,000</div>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleNextStep} className="ml-auto">
                  Continue to Payment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Choose your preferred payment method.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2 rounded-md border p-4">
                    <RadioGroupItem value="mobile_money" id="mobile_money" />
                    <Label htmlFor="mobile_money" className="font-normal">
                      Mobile Money
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-4">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="font-normal">
                      Credit/Debit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-4">
                    <RadioGroupItem value="bank_transfer" id="bank_transfer" />
                    <Label htmlFor="bank_transfer" className="font-normal">
                      Bank Transfer
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "mobile_money" && (
                  <div className="space-y-4 mt-4 rounded-md border p-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone_number">Mobile Money Number</Label>
                      <Input id="phone_number" placeholder="+250 78 123 4567" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      You will receive a payment request on your mobile phone. Please follow the instructions to
                      complete the payment.
                    </p>
                  </div>
                )}

                {paymentMethod === "card" && (
                  <div className="space-y-4 mt-4 rounded-md border p-4">
                    <div className="space-y-2">
                      <Label htmlFor="card_number">Card Number</Label>
                      <Input id="card_number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name_on_card">Name on Card</Label>
                      <Input id="name_on_card" placeholder="John Doe" />
                    </div>
                  </div>
                )}

                {paymentMethod === "bank_transfer" && (
                  <div className="space-y-4 mt-4 rounded-md border p-4">
                    <p className="text-sm">Please transfer the total amount to the following bank account:</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Bank:</span>
                        <span>Bank of Kigali</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Account Name:</span>
                        <span>KORA Ecommerce Ltd</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Account Number:</span>
                        <span>1234567890</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Reference:</span>
                        <span>ORDER-{Math.floor(Math.random() * 10000)}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your order will be processed once we receive your payment.
                    </p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePreviousStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Shipping
                </Button>
                <Button onClick={handleNextStep}>
                  Review Order
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Review Your Order</CardTitle>
                <CardDescription>Please review your order details before placing your order.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    Shipping Information
                  </h3>
                  <div className="rounded-md border p-4 text-sm">
                    <p className="font-medium">John Doe</p>
                    <p>123 Main St</p>
                    <p>Kigali, Gasabo</p>
                    <p>Rwanda</p>
                    <p>+250 78 123 4567</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium flex items-center">
                    <Truck className="mr-2 h-4 w-4" />
                    Shipping Method
                  </h3>
                  <div className="rounded-md border p-4 text-sm">
                    <p>{shippingMethod === "standard" ? "Standard Delivery (2-3 days)" : "Express Delivery (1 day)"}</p>
                    <p className="text-muted-foreground">
                      Estimated delivery: {shippingMethod === "standard" ? "March 28-29, 2025" : "March 27, 2025"}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium flex items-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Method
                  </h3>
                  <div className="rounded-md border p-4 text-sm">
                    {paymentMethod === "mobile_money" && <p>Mobile Money (+250 78 123 4567)</p>}
                    {paymentMethod === "card" && <p>Credit/Debit Card (**** **** **** 3456)</p>}
                    {paymentMethod === "bank_transfer" && <p>Bank Transfer (Bank of Kigali)</p>}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium flex items-center">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Order Items
                  </h3>
                  <div className="rounded-md border p-4 space-y-4">
                    {cart.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <div className="h-16 w-16 overflow-hidden rounded-md">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">RWF {item.price.toLocaleString()}</div>
                          <p className="text-sm text-muted-foreground">per item</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePreviousStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Payment
                </Button>
                <Button onClick={handlePlaceOrder}>Place Order</Button>
              </CardFooter>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.quantity} x {item.name}
                    </span>
                    <span>RWF {(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>RWF {cart.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>RWF {cart.shipping.toLocaleString()}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>RWF {cart.total.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>If you have any questions about your order, please contact our customer support team.</p>
              <p className="font-medium">Email: support@kora.rw</p>
              <p className="font-medium">Phone: +250 78 123 4567</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

