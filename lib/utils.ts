import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function hashPassword(plainTextPassword: string) {
//   return bcrypt.hash(plainTextPassword, 10);
// }
