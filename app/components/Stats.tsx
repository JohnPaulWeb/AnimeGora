import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Stats() {
  return (
    <Card className="bg-gray-900/50 text-white">
      <CardHeader>
        <CardTitle>Map Statistics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span>Global Live</span>
            <span>146 Countries, 2759 Cities</span>
          </div>
          <Progress value={75} className="bg-gray-700" indicatorClassName="bg-blue-400" />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span>Local Visits</span>
            <span>76%</span>
          </div>
          <Progress value={84} className="bg-gray-700"  indicatorClassName="bg-blue-400" />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span>Sound Frequencies</span>
            <span>65%</span>
          </div>
          <Progress value={52} className="bg-gray-700" indicatorClassName="bg-blue-400" />
        </div>
      </CardContent>
    </Card>
  )
}

