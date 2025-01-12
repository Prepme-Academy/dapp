import { AlertCircle, RefreshCcw } from "lucide-react";
import { Alert, AlertDescription } from "./alert";
import { Card } from "./card";
import { Button } from "./button";

const ErrorDisplay = ({
  error,
  retry,
}: {
  error: Error;
  retry: () => void;
}) => (
  <Card className="w-full max-w-[483px] mx-auto p-4 border-grey-500">
    <Alert variant="destructive" className="border-red-200 bg-red-50">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="flex flex-col gap-2">
        <p className="text-sm font-medium text-red-800">
          Unable to load streak data
        </p>
        <p className="text-xs text-red-600">
          {error.message || "Please check your connection and try again"}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-2 w-fit"
          onClick={retry}
        >
          <RefreshCcw className="h-4 w-4 mr-2" />
          Retry
        </Button>
      </AlertDescription>
    </Alert>
  </Card>
);

export default ErrorDisplay;
