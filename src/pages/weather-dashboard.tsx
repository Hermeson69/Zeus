import WeatehrSkeleton from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocation";
import { AlertCircle, MapPin, RefreshCw } from "lucide-react";

export const WeatherDashboard = () => {
  const {
    coordinates,
    error: locationError,
    getLocation,
    isLoading: locationLoading,
  } = useGeolocation();

  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
    }
  };



  if (locationLoading) {
    return <WeatehrSkeleton />;
  }

  if (!coordinates && !locationError) {
    return (
      <Alert variant="default">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Location Unavailable</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{locationError}</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Retry
          </Button>
        </AlertDescription>
      </Alert>
    );
  }
  if (!coordinates) {
    return (
      <Alert variant="default">
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>We couldn't retrieve your location. Please try again.</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <RefreshCw className="mr-2 h-4 w-4" />
            Retry
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (locationError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{locationError}</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div space-y-4>
      {/*Favorite cities */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant={`outline`}
          size={"icon"}
          onClick={handleRefresh}
          // disabled={}
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      {/*Current and hourly weather */}
    </div>
  );
};
