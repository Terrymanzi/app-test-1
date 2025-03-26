import { ArrowUpRight, DollarSign, Package, ShoppingCart, Truck, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  // This would come from API in a real app
  const userType = "dropshipper" // or "wholesaler", "customer", "admin"

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your {userType} account.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">RWF 45,231</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+8 new orders today</p>
          </CardContent>
        </Card>
        {userType === "dropshipper" ? (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
              <p className="text-xs text-muted-foreground">From 5 different suppliers</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inventory</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
              <p className="text-xs text-muted-foreground">8 items low in stock</p>
            </CardContent>
          </Card>
        )}
        {userType === "dropshipper" ? (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Partnerships</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">2 pending requests</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Shipments</CardTitle>
              <Truck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">9</div>
              <p className="text-xs text-muted-foreground">3 pending shipments</p>
            </CardContent>
          </Card>
        )}
      </div>

      <Tabs defaultValue="recent-orders" className="w-full">
        <TabsList>
          <TabsTrigger value="recent-orders">Recent Orders</TabsTrigger>
          {userType === "dropshipper" ? (
            <TabsTrigger value="products">Products</TabsTrigger>
          ) : (
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
          )}
        </TabsList>
        <TabsContent value="recent-orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>
                You have {userType === "dropshipper" ? "received" : "received"} 12 orders this month.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((order) => (
                  <Card key={order}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Order #{order}23456</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm">Status:</div>
                        <div className="text-sm font-medium">
                          {order === 1 ? (
                            <span className="text-yellow-500">Processing</span>
                          ) : order === 2 ? (
                            <span className="text-blue-500">Shipped</span>
                          ) : (
                            <span className="text-green-500">Delivered</span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">Date:</div>
                        <div className="text-sm font-medium">
                          {order === 1 ? "Today" : order === 2 ? "Yesterday" : "3 days ago"}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">Total:</div>
                        <div className="text-sm font-medium">RWF {order * 5000}</div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" className="w-full" asChild>
                        <Link href={`/dashboard/orders/${order}`}>
                          View Details
                          <ArrowUpRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/orders">View All Orders</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Products</CardTitle>
              <CardDescription>You have 48 products in your store.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((product) => (
                  <Card key={product}>
                    <CardHeader className="pb-2">
                      <div className="aspect-square w-full overflow-hidden rounded-md">
                        <img
                          src={`/placeholder.svg?height=200&width=200&text=Product+${product}`}
                          alt={`Product ${product}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <h3 className="font-medium">Product Name {product}</h3>
                      <p className="text-sm text-muted-foreground">RWF {product * 2500}</p>
                      <div className="mt-2 flex items-center text-sm">
                        <span className={product % 2 === 0 ? "text-green-500" : "text-yellow-500"}>
                          {product % 2 === 0 ? "In Stock" : "Low Stock"}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" className="w-full" asChild>
                        <Link href={`/dashboard/products/${product}`}>
                          Edit Product
                          <ArrowUpRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/products">View All Products</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Inventory</CardTitle>
              <CardDescription>You have 124 items in your inventory.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((product) => (
                  <Card key={product}>
                    <CardHeader className="pb-2">
                      <div className="aspect-square w-full overflow-hidden rounded-md">
                        <img
                          src={`/placeholder.svg?height=200&width=200&text=Product+${product}`}
                          alt={`Product ${product}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <h3 className="font-medium">Inventory Item {product}</h3>
                      <p className="text-sm text-muted-foreground">RWF {product * 1500}</p>
                      <div className="mt-2 flex items-center justify-between text-sm">
                        <span>Stock:</span>
                        <span className={product * 10 > 20 ? "text-green-500" : "text-yellow-500"}>
                          {product * 10} units
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" className="w-full" asChild>
                        <Link href={`/dashboard/inventory/${product}`}>
                          Manage Stock
                          <ArrowUpRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/inventory">View All Inventory</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

