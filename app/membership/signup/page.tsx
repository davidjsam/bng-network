"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/footer"
import { CheckCircle } from "lucide-react"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    heardFrom: "",
    message: "",
    numberOfMembers: "1",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 py-16 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <Card className="mx-auto max-w-md bg-white shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Application Submitted</CardTitle>
                <CardDescription className="text-lg">
                  Thank you for your interest in joining Breaking New Grounds Network!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-center">
                  <p className="text-gray-600">
                    We've received your Partner Membership application and will review it shortly. You should receive a
                    confirmation email within the next few minutes.
                  </p>
                  <p className="text-gray-600">
                    Our team will be in touch with next steps. If you have any questions in the meantime, please contact
                    us at{" "}
                    <a href="mailto:info@bngnetwork.org" className="text-primary hover:underline">
                      info@bngnetwork.org
                    </a>
                    .
                  </p>
                  <Button asChild className="mt-6 w-full">
                    <a href="/">Return to Homepage</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 bg-section-primary text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Partner Membership Application</h1>
              <p className="text-xl text-gray-200">
                Complete the form below to apply for Partner Membership with Breaking New Grounds Network.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Membership Information</CardTitle>
                    <CardDescription className="text-base">
                      Please provide your details to complete your Partner Membership application.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                              className="bg-gray-50"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                              className="bg-gray-50"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="bg-gray-50"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              className="bg-gray-50"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="organization">Organization/Ministry Name</Label>
                          <Input
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            required
                            className="bg-gray-50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Your Role</Label>
                          <Input
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            placeholder="e.g., Pastor, CEO, Director"
                            required
                            className="bg-gray-50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="numberOfMembers">Number of Member Accounts Needed (Up to 7)</Label>
                          <Select
                            defaultValue={formData.numberOfMembers}
                            onValueChange={(value) => handleSelectChange("numberOfMembers", value)}
                          >
                            <SelectTrigger className="bg-gray-50">
                              <SelectValue placeholder="Select number of accounts" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                              <SelectItem value="5">5</SelectItem>
                              <SelectItem value="6">6</SelectItem>
                              <SelectItem value="7">7</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="heardFrom">How did you hear about us?</Label>
                          <Select onValueChange={(value) => handleSelectChange("heardFrom", value)}>
                            <SelectTrigger className="bg-gray-50">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="referral">Referral from a member</SelectItem>
                              <SelectItem value="event">At an event</SelectItem>
                              <SelectItem value="social">Social media</SelectItem>
                              <SelectItem value="search">Search engine</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">What are you hoping to gain from your membership? (Optional)</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="bg-gray-50"
                          />
                        </div>
                      </div>
                      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-white shadow-lg sticky top-8">
                  <CardHeader>
                    <CardTitle className="text-xl">Partner Membership</CardTitle>
                    <CardDescription>$1,500 per year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span className="text-gray-600">Up to 7 member accounts</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span className="text-gray-600">Annual conference sponsorship</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span className="text-gray-600">Featured partner status</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span className="text-gray-600">Dedicated relationship manager</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span className="text-gray-600">Quarterly strategy sessions</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span className="text-gray-600">Priority access to all events</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <p className="text-sm text-gray-600">
                        Have questions about membership? Contact us at{" "}
                        <a href="mailto:info@bngnetwork.org" className="text-primary hover:underline">
                          info@bngnetwork.org
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
