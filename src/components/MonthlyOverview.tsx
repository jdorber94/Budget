import React from "react";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface MonthlyOverviewProps {
  totalBudget?: number;
  totalSpent?: number;
  monthlyIncome?: number;
  monthlyExpenses?: number;
}

const MonthlyOverview = ({
  totalBudget = 5000,
  totalSpent = 3250,
  monthlyIncome = 6000,
  monthlyExpenses = 3250,
}: MonthlyOverviewProps) => {
  const progress = Math.min((totalSpent / totalBudget) * 100, 100);
  const remaining = totalBudget - totalSpent;

  return (
    <div className="w-full h-[120px] bg-white p-4">
      <div className="flex flex-col h-full gap-4">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-gray-900">
              Monthly Overview
            </h2>
            <p className="text-sm text-gray-500">
              ${remaining.toLocaleString()} remaining of $
              {totalBudget.toLocaleString()}
            </p>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-green-100 rounded-full">
                <ArrowUpIcon className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Income</p>
                <p className="font-semibold">
                  ${monthlyIncome.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-red-100 rounded-full">
                <ArrowDownIcon className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Expenses</p>
                <p className="font-semibold">
                  ${monthlyExpenses.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Progress
          value={progress}
          className="h-2 w-full"
          indicatorClassName={
            progress >= 90
              ? "bg-red-600"
              : progress >= 75
                ? "bg-yellow-600"
                : "bg-green-600"
          }
        />
      </div>
    </div>
  );
};

export default MonthlyOverview;
