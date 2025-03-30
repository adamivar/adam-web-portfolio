// src/app/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-background border-t border-foreground/20 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h2 className="text-xl font-bold text-foreground mb-2">
          Get In Touch
        </h2>
        <p className="text-foreground mb-4">
          Have a project in mind or just want to say hi? Reach out!
        </p>
        <a
          href="mailto:adam@example.com"
          className="px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark transition"
        >
          Contact Me
        </a>
      </div>
    </footer>
  );
}
