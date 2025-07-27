type KPICardProps = {
    title: string;
    value: string | number;
    color?: string;
};

export default function KPICard({ title, value, color = 'text-blue-600' }: KPICardProps) {
    return (
        <div className="glass-card max-w-sm">
            <h3 className="text-sm text-gray-500 dark:text-gray-400">{title}</h3>
            <p className={`text-2xl font-bold mt-1 ${color}`}>{value}</p>
        </div>
    );
}