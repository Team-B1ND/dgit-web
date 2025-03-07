import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { B1ndToastContainer } from "@b1nd/b1nd-toastify";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "styles/GlobalStyle";
import { useState } from "react";
import Router from "../../Router";
import ThemeProviderContainer from "../ThemeProviderContainer";


const Providers = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            retryOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProviderContainer>
          <B1ndToastContainer />
          <GlobalStyle />
            <BrowserRouter basename="/dgit">
                <Router/>
            </BrowserRouter>
        </ThemeProviderContainer>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Providers;
