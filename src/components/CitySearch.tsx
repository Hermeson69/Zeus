import { useState } from "react";
import { Button } from "./ui/button";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
import { Loader2, Loader2Icon, Search } from "lucide-react";
import { useLocationSearch } from "@/hooks/use-weather";
import { CommandSeparator } from "cmdk";

export const CitySearch = () => {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState("")
    const {data: locations, isLoading} = useLocationSearch(query)

    const handleSelect = () =>{

    }
  return (
    <>
    <Button onClick={()=> setOpen(true)}
        variant={"outline"}
        className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        >
            <Search className="mr-2 w-4 h-4"></Search>
            Search Cities...
    </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
        placeholder="Type a name for a city to search..."
        value={query}
        onValueChange={setQuery}
         />
        <CommandList>
         {query.length > 2 && !! isLoading && (<CommandEmpty>No cities found.</CommandEmpty>)}
          <CommandGroup heading="Favorites">
            <CommandItem>Calendar</CommandItem>
          </CommandGroup>
          <CommandSeparator/>

          <CommandGroup heading="Recent Searches">
            <CommandItem>Calendar</CommandItem>
          </CommandGroup>

          <CommandSeparator/>

          {locations && locations.length > 0 && 
          (<CommandGroup heading="Suggestions">
            {isLoading && (
                <div className="flex items-center justify-center p-4">
                    <Loader2 className="w-4 h-4 animate-spin"></Loader2>
                </div>
            )}
            {locations.map((location)=>{
             return (
                 <CommandItem key={`${location.lat} ${location.lon}`}
                 value={`${location.lat}|${location.lon} | ${location.name} | ${location.country}`}
                 onSelect={handleSelect}
                 >
                    <Search className="w-4 h-4 mr-2" />
                    <span>{location.name}</span>
                    {location.state && (
                        <span className="text-sm text-muted-foreground">
                            {location.state}
                        </span>
                    )}
                    <span className="text-sm text-muted-foreground">
                        {location.country}
                    </span>
                    </CommandItem>

             )   
            })}
          </CommandGroup>)}
        </CommandList>
      </CommandDialog>
    </>
  );
};
