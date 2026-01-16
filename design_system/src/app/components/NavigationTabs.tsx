import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

export interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

export function NavigationTabs({ activeTab, onTabChange }: NavigationTabsProps) {
  return (
    <div className="sticky top-0 z-50 bg-background border-b-2 border-foreground">
      <div className="container-content">
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
          <TabsList className="w-full justify-start h-12 md:h-14 bg-transparent rounded-none border-0 p-0 overflow-x-auto">
            <TabsTrigger
              value="home"
              className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-none h-full px-4 md:px-6 text-sm md:text-base whitespace-nowrap"
            >
              Blog Home
            </TabsTrigger>
            <TabsTrigger
              value="article"
              className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-none h-full px-4 md:px-6 text-sm md:text-base whitespace-nowrap"
            >
              Article Example
            </TabsTrigger>
            <TabsTrigger
              value="design"
              className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-none h-full px-4 md:px-6 text-sm md:text-base whitespace-nowrap"
            >
              Components
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-none h-full px-4 md:px-6 text-sm md:text-base whitespace-nowrap"
            >
              Projects
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
