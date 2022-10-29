import "./App.css";
import Companies from "./components/Companies";
import { QueryClientProvider, QueryClient } from "react-query";
import { Suspense } from "react";
import Loading from "./components/Loading/Loading";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Suspense fallback={<Loading></Loading>}>
          <Companies />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
}

export default App;
