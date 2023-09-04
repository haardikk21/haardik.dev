import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Writings() {
  return (
    <div className="flex w-full items-center justify-between py-8">
      <div className="flex max-w-prose flex-col justify-between">
        <div className="flex w-fit items-end border-b pb-2">
          <h2 className="text-4xl font-semibold">Writings</h2>
        </div>

        <Card className="mx-auto mt-6 w-fit">
          <CardHeader>
            <CardTitle>Work in Progress</CardTitle>
          </CardHeader>
          <CardContent>
            I&apos;m working on aggregating all my work in one place. Stay
            tuned!
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
