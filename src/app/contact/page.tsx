import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | The Little Guys",
  description: "Call The Little Guys to book your cleaning today.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
      <p className="mt-4 text-lg text-gray-600">
        Ready to get something cleaned? Give us a call to make a reservation!
      </p>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Call to Action */}
        <div>
          <div className="rounded-lg bg-blue-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900">Call Us</h2>
            <p className="mt-3 text-gray-600">
              The best way to reach us is by phone. Call to make a reservation
              and we&apos;ll get back to you with a time that works.
            </p>
            <a
              href="tel:619-559-7499"
              className="mt-6 inline-block rounded-md bg-blue-600 px-8 py-4 text-xl font-bold text-white hover:bg-blue-700 transition-colors"
            >
              (619) 559-7499
            </a>
          </div>

          <div className="mt-8 rounded-lg border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900">
              How It Works
            </h2>
            <div className="mt-4 space-y-4 text-gray-600">
              <div className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  1
                </span>
                <p>
                  Call us and let us know what you need cleaned (cars, windows,
                  trash bins, or anything else).
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  2
                </span>
                <p>
                  We&apos;ll confirm your reservation and get back to you.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  3
                </span>
                <p>
                  We&apos;ll come out and clean it when we find the time!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Or Send Us a Message
          </h2>
          <p className="mt-2 text-gray-600">
            If you can&apos;t call right now, leave us a message and
            we&apos;ll get back to you.
          </p>
          <form className="mt-6 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                What do you need cleaned?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
