import { useArtBaseURL } from "./art";

export const useDebug = () => {
  const art = useArtBaseURL();

  return {
    art,
  };
};

export const addDebugHook = (target: any, name: string) => {
  const debug = useDebug();
  target[name] = debug;
};
