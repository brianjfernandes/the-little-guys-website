import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | The Little Guys",
  description:
    "Car cleaning, window washing, trash bin cleaning and more from The Little Guys.",
};

const services = [
  {
    title: "Car Cleaning",
    description:
      "We'll wash the outside and clean up the inside of your car. Wipe down the seats, vacuum the floors, and make it look like new. Whether it's a quick wash or a deeper clean, we've got you covered.",
  },
  {
    title: "Window Cleaning",
    description:
      "We clean windows inside and out to get them sparkling and streak-free. Perfect for homes and small businesses that want to let the sunshine in.",
  },
  {
    title: "Trash Bin Cleaning",
    description:
      "Nobody likes a smelly trash bin. We'll scrub your bins down, rinse them out, and leave them fresh and clean so you don't have to deal with the mess.",
  },
  {
    title: "And Much More!",
    description:
      "Have something else that needs cleaning? We're up for the challenge! Give us a call and tell us what you need — if we can do it, we will.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
      <p className="mt-4 max-w-2xl text-lg text-gray-600">
        We clean cars, windows, trash bins, and more. Here&apos;s what we can do
        for you.
      </p>

      <div className="mt-12 space-y-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-lg border border-gray-200 p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              {service.title}
            </h2>
            <p className="mt-3 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* How to Book */}
      <div className="mt-12 rounded-lg bg-blue-50 p-8">
        <h2 className="text-2xl font-bold text-gray-900">How to Book</h2>
        <div className="mt-4 space-y-3 text-gray-600">
          <p>
            <span className="font-semibold text-gray-900">1.</span> Call us at{" "}
            <a
              href="tel:619-559-7499"
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              (619) 559-7499
            </a>{" "}
            and tell us what you need cleaned.
          </p>
          <p>
            <span className="font-semibold text-gray-900">2.</span> We&apos;ll
            confirm your reservation and get back to you with a time.
          </p>
          <p>
            <span className="font-semibold text-gray-900">3.</span> We&apos;ll
            come out and get it done when we find the time!
          </p>
        </div>
        <a
          href="tel:619-559-7499"
          className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Call Now: (619) 559-7499
        </a>
      </div>
    </div>
  );
}
