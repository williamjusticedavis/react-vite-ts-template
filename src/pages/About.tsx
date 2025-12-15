import { Card } from "@/components/ui";

const AboutPage = () => {
  return (
    <div className="space-y-6">
      <Card className="space-y-4">
        <h1 className="text-2xl font-semibold">About</h1>
        <p className="text-muted">
          This template is designed for pure frontend applications, with minimal
          but scalable defaults.
        </p>
      </Card>
    </div>
  );
};

export default AboutPage;
