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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare, tortor vel maximus efficitur, est sapien gravida ex, eu luctus orci nisi pretium elit.
            </p>

            {/* Email */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-blue-600 hover:bg-white-700 px-8">Lorem Ipsum</Button>
              </div>
              {/* Social proof */}
              <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. .</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lorem ipsum </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg ">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Lorem Ipsum</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Lorem Ipsum</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Lorem Ipsum</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Lorem ipsum</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
                <h3 className="text-xl text-white font-semibold mb-3">Connect & Sign</h3>
                <p className="text-gray-500">
                  Send partnership proposals directly through our platform and use our tools to 
                  test market values
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
