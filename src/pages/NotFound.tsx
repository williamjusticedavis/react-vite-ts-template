import { Button, Card } from "@/components/ui";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="w-full max-w-md space-y-4 text-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="text-muted">
          The page you are looking for does not exist.
        </p>

        <Link to="/">
          <Button className="w-full">Go back home</Button>
        </Link>
      </Card>
    </div>
  );
};

export default NotFoundPage;
