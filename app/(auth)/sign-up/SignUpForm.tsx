import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export const SignUpForm = () => {
  return (
    <div className="m-2 w-[600px] rounded-2xl bg-white p-4 shadow-xl shadow-black/50">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src="/next.svg"
            alt="Your Company"
            width={100}
            height={100}
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create an account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <Label htmlFor="email">Name</Label>
              <div className="mt-2">
                <Input
                  type="name"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  autoFocus
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email address</Label>
              <div className="mt-2">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>
            <div>
              <div className="flex w-full flex-col items-center justify-between sm:flex-row sm:gap-4">
                <div className="mt-2 w-full">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    required
                  />
                </div>
                <div className="mt-2 w-full">
                  <Label htmlFor="password_confirm">Password</Label>
                  <Input
                    type="password_confirm"
                    name="password_confirm"
                    id="password_confirm"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already a member?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary hover:text-primary/80"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
