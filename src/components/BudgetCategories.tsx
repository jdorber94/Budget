import React from "react";
import BudgetCategoryCard from "./BudgetCategoryCard";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Plus } from "lucide-react";

interface BudgetCategory {
  category: string;
  spent: number;
  total: number;
  color: "green" | "yellow" | "red";
}

interface BudgetCategoriesProps {
  categories?: BudgetCategory[];
  onAddCategory?: (category: { name: string; budget: number }) => void;
}

const BudgetCategories = ({
  categories,
  onAddCategory = () => {},
}: BudgetCategoriesProps) => {
  const defaultCategories: BudgetCategory[] = [
    {
      category: "Food & Dining",
      spent: 450,
      total: 600,
      color: "green",
    },
    {
      category: "Transportation",
      spent: 280,
      total: 300,
      color: "yellow",
    },
    {
      category: "Entertainment",
      spent: 220,
      total: 200,
      color: "red",
    },
    {
      category: "Shopping",
      spent: 300,
      total: 400,
      color: "green",
    },
  ];

  const displayCategories = categories || defaultCategories;
  const [newCategoryName, setNewCategoryName] = React.useState("");
  const [newCategoryBudget, setNewCategoryBudget] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCategory({
      name: newCategoryName,
      budget: parseFloat(newCategoryBudget),
    });
    setNewCategoryName("");
    setNewCategoryBudget("");
  };

  return (
    <div className="w-full min-h-[300px] bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Budget Categories
        </h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Category
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white">
            <DialogHeader>
              <DialogTitle>Create Budget Category</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Category Name</Label>
                <Input
                  id="name"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  placeholder="e.g. Groceries"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Monthly Budget</Label>
                <Input
                  id="budget"
                  type="number"
                  value={newCategoryBudget}
                  onChange={(e) => setNewCategoryBudget(e.target.value)}
                  placeholder="0.00"
                />
              </div>
              <Button type="submit" className="w-full">
                Create Category
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {displayCategories.map((category, index) => (
          <BudgetCategoryCard
            key={index}
            category={category.category}
            spent={category.spent}
            total={category.total}
            color={category.color}
          />
        ))}
      </div>
    </div>
  );
};

export default BudgetCategories;
