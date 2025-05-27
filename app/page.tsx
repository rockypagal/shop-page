import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "@/components/ImageSlider";
import WhatsAPP from "@/components/WhatsAPP";
import Call from "@/components/Call";
import Link from "next/link";
export default function Home() {
  return (
    <main className="">
      <div className="max-w-md m-auto border">
        <ImageSlider />
        <div className="px-4  relative">
          <div>
            <p className="font-semibold text-2xl text-blue-400">
              Shop For Rent
            </p>
            <p className="text-lg text-gray-600">Shagun Antalia</p>
            <p className="text-lg text-gray-600">
              Ground Floor, Shop NO.9,
              <br /> SQ FT:609
            </p>
            <p className="font-semibold text-2xl text-blue-400 mt-3">Address</p>
            <p className="text-lg text-gray-600">
              Opp OM.Residency, near Bank of Baroda,
              <br /> Silver Star Cross Road, Chandlodiya, Ahmedabad
            </p>
          </div>

          <p className="font-semibold text-2xl text-blue-400 my-3 ">
            More Inquiry
          </p>
          <p className="text-lg text-gray-600">
            For shop rent inquiries, call or message on WhatsApp.
          </p>

          <p className="font-semibold text-2xl text-blue-400 my-3 ">Map</p>
          <div style={{ width: "100%", marginBottom: "6rem" }}>
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Shagun%20Antilia,near%20Avirat%20Sopan%20Sharan,%20Chandlodiya,%20Ahmedabad,%20Gujarat%20380055+(Shop%20Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/collections/sports-gps/">Sport GPS</a>
            </iframe>
          </div>

          <div className="fixed p-2 left-0  bottom-2 flex justify-between w-full gap-2 right-0">
            <Link
              href={"tel:+919974367173"}
              className="w-1/2 py-1.5 rounded-md bg-blue-400 flex items-center justify-center"
            >
              <Call />
            </Link>
            <Link
              className="w-1/2 py-1.5 rounded-md bg-green-400 flex justify-center"
              href={`https://wa.me/+919974367173?text=Your Name:%0AYour Offer:%0AWhat type of business will you run in the shop?:`}
            >
              <WhatsAPP />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
