export const CONTACT_INFO = {
  EMAIL: "hello@chatsupplies.com",
  PHONE: "1-945-217-8349",
  
};

export const BASE_URL = "https://api.chatsupplies.com";


import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

