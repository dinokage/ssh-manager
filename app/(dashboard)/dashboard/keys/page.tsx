import { Button } from "@/components/ui/button"
import { Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { KeyList } from "@/components/keys/key-list"
import { CreateKeyDialog } from "@/components/keys/create-key-dialog"

export default function KeysPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">SSH Keys</h1>
        <CreateKeyDialog>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="mr-2 h-4 w-4" /> New Key
          </Button>
        </CreateKeyDialog>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search keys..." className="w-full pl-8" />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <KeyList />
    </div>
  )
}
