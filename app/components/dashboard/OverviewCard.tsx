import { Button } from "@/components/ui/button"; // ShadCN UI button component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface OverviewCardProps {
  title: string;
  buttonText: string;
  features: { text: string; icon: string }[];
}

export function OverviewCard({
  title,
  buttonText,
  features,
}: OverviewCardProps) {
  return (
    <Card className="bg-[#E9F2FF] p-3 border-none rounded-lg shadow-md">
      <CardHeader className="pb-3 flex flex-col items-start">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <Button
          variant="default"
          className="bg-black text-white text-sm px-4 py-0.25 hover:bg-gray-800 border border-black mb-2"
        >
          {buttonText}
        </Button>
        <div className="w-full border-b-2 border-[#2D2D2D] mb-3" />
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mt-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 text-sm text-gray-700"
            >
              {/* Feature Icon */}
              <div className="w-6 h-6 flex-shrink-0">
                <Image
                  src={feature.icon}
                  alt={feature.text}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              {/* Feature Text */}
              <span className="text-sm">{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}