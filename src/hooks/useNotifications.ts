"use client";

// hooks/useNotifications.ts
import { useState, useEffect } from "react";

export interface NotificationSettings {
  allowNotifications: boolean;
  practiceReminders: boolean;
  examUpdates: boolean;
  studyTips: boolean;
  achievements: boolean;
}

export const useNotifications = () => {
  const [settings, setSettings] = useState<NotificationSettings>({
    allowNotifications: false,
    practiceReminders: false,
    examUpdates: false,
    studyTips: false,
    achievements: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem("prepmeNotifications");
    if (stored) {
      setSettings(JSON.parse(stored));
    }
  }, []);

  const sendNotification = (
    title: string,
    options?: NotificationOptions,
    type?: keyof NotificationSettings
  ) => {
    if (
      settings.allowNotifications &&
      (!type || settings[type]) &&
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

  return {
    settings,
    sendNotification,
  };
};

export const resetNotificationStatus = () => {
  localStorage.removeItem("hasVisitedNotificationPage");
  localStorage.removeItem("prepmeNotifications");
};
