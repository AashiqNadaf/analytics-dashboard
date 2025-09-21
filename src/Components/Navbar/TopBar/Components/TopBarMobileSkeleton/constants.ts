export const MOBILE_SKELETON_CONFIG = {
  containerClass: 'w-full flex flex-col px-4 py-3 gap-3 border-b',
  iconRowClass: 'w-full flex flex-row items-center justify-evenly',
  inputContainerClass: 'w-full',
  breadcrumbClass: 'w-full flex flex-row gap-2 items-center',
  iconClass: 'w-7 h-7 p-1 rounded animate-pulse',
  inputClass: 'h-8 w-full rounded animate-pulse',
  breadcrumbItemClass: 'h-4 rounded animate-pulse',
} as const;

export const MOBILE_SKELETON_SIZES = {
  iconCount: 6,
  breadcrumbItem1: 'w-16',
  breadcrumbSeparator: 'w-2',
  breadcrumbItem2: 'w-12',
} as const;
