import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[100svh] place-items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-glow" />
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
      <div className="container-page relative text-center">
        <p className="font-display text-[120px] font-extrabold leading-none text-blue-gradient lg:text-[200px]">
          404
        </p>
        <h1 className="mt-2 font-display text-2xl font-bold text-white lg:text-3xl">
          This page drifted off the network
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted-gray">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" /> Back Home
          </Link>
          <Link href="/projects" className="btn-secondary">
            <ArrowLeft className="h-4 w-4" /> View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
