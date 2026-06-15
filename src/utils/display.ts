import { computed, ref } from "vue";
import { useEventListener, useMediaQuery, useScreenOrientation, useWindowSize } from "@vueuse/core";

export interface DisplayMode {
  orientation: "portrait" | "landscape";
  controls: "mouse-and-keyboard" | "touch";
}

export const useDisplayMode = () => {
  const { orientation: screenOrientation } = useScreenOrientation();
  const { width, height } = useWindowSize();

  // Static heuristic: coarse pointer (finger-sized) → touch device
  const isCoarsePointer = useMediaQuery("(pointer: coarse)");

  // Dynamic: update as the user actually interacts
  const lastPointerType = ref("");
  useEventListener("pointerdown", (e: PointerEvent) => {
    lastPointerType.value = e.pointerType;
  });

  return computed<DisplayMode>(() => {
    // Screen Orientation API gives reliable data on mobile; fall back to
    // window dimensions on desktop where it may be absent.
    let orientation: "portrait" | "landscape";
    if (screenOrientation.value?.startsWith("portrait")) {
      orientation = "portrait";
    } else if (screenOrientation.value?.startsWith("landscape")) {
      orientation = "landscape";
    } else {
      orientation = width.value <= height.value ? "portrait" : "landscape";
    }

    // XXX figure out firefox debugging not setting the screenOrientation correctly;
    orientation = width.value <= height.value ? "portrait" : "landscape";

    // Prefer what we've actually observed; fall back to pointer-media heuristic.
    let controls: "mouse-and-keyboard" | "touch";
    if (lastPointerType.value === "touch") {
      controls = "touch";
    } else if (lastPointerType.value === "mouse" || lastPointerType.value === "pen") {
      controls = "mouse-and-keyboard";
    } else {
      controls = isCoarsePointer.value ? "touch" : "mouse-and-keyboard";
    }

    return { orientation, controls };
  });
};
