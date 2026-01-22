import { Injectable } from '@angular/core';

export const ICONS = {
  'academic-cap': 'assets/icons/heroicons/outline/academic-cap.svg',
  'adjustments-horizontal': 'assets/icons/heroicons/outline/adjustments-horizontal.svg',
  'adjustments-vertical': 'assets/icons/heroicons/outline/adjustments-vertical.svg',
  'archive-box': 'assets/icons/heroicons/outline/archive-box.svg',
  'arrow-down': 'assets/icons/heroicons/outline/arrow-down.svg',
  'arrow-left': 'assets/icons/heroicons/outline/arrow-left.svg',
  'arrow-right': 'assets/icons/heroicons/outline/arrow-right.svg',
  'arrow-up': 'assets/icons/heroicons/outline/arrow-up.svg',
  'bars-3': 'assets/icons/heroicons/outline/bars-3.svg',
  'bell': 'assets/icons/heroicons/outline/bell.svg',
  'chart-pie': 'assets/icons/heroicons/outline/chart-pie.svg',
  'chevron-down': 'assets/icons/heroicons/outline/chevron-down.svg',
  'chevron-left': 'assets/icons/heroicons/outline/chevron-left.svg',
  'chevron-right': 'assets/icons/heroicons/outline/chevron-right.svg',
  'chevron-up': 'assets/icons/heroicons/outline/chevron-up.svg',
  'cog': 'assets/icons/heroicons/outline/cog.svg',
  'home': 'assets/icons/heroicons/outline/home.svg',
  'minus': 'assets/icons/heroicons/outline/minus.svg',
  'plus': 'assets/icons/heroicons/outline/plus.svg',
  'user-circle': 'assets/icons/heroicons/outline/user-circle.svg',
  'x-mark': 'assets/icons/heroicons/outline/x-mark.svg',
  'arrow-right-on-rectangle': 'assets/icons/heroicons/outline/arrow-right-on-rectangle.svg',
  // Add any more you use from your original folder
} as const;

export type IconName = keyof typeof ICONS;

export function getIconPath(name: IconName): string {
  return ICONS[name] || 'assets/icons/heroicons/outline/placeholder.svg'; // Fallback
}

@Injectable({ providedIn: 'root' })
export class IconPreloaderService {
  preloadIcons() {
    return Promise.resolve(); 
  }
}
