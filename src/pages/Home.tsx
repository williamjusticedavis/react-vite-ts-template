import { Button, Card, Input } from "@/components/ui";

const HomePage = () => {
  return (
    <div className="space-y-6">
      <Card className="space-y-4">
        <h1 className="text-2xl font-semibold">Home</h1>
        <p className="text-muted">
          This is a minimal React + Vite + Tailwind v4 template.
        </p>

        <Input placeholder="Type something…" />

        <div className="flex gap-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Card>
    </div>
  );
};

export default HomePage;
