import MaxWithWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Key, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [

  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description: "Get your assets delived to your email in seconds and download them right away."
  },

  {
    name: "Guaranteed Quality",
    icon: CheckCircle,
    description: "Every asset on our platform is verified by our team to ensure our highest quality standards."
  },

  {
    name: "For the Planet",
    icon: Leaf,
    description: "We have pledged 1% of sales to the preservation of our planet."
  }
]

export default function Home() {
  return <>
    <MaxWithWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Your marketplace for high-quality{" "}
          <span className="text-red-600">digital asserts</span>
          .
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welconme to MarketPlace. Every asset on our platform is verified by our team to ensure our highest quality standards.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href='/products' className={buttonVariants()}>Browse Trending</Link>

          <Button variant="outline"> Our quality our promise &rarr;</Button>
        </div>
      </div>

      {/* TODO : List product*/}
    </MaxWithWrapper>
    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWithWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) => (

            <div key={perk.name} className="text-center  md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-red-100 text-red-900">
                  {<perk.icon className="w-1/3 h-1/3"/>}
                </div>
              </div>


              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">
                  {perk.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            </div>

          ))}
        </div>
      </MaxWithWrapper>
    </section>

  </>
}
