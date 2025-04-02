import Link from "next/link"
import { Check, Clock, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PartnershipsPage() {
  // Mock partnerships data
  const activePartnerships = [
    {
      id: 1,
      name: "TechHub Rwanda",
      products: 15,
      commission: 10,
      since: "3 months ago",
      image: "/placeholder.svg?height=80&width=80&text=TechHub",
    },
    {
      id: 2,
      name: "Fashion House",
      products: 22,
      commission: 12,
      since: "2 months ago",
      image: "/placeholder.svg?height=80&width=80&text=Fashion",
    },
    {
      id: 3,
      name: "HomeGoods Rwanda",
      products: 8,
      commission: 15,
      since: "1 month ago",
      image: "/placeholder.svg?height=80&width=80&text=HomeGoods",
    },
  ]

  const pendingPartnerships = [
    {
      id: 4,
      name: "LeatherCraft",
      products: 12,
      commission: 10,
      requestedOn: "2 days ago",
      image: "/placeholder.svg?height=80&width=80&text=LeatherCraft",
    },
    {
      id: 5,
      name: "FitLife",
      products: 18,
      commission: 8,
      requestedOn: "1 week ago",
      image: "/placeholder.svg?height=80&width=80&text=FitLife",
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Partnerships</h1>
        <p className="text-muted-foreground">Manage your partnerships with wholesalers.</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Your Partnerships</h2>
          <p className="text-sm text-muted-foreground">
            You have {activePartnerships.length} active partnerships and {pendingPartnerships.length} pending requests.
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/partnerships/find">
            <Plus className="mr-2 h-4 w-4" />
            Find New Partners
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList>
          <TabsTrigger value="active">Active Partnerships</TabsTrigger>
          <TabsTrigger value="pending">Pending Requests</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activePartnerships.map((partner) => (
              <Card key={partner.id}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="h-20 w-20 overflow-hidden rounded-md">
                    <img
                      src={partner.image || "/placeholder.svg"}
                      alt={partner.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle>{partner.name}</CardTitle>
                    <CardDescription>Partner since {partner.since}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Products:</span>
                      <span className="font-medium">{partner.products}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Commission Rate:</span>
                      <span className="font-medium">{partner.commission}%</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href={`/dashboard/partnerships/${partner.id}`}>View Details</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/dashboard/partnerships/${partner.id}/products`}>Browse Products</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="pending" className="space-y-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pendingPartnerships.map((partner) => (
              <Card key={partner.id}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="h-20 w-20 overflow-hidden rounded-md">
                    <img
                      src={partner.image || "/placeholder.svg"}
                      alt={partner.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle>{partner.name}</CardTitle>
                    <CardDescription>Requested {partner.requestedOn}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Available Products:</span>
                      <span className="font-medium">{partner.products}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Proposed Commission:</span>
                      <span className="font-medium">{partner.commission}%</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md bg-muted p-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Awaiting approval from wholesaler</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/dashboard/partnerships/${partner.id}`}>View Request</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Partnership Requests</CardTitle>
          <CardDescription>Requests from wholesalers to partner with you</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2].map((request) => (
              <div key={request} className="flex items-center gap-4 rounded-lg border p-4">
                <div className="h-16 w-16 overflow-hidden rounded-md">
                  <img
                    src={`/placeholder.svg?height=64&width=64&text=Supplier+${request}`}
                    alt={`Supplier ${request}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Supplier Name {request}</h3>
                  <p className="text-sm text-muted-foreground">
                    {request === 1 ? "Electronics" : "Home Decor"} • {request === 1 ? "25" : "18"} products
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Requested {request === 1 ? "yesterday" : "3 days ago"}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="sr-only">Accept</span>
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                    <X className="h-4 w-4 text-red-500" />
                    <span className="sr-only">Decline</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/dashboard/partnerships/requests">View All Requests</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

