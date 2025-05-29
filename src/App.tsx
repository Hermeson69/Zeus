import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./context/theme-provider";
import { WeatherDashboard } from "./pages/weather-dashboard";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { CityPage } from "./pages/city-pages";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
function App() {
  /**
   * basicamente são as configurações basica, onde opos 5 minutos do usuario fora do site ele atualiza a tela e a cada 5 minutos e ao passar de 10 min os components param de atualizar e ficam inativos
   */
  const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="system">
          <Layout>
            <Routes>
              <Route path="/" element={<WeatherDashboard />} />
              <Route path="/city/:cityName" element={<CityPage />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
