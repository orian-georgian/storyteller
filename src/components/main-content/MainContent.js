import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../../constants";
import { QueryClient, QueryClientProvider } from "react-query";

import "./MainContent.scss";

const queryClient = new QueryClient();
const NotFound = () => "Not Found";

export default function MainContent() {
  return (
    <main className="storyteller-content" role="contentinfo">
      <QueryClientProvider client={queryClient}>
        <Routes>
          {AppRoutes.map(({ path, component }) => (
            <Route exact key={path} path={path} Component={component} />
          ))}
          <Route path="*" Component={NotFound} />
        </Routes>
      </QueryClientProvider>
    </main>
  );
}
