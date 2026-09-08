import { MouseEvent, DragEvent } from "react";

/**
 * Image Protection Utilities per §42:
 * Deterrents against simple right-click / drag saving of personal photos.
 * Note: Screenshots cannot be completely blocked in browser, but watermarking
 * and disabling native context menu / drag provide effective visual ownership protection.
 */

export function handleProtectedContextMenu(e: MouseEvent<HTMLElement>) {
  e.preventDefault();
}

export function handleProtectedDragStart(e: DragEvent<HTMLElement>) {
  e.preventDefault();
}

export const protectedImageProps = {
  onContextMenu: handleProtectedContextMenu,
  onDragStart: handleProtectedDragStart,
  draggable: false,
};
