import type { ForecastData } from "@/api/types";
import { Card } from "./ui/card";

interface WeatherForecastProps {
    data: ForecastData;
}

export function WeatherForecast({ data }: WeatherForecastProps) {
    return (
        <Card>
            
        </Card>
    );
}