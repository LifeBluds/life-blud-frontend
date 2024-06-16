import Link from "next/link";
import Sidebar from "../Components/Sidebar";
import { NavItem } from "../Components/NavItem";
import DashboardNavbar from "../Components/DashboardNavbar";

export default function DashboardLayout({children}) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[60px_1fr] lg:grid-cols-[240px_1fr]">
          <div className="hidden border-r bg-[#6D1E0F] md:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[80px] items-center px-5">
                <Link
                  className="flex items-center gap-[2.17px] font-semibold"
                  href="/"
                >
                  {/* <Logo /> */}
                  <div className="w-7 h-7">
                  <img className="w-full" src="/dashboardlogo.png" alt="dashboard logo" />
                  </div>
                  <span className="text-white text-xl hidden lg:block">LifeBlud</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid gap-1 lg:items-start lg:px-4 font-medium">
                  <NavItem href="/dashboard">
                    {/* <UsersIcon className="h-4 w-4" /> */}
                    <div className="w-6 h-6">
                    <img src="/dashboard.png" className="w-full" alt="dashboard icon" />
                    </div>
                    <p className="hidden lg:block">Dashboard</p>
                  </NavItem>
                  <NavItem href="/donationrequests">
                    {/* <SettingsIcon className="h-4 w-4" /> */}
                    <img src="/donationrequests.png" alt="donation requests icon" />
                    <p className="hidden lg:block">Donation Requests</p>
                  </NavItem>
                  <NavItem href="/appointments">
                    {/* <VercelLogo className="h-4 w-4" /> */}
                    <img src="/appointments.png" alt="appointments icon" />
                    <p className="hidden lg:block">Appointments</p>
                  </NavItem>
                  <NavItem href="/donationhistory">
                    {/* <VercelLogo className="h-4 w-4" /> */}
                    <img src="/donationhistory.png" alt="donation history icon" />
                    <p className="hidden lg:block">Donation History</p>
                  </NavItem>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex gap-8 flex-col mx-4 lg:mx-8 my-8">
            <DashboardNavbar />
            {children}
          </div>
        </div>
    );
}