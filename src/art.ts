import { computed, ref, type ComputedRef } from "vue";

const artBaseURL = ref<string>("");

export const useArtBaseURL = () => {
  const setArtBaseURL = (url: string) => {
    artBaseURL.value = url;
  };

  return {
    artBaseURL,
    setArtBaseURL,
  };
};

interface UseArtURLReturn {
  url: string;
  provisional: boolean;
}

export const useArtURL = (path: string, fallback: string): ComputedRef<UseArtURLReturn> =>
  computed(() => {
    // Strip leading and trailing slashes
    const cleaner = /^\/*(.*[^/])\/*$/;

    const cleanedBase = cleaner.exec(artBaseURL.value)?.[1] || "";
    if (!cleanedBase) {
      console.warn(`Using provisional art URL for ${path} because art base URL is not set.`);
      return { url: fallback, provisional: true };
    }

    const cleanedPath = cleaner.exec(path)?.[1] || "";
    if (!cleanedPath) {
      console.warn(`Using provisional art URL for ${path} because path is empty after cleaning.`);
      return { url: fallback, provisional: true };
    }

    return { url: `${cleanedBase}/${cleanedPath}`, provisional: false };
  });
