import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-20"> {/* Add padding to push content below the fixed header */}
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-foreground">
          I build creative and modern web applications.
        </p>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-4">About Me</h2>
        <p className="text-foreground mb-6">
          Passionate developer with experience in building responsive, user-friendly web applications.
        </p>
        <Link
          href="/about"
          className="text-primary hover:underline transition"
        >
          Learn more &rarr;
        </Link>
      </section>
    </div>
  );
}
