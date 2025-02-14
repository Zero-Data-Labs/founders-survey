import { Button } from "@/components/ui/button"

export default function RootPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Founders Personality Traits Survey</h1>
      <Button>Start</Button>
    </div>
  )
}
RootPage.displayName = "RootPage"
