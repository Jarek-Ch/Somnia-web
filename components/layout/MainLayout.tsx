import { Logo } from "../svgs/Logo";
import { GooglePlay } from "../svgs/GooglePlay";
import { File } from "../svgs/File";
import Link from "next/link";
import { Globe } from "../svgs/Globe";

export const MainLayout = ({
  children,
  showHeader = true,
}: Readonly<{ children: React.ReactNode; showHeader?: boolean }>) => {
  return (
    <div className="w-full min-h-full bg-primary flex flex-col gap-2 md:gap-8 justify-center items-center p-2 2xs:p-4 md:p-16 ">
      {showHeader && (
        <header className="flex items-center justify-between max-w-4xl w-full min-h-16 gap-2">
          <Link href={"/"} passHref>
            <div className="flex items-center">
              <Logo className="w-28 xs:w-16 h-auto" />
            </div>
          </Link>
          <div className="flex items-end xs:items-center space-x-4 text-[0.75rem] gap-x-2 flex-col xs:flex-row">
            Available on
            <GooglePlay className="w-24 mb-0.5" />
          </div>
        </header>
      )}
      <main className="flex flex-col border border-sky-500 rounded-2xl p-2 2xs:p-4 md:p-16 gap-4 md:gap-8 items-center max-w-4xl w-full shadow-xl ">
        {children}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center max-w-4xl">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
          rel="noopener noreferrer"
          href={"/"}
        >
          <Globe className="w-4" />
          Home
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
          rel="noopener noreferrer"
          href={"/privacy/en"}
        >
          <File className="w-4" />
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
};
