import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  avatarUrl: string
}

export function Testimonial({ quote, author, role, avatarUrl }: TestimonialProps) {
  return (
    <Card className="border-border/40 bg-card/60 transition-all duration-200 hover:shadow-md hover:shadow-purple-500/10 hover:border-purple-500/30">
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground italic">"{quote}"</p>
          <div className="flex items-center gap-4 mt-2">
            <div className="rounded-full overflow-hidden h-10 w-10 bg-muted">
              <Image
                src={avatarUrl || "/placeholder.svg"}
                alt={author}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium">{author}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
