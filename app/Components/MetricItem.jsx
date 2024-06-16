export default function MetricItem({title, metric, percent}) {
    return (
        <div className="grid md:w-52 lg:w-56 xl:w-72 py-5 px-3 xl:px-4 gap-2 border rounded-xl border-[#EACF0]">
            <div className="flex justify-between items-center">
                <p className="text-sm leading-5 font-medium">{title}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-3xl leading-9 font-semibold">{metric}</p>
                <div className="flex items-center rounded-2xl border border-[#ABEFC6] bg-[#ECFDF3] gap-1 px-[10px] py-[2px]">
                    <p>{percent.number}%</p>
                </div>
            </div>
        </div>
    );
}