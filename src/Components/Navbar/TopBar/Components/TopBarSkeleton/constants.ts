export const SKELETON_CONFIG = {
  containerClass:
    'w-full min-h-[68px] flex flex-row px-7 py-5 items-center justify-between gap-2 border-b',
  leftSectionClass: 'flex flex-row gap-2',
  rightSectionClass: 'flex flex-col justify-end gap-2 sm:flex-row sm:gap-5',
  iconGroupClass: 'flex flex-row gap-2',
  breadcrumbClass: 'hidden sm:flex flex-row gap-2 items-center',
  inputClass: 'h-8 w-48 rounded animate-pulse',
  iconClass: 'w-7 h-7 p-1 rounded animate-pulse',
  breadcrumbItemClass: 'h-4 rounded animate-pulse',
} as const;

export const SKELETON_SIZES = {
  breadcrumbItem1: 'w-16',
  breadcrumbSeparator: 'w-2',
  breadcrumbItem2: 'w-12',
} as const;
