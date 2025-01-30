import React from "react";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { cn } from "../lib/utils";

interface BudgetCategoryCardProps {
  category?: string;
  spent?: number;
  total?: number;
  color?: "green" | "yellow" | "red";
}

const BudgetCategoryCard = ({
  category = "Food & Dining",
  spent = 450,
  total = 600,
  color = "green",
}: BudgetCategoryCardProps) => {
  const progress = Math.min((spent / total) * 100, 100);

  const colorClasses = {
    green: "text-green-600",
    yellow: "text-yellow-600",
    red: "text-red-600",
  };

  const progressColorClasses = {
    green: "bg-green-600",
    yellow: "bg-yellow-600",
    red: "bg-red-600",
  };

  return (
    <Card className="w-[280px] h-[280px] bg-white shadow-lg hover:shadow-xl transition-shadow duration-200">
      <CardContent className="p-6 flex flex-col items-center justify-between h-full">
        <div className="relative w-48 h-48">
          {/* Circular progress indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border-8 border-gray-100 flex items-center justify-center">
              <div className="text-center">
                <p className={cn("text-3xl font-bold", colorClasses[color])}>
                  ${spent}
                </p>
                <p className="text-sm text-gray-500">of ${total}</p>
              </div>
            </div>
            <Progress
              value={progress}
              className={cn(
                "w-40 h-40 rounded-full absolute transform -rotate-90",
                progressColorClasses[color],
              )}
            />
          </div>
        </div>

        <div className="text-center w-full">
          <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
          <p className="text-sm text-gray-500">${total - spent} remaining</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetCategoryCard;
