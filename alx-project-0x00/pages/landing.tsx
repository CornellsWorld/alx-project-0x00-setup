import Card from "@/components/Card"

import Button from "../components/Button";
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      
      <div className="p-10 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Button Examples</h1>

      {/* Sizes */}
      <div className="space-x-4">
        <Button title="Small Button" size="small" />
        <Button title="Medium Button" size="medium" />
        <Button title="Large Button" size="large" />
      </div>

      {/* Shapes */}
      <div className="space-x-4 mt-4">
        <Button title="Rounded Small" shape="rounded-sm" />
        <Button title="Rounded Medium" shape="rounded-md" />
        <Button title="Rounded Full" shape="rounded-full" />
      </div>

      {/* Combined */}
      <div className="space-x-4 mt-4">
        <Button title="Small Rounded Full" size="small" shape="rounded-full" />
        <Button title="Medium Rounded Medium" size="medium" shape="rounded-md" />
        <Button title="Large Rounded Small" size="large" shape="rounded-sm" />
      </div>
    </div>
    </div>
  )
}
export default Landing