import Link from "next/link";
import { LogoutIcon, NotificationIcon, SettingsIcon } from "./icons";

export default function DashboardNavbar() {
    return (
        <header className="flex justify-between sm:flex-row flex-col-reverse gap-5">
            <div className="grid gap-1">
                <h2 className="text-2xl sm:text-[32px] leading-[38.4px] font-normal">Welcome Back, Rita</h2>
                <p className="leading-5">Get an overview of your activities</p>
            </div>
            <div className="flex items-center gap-5 self-end">
                <Link href='/dashbaord'>
                    {/* <img src="/settings.png" alt="settings icon" /> */}
                    <SettingsIcon />
                </Link>
                <Link href='/dashbaord'>
                    {/* <img src="/notification.png" alt="notification icon" /> */}
                    <NotificationIcon />
                </Link>
                <Link href='/dashbaord'>
                    {/* <img src="/logout.png" alt="log out icon" /> */}
                    <LogoutIcon />
                </Link>
                <Link href='/dashbaord'>
                    <img src="/Avatar.png" alt="avatar image" />
                </Link>
            </div>
        </header>
    );
}