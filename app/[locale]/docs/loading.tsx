import { DocsLayout } from "@/components/docs-layout"
import { Skeleton } from "@/components/ui/skeleton"

export default function DocsLoading() {
  return (
    <DocsLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <Skeleton className="h-10 w-64 mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-3/4 mb-8" />
        
        <Skeleton className="h-8 w-48 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-6" />
        
        <Skeleton className="h-64 w-full rounded-lg mb-6" />
        
        <Skeleton className="h-8 w-48 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-4/5 mb-6" />
      </div>
    </DocsLayout>
  )
}

