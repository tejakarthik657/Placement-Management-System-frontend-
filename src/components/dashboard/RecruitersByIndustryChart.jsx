import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartCard from './ChartCard';

const MOCK_DATA = [
    { name: 'Technology', value: 15 },
    { name: 'Finance', value: 7 },
    { name: 'Consulting', value: 5 },
    { name: 'Manufacturing', value: 3 },
];
const PIE_COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f97316'];

const RecruitersByIndustryChart = () => {
  return (
    <ChartCard title="Recruiters by Industry">
      <div className="flex items-baseline mb-2">
        <p className="text-4xl font-bold">30</p>
        <p className="text-sm font-semibold text-green-600 ml-2">+12%</p>
      </div>
      <p className="text-xs text-slate-400 mb-4">Active Recruiters This Quarter</p>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={MOCK_DATA}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {MOCK_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }} />
          <Legend iconSize={10} />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default RecruitersByIndustryChart;