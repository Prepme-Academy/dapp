"use client";

import { useState, useEffect, useCallback } from "react";

const useFullscreen = (onExitSubmit?: () => void) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isInFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isInFullscreen);

      // If exiting fullscreen and callback exists, trigger submission
      if (!isInFullscreen && onExitSubmit) {
        onExitSubmit();
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [onExitSubmit]);

  return { isFullscreen, toggleFullscreen };
};

export default useFullscreen;
