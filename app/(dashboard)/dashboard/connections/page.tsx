import { Button } from "@/components/ui/button"
import { Plus, Search, Grid, List } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ConnectionGrid } from "@/components/connections/connection-grid"
import { CreateConnectionDialog } from "@/components/connections/create-connection-dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ConnectionList } from "@/components/connections/connection-list"

export default function ConnectionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Connections</h1>
        <CreateConnectionDialog>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="mr-2 h-4 w-4" /> New Connection
          </Button>
        </CreateConnectionDialog>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search connections..." className="w-full pl-8" />
        </div>
        <Tabs defaultValue="grid" className="w-auto">
          <TabsList className="grid w-[120px] grid-cols-2">
            <TabsTrigger value="grid">
              <Grid className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="list">
              <List className="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Tabs defaultValue="grid" className="w-full">
        <TabsContent value="grid" className="mt-0">
          <ConnectionGrid />
        </TabsContent>
        <TabsContent value="list" className="mt-0">
          <ConnectionList />
        </TabsContent>
      </Tabs>
    </div>
  )
}
