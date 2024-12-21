import x from "../assets/icons/x.svg";
import telegram from "../assets/icons/telegram.svg";
import Image from "next/image";
import Link from "next/link";

const socials = [
  { name: "telegram", icon: telegram, href: "http://t.me/prepmeacademy" },
  {
    name: "x",
    icon: x,
    href: "https://x.com/prepmeacademy",
  },
];

export default function Footer() {
  return (
    <footer
      data-label="footer"
      aria-label="footer"
      className=" bg-neutral-100 px-4 py-10 md:px-10"
    >
      <div className="hidden md:flex items-center justify-between w-full">
        <span className="text-muted-foreground">© Copyright 2024 - Prepme</span>
        <div className="space-x-2.5 flex items-center">
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
        <p className="text-muted-foreground">
          <Link href="/" className="underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/" className="underline">
            Terms of Service
          </Link>
        </p>
      </div>
      <div className="flex flex-col md:hidden items-start w-full space-y-5">
        <div className="space-x-2.5 flex items-center">
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
        <p className="text-muted-foreground">
          <Link href="/" className="underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/" className="underline">
            Terms of Service
          </Link>
        </p>
        <span className="text-muted-foreground">© Copyright 2024 - Prepme</span>
      </div>
    </footer>
  );
}
