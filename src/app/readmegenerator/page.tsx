import Link from "next/link";

export default function pgae() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-indigo-700 text-white p-5">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Create Stunning README Files Effortlessly
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Use our powerful README generator to craft professional and
          eye-catching README files for your projects.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <Link
            href="/readmegenerator/editor"
            className="bg-white text-blue-500 font-semibold hover:bg-gray-200 px-8 py-4 rounded-full shadow-md transition duration-300">
            Get Started by generating one
          </Link>
          <Link
            href="/readmegenerator/learn-more"
            className="bg-blue-700 font-semibold hover:bg-blue-800 px-8 py-4 rounded-full shadow-md transition duration-300">
            Learn More
          </Link>
        </div>
      </div>
      {/* <div className="mt-12 w-full max-w-4xl mx-auto">
        <Image
          src="/images/hero-image.png"
          alt="Hero Image"
          width={1200}
          height={800}
          layout="responsive"
          className="rounded-lg shadow-lg"
        />
      </div> */}
    </div>
  );
}
