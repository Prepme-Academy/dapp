"use client";

import Image from "next/image";
import Link from "next/link";
import { usePrivy } from "@privy-io/react-auth";
import DashboardMobileHeader from "./navigations/DashboardMobileHeader";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { dummyAddress, formatWalletAddress } from "@/hooks/useAddress";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useClientStore from "@/store/clientStore";

const DashboardHeader: React.FC = () => {
  const { user, ready, authenticated, logout } = usePrivy();
  const { userInfo } = useClientStore();
  const router = useRouter();

  useEffect(() => {
    console.log("🚀 ~ user:", user);
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/login");
      window.location.reload();
    } catch (error) {
      console.log("🚀 ~ handleLogout ~ error:", error);
    }
  };

  const disableLogout = !ready || (ready && !authenticated);

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
      <DashboardMobileHeader handleLogout={handleLogout} />
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

          <Popover>
            <PopoverTrigger className="text-sm font-normal border h-10 px-4 py-2 border-muted-100 text-muted-500 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
              <Image
                src="/icons/dashboard/avatar.svg"
                alt="avatar icon"
                width={26}
                height={26}
              />
              <span>{userInfo?.username || "username"}</span>
            </PopoverTrigger>
            {!ready ? (
              <SkeletonHeaderLoader />
            ) : (
              <PopoverContent>
                <div className="w-full flex flex-col items-start justify-start gap-6">
                  <div className="flex items-start justify-start gap-2">
                    <Image
                      src="/icons/dashboard/avatar.svg"
                      alt="user profile avatar"
                      width={36}
                      height={36}
                      priority
                    />
                    <div className="flex flex-col items-start justify-start gap-1">
                      <h3 className="text-sm font-normal text-muted-500">
                        {user?.email?.address}
                      </h3>
                      <p className="text-sm font-normal text-muted-400">
                        {formatWalletAddress(
                          user?.wallet?.address || dummyAddress
                        )}
                      </p>
                    </div>
                  </div>
                  <nav className="w-full px-4 flex flex-col items-start justify-start gap-4">
                    <Link
                      href="/dashboard/profile"
                      className="w-full flex items-center justify-start gap-x-3 px-4 text-sm font-normal rounded py-3 transition-all duration-300 hover:bg-primary-100 hover:border hover:border-primary-400 text-muted-400"
                    >
                      <svg
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29205 10.5195C5.29205 10.2684 5.49555 10.0649 5.74656 10.0649H7.68659C7.9376 10.0649 8.1411 10.2684 8.1411 10.5195V19.8851C8.1411 20.1361 7.9376 20.3396 7.68659 20.3396H5.74656C5.49555 20.3396 5.29205 20.1361 5.29205 19.8851V10.5195Z"
                          fill="#6CF5C2"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.77759 10.0649H7.68661C7.93762 10.0649 8.14112 10.2684 8.14112 10.5195V19.8851C8.14112 20.1361 7.93762 20.3396 7.68661 20.3396H6.77759C7.0286 20.3396 7.2321 20.1361 7.2321 19.8851V10.5195C7.2321 10.2684 7.0286 10.0649 6.77759 10.0649Z"
                          fill="#00E499"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.5824 12.4628C10.5824 12.3423 10.6302 12.2267 10.7155 12.1415C10.8007 12.0562 10.9163 12.0083 11.0369 12.0083H12.9769C13.0974 12.0083 13.213 12.0562 13.2983 12.1415C13.3835 12.2267 13.4314 12.3423 13.4314 12.4628V19.8859C13.4314 20.0064 13.3835 20.122 13.2983 20.2073C13.213 20.2925 13.0974 20.3404 12.9769 20.3404H11.0369C10.9163 20.3404 10.8007 20.2925 10.7155 20.2073C10.6302 20.122 10.5824 20.0064 10.5824 19.8859V12.4628Z"
                          fill="#FFE177"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.0679 12.0083H12.9769C13.0975 12.0083 13.213 12.0562 13.2983 12.1415C13.3836 12.2267 13.4314 12.3423 13.4314 12.4628V19.8859C13.4314 20.0064 13.3836 20.122 13.2983 20.2073C13.213 20.2925 13.0975 20.3404 12.9769 20.3404H12.0679C12.1884 20.3404 12.304 20.2925 12.3893 20.2073C12.4745 20.122 12.5224 20.0064 12.5224 19.8859V12.4628C12.5224 12.3423 12.4745 12.2267 12.3893 12.1415C12.304 12.0562 12.1884 12.0083 12.0679 12.0083Z"
                          fill="#FFD064"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.8745 6.78117C15.8745 6.53016 16.078 6.32666 16.329 6.32666H18.2691C18.5201 6.32666 18.7236 6.53016 18.7236 6.78117V19.8856C18.7236 20.1366 18.5201 20.3401 18.2691 20.3401H16.329C16.078 20.3401 15.8745 20.1366 15.8745 19.8856V6.78117Z"
                          fill="#8AC9FE"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.36 6.32666H18.269C18.52 6.32666 18.7235 6.53016 18.7235 6.78117V19.8856C18.7235 20.1366 18.52 20.3401 18.269 20.3401H17.36C17.611 20.3401 17.8145 20.1366 17.8145 19.8856V6.78117C17.8145 6.53016 17.611 6.32666 17.36 6.32666Z"
                          fill="#60B7FF"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 15.328C0 15.077 0.203499 14.8735 0.454511 14.8735H2.39635C2.64736 14.8735 2.85086 15.077 2.85086 15.328V19.8854C2.85086 20.1364 2.64736 20.3399 2.39635 20.3399H0.454511C0.203499 20.3399 0 20.1364 0 19.8854V15.328Z"
                          fill="#FE646F"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.48737 14.8735H2.39639C2.6474 14.8735 2.8509 15.077 2.8509 15.328V19.8854C2.8509 20.1364 2.6474 20.3399 2.39639 20.3399H1.48737C1.73838 20.3399 1.94188 20.1364 1.94188 19.8854V15.328C1.94188 15.077 1.73838 14.8735 1.48737 14.8735Z"
                          fill="#FD4755"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.90306 9.43335C1.60046 9.69697 1.14072 9.66523 0.877099 9.36263C0.613481 9.05997 0.645157 8.60022 0.947755 8.3366L6.23808 3.72846C6.45916 3.53589 6.77436 3.4949 7.03734 3.62464L11.8514 5.99875L16.773 0.861701C17.0506 0.571837 17.5113 0.562012 17.8012 0.839657C18.091 1.1173 18.1009 1.57802 17.8232 1.86788L12.533 7.38983C12.3134 7.61892 11.9708 7.6793 11.6862 7.53896L6.82828 5.14319L1.90306 9.43335Z"
                          fill="#A79BA7"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.42542 10.2463C2.17652 10.2463 2.78896 9.63556 2.78896 8.88453C2.78896 8.13343 2.17652 7.521 1.42542 7.521C0.67439 7.521 0.0618896 8.13343 0.0618896 8.88453C0.0618896 9.63556 0.67439 10.2463 1.42542 10.2463Z"
                          fill="#FE646F"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.970886 10.1684C1.49961 9.98102 1.87991 9.47634 1.87991 8.88453C1.87991 8.29271 1.49961 7.78694 0.970886 7.59909C1.11317 7.54853 1.26618 7.521 1.4254 7.521C2.17649 7.521 2.78893 8.13343 2.78893 8.88453C2.78893 9.63556 2.17649 10.2463 1.4254 10.2463C1.26618 10.2463 1.11317 10.2188 0.970886 10.1684Z"
                          fill="#FD4755"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.71584 5.63918C7.46733 5.63918 8.08022 5.02629 8.08022 4.27648C8.08022 3.52493 7.46733 2.91211 6.71584 2.91211C5.96597 2.91211 5.35315 3.52493 5.35315 4.27648C5.35315 5.02629 5.96597 5.63918 6.71584 5.63918Z"
                          fill="#6CF5C2"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.26166 5.56096C6.79064 5.37304 7.17113 4.86726 7.17113 4.27648C7.17113 3.68435 6.79064 3.17831 6.26166 2.99026C6.40387 2.93965 6.55669 2.91211 6.71578 2.91211C7.46727 2.91211 8.08015 3.52493 8.08015 4.27648C8.08015 5.02629 7.46727 5.63918 6.71578 5.63918C6.55669 5.63918 6.40387 5.61157 6.26166 5.56096Z"
                          fill="#00E499"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.0077 8.24855C12.7593 8.24855 13.3704 7.63573 13.3704 6.88592C13.3704 6.13437 12.7593 5.52148 12.0077 5.52148C11.2563 5.52148 10.6434 6.13437 10.6434 6.88592C10.6434 7.63573 11.2563 8.24855 12.0077 8.24855Z"
                          fill="#FFE177"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.5532 8.17053C12.0819 7.98267 12.4615 7.47683 12.4615 6.88592C12.4615 6.29366 12.0819 5.78749 11.5532 5.59957C11.6955 5.54902 11.8485 5.52148 12.0078 5.52148C12.7593 5.52148 13.3705 6.13437 13.3705 6.88592C13.3705 7.63573 12.7593 8.24855 12.0078 8.24855C11.8485 8.24855 11.6955 8.22101 11.5532 8.17053Z"
                          fill="#FFD064"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.2981 2.72875C18.0496 2.72875 18.6625 2.11592 18.6625 1.36437C18.6625 0.612889 18.0496 0 17.2981 0C16.5466 0 15.9354 0.612889 15.9354 1.36437C15.9354 2.11592 16.5466 2.72875 17.2981 2.72875Z"
                          fill="#8AC9FE"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.8437 2.65072C17.3729 2.4628 17.7535 1.95664 17.7535 1.36437C17.7535 0.772107 17.3729 0.266009 16.8437 0.0780897C16.9858 0.0275382 17.1389 0 17.2981 0C18.0496 0 18.6625 0.612889 18.6625 1.36437C18.6625 2.11592 18.0496 2.72875 17.2981 2.72875C17.1389 2.72875 16.9858 2.70127 16.8437 2.65072Z"
                          fill="#60B7FF"
                        />
                      </svg>
                      <span>My Profile</span>
                    </Link>
                    <Link
                      href="/dashboard/profile"
                      className="w-full flex items-center justify-start gap-x-3 px-4 text-sm font-normal rounded py-3 transition-all duration-300 hover:bg-primary-100 hover:border hover:border-primary-400 text-muted-400"
                    >
                      <svg
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29205 10.5195C5.29205 10.2684 5.49555 10.0649 5.74656 10.0649H7.68659C7.9376 10.0649 8.1411 10.2684 8.1411 10.5195V19.8851C8.1411 20.1361 7.9376 20.3396 7.68659 20.3396H5.74656C5.49555 20.3396 5.29205 20.1361 5.29205 19.8851V10.5195Z"
                          fill="#6CF5C2"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.77759 10.0649H7.68661C7.93762 10.0649 8.14112 10.2684 8.14112 10.5195V19.8851C8.14112 20.1361 7.93762 20.3396 7.68661 20.3396H6.77759C7.0286 20.3396 7.2321 20.1361 7.2321 19.8851V10.5195C7.2321 10.2684 7.0286 10.0649 6.77759 10.0649Z"
                          fill="#00E499"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.5824 12.4628C10.5824 12.3423 10.6302 12.2267 10.7155 12.1415C10.8007 12.0562 10.9163 12.0083 11.0369 12.0083H12.9769C13.0974 12.0083 13.213 12.0562 13.2983 12.1415C13.3835 12.2267 13.4314 12.3423 13.4314 12.4628V19.8859C13.4314 20.0064 13.3835 20.122 13.2983 20.2073C13.213 20.2925 13.0974 20.3404 12.9769 20.3404H11.0369C10.9163 20.3404 10.8007 20.2925 10.7155 20.2073C10.6302 20.122 10.5824 20.0064 10.5824 19.8859V12.4628Z"
                          fill="#FFE177"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.0679 12.0083H12.9769C13.0975 12.0083 13.213 12.0562 13.2983 12.1415C13.3836 12.2267 13.4314 12.3423 13.4314 12.4628V19.8859C13.4314 20.0064 13.3836 20.122 13.2983 20.2073C13.213 20.2925 13.0975 20.3404 12.9769 20.3404H12.0679C12.1884 20.3404 12.304 20.2925 12.3893 20.2073C12.4745 20.122 12.5224 20.0064 12.5224 19.8859V12.4628C12.5224 12.3423 12.4745 12.2267 12.3893 12.1415C12.304 12.0562 12.1884 12.0083 12.0679 12.0083Z"
                          fill="#FFD064"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.8745 6.78117C15.8745 6.53016 16.078 6.32666 16.329 6.32666H18.2691C18.5201 6.32666 18.7236 6.53016 18.7236 6.78117V19.8856C18.7236 20.1366 18.5201 20.3401 18.2691 20.3401H16.329C16.078 20.3401 15.8745 20.1366 15.8745 19.8856V6.78117Z"
                          fill="#8AC9FE"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.36 6.32666H18.269C18.52 6.32666 18.7235 6.53016 18.7235 6.78117V19.8856C18.7235 20.1366 18.52 20.3401 18.269 20.3401H17.36C17.611 20.3401 17.8145 20.1366 17.8145 19.8856V6.78117C17.8145 6.53016 17.611 6.32666 17.36 6.32666Z"
                          fill="#60B7FF"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 15.328C0 15.077 0.203499 14.8735 0.454511 14.8735H2.39635C2.64736 14.8735 2.85086 15.077 2.85086 15.328V19.8854C2.85086 20.1364 2.64736 20.3399 2.39635 20.3399H0.454511C0.203499 20.3399 0 20.1364 0 19.8854V15.328Z"
                          fill="#FE646F"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.48737 14.8735H2.39639C2.6474 14.8735 2.8509 15.077 2.8509 15.328V19.8854C2.8509 20.1364 2.6474 20.3399 2.39639 20.3399H1.48737C1.73838 20.3399 1.94188 20.1364 1.94188 19.8854V15.328C1.94188 15.077 1.73838 14.8735 1.48737 14.8735Z"
                          fill="#FD4755"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.90306 9.43335C1.60046 9.69697 1.14072 9.66523 0.877099 9.36263C0.613481 9.05997 0.645157 8.60022 0.947755 8.3366L6.23808 3.72846C6.45916 3.53589 6.77436 3.4949 7.03734 3.62464L11.8514 5.99875L16.773 0.861701C17.0506 0.571837 17.5113 0.562012 17.8012 0.839657C18.091 1.1173 18.1009 1.57802 17.8232 1.86788L12.533 7.38983C12.3134 7.61892 11.9708 7.6793 11.6862 7.53896L6.82828 5.14319L1.90306 9.43335Z"
                          fill="#A79BA7"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.42542 10.2463C2.17652 10.2463 2.78896 9.63556 2.78896 8.88453C2.78896 8.13343 2.17652 7.521 1.42542 7.521C0.67439 7.521 0.0618896 8.13343 0.0618896 8.88453C0.0618896 9.63556 0.67439 10.2463 1.42542 10.2463Z"
                          fill="#FE646F"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.970886 10.1684C1.49961 9.98102 1.87991 9.47634 1.87991 8.88453C1.87991 8.29271 1.49961 7.78694 0.970886 7.59909C1.11317 7.54853 1.26618 7.521 1.4254 7.521C2.17649 7.521 2.78893 8.13343 2.78893 8.88453C2.78893 9.63556 2.17649 10.2463 1.4254 10.2463C1.26618 10.2463 1.11317 10.2188 0.970886 10.1684Z"
                          fill="#FD4755"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.71584 5.63918C7.46733 5.63918 8.08022 5.02629 8.08022 4.27648C8.08022 3.52493 7.46733 2.91211 6.71584 2.91211C5.96597 2.91211 5.35315 3.52493 5.35315 4.27648C5.35315 5.02629 5.96597 5.63918 6.71584 5.63918Z"
                          fill="#6CF5C2"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.26166 5.56096C6.79064 5.37304 7.17113 4.86726 7.17113 4.27648C7.17113 3.68435 6.79064 3.17831 6.26166 2.99026C6.40387 2.93965 6.55669 2.91211 6.71578 2.91211C7.46727 2.91211 8.08015 3.52493 8.08015 4.27648C8.08015 5.02629 7.46727 5.63918 6.71578 5.63918C6.55669 5.63918 6.40387 5.61157 6.26166 5.56096Z"
                          fill="#00E499"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.0077 8.24855C12.7593 8.24855 13.3704 7.63573 13.3704 6.88592C13.3704 6.13437 12.7593 5.52148 12.0077 5.52148C11.2563 5.52148 10.6434 6.13437 10.6434 6.88592C10.6434 7.63573 11.2563 8.24855 12.0077 8.24855Z"
                          fill="#FFE177"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.5532 8.17053C12.0819 7.98267 12.4615 7.47683 12.4615 6.88592C12.4615 6.29366 12.0819 5.78749 11.5532 5.59957C11.6955 5.54902 11.8485 5.52148 12.0078 5.52148C12.7593 5.52148 13.3705 6.13437 13.3705 6.88592C13.3705 7.63573 12.7593 8.24855 12.0078 8.24855C11.8485 8.24855 11.6955 8.22101 11.5532 8.17053Z"
                          fill="#FFD064"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.2981 2.72875C18.0496 2.72875 18.6625 2.11592 18.6625 1.36437C18.6625 0.612889 18.0496 0 17.2981 0C16.5466 0 15.9354 0.612889 15.9354 1.36437C15.9354 2.11592 16.5466 2.72875 17.2981 2.72875Z"
                          fill="#8AC9FE"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.8437 2.65072C17.3729 2.4628 17.7535 1.95664 17.7535 1.36437C17.7535 0.772107 17.3729 0.266009 16.8437 0.0780897C16.9858 0.0275382 17.1389 0 17.2981 0C18.0496 0 18.6625 0.612889 18.6625 1.36437C18.6625 2.11592 18.0496 2.72875 17.2981 2.72875C17.1389 2.72875 16.9858 2.70127 16.8437 2.65072Z"
                          fill="#60B7FF"
                        />
                      </svg>
                      <span>Earnings</span>
                    </Link>
                  </nav>

                  <Button
                    variant={"unstyled"}
                    disabled={disableLogout}
                    onClick={handleLogout}
                    className="bg-[#EAEBED] text-[#717172] hover:bg-secondary/80 w-full h-10 white-gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-xl"
                  >
                    Log out
                  </Button>
                </div>
              </PopoverContent>
            )}
          </Popover>
        </div>
      </nav>
    </header>
  );
};

export const SkeletonHeaderLoader: React.FC = () => (
  <div className="animate-pulse hidden">
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
      <div className="w-20 h-5 bg-gray-300 rounded-md"></div>
    </div>
    <div className="flex items-center gap-2 mt-4">
      <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
      <div className="flex flex-col gap-1">
        <div className="w-32 h-4 bg-gray-300 rounded-md"></div>
        <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
      </div>
    </div>
    <div className="flex flex-col gap-4 mt-6">
      <div className="w-full h-10 bg-gray-300 rounded-md"></div>
      <div className="w-full h-10 bg-gray-300 rounded-md"></div>
    </div>
    <div className="w-full h-10 bg-gray-300 rounded-xl mt-6"></div>
  </div>
);

export default DashboardHeader;
