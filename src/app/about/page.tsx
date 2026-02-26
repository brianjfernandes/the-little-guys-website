import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | The Little Guys",
  description:
    "Meet the three 12-year-olds behind The Little Guys cleaning service.",
};

const team = [
  { name: "Declan", photo: "/team/declan.jpg", position: "object-top" },
  { name: "Amare", photo: "/team/amare.jpg", position: "object-center" },
  { name: "James", photo: "/team/james.jpg", position: "object-center" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
      <div className="mt-8 max-w-3xl space-y-6 text-lg text-gray-600">
        <p>
          The Little Guys is a cleaning service run by three 12-year-olds who
          are ready to work hard and earn our keep. We clean cars, windows,
          trash bins, and much more.
        </p>
        <p>
          We started this business because we wanted to do something
          productive, make our own money, and help out the people in our
          neighborhood. When you hire us, you&apos;re not just getting a
          cleaning — you&apos;re supporting young entrepreneurs!
        </p>
        <p>
          Just give us a call at{" "}
          <a
            href="tel:619-559-7499"
            className="font-medium text-blue-600 hover:text-blue-800"
          >
            (619) 559-7499
          </a>{" "}
          to make a reservation. We&apos;ll get back to you and come out to
          clean when we find the time. We always do our best work!
        </p>
      </div>

      {/* Meet the Team */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900">Meet the Team</h2>
        <p className="mt-2 text-lg text-gray-600">
          Here are the faces behind The Little Guys — so you know exactly who
          you&apos;re working with.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-lg bg-gray-100">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className={`object-cover ${member.position}`}
                    sizes="256px"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center">
                    <svg
                      className="h-20 w-20 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-400">Photo coming soon</p>
                  </div>
                )}
              </div>
              <p className="mt-4 text-lg font-semibold text-gray-900">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">What We Stand For</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            {
              title: "Hard Work",
              description:
                "We put in the effort on every job, no matter how big or small.",
            },
            {
              title: "Honesty",
              description:
                "We're upfront about what we can do and always give you a fair deal.",
            },
            {
              title: "Reliability",
              description:
                "When we say we'll be there, we show up and get it done.",
            },
            {
              title: "Friendly Service",
              description:
                "We're easy to work with and always happy to help.",
            },
          ].map((value) => (
            <div key={value.title} className="rounded-lg bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900">{value.title}</h3>
              <p className="mt-2 text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
