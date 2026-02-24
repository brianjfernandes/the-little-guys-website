import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Big Results from The Little Guys
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Three hard-working kids ready to make your stuff shine. We clean
            cars, windows, trash bins, and much more. Just give us a call and
            we&apos;ll get it done!
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:619-559-7499"
              className="rounded-md bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Call Us: (619) 559-7499
            </a>
            <Link
              href="/services"
              className="rounded-md border-2 border-white px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            We&apos;re three 12-year-olds who started The Little Guys to earn
            our own money and help out our neighbors. We take pride in every job
            and work hard to make sure you&apos;re happy with the results.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            Learn more about us &rarr;
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">What We Clean</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Cars",
                description:
                  "Interior and exterior cleaning to get your car looking fresh.",
              },
              {
                title: "Windows",
                description:
                  "Streak-free window cleaning for homes and businesses.",
              },
              {
                title: "Trash Bins",
                description:
                  "Deep cleaning to eliminate odors and grime from your bins.",
              },
              {
                title: "And More!",
                description:
                  "Have something else that needs cleaning? Give us a call!",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <Link
            href="/services"
            className="mt-8 inline-block font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            View all services &rarr;
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Call Us
              </h3>
              <p className="mt-2 text-gray-600">
                Give us a call at{" "}
                <a href="tel:619-559-7499" className="font-medium text-blue-600">
                  (619) 559-7499
                </a>{" "}
                and let us know what you need cleaned.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Make a Reservation
              </h3>
              <p className="mt-2 text-gray-600">
                We&apos;ll set up a time that works for you and confirm your
                reservation.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                3
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                We Get It Done
              </h3>
              <p className="mt-2 text-gray-600">
                We&apos;ll come out and get everything cleaned up for you as
                soon as we can!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Call us today to book your cleaning!
          </p>
          <a
            href="tel:619-559-7499"
            className="mt-6 inline-block rounded-md bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Call (619) 559-7499
          </a>
        </div>
      </section>
    </>
  );
}
