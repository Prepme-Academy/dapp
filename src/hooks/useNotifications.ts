"use client";
import { useState, useEffect } from "react";

export const useNotifications = (autoRequest: boolean = false) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("notificationEnabled");
    if (stored) {
      setIsEnabled(JSON.parse(stored));
    }

    // Auto-request notifications if enabled and not previously asked
    if (autoRequest) {
      const hasVisited = localStorage.getItem("hasVisitedNotificationPage");
      if (!hasVisited && "Notification" in window) {
        requestNotificationPermission();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoRequest]);

  const requestNotificationPermission = async () => {
    if ("Notification" in window) {
      try {
        const permission = await Notification.requestPermission();
        const isGranted = permission === "granted";
        
        updateNotificationStatus(isGranted);
        localStorage.setItem("hasVisitedNotificationPage", "true");

        if (isGranted) {
          new Notification("Welcome to Prepme Academy!", {
            body: "You will now receive important updates and reminders.",
            icon: "/images/logo-site.png",
          });
        }

        return isGranted;
      } catch (error) {
        console.error("Error requesting notification permission:", error);
        return false;
      }
    }
    return false;
  };

  const sendNotification = (title: string, options?: NotificationOptions) => {
    if (
      isEnabled &&
      "Notification" in window &&
      Notification.permission === "granted"
    ) {
      return new Notification(title, {
        icon: "/images/logo-site.png",
        ...options,
      });
    }
    return null;
  };

  const updateNotificationStatus = (status: boolean) => {
    setIsEnabled(status);
    localStorage.setItem("notificationEnabled", JSON.stringify(status));
  };

  const getNotificationStatus = () => {
    if ("Notification" in window) {
      return Notification.permission === "granted" && isEnabled;
    }
    return false;
  };

  return {
    isEnabled,
    sendNotification,
    updateNotificationStatus,
    getNotificationStatus,
    requestNotificationPermission,
  };
};

export const resetNotificationStatus = () => {
  localStorage.removeItem("hasVisitedNotificationPage");
  localStorage.removeItem("notificationEnabled");
};