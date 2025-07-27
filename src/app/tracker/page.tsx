import KPICard from '@/app/tracker/components/KPIcard';
import TaskStatusPie from '@/app/tracker/components/TaskStatusPie';
import LineChart from '@/app/tracker/components/LineChart';
import './tracker.css';

export default function TrackerApp() {
    return <>
        <div className='grid grid-cols-[0.2fr_1fr] min-h-[100vh] pr-3 gap-6 bg-[#030933]'>
            <div className='flex flex-col text-white bg-gray-500/20 items-center py-6'>
                <h1 className='text-lg font-bold px-5'>Task Manager</h1>
                <div className='flex flex-col my-10 w-full'>
                    <button className='menu-btn'>Profile</button>
                    <button className='menu-btn'>Create Project</button>
                    <button className='menu-btn'>Tasks</button>
                </div>
            </div>
            <div className='py-10 flex flex-col gap-6'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <KPICard title="Total Tasks" value={25} />
                    <KPICard title="Completed" value={12} color="text-green-600" />
                    <KPICard title="In Progress" value={5} color="text-blue-600" />
                    <KPICard title="Pending" value={8} color="text-yellow-500" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-6 max-h-[700px]">
                    <div className="glass-card">
                        <TaskStatusPie />
                    </div>
                    <div className="glass-card">
                        <LineChart />
                    </div>
                </div>
            </div>
        </div>
    </>
}

