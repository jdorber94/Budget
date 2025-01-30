import React from "react";
import MonthlyOverview from "./MonthlyOverview";
import BudgetCategories from "./BudgetCategories";
import QuickAddExpense from "./QuickAddExpense";
import ExpenseList from "./ExpenseList";

interface HomeProps {
  monthlyBudget?: number;
  monthlySpent?: number;
  monthlyIncome?: number;
  monthlyExpenses?: number;
  categories?: Array<{
    category: string;
    spent: number;
    total: number;
    color: "green" | "yellow" | "red";
  }>;
  expenses?: Array<{
    id: string;
    date: string;
    category: string;
    amount: number;
  }>;
  onAddExpense?: (data: {
    amount: number;
    category: string;
    date: Date;
  }) => void;
  onAddCategory?: (data: { name: string; budget: number }) => void;
  onSortExpenses?: (column: "date" | "amount") => void;
  onDeleteExpense?: (id: string) => void;
}

const Home = ({
  monthlyBudget = 5000,
  monthlySpent = 3250,
  monthlyIncome = 6000,
  monthlyExpenses = 3250,
  categories,
  expenses,
  onAddExpense = () => {},
  onAddCategory = (data: { name: string; budget: number }) => {
    console.log("Adding category:", data);
  },
  onSortExpenses = () => {},
  onDeleteExpense = () => {},
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <MonthlyOverview
          totalBudget={monthlyBudget}
          totalSpent={monthlySpent}
          monthlyIncome={monthlyIncome}
          monthlyExpenses={monthlyExpenses}
        />

        <BudgetCategories
          categories={categories}
          onAddCategory={onAddCategory}
        />

        <ExpenseList
          expenses={expenses}
          onSort={onSortExpenses}
          onDelete={onDeleteExpense}
        />

        <QuickAddExpense categories={categories} onSubmit={onAddExpense} />
      </div>
    </div>
  );
};

export default Home;
