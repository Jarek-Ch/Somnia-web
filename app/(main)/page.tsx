import { Logo } from "@/components/svgs/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Logo className="w-32 sm:w-48 h-auto mb-4" />
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        Somnia – Your Sounds for Better Sleep
      </h1>
      <p className="text-base sm:text-lg">
        App for playing relaxing sounds and creating your own mixes, saved
        locally on your device.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
        <a
          href="#"
          aria-disabled
          className="inline-flex items-center justify-center rounded-full h-12 px-6 bg-foreground text-background hover:opacity-90 transition-opacity cursor-not-allowed"
          title="Google Play link will be available soon"
        >
          Download on Google Play (coming soon)
        </a>
        <Link
          href="/privacy/en"
          className="inline-flex items-center justify-center rounded-full h-12 px-6 border border-black/10 dark:border-white/20 hover:bg-black/[.04] dark:hover:bg-white/[.06] transition-colors"
        >
          Privacy Policy
        </Link>
      </div>

      {/* <GooglePlayStoreEn /> */}
    </>
  );
}
