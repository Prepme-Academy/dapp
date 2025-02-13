"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";
import Image from "next/image";
import TransactionHistory from "./TransactionHistory";
import { usePrivy } from "@privy-io/react-auth";
import { useUserInfo } from "@/lib/actions";

const MyEarningTab: React.FC = () => {
  const { user } = usePrivy();
  const authUserId = user?.id || "";
  const address = user?.wallet?.address || "";
  const { data: fetchedUserInfo, isLoading: userInfoLoading } =
    useUserInfo(authUserId,address);

  return (
    <div className="w-full space-y-4">
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 align-top">
        <Card className="min-h-20 p-3 shadow-cardshadow border-gray-200 space-x-3 flex items-start justify-start gap-2">
          <svg
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_106_13886)">
              <path
                d="M13.6297 3.59735L15.1181 6.7461L13.2344 7.58829L11.7666 4.48079C11.1169 3.10923 9.4772 2.52141 8.10564 3.1711C6.73407 3.81735 6.14626 5.46048 6.79251 6.83204L8.67626 10.8127H6.53126C6.48657 10.8127 6.44189 10.8161 6.3972 10.8195L4.92939 7.71204C3.79501 5.31266 4.82282 2.43891 7.2222 1.30454C9.62157 0.170164 12.4953 1.19798 13.6297 3.59735Z"
                fill="#CACAE5"
              />
              <path
                d="M10.6563 2.21893C8.93751 1.53143 7.21876 2.21893 6.18751 3.59393C5.15626 5.31268 6.53126 7.71893 6.18751 9.43768C6.18751 9.60302 6.10673 9.76768 5.97164 9.91858L6.3972 10.8196C6.44189 10.8161 6.48658 10.8127 6.53126 10.8127H8.67626L6.79251 6.83205C6.14626 5.46049 6.73408 3.81737 8.10564 3.17112C9.4772 2.52143 11.1169 3.10924 11.7666 4.4808L13.2344 7.5883L14.2962 7.11358C13.3643 4.98165 12.375 2.90643 10.6563 2.21893Z"
                fill="#7876AB"
              />
              <path
                d="M12.1687 18.6086C12.2272 18.8767 12.0244 19.1311 11.7494 19.1311H10.2506C9.97562 19.1311 9.77281 18.8767 9.83125 18.6086L10.4156 15.9857C9.94125 15.7382 9.63531 15.2157 9.735 14.6279C9.82093 14.1054 10.2437 13.6758 10.7662 13.5829C11.5775 13.4386 12.2856 14.0608 12.2856 14.8479C12.2856 15.3429 12.0003 15.7692 11.5844 15.9857L12.1687 18.6086Z"
                fill="#5E5E84"
              />
              <path
                d="M8.67625 10.8125H15.4688C16.2284 10.8125 16.8438 11.4278 16.8438 12.1875V20.7812C16.8438 21.5409 16.2284 22.1562 15.4688 22.1562H6.53125C5.77156 22.1562 5.15625 21.5409 5.15625 20.7812V12.1875C5.15625 11.4725 5.69938 10.8847 6.39719 10.8194C6.44188 10.8159 6.48656 10.8125 6.53125 10.8125H8.67625ZM11.7494 19.1313C12.0244 19.1313 12.2272 18.8769 12.1688 18.6088L11.5844 15.9859C12.0003 15.7694 12.2856 15.3431 12.2856 14.8481C12.2856 14.0609 11.5775 13.4388 10.7662 13.5831C10.2438 13.6759 9.82094 14.1056 9.735 14.6281C9.63531 15.2159 9.94125 15.7384 10.4156 15.9859L9.83125 18.6088C9.77281 18.8769 9.97563 19.1313 10.2506 19.1313H11.7494Z"
                fill="#FFC32C"
              />
              <path
                d="M16.8437 12.1875V20.7812C16.8437 21.5409 16.2284 22.1562 15.4687 22.1562H6.53124C5.89187 22.1562 5.35218 21.7197 5.20093 21.125H14.0937C14.8534 21.125 15.4687 20.5097 15.4687 19.75V11.1562C15.4687 11.0359 15.455 10.9225 15.4241 10.8125H15.4687C16.2284 10.8125 16.8437 11.4278 16.8437 12.1875Z"
                fill="#FFA300"
              />
              <path
                d="M6.1875 12.963V12.2776C6.1875 12.038 6.38172 11.8438 6.62131 11.8438H7.42087C7.82375 11.8438 8.00903 12.3449 7.70309 12.6069L6.90353 13.2923C6.62234 13.5336 6.1875 13.3336 6.1875 12.963Z"
                fill="#FFEDC5"
              />
              <path
                d="M15.8125 5.65625C15.6227 5.65625 15.4688 5.50259 15.4688 5.3125V3.59375C15.4688 3.40366 15.6227 3.25 15.8125 3.25C16.0023 3.25 16.1562 3.40366 16.1562 3.59375V5.3125C16.1562 5.50259 16.0023 5.65625 15.8125 5.65625Z"
                fill="#FFC32C"
              />
              <path
                d="M16.8437 6.00009C16.7557 6.00009 16.6677 5.9664 16.6007 5.89937C16.4663 5.76496 16.4663 5.54771 16.6007 5.4133L17.9757 4.0383C18.1101 3.9039 18.3274 3.9039 18.4618 4.0383C18.5962 4.17271 18.5962 4.38996 18.4618 4.52437L17.0868 5.89937C17.0197 5.9664 16.9317 6.00009 16.8437 6.00009Z"
                fill="#FFC32C"
              />
              <path
                d="M18.9062 7.03125H17.5312C17.3415 7.03125 17.1875 6.87759 17.1875 6.6875C17.1875 6.49741 17.3415 6.34375 17.5312 6.34375H18.9062C19.096 6.34375 19.25 6.49741 19.25 6.6875C19.25 6.87759 19.096 7.03125 18.9062 7.03125Z"
                fill="#FFC32C"
              />
            </g>
            <defs>
              <clipPath id="clip0_106_13886">
                <rect
                  width="22"
                  height="22"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="flex flex-col items-start justify-start gap-2">
            <h6 className="text-start text-xs font-normal text-muted-400">
              Total XP
            </h6>
            <h3 className="text-lg md:text-xl font-medium text-muted-500">
              {userInfoLoading ? (
                <div className="w-6 aspect-auto bg-gray-300 animatin-pulse" />
              ) : (
                fetchedUserInfo?.totalXp || 0
              )}
            </h3>
          </div>
        </Card>
        <Card className="min-h-20 p-3 shadow-cardshadow border-gray-200 space-x-3 flex items-start justify-start gap-2">
          <Image
            src="/icons/logo-oc.svg"
            width={20}
            height={20}
            alt="Open Campus Logo"
          />
          <div className="flex flex-col items-start justify-start gap-2">
            <h6 className="text-start text-xs font-normal text-muted-400 flex items-center gap-1">
              <span>Total EDU</span> <Info />
            </h6>
            <h3 className="text-lg md:text-xl font-medium text-muted-500">0</h3>
          </div>
        </Card>
        <Card className="min-h-20 p-3 shadow-cardshadow border-gray-200 space-x-3 flex items-start justify-start gap-2">
          <svg
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_106_13886)">
              <path
                d="M13.6297 3.59735L15.1181 6.7461L13.2344 7.58829L11.7666 4.48079C11.1169 3.10923 9.4772 2.52141 8.10564 3.1711C6.73407 3.81735 6.14626 5.46048 6.79251 6.83204L8.67626 10.8127H6.53126C6.48657 10.8127 6.44189 10.8161 6.3972 10.8195L4.92939 7.71204C3.79501 5.31266 4.82282 2.43891 7.2222 1.30454C9.62157 0.170164 12.4953 1.19798 13.6297 3.59735Z"
                fill="#CACAE5"
              />
              <path
                d="M10.6563 2.21893C8.93751 1.53143 7.21876 2.21893 6.18751 3.59393C5.15626 5.31268 6.53126 7.71893 6.18751 9.43768C6.18751 9.60302 6.10673 9.76768 5.97164 9.91858L6.3972 10.8196C6.44189 10.8161 6.48658 10.8127 6.53126 10.8127H8.67626L6.79251 6.83205C6.14626 5.46049 6.73408 3.81737 8.10564 3.17112C9.4772 2.52143 11.1169 3.10924 11.7666 4.4808L13.2344 7.5883L14.2962 7.11358C13.3643 4.98165 12.375 2.90643 10.6563 2.21893Z"
                fill="#7876AB"
              />
              <path
                d="M12.1687 18.6086C12.2272 18.8767 12.0244 19.1311 11.7494 19.1311H10.2506C9.97562 19.1311 9.77281 18.8767 9.83125 18.6086L10.4156 15.9857C9.94125 15.7382 9.63531 15.2157 9.735 14.6279C9.82093 14.1054 10.2437 13.6758 10.7662 13.5829C11.5775 13.4386 12.2856 14.0608 12.2856 14.8479C12.2856 15.3429 12.0003 15.7692 11.5844 15.9857L12.1687 18.6086Z"
                fill="#5E5E84"
              />
              <path
                d="M8.67625 10.8125H15.4688C16.2284 10.8125 16.8438 11.4278 16.8438 12.1875V20.7812C16.8438 21.5409 16.2284 22.1562 15.4688 22.1562H6.53125C5.77156 22.1562 5.15625 21.5409 5.15625 20.7812V12.1875C5.15625 11.4725 5.69938 10.8847 6.39719 10.8194C6.44188 10.8159 6.48656 10.8125 6.53125 10.8125H8.67625ZM11.7494 19.1313C12.0244 19.1313 12.2272 18.8769 12.1688 18.6088L11.5844 15.9859C12.0003 15.7694 12.2856 15.3431 12.2856 14.8481C12.2856 14.0609 11.5775 13.4388 10.7662 13.5831C10.2438 13.6759 9.82094 14.1056 9.735 14.6281C9.63531 15.2159 9.94125 15.7384 10.4156 15.9859L9.83125 18.6088C9.77281 18.8769 9.97563 19.1313 10.2506 19.1313H11.7494Z"
                fill="#FFC32C"
              />
              <path
                d="M16.8437 12.1875V20.7812C16.8437 21.5409 16.2284 22.1562 15.4687 22.1562H6.53124C5.89187 22.1562 5.35218 21.7197 5.20093 21.125H14.0937C14.8534 21.125 15.4687 20.5097 15.4687 19.75V11.1562C15.4687 11.0359 15.455 10.9225 15.4241 10.8125H15.4687C16.2284 10.8125 16.8437 11.4278 16.8437 12.1875Z"
                fill="#FFA300"
              />
              <path
                d="M6.1875 12.963V12.2776C6.1875 12.038 6.38172 11.8438 6.62131 11.8438H7.42087C7.82375 11.8438 8.00903 12.3449 7.70309 12.6069L6.90353 13.2923C6.62234 13.5336 6.1875 13.3336 6.1875 12.963Z"
                fill="#FFEDC5"
              />
              <path
                d="M15.8125 5.65625C15.6227 5.65625 15.4688 5.50259 15.4688 5.3125V3.59375C15.4688 3.40366 15.6227 3.25 15.8125 3.25C16.0023 3.25 16.1562 3.40366 16.1562 3.59375V5.3125C16.1562 5.50259 16.0023 5.65625 15.8125 5.65625Z"
                fill="#FFC32C"
              />
              <path
                d="M16.8437 6.00009C16.7557 6.00009 16.6677 5.9664 16.6007 5.89937C16.4663 5.76496 16.4663 5.54771 16.6007 5.4133L17.9757 4.0383C18.1101 3.9039 18.3274 3.9039 18.4618 4.0383C18.5962 4.17271 18.5962 4.38996 18.4618 4.52437L17.0868 5.89937C17.0197 5.9664 16.9317 6.00009 16.8437 6.00009Z"
                fill="#FFC32C"
              />
              <path
                d="M18.9062 7.03125H17.5312C17.3415 7.03125 17.1875 6.87759 17.1875 6.6875C17.1875 6.49741 17.3415 6.34375 17.5312 6.34375H18.9062C19.096 6.34375 19.25 6.49741 19.25 6.6875C19.25 6.87759 19.096 7.03125 18.9062 7.03125Z"
                fill="#FFC32C"
              />
            </g>
            <defs>
              <clipPath id="clip0_106_13886">
                <rect
                  width="22"
                  height="22"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="flex flex-col items-start justify-start gap-2">
            <h6 className="text-start text-xs font-normal text-muted-400">
              Total NFT
            </h6>
            <h3 className="text-lg md:text-xl font-medium text-muted-500">0</h3>
          </div>
        </Card>
        <div className="w-full flex flex-col items-center justify-center gap-3">
          <Button
            variant={"secondary"}
            className="white-gradient-border text-primary-400 w-full h-8 white-gradient-border text-center shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 !pointer-events-auto"
            disabled
          >
            Convert
          </Button>
          <Button
            variant={"unstyled"}
            className="bg-primary-400 text-white w-full h-8 gradient-border shadow-buttonshadow outline-none text-sm text-center font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 !pointer-events-auto"
            disabled
          >
            Withdraw
          </Button>
        </div>
      </div>
      <TransactionHistory />
    </div>
  );
};

export default MyEarningTab;
