import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { ArrowUpDown, Trash2 } from "lucide-react";

interface Expense {
  id: string;
  date: string;
  category: string;
  amount: number;
}

interface ExpenseListProps {
  expenses?: Expense[];
  onSort?: (column: "date" | "amount") => void;
  onDelete?: (id: string) => void;
}

const ExpenseList = ({
  expenses = [
    { id: "1", date: "2024-03-01", category: "Food & Dining", amount: 45.5 },
    { id: "2", date: "2024-03-02", category: "Transportation", amount: 32.0 },
    { id: "3", date: "2024-03-03", category: "Entertainment", amount: 89.99 },
    { id: "4", date: "2024-03-04", category: "Shopping", amount: 120.75 },
    { id: "5", date: "2024-03-05", category: "Utilities", amount: 150.0 },
  ],
  onSort = () => {},
  onDelete = () => {},
}: ExpenseListProps) => {
  return (
    <Card className="w-full bg-white">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Expenses</CardTitle>
        <div className="flex items-center gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="food">Food & Dining</SelectItem>
              <SelectItem value="transport">Transportation</SelectItem>
              <SelectItem value="entertainment">Entertainment</SelectItem>
              <SelectItem value="shopping">Shopping</SelectItem>
              <SelectItem value="utilities">Utilities</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => onSort("date")}
                  className="flex items-center gap-1"
                >
                  Date
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Category</TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => onSort("amount")}
                  className="flex items-center gap-1"
                >
                  Amount
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell>
                  {new Date(expense.date).toLocaleDateString()}
                </TableCell>
                <TableCell>{expense.category}</TableCell>
                <TableCell>${expense.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => onDelete(expense.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete expense</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ExpenseList;
