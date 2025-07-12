import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cx(...args: ClassValue[]) {  return twMerge(clsx(...args))}

export const focusRing = ["outline outline-offset-2 outline-0 focus-visible:outline-2", "outline-blue-500 dark:outline-blue-500"]