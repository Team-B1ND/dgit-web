import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { B1ndToastContainer } from "@b1nd/b1nd-toastify";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "../../../styles/GlobalStyle";
import Layout from "../Layout";

interface Props {
  children: React.ReactNode;
}

const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <B1ndToastContainer />
        <GlobalStyle />
        <BrowserRouter>
          <Layout>{children}</Layout>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Providers;
