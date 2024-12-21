import { Layout } from "../app/components/Layout"
import { Stats } from "../app/components/Stats"
import { Mapper } from "../app/components/Mapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export  function Page() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <Mapper />
          <Stats />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-gray-900/50 text-white">
            <CardHeader>
              <CardTitle>Userbase Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Overall Growth</span>
                  <span className="font-semibold text-blue-400">76.58%</span>
                </div>
                <Progress value={76.58} className="bg-gray-700" indicatorClassName="bg-blue-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 text-white">
            <CardHeader>
              <CardTitle>Traffic Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Overall Values</span>
                  <span className="font-semibold text-blue-400">17,567,318</span>
                </div>
                <Progress value={65} className="bg-gray-700" indicatorClassName="bg-blue-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 text-white">
            <CardHeader>
              <CardTitle>Random Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>World Pop.</span>
                  <span className="font-semibold text-blue-400">7.21 M</span>
                </div>
                <Progress value={72} className="bg-gray-700" indicatorClassName="bg-blue-400" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

