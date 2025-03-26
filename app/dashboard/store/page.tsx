import Link from "next/link"
import { Edit, ExternalLink, Settings, Share } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StorePage() {
  // Mock store data
  const storeData = {
    name: "Fashion Trends Rwanda",
    description: "Your one-stop shop for the latest fashion trends in Rwanda",
    url: "fashion-trends.kora.rw",
    products: 48,
    orders: 124,
    revenue: 1250000,
    views: 3240,
    conversion: 3.8,
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">My Store</h1>
        <p className="text-muted-foreground">Manage your online store and track performance.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Store Information</CardTitle>
            <CardDescription>Basic information about your store</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="font-medium">Store Name</div>
              <div>{storeData.name}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-medium">Description</div>
              <div className="max-w-[250px] text-right">{storeData.description}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-medium">Store URL</div>
              <div className="flex items-center gap-2">
                {storeData.url}
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">Visit store</span>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-medium">Products</div>
              <div>{storeData.products}</div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/dashboard/store/settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </Button>
            <Button asChild>
              <Link href="/dashboard/store/edit">
                <Edit className="mr-2 h-4 w-4" />
                Edit Store
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Store Performance</CardTitle>
            <CardDescription>Overview of your store's performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="font-medium">Total Orders</div>
              <div>{storeData.orders}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-medium">Total Revenue</div>
              <div>RWF {storeData.revenue.toLocaleString()}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-medium">Store Views</div>
              <div>{storeData.views.toLocaleString()}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-medium">Conversion Rate</div>
              <div>{storeData.conversion}%</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/dashboard/analytics">View Detailed Analytics</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="products" className="w-full">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>
        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
              <CardDescription>Your best-selling products</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((product) => (
                  <div key={product} className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-md">
                      <img
                        src={`/placeholder.svg?height=64&width=64&text=Product+${product}`}
                        alt={`Product ${product}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Product Name {product}</h3>
                      <p className="text-sm text-muted-foreground">{30 - product * 5} sales this month</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">RWF {(product * 15000).toLocaleString()}</div>
                      <p className="text-sm text-muted-foreground">
                        {product === 1 ? "+12%" : product === 2 ? "+8%" : "+5%"}
                      </p>
                    </div>
                  </div>
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
        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Your most recent customer orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((order) => (
                  <div key={order} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">#{order}</div>
                    <div className="flex-1">
                      <h3 className="font-medium">Order #{order}23456</h3>
                      <p className="text-sm text-muted-foreground">
                        {order === 1 ? "Today" : order === 2 ? "Yesterday" : "3 days ago"}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">RWF {(order * 25000).toLocaleString()}</div>
                      <p
                        className={`text-sm ${
                          order === 1 ? "text-yellow-500" : order === 2 ? "text-blue-500" : "text-green-500"
                        }`}
                      >
                        {order === 1 ? "Processing" : order === 2 ? "Shipped" : "Delivered"}
                      </p>
                    </div>
                  </div>
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
        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Customers</CardTitle>
              <CardDescription>Your most valuable customers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((customer) => (
                  <div key={customer} className="flex items-center gap-4">
                    <div className="h-10 w-10 overflow-hidden rounded-full">
                      <img
                        src={`/placeholder.svg?height=40&width=40&text=User+${customer}`}
                        alt={`Customer ${customer}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Customer Name {customer}</h3>
                      <p className="text-sm text-muted-foreground">{10 - customer} orders</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">RWF {(customer * 50000).toLocaleString()}</div>
                      <p className="text-sm text-muted-foreground">Total spent</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/customers">View All Customers</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Share Your Store</CardTitle>
          <CardDescription>Promote your store on social media and other platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1 rounded-lg border p-4">
              <div className="mb-2 font-medium">Store URL</div>
              <div className="flex items-center gap-2">
                <Input value={`https://${storeData.url}`} readOnly />
                <Button variant="outline" size="icon">
                  <Share className="h-4 w-4" />
                  <span className="sr-only">Copy URL</span>
                </Button>
              </div>
            </div>
            <div className="flex-1 rounded-lg border p-4">
              <div className="mb-2 font-medium">QR Code</div>
              <div className="flex items-center justify-center">
                <div className="h-24 w-24 rounded bg-muted">
                  <img src="/placeholder.svg?height=96&width=96&text=QR+Code" alt="QR Code" className="h-full w-full" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Download Marketing Materials
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

// This component is used in the StorePage but wasn't defined
function Input({ value, readOnly }: { value: string; readOnly?: boolean }) {
  return (
    <input
      type="text"
      value={value}
      readOnly={readOnly}
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    />
  )
}

