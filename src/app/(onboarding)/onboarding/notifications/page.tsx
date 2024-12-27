"use client";

import { useEffect, useState } from "react"; 
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface NotificationSettings {
  allowNotifications: boolean;
  practiceReminders: boolean;
  examUpdates: boolean;
  studyTips: boolean;
  achievements: boolean;
}

export default function Notificationpage() {
  const router = useRouter();
  const [notifications, setNotifications] = useState<NotificationSettings>({
    allowNotifications: false,
    practiceReminders: false,
    examUpdates: false,
    studyTips: false,
    achievements: false,
  });

  // Load saved notification settings on mount
  useEffect(() => {
    const storedSettings = localStorage.getItem("prepmeNotifications");
    if (storedSettings) {
      setNotifications(JSON.parse(storedSettings));
    }
  }, []);

  // Handle notification permission request
  useEffect(() => {
    const requestNotificationPermission = async () => {
      if ("Notification" in window) {
        const permission = await Notification.requestPermission();
        const allowNotifications = permission === "granted";

        if (allowNotifications) {
          setNotifications((prev) => {
            const updatedState = {
              ...prev,
              allowNotifications,
              practiceReminders: allowNotifications,
              examUpdates: allowNotifications,
              studyTips: allowNotifications,
              achievements: allowNotifications,
            };
            localStorage.setItem(
              "prepmeNotifications",
              JSON.stringify(updatedState)
            );

            // Show welcome notification
            new Notification("Welcome to Prepme Academy!", {
              body: "You will now receive important updates and reminders.",
              icon: "/images/logo-site.png",
            });

            return updatedState;
          });

          // Redirect after a short delay
          setTimeout(() => {
            router.replace("/dashboard/practice");
          }, 1500);
        } else {
          router.replace("/dashboard/practice");
        }
      }
    };

    // Check if this is the first visit
    const hasVisited = localStorage.getItem("hasVisitedNotificationPage");
    if (!hasVisited && !notifications.allowNotifications) {
      localStorage.setItem("hasVisitedNotificationPage", "true");
      requestNotificationPermission();
    }
  }, [notifications.allowNotifications, router]);

  const handleNotificationPermission = () => {
    if ("Notification" in window) {
      Notification.requestPermission()
        .then((permission) => {
          const allowNotifications = permission === "granted";
          setNotifications((prev) => {
            const updatedState = {
              ...prev,
              allowNotifications,
              practiceReminders: allowNotifications,
              examUpdates: allowNotifications,
              studyTips: allowNotifications,
              achievements: allowNotifications,
            };
            localStorage.setItem(
              "prepmeNotifications",
              JSON.stringify(updatedState)
            );
            return updatedState;
          });

          if (allowNotifications) {
            new Notification("Welcome to Prepme Academy!", {
              body: "You will now receive important updates and reminders.",
              icon: "/images/logo-site.png",
            });
            setTimeout(() => {
              router.replace("/dashboard/practice");
            }, 1500);
          } else {
            router.replace("/dashboard/practice");
          }
        })
        .catch((error) => {
          console.error("Error requesting notification permission:", error);
          router.replace("/dashboard/practice");
        });
    }
  };

  const handleDoLater = () => {
    localStorage.setItem("hasVisitedNotificationPage", "true");
    localStorage.setItem("prepmeNotifications", JSON.stringify(notifications));
    router.replace("/dashboard/practice");
  };

  return (
    <section className="bg-white border border-grey-500 shadow-authcardshadow rounded-2xl p-4 w-[404px] flex flex-col items-center justify-center gap-4">
      <Image
        src="/icons/bell.svg"
        alt="notification bell icon"
        width={86}
        height={121}
      />
      <h1 className="text-xl font-medium text-muted-500 text-center w-full">
        Allow Prepme show notifications
      </h1>

      <div className="w-full flex items-center justify-between gap-4">
        <Button
          variant={"unstyled"}
          onClick={handleDoLater}
          className="bg-secondary text-secondary-foreground hover:bg-secondary/80 w-full h-10 white-gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          Do later
        </Button>
        <Button
          variant={"unstyled"}
          onClick={handleNotificationPermission}
          className="bg-primary-400 text-white w-full h-10 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          Allow
        </Button>
      </div>
    </section>
  );
}
