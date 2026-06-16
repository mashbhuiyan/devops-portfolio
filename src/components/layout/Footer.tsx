import { personal } from "@/data/personal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm font-mono">
          {personal.name} &copy; {year}
        </p>
      </div>
    </footer>
  );
}
