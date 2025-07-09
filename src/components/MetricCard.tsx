import { DollarSign, Users, TrendingUp, ShoppingCart } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: string;
}

const iconMap = {
  'dollar-sign': DollarSign,
  'users': Users,
  'trending-up': TrendingUp,
  'shopping-cart': ShoppingCart,
};

export default function MetricCard({ title, value, change, changeType, icon }: MetricCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || DollarSign;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
        </div>
        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <IconComponent className="h-6 w-6 text-green-500 dark:text-green-400" />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className={`text-sm font-medium ${
          changeType === 'positive' 
            ? 'text-green-600 dark:text-green-400' 
            : 'text-red-600 dark:text-red-400'
        }`}>
          {change}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">from last hour</span>
      </div>
    </div>
  );
} 