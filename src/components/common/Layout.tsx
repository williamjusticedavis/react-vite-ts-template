import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="border-b bg-card">
        <div className="max-w-5xl px-4 py-4">
          <Nav />
        </div>
      </header>

      <main className="max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
