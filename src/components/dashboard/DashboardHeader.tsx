import Image from "next/image";
import Link from "next/link";
import DashboardMobileHeader from "./DashboardMobileHeader";
import { Button } from "../ui/button";

const DashboardHeader: React.FC = () => {
  return (
    <header className="w-full px-4 py-3 lg:py-0 border-b border-secondary-200 flex items-center justify-between">
      <Link
        href="/dashboard/practice"
        data-label="prepme-logo"
        aria-label="prepme-logo"
        className="py-4 lg:w-60 lg:flex lg:items-center lg:justify-center lg:border-r lg:border-secondary-200"
      >
        <Image
          src="/icons/logo-blue.svg"
          alt="Prepme Academy Logo"
          width={144}
          height={144}
          className="w-28 sm:w-36"
        />
      </Link>
      <DashboardMobileHeader />
      <nav className="hidden lg:flex items-center justify-end lg:justify-between gap-x-5 flex-grow pl-6 py-4">
        <div className="relative w-[356px]">
          <input
            type="search"
            name="search"
            id="search"
            className="w-full outline-none border border-muted-100 h-10 pl-12 pr-4 focus:border-primary-300 rounded-lg text-sm font-normal placeholder:text-secondary-300"
            placeholder="Search"
          />
          <label htmlFor="search" className="absolute left-3 top-2">
            <Image
              src="/icons/search.svg"
              alt="search icon"
              width={24}
              height={24}
              priority
            />
          </label>
        </div>
        <div className="flex items-center justify-end gap-x-5">
          <Button
            variant={"unstyled"}
            className="bg-secondary-400 w-fit px-4 rounded-full flex items-center justify-start gap-3 text-secondary-700 text-sm font-normal"
          >
            <Image
              src="/icons/dashboard/rateflag.svg"
              alt="flag icon"
              width={20}
              height={20}
            />
            <span>Beginner</span>
          </Button>
          <Button
            variant={"outline"}
            className="text-sm font-normal border-muted-100"
          >
            <Image
              src="/icons/dashboard/fire.svg"
              alt="fire icon"
              width={18}
              height={18}
            />
            <span>1</span>
          </Button>
          <Button
            variant={"outline"}
            className="text-sm font-normal border-muted-100 text-muted-500"
          >
            <Image
              src="/icons/dashboard/bolt.svg"
              alt="bolt icon"
              width={18}
              height={18}
            />
            <span>
              <span className="text-secondary-300">0 </span>
              <span> XP</span>
            </span>
          </Button>
          <Button
            variant={"outline"}
            className="text-sm font-normal border-muted-100 text-muted-500"
          >
            <Image
              src="/icons/dashboard/avatar.svg"
              alt="avatar icon"
              width={26}
              height={26}
            />
            <span>susanmay</span>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;
