import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function PlayersOnlyLanding() {
  return (
    <div className="min-h-screen bg-black">
      {/* Top bar */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold">PlayersOnly.io</span>
          </div>
          <Button variant="outline" className="hidden md:block">
            Book a Demo
          </Button>
        </div>
      </header>

      {/* Top header */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Connect Your Brand with
              <span className="text-blue-600"> Elite Athletes</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              PlayersOnly is the exclusive platform where premium brands meet professional athletes for authentic
              partnerships that drive real results.
            </p>

            {/* Email */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="Enter your brand email to get started" className="flex-1" />
                <Button className="bg-blue-600 hover:bg-blue-700 px-8">Get Started</Button>
              </div>
              {/* Social proof */}
              <p className="text-sm text-gray-500 mt-2">Join 30+ premium brands already committed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Premium Brands Choose PlayersOnly</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access verified athletes, streamlined partnerships, and measurable ROI all in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg ">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Verified Athletes</h3>
                <p className="text-gray-600">
                  Access only authenticated professional athletes with verified credentials and performance metrics
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Proven ROI</h3>
                <p className="text-gray-600">
                  Track engagement, reach, and conversion metrics with our advanced analytics dashboard
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Brand Safety</h3>
                <p className="text-gray-600">
                  AI-powered content monitoring and athlete vetting ensures your brand reputation stays protected
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Exclusive Access</h3>
                <p className="text-gray-600">
                  Connect with athletes unavailable on other platforms through our exclusive partnership network
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How PlayersOnly Works</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Find the perfect partnership with three easy steps
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="absolute -top-1 -left-2 w-8 h-8 bg-blue-100 rounded-full flex text-center items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                </div>
                <h3 className="text-xl text-white font-semibold mb-3">Discover Athletes</h3>
                <p className="text-gray-500">
                  Browse our curated database of verified professional athletes filtered by sport, audience, and
                  engagement rates
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="absolute -top-1 -left-2 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                </div>
                <h3 className="text-xl text-white font-semibold mb-3">Connect & Negotiate</h3>
                <p className="text-gray-500">
                  Send partnership proposals directly through our platform with built-in contract templates and
                  negotiation tools
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="absolute -top-1 -left-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                </div>
                <h3 className="text-xl text-white font-semibold mb-3">Track & Optimize</h3>
                <p className="text-gray-500">
                  Monitor campaign performance with real-time analytics and optimize your partnerships for maximum ROI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
