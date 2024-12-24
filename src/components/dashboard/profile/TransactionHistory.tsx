import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { transactionHistory } from "@/utils/constant";

const TransactionHistory: React.FC = () => {
  return (
    <Card className="min-h-20 p-3 md:p-5 shadow-cardshadow border-gray-200 flex flex-col items-start justify-start gap-6">
      <h2 className="textLg font-medium text-muted-500">Transaction history</h2>
      <div className="w-full flex flex-col items-start justify-start gap-4">
        {transactionHistory.map((history) => (
          <div
            className="w-full flex flex-col items-start justify-start gap-3"
            key={history.id}
          >
            <h3 className="text-sm font-medium text-muted-500">
              {history.date}
            </h3>
            <ul className="w-full flex flex-col items-start justify-start gap-3">
              {history.transactions.map((transaction) => (
                <li
                  key={transaction.id}
                  className="w-full  border border-grey-200 rounded-lg py-2 px-4 flex gap-6 items-center justify-between"
                >
                  <div className="flex items-start justify-start gap-2">
                    <RenderTransactionIcon status={transaction.status} />
                    <div className="space-y-2">
                      <h3 className="text-sm font-normal text-muted-500">
                        {transaction.transationInfo.title}
                      </h3>
                      <p
                        className={cn(
                          "text-xs font-normal",
                          statusColor(transaction.status)
                        )}
                      >
                        {transaction.status}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-normal text-muted-500 text-right">
                      {transaction.transationInfo.info}
                    </h3>
                    <p className={cn("text-xs font-normal text-right text-[#8F959E]")}>
                      {transaction.transationInfo.debit}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
};

const statusColor = (status: string) => {
  if (status === "Confirmed") {
    return "text-[#1AB07F]";
  } else if (status === "Failed") {
    return "text-[#E6485D]";
  }
  return "text-[#88919A]";
};

const RenderTransactionIcon = ({ status }: { status: string }) => {
  if (status === "Confirmed") {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="16" fill="#F0F8FF" />
        <path
          d="M16 9.33301C12.32 9.33301 9.33334 12.3197 9.33334 15.9997C9.33334 19.6797 12.32 22.6663 16 22.6663C19.68 22.6663 22.6667 19.6797 22.6667 15.9997"
          stroke="#1877F2"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.6667 15.3329L22.1333 9.86621"
          stroke="#1877F2"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.6667 12.553V9.33301H19.4467"
          stroke="#1877F2"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="#F0F8FF" />
      <path
        d="M22.6667 15.9997C22.6667 19.6797 19.68 22.6663 16 22.6663C12.32 22.6663 10.0733 18.9597 10.0733 18.9597M10.0733 18.9597H13.0867M10.0733 18.9597V22.293M9.33334 15.9997C9.33334 12.3197 12.2933 9.33301 16 9.33301C20.4467 9.33301 22.6667 13.0397 22.6667 13.0397M22.6667 13.0397V9.70634M22.6667 13.0397H19.7067"
        stroke="#1877F2"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TransactionHistory;
