import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ChartCard from './ChartCard';

const MOCK_DATA = [
    { name: 'Company A', Placements: 25 },
    { name: 'Company B', Placements: 20 },
    { name: 'Company C', Placements: 18 },
    { name: 'Company D', Placements: 17 },
];

const PlacementsByCompanyChart = () => {
  return (
    <ChartCard title="Placements by Company">
      <div className="flex items-baseline mb-2">
        <p className="text-4xl font-bold">80</p>
        <p className="text-sm font-semibold text-green-600 ml-2">+5%</p>
      </div>
      <p className="text-xs text-slate-400 mb-4">2024 Placements</p>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={MOCK_DATA} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip cursor={{ fill: 'rgba(241, 245, 249, 0.5)' }} contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }} />
          <Bar dataKey="Placements" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default PlacementsByCompanyChart;