
import Link from "next/link";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 text-center py-10">
      <h1 className="text-3xl font-bold">
        Welcome to My Portfolio!
      </h1>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">
            Hi, I'm Chloe Pereyra!
          </h2>

          <p className="text-muted-foreground">
            I am a BSIT student from Naga College Foundation.
            This website is my personal portfolio where you
            can learn more about me, my education, and my hobbies.
          </p>

          <div className="flex justify-center gap-3">
            <Link
              href="/about"
              className={buttonVariants()}
            >
              About Me
            </Link>

            <Link
              href="/contact"
              className={buttonVariants({ variant: "outline" })}
            >
              Contact Me
            </Link>
          </div>
        </CardContent>
      </Card>

      <p className="text-sm text-muted-foreground">
        © 2026 Chloe Joy P. Pereyra
      </p>
    </div>
  );
}
