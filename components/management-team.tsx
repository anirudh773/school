import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Sample management team data - replace with actual school management information
const managementTeam = [
  {
    id: 1,
    name: "Dr. John Smith",
    position: "Principal",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Dr. Smith has over 20 years of experience in education leadership and is committed to fostering academic excellence.",
  },
  {
    id: 2,
    name: "Mrs. Sarah Johnson",
    position: "Vice Principal",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Mrs. Johnson oversees curriculum development and student affairs, bringing 15 years of teaching experience.",
  },
  {
    id: 3,
    name: "Mr. David Williams",
    position: "Administrative Director",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Mr. Williams manages the administrative operations of the school, ensuring smooth functioning of all departments.",
  },
  {
    id: 4,
    name: "Dr. Emily Chen",
    position: "Academic Coordinator",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Dr. Chen coordinates academic programs and teacher development initiatives to maintain high educational standards.",
  },
]

export default function ManagementTeam() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {managementTeam.map((member) => (
        <Card key={member.id}>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative w-32 h-32 rounded-full overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.position}</p>
              </div>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
