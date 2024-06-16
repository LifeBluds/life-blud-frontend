"use client"
import { useState } from "react";
import MetricItem from "../Components/MetricItem";
import DonationRequests from "../Components/DonationRequests";
import UpcomingAppointments from "../Components/UpcomingAppointments";

export default function DashboardHome() {
    const [donationRequests, setDonationRequests] = useState([
        { request: 'Whole Blood Donation (A+)', hospital: 'ScarletChosen Hospital, Lagos' },
        { request: 'Red Blood Cell Donation', hospital: 'ScarletChosen Hospital, Lagos' },
        { request: 'Red Blood Cell Donation', hospital: 'ScarletChosen Hospital, Lagos' },
        { request: 'Red Blood Cell Donation', hospital: 'ScarletChosen Hospital, Lagos' },
        { request: 'Red Blood Cell Donation', hospital: 'ScarletChosen Hospital, Lagos' },
      ]);
    
      const [upcomingAppointments, setUpcomingAppointments] = useState([
        { appointment: 'Red Blood Cell Donation (O-)', hospital: 'ScarletChosen Hospital, Lagos', date: '11th June 2024', status: 'Pending' },
        { appointment: 'Red Blood Cell Donation', hospital: 'ScarletChosen Hospital, Lagos', date: '16th June 2024', status: 'Pending' },
        { appointment: 'Red Blood Cell Donation', hospital: 'ScarletChosen Hospital, Lagos', date: '16th June 2024', status: 'Approved' },
        { appointment: 'Red Blood Cell Donation', hospital: 'ScarletChosen Hospital, Lagos', date: '16th June 2024', status: 'Approved' },
      ]);
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-6 lg:gap-8 md:items-center">
                <MetricItem title={'Upcoming Donations'} metric={2000} percent={{direction: 'up', number: 100}} />
                <MetricItem title={'Completed Donations'} metric={2000} percent={{direction: 'up', number: 100}} />
                <MetricItem title={'Lives Saved'} metric={2000} percent={{direction: 'up', number: 100}} />
            </div>
            <div className="w-full lg:flex-row flex flex-col mt-9">
                <div className="flex-1 flex flex-col gap-6">
                    <h3 className="border-b pb-6">Donation Requests</h3>
                    <div className="gap-4 grid">
                    {donationRequests.map((donationrequest) => (
                        <DonationRequests {...donationrequest} />
                    ))}
                    </div>
                </div>
                <div className="flex-1 flex-col flex gap-6 mt-9 lg:mt-0">
                <h3 className="lg:pl-16 border-b pb-6">Upcoming Appointments</h3>
                    <div className="gap-4 grid lg:pl-14">
                    {upcomingAppointments.map((upcomingappointment) => (
                        <UpcomingAppointments {...upcomingappointment} />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}