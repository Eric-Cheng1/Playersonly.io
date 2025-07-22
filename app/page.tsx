import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function PlayersOnlyLanding() {
  return (
    <div className="bg-black flex flex-col min-h-screen text-white">
      <header className="flex justify-between items-center bg-black-400 h-24 px-8">
        <div className="flex items-center">
  <Link href="https://playersonly.io/" className="hidden md:inline-flex">
    <img
      src="https://media.licdn.com/dms/image/v2/C4E0BAQGfpxGLiuymGA/company-logo_200_200/company-logo_200_200/0/1630620500739/playersonly_logo?e=2147483647&v=beta&t=kxyFViupk8nMOs4wMd52si7s9ItBh_8OsZ1aZoW1ANY"
      alt="PlayersOnly Logo"
      className="w-14 h-14 rounded-full object-cover"
      style={{ marginRight: 0, paddingRight: 0 }}
    />
  </Link>
  <span className="text-white font-extrabold tracking-normal hidden md:inline-block">
    PLAYERSONLY
  </span>
</div>
        <nav className="gap-10 font-light hidden md:flex">
          <Link href="https://playersonly.io/">Features</Link>
          <Link href="https://playersonly.io/">Insights</Link>
          <Link href="https://playersonly.io/">Solutions</Link>
          <Link href="https://playersonly.io/">News</Link>
        </nav>
        <Link
          href="https://playersonly.io/"
          className="bg-white text-black px-7 py-2 rounded-2xl hover:bg-gray-200 transition-all duration-200 ease-in-out"
        >
          Book a Demo
        </Link>
      </header>
playersonly.ioplayersonly.io
PlayersOnly
The ultimate social platform for athletes, fans, and sports brands.
(5 kB)
https://media.licdn.com/dms/image/v2/C4E0BAQGfpxGLiuymGA/company-logo_200_200/company-logo_200_200/0/1630620500739/playersonly_logo?e=2147483647&v=beta&t=kxyFViupk8nMOs4wMd52si7s9ItBh_8OsZ1aZoW1ANY

New
9:04
<div className="bg-black flex flex-col min-h-screen text-white">
      <header className="flex justify-between items-center bg-black-400 h-24 px-8">
        <div className="flex items-center">
          <Link href="https://playersonly.io/" className="hidden md:inline-flex">
          <img
             src="https://media.licdn.com/dms/image/v2/C4E0BAQGfpxGLiuymGA/company-logo_200_200/company-logo_200_200/0/1630620500739/playersonly_logo?e=2147483647&v=beta&t=kxyFViupk8nMOs4wMd52si7s9ItBh_8OsZ1aZoW1ANY"
             alt="PlayersOnly Logo"
             className="w-14 h-14 rounded-full object-cover"
              style={{ marginRight: 0, paddingRight: 0 }}
            />
          </Link>
          <span className="text-white font-extrabold tracking-normal hidden md:inline-block">
            PLAYERSONLY
          </span>
    </div>
        <nav className="gap-10 font-light hidden md:flex">
          <Link href="https://playersonly.io/">Features</Link>
          <Link href="https://playersonly.io/">Insights</Link>
          <Link href="https://playersonly.io/">Solutions</Link>
          <Link href="https://playersonly.io/">News</Link>
        </nav>
        <Link
          href="https://playersonly.io/"
          className="bg-white text-black px-7 py-2 rounded-2xl hover:bg-gray-200 transition-all duration-200 ease-in-out"
        >
          Book a Demo
        </Link>
      </header>
    </div>

      {/* Top header */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </h1>
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
    </div>
  )
}
