"use client";

import React from "react";
import { motion } from "motion/react";
import { Download, Smartphone, Star, Shield, Zap, ArrowRight, Bell, Users, Calendar, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Instant Notifications",
    description: "Never miss an event, workshop, or important community update with real-time push notifications.",
    gradient: "from-blue-500 to-cyan-400",
    glowColor: "rgba(59, 130, 246, 0.15)",
  },
  {
    icon: Calendar,
    title: "Event Hub",
    description: "Browse, register, and track all upcoming events, hackathons, and workshops in one place.",
    gradient: "from-amber-500 to-orange-400",
    glowColor: "rgba(245, 158, 11, 0.15)",
  },
  {
    icon: Users,
    title: "Team Directory",
    description: "Connect with core members, alumni, and fellow community members directly from the app.",
    gradient: "from-emerald-500 to-teal-400",
    glowColor: "rgba(16, 185, 129, 0.15)",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data protection is our top priority with end-to-end security and zero tracking.",
    gradient: "from-violet-500 to-purple-400",
    glowColor: "rgba(139, 92, 246, 0.15)",
  },
];

const highlights = [
  { icon: Smartphone, label: "Android Native", description: "Built specifically for Android devices" },
  { icon: Zap, label: "Lightning Fast", description: "Optimized for instant loading" },
  { icon: Star, label: "Free Forever", description: "No premium tiers, no paywalls" },
];

const stats = [
  { value: "4.8", label: "Average Rating" },
  { value: "1K+", label: "Downloads" },
  { value: "99%", label: "Uptime" },
];

const faqs = [
  {
    q: "Which platforms are supported?",
    a: "Currently available for Android devices. iOS support is on our roadmap.",
  },
  {
    q: "Is the app free?",
    a: "Yes — the app is completely free with no in-app purchases or ads.",
  },
  {
    q: "Do I need a Coding Junction account?",
    a: "You can browse events without an account, but signing in unlocks notifications and personalized features.",
  },
  {
    q: "How do I get updates?",
    a: "The app auto-updates via your device's app store. You can also download the latest version from this page.",
  },
];

const App = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-violet-500/10 dark:from-blue-500/20 dark:via-indigo-500/10 dark:to-violet-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent dark:from-blue-400/20" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-4 md:px-6 pt-32 pb-20 md:pt-40 md:pb-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-blue-500/20 mb-6"
              >
                <Smartphone className="h-7 w-7 text-white" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
              >
                The Coding Junction{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                  App
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-muted-foreground text-base md:text-lg max-w-xl mb-8"
              >
                Stay connected with events, workshops, and community updates on the go. Your entire Coding Junction experience, in your pocket.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="https://dl.dropboxusercontent.com/s/0zeznf2a5rvrs7x/release_coding_junction_VC_6.apk?dl=1"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300"
                >
                  <Download className="h-5 w-5" />
                  Download for Android
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>

            {/* Right: Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                {/* Ambient glow behind phone */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-3xl rounded-full scale-150" />

                {/* Phone frame */}
                <div className="relative w-[280px] h-[560px] rounded-[3rem] border-[8px] border-gray-800 dark:border-gray-200/20 bg-[#0a0a0f] shadow-2xl overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 dark:bg-gray-200/20 rounded-b-2xl z-10" />

                  {/* Screen content */}
                  <div className="h-full w-full bg-gradient-to-b from-indigo-900 to-[#0a0a0f] flex flex-col items-center justify-center p-8 gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                      <MessageSquare className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-center">
                      <p className="text-white font-bold text-lg">Coding Junction</p>
                      <p className="text-blue-300/70 text-xs mt-1">Learn. Build. Innovate.</p>
                    </div>

                    {/* Fake UI elements */}
                    <div className="w-full space-y-3 mt-4">
                      <div className="h-10 bg-white/10 rounded-xl animate-pulse" />
                      <div className="h-10 bg-white/10 rounded-xl animate-pulse delay-75" />
                      <div className="h-10 bg-white/10 rounded-xl animate-pulse delay-150" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full text-background">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,30 1440,30 L1440,60 L0,60 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Highlights Bar */}
      <div className="container mx-auto px-4 md:px-6 -mt-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="glass-card group">
                <div className="glass-card-inner p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground dark:text-white text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-400 mb-3 font-medium">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white">
            Everything you{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              need
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
            Designed to keep you connected with the Coding Junction community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-card"
              >
                <div className="glass-card-inner p-6 md:p-8 h-full flex flex-col gap-4">
                  <div
                    className="absolute -top-16 -right-16 h-32 w-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
                    style={{ background: feature.glowColor }}
                  />
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Social Proof */}
      <div className="container mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto glass-card"
        >
          <div className="glass-card-inner p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-bold text-foreground dark:text-white text-center mb-8">
              Loved by our community
            </h3>
            <div className="flex justify-center gap-12 md:gap-16">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-400 mb-3 font-medium">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white">
            Common{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Questions
            </span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0a0a0f] p-6 transition-all duration-300 hover:border-black/[0.15] dark:hover:border-white/[0.15]"
            >
              <h4 className="font-semibold text-foreground dark:text-white mb-2">
                {faq.q}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;