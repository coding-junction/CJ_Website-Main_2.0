"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { LayoutDashboard, UserCog, Settings, Code2, Calendar, Trophy, Activity, CalendarDays } from "lucide-react";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";

const DashboardMain = () => {
  const { user } = useUser();

  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: <LayoutDashboard className="h-5 w-5 flex-shrink-0 text-muted-foreground" />,
    },
    {
      label: "Profile",
      href: "#",
      icon: <UserCog className="h-5 w-5 flex-shrink-0 text-muted-foreground" />,
    },
    {
      label: "Settings",
      href: "#",
      icon: <Settings className="h-5 w-5 flex-shrink-0 text-muted-foreground" />,
    }
  ];

  const [open, setOpen] = useState(false);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const quickStats = [
    { icon: Calendar, label: "Events Attended", value: "0", gradient: "from-blue-500 to-cyan-400", glowColor: "rgba(59, 130, 246, 0.1)" },
    { icon: Trophy, label: "Hackathons Won", value: "0", gradient: "from-amber-500 to-orange-400", glowColor: "rgba(245, 158, 11, 0.1)" },
    { icon: Code2, label: "Projects Built", value: "0", gradient: "from-violet-500 to-purple-400", glowColor: "rgba(139, 92, 246, 0.1)" },
  ];

  return (
    <div className="flex h-screen w-screen bg-background">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-1">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10">
        {/* Welcome Card */}
        <div className="relative rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-gradient-to-br from-indigo-500/5 via-violet-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:via-violet-500/10 dark:to-purple-500/10 p-8 md:p-10 mb-8 overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl" />

          <div className="relative">
            <p className="text-sm text-indigo-500 dark:text-indigo-400 font-medium mb-1">
              {getGreeting()}{user?.firstName ? `, ${user.firstName}` : ""}
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white mb-2">
              Welcome to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500">
                Coding Junction
              </span>
            </h1>
            <p className="text-sm text-muted-foreground max-w-lg">
              Your personalized dashboard to track progress, manage events, and stay connected with the community.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {quickStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group glass-card"
              >
                <div className="glass-card-inner p-6 flex items-center gap-4">
                  {/* Hover glow */}
                  <div
                    className="absolute -top-12 -right-12 h-24 w-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
                    style={{ background: stat.glowColor }}
                  />
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${stat.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground dark:text-white">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Placeholder cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0a0a0f] p-6 min-h-[200px] flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 flex items-center justify-center">
              <Activity className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-foreground dark:text-white mb-1">Recent Activity</p>
              <p className="text-xs text-muted-foreground">Your latest actions and updates will appear here</p>
            </div>
          </div>
          <div className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0a0a0f] p-6 min-h-[200px] flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 dark:from-violet-500/20 dark:to-purple-500/20 flex items-center justify-center">
              <CalendarDays className="h-5 w-5 text-violet-500" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-foreground dark:text-white mb-1">Upcoming Events</p>
              <p className="text-xs text-muted-foreground">Events you&apos;ve registered for will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardMain;