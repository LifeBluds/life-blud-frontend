import clsx from "clsx"

export default function UpcomingAppointments({image, appointment, date, status, hospital}) {
    return (
        <div className="flex justify-between">
            <div className="flex gap-3">
                <div className="rounded-full w-12 h-12">
                    <img src={'/hospital.png'} className="w-full" alt="hospital logo" />
                </div>
                <div className="flex-col flex gap-[6px]">
                    <p className="leading-5 text-sm">{appointment}</p>
                    <p className="text-xs leading-[18px] text-[#8A8180]">{hospital}</p>
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[14px]">
                    <p className="text-xs xl:text:sm leading-[18px]">{date}</p>
                    <p className={clsx(`text-xs xl:text-sm leading-[18px] text-${status === 'Approved' ? '[#1CB586]' : '[#FFA903]'}`, {'text-[#1CB586]': status === 'Approved'})}>{status}</p>
                </div>
                <p className="text-[10px] self-end leading-3 text-[#8B2613] underline">View More Info</p>
            </div>
        </div>
    );
}