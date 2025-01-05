import Image from "next/image";
import Link from "next/link";
import telegram from "../assets/icons/telegram.svg";
import x from "../assets/icons/x.svg";

const socials = [
  { name: "telegram", icon: telegram, href: "https://t.me/prepmeacademy" },
  {
    name: "x",
    icon: x,
    href: "https://x.com/prepmeacademy",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-label="footer"
      aria-label="footer"
      className=" bg-neutral-100 px-4 py-10 md:px-10"
    >
      <div className="max-w-[77.5rem] mx-auto hidden md:flex items-center justify-between w-full">
        <span className="text-base text-boulder">
          &copy; Copyright {year} - Prepme
        </span>
        <div className="space-x-4 flex items-center">
          {socials.map((platform, index) => (
            <Link href={platform.href} target="_blank" key={index}>
              <Image
                src={platform.icon}
                alt={platform.name}
                width={24}
                height={24}
                priority
              />
            </Link>
          ))}
        </div>
        <p className="text-boulder text-base">
          <Link href="/legal/privacy-policy.html" className="underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/legal/terms-of-service.html" className="underline">
            Terms of Service
          </Link>
        </p>
      </div>
      <div className="flex flex-col md:hidden items-start w-full">
        <div className="space-x-4 flex items-center mb-5">
          {socials.map((platform, index) => (
            <Link href={platform.href} target="_blank" key={index}>
              <Image
                src={platform.icon}
                alt={platform.name}
                width={24}
                height={24}
                priority
              />
            </Link>
          ))}
        </div>
        <p className="text-boulder mb-3">
          <Link href="/" className="underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/" className="underline">
            Terms of Service
          </Link>
        </p>
        <span className="text-boulder">&copy; Copyright {year} - Prepme</span>
      </div>
    </footer>
  );
}
