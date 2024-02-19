import Image from "next/image";
import FeatImage01 from "../public/images/band.webp";
import FeatImage02 from "../public/images/goldPlayBtn.webp";
import FeatImage03 from "../public/images/create-content.webp";
import FeatImage04 from "../public/images/monetize.webp";
import Link from "next/link";

export default function Blog() {
  return (
    <section className="shadow-md rounded-xl overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Link
            href="/blog/how-to-grow-your-youtube-channel"
            target="_blank"
            className=""
          >
            <div className="bg-black bg-opacity-20 rounded-xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  className="object-cover w-full h-full"
                  src={FeatImage01}
                  layout="fill"
                  alt="Features 01"
                />
              </div>
              <div className="p-6">
                <h3 className="h4 mb-4">How to Grow Your YouTube Channel</h3>
                <p className="text-base text-gray-600">
                  Learn how to grow your YouTube channel and get more views and
                  subscribers.
                </p>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            href="/blog/how-to-grow-your-youtube-channel"
            target="_blank"
            className=""
          >
            <div className="bg-black bg-opacity-20 rounded-xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  className="object-cover w-full h-full"
                  src={FeatImage02}
                  layout="fill"
                  alt="Features 02"
                />
              </div>
              <div className="p-6">
                <h3 className="h4 mb-4">Your Title 2</h3>
                <p className="text-base text-gray-600">Your Content 2</p>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            href="/blog/how-to-grow-your-youtube-channel"
            target="_blank"
            className=""
          >
            <div className="bg-black bg-opacity-20 rounded-xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  className="object-cover w-full h-full"
                  src={FeatImage03}
                  layout="fill"
                  alt="Features 03"
                />
              </div>
              <div className="p-6">
                <h3 className="h4 mb-4">Your Title 3</h3>
                <p className="text-base text-gray-600">Your Content 3</p>
              </div>
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            href="/blog/how-to-grow-your-youtube-channel"
            target="_blank"
            className=""
          >
            <div className="bg-black bg-opacity-20 rounded-xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  className="object-cover w-full h-full"
                  src={FeatImage04}
                  layout="fill"
                  alt="Features 04"
                />
              </div>
              <div className="p-6">
                <h3 className="h4 mb-4">Your Title 4</h3>
                <p className="text-base text-gray-600">Your Content 4</p>
              </div>
            </div>
          </Link>

          {/* Repeat the pattern for the remaining cards */}
          {/* Card 5 */}
          {/* Card 6 */}
        </div>
      </div>
    </section>
  );
}
