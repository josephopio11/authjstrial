import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export const ForgotForm = () => {
  return (
    <div className="w-[400px] rounded-2xl bg-white p-4 shadow-xl shadow-black/50">
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
            Forgot Password
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
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
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <Link
              href="sign-up"
              className="font-semibold text-primary hover:text-primary/80"
            >
              Sign Up
            </Link>
          </p>
          <p className="text-center text-sm/6 text-gray-500">
            Recalled your password?{" "}
            <Link
              href="login"
              className="font-semibold text-primary hover:text-primary/80"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
