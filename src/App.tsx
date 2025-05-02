import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./context/theme-provider";
import { WeatherDashboard } from "./pages/weather-dashboard";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { CityPage } from "./pages/city-pages";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
function App() {
  const queryClient = new QueryClient();
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
