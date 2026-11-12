import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-4">
      <Button className="bg-amber-800 text-2xl h-20">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive" size="sm">
        Delete
      </Button>
      <Button className="bg-green-600 hover:bg-green-700 rounded-full px-10">
        Post a Job
      </Button>
    </main>
  );
}
