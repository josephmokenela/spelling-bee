import { useDebugValue, useEffect } from "react";

export function useDocumentTitle(title) {

  useDebugValue(title);
  
  return useEffect(() => {
    const originalTitle = document.title;
    document.title = title;

    return () => {
      document.title = originalTitle;
    };
  }, [title]);
}