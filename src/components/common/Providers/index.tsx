import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { B1ndToastContainer } from "@b1nd/b1nd-toastify";
import { BrowserRouter } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <B1ndToastContainer />
        <BrowserRouter>{children}</BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Providers;
