import Link from "next/link"
import { ArrowUpRight, BarChart3, CreditCard, DollarSign, Package, ShoppingCart, Store, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboardPage() {
  // Mock data for the admin dashboard
  const stats = {
    totalUsers: 1245,
    totalOrders: 856,
    totalProducts: 3421,
    totalRevenue: 12500000,
    newUsers: 48,
    pendingOrders: 32,
    pendingProducts: 15,
    revenueGrowth: 12.5,
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the KORA admin dashboard. Here's an overview of your platform.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+{stats.newUsers} new users this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalOrders.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">{stats.pendingOrders} pending orders</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalProducts.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">{stats.pendingProducts} pending approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">RWF {stats.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+{stats.revenueGrowth}% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the current year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <BarChart3 className="h-16 w-16 text-muted-foreground" />
              <span className="ml-4 text-muted-foreground">Revenue chart will be displayed here</span>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest activities on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {[1, 2, 3, 4, 5].map((activity) => (
                <div key={activity} className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity === 1 && "New user registered"}
                      {activity === 2 && "New order placed"}
                      {activity === 3 && "Product approved"}
                      {activity === 4 && "Payment processed"}
                      {activity === 5 && "New partnership formed"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity === 1 && "2 minutes ago"}
                      {activity === 2 && "15 minutes ago"}
                      {activity === 3 && "1 hour ago"}
                      {activity === 4 && "3 hours ago"}
                      {activity === 5 && "5 hours ago"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="w-full">
        <TabsList>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
        </TabsList>
        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Users</CardTitle>
              <CardDescription>Recently registered users on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((user) => (
                  <div key={user} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-muted">
                        <img
                          src={`/placeholder.svg?height=40&width=40&text=User+${user}`}
                          alt={`User ${user}`}
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">User Name {user}</p>
                        <p className="text-xs text-muted-foreground">{user % 2 === 0 ? "Dropshipper" : "Wholesaler"}</p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Joined {user} {user === 1 ? "day" : "days"} ago
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin/users">View All Users</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Recently placed orders on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((order) => (
                  <div key={order} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <ShoppingCart className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Order #{order}12345</p>
                        <p className="text-xs text-muted-foreground">
                          {order === 1 ? "2 hours ago" : `${order} days ago`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium">RWF {(order * 25000).toLocaleString()}</div>
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <Link href={`/admin/orders/${order}`}>
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">View order</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin/orders">View All Orders</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Products</CardTitle>
              <CardDescription>Recently added products on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((product) => (
                  <div key={product} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 overflow-hidden rounded-md">
                        <img
                          src={`/placeholder.svg?height=40&width=40&text=Product+${product}`}
                          alt={`Product ${product}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Product Name {product}</p>
                        <p className="text-xs text-muted-foreground">
                          Added {product} {product === 1 ? "day" : "days"} ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium">RWF {(product * 15000).toLocaleString()}</div>
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <Link href={`/admin/products/${product}`}>
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">View product</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin/products">View All Products</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Stores</CardTitle>
            <CardDescription>Best performing stores on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((store) => (
                <div key={store} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <Store className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Store Name {store}</p>
                      <p className="text-xs text-muted-foreground">{100 - store * 20} products</p>
                    </div>
                  </div>
                  <div className="text-sm font-medium">RWF {(store * 500000).toLocaleString()}</div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/admin/stores">View All Stores</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
            <CardDescription>Recent payment transactions on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((payment) => (
                <div key={payment} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Payment #{payment}54321</p>
                      <p className="text-xs text-muted-foreground">{payment === 1 ? "Today" : `${payment} days ago`}</p>
                    </div>
                  </div>
                  <div className="text-sm font-medium">RWF {(payment * 35000).toLocaleString()}</div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/admin/payments">View All Payments</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

