"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Cookie, ArrowLeft, Check, ShieldCheck, BarChart3, Settings2, Megaphone, Monitor } from "lucide-react";

interface CookieCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  details: string[];
  required: boolean;
  enabled: boolean;
  color: string;
  gradient: string;
}

const defaultCategories: CookieCategory[] = [
  {
    id: "essential",
    name: "Essential Cookies",
    icon: ShieldCheck,
    description: "Core cookies required for the website to function properly.",
    details: [
      "User authentication and session management via Clerk",
      "CSRF protection and security tokens",
      "Cookie consent preferences storage",
      "Load balancing and server routing",
    ],
    required: true,
    enabled: true,
    color: "emerald",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    id: "analytics",
    name: "Analytics Cookies",
    icon: BarChart3,
    description: "Help us understand how visitors interact with our website.",
    details: [
      "Page views and navigation patterns",
      "Traffic sources and referral data",
      "User engagement and session duration",
      "Powered by Google Analytics",
    ],
    required: false,
    enabled: true,
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "functional",
    name: "Functional Cookies",
    icon: Settings2,
    description: "Enable enhanced functionality and personalization features.",
    details: [
      "Theme preference (light/dark mode) persistence",
      "Language and locale settings",
      "Previously viewed pages and navigation state",
      "Form auto-fill and user preferences",
    ],
    required: false,
    enabled: true,
    color: "violet",
    gradient: "from-violet-500 to-violet-600",
  },
  {
    id: "marketing",
    name: "Marketing Cookies",
    icon: Megaphone,
    description: "Used to deliver relevant community updates and announcements.",
    details: [
      "Event notifications and hackathon announcements",
      "Workshop and webinar invitations",
      "Community newsletter preferences",
      "We do NOT use these for third-party advertising",
    ],
    required: false,
    enabled: false,
    color: "amber",
    gradient: "from-amber-500 to-amber-600",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

export default function CookieSettings() {
  const [categories, setCategories] = useState(defaultCategories);
  const [saved, setSaved] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id && !cat.required ? { ...cat, enabled: !cat.enabled } : cat
      )
    );
    setSaved(false);
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const acceptAll = () => {
    setCategories((prev) => prev.map((cat) => ({ ...cat, enabled: true })));
    showSaved();
  };

  const rejectNonEssential = () => {
    setCategories((prev) =>
      prev.map((cat) => ({ ...cat, enabled: cat.required ? true : false }))
    );
    showSaved();
  };

  const savePreferences = () => {
    showSaved();
  };

  const showSaved = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const enabledCount = categories.filter((c) => c.enabled).length;

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-rose-500/10 dark:from-amber-500/20 dark:via-orange-500/10 dark:to-rose-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/10 via-transparent to-transparent dark:from-amber-400/20" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-4 md:px-6 pt-12 pb-20 md:pt-16 md:pb-28 relative">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-xl shadow-amber-500/20 mb-6"
            >
              <Cookie className="h-8 w-8 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
            >
              Cookie{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">
                Settings
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-base md:text-lg max-w-xl"
            >
              Manage your cookie preferences. We use cookies to enhance your browsing experience and analyze site traffic.
            </motion.p>

            {/* Status bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-border backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-muted-foreground">
                <strong className="text-foreground">{enabledCount}</strong> of {categories.length} cookie categories enabled
              </span>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full text-background">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,30 1440,30 L1440,60 L0,60 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">

          {/* What are cookies */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 rounded-2xl border border-black/[0.08] dark:border-white/[0.06] bg-white/80 dark:bg-white/[0.02] p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center shadow-lg shadow-gray-500/20">
                <Monitor className="h-4 w-4 text-white" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-foreground">What Are Cookies?</h2>
            </div>
            <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed pl-12">
              Cookies are small text files stored on your device when you visit a website. They help websites remember
              your preferences, keep you signed in, and understand how you use the site. At Coding Junction, we use
              cookies to provide a better experience and to understand how our community engages with our platform.
            </p>
          </motion.div>

          {/* Cookie Categories */}
          <div className="mb-8">
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-bold text-foreground mb-6"
            >
              Manage Preferences
            </motion.h2>

            <div className="space-y-4">
              {categories.map((cat, index) => {
                const Icon = cat.icon;
                const isExpanded = expandedId === cat.id;

                return (
                  <motion.div
                    key={cat.id}
                    custom={index + 2}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      cat.enabled
                        ? "border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]"
                        : "border-border bg-gray-50/30 dark:bg-white/[0.01] opacity-75"
                    }`}
                  >
                    <div className="p-5 md:p-6">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg flex-shrink-0 transition-opacity ${cat.enabled ? "opacity-100" : "opacity-40"}`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-foreground">{cat.name}</h3>
                            {cat.required && (
                              <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                                Always On
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{cat.description}</p>

                          {/* Expand button */}
                          <button
                            onClick={() => toggleExpand(cat.id)}
                            className="text-xs text-muted-foreground hover:text-foreground mt-2 transition-colors cursor-pointer"
                          >
                            {isExpanded ? "Hide details ↑" : "Show details ↓"}
                          </button>
                        </div>

                        {/* Toggle */}
                        <button
                          onClick={() => toggleCategory(cat.id)}
                          disabled={cat.required}
                          className={`relative flex-shrink-0 h-7 w-12 rounded-full transition-all duration-300 cursor-pointer ${
                            cat.required
                              ? "bg-emerald-500 cursor-not-allowed"
                              : cat.enabled
                              ? "bg-amber-500 hover:bg-amber-600"
                              : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                          }`}
                          aria-label={`Toggle ${cat.name}`}
                        >
                          <span
                            className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-all duration-300 ${
                              cat.enabled ? "left-[22px]" : "left-0.5"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Expanded details */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 ml-14 p-4 rounded-xl bg-white dark:bg-white/5 border border-border">
                              <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">What this includes:</p>
                              <ul className="space-y-2">
                                {cat.details.map((detail) => (
                                  <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-${cat.color}-500/60 flex-shrink-0`} />
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 mb-16 p-5 rounded-2xl border border-black/[0.08] dark:border-white/[0.06] bg-white/80 dark:bg-white/[0.02]"
          >
            <button
              onClick={savePreferences}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-sm hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              {saved ? (
                <>
                  <Check className="h-4 w-4" />
                  Saved!
                </>
              ) : (
                "Save Preferences"
              )}
            </button>
            <button
              onClick={acceptAll}
              className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl border border-border bg-white dark:bg-white/5 text-foreground font-semibold text-sm hover:bg-gray-50 dark:hover:bg-white/10 transition-all cursor-pointer"
            >
              Accept All
            </button>
            <button
              onClick={rejectNonEssential}
              className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl border border-border bg-white dark:bg-white/5 text-muted-foreground font-semibold text-sm hover:bg-gray-50 dark:hover:bg-white/10 transition-all cursor-pointer"
            >
              Essential Only
            </button>
          </motion.div>

          {/* Additional Info */}
          <div className="space-y-8">
            <motion.div
              custom={7}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-black/[0.08] dark:border-white/[0.06] bg-white/80 dark:bg-white/[0.02] p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Monitor className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-lg md:text-xl font-bold text-foreground">Managing Cookies in Your Browser</h2>
              </div>
              <div className="space-y-3 text-muted-foreground text-sm md:text-[15px] leading-relaxed pl-12">
                <p>In addition to the controls above, you can manage cookies directly through your browser settings:</p>
                <ul className="space-y-2 mt-2">
                  {[
                    "View and delete existing cookies",
                    "Block all cookies or third-party cookies",
                    "Set preferences for specific websites",
                    "Get notifications when a website sets a cookie",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 p-3 rounded-lg border border-amber-200 dark:border-amber-500/20">
                  ⚠️ Blocking essential cookies may prevent the website from functioning correctly.
                </p>
              </div>
            </motion.div>

            <motion.div
              custom={8}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-black/[0.08] dark:border-white/[0.06] bg-white/80 dark:bg-white/[0.02] p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <Cookie className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-lg md:text-xl font-bold text-foreground">Contact Us</h2>
              </div>
              <div className="text-muted-foreground text-sm md:text-[15px] leading-relaxed pl-12">
                <p>If you have questions about our cookie practices, contact us:</p>
                <div className="mt-4 p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-500/10 dark:to-orange-500/10 border border-amber-100 dark:border-amber-500/20">
                  <p className="font-bold text-foreground">Coding Junction</p>
                  <p className="text-sm mt-1">University Institute of Technology, Burdwan</p>
                  <p className="text-sm">Purba Bardhaman, West Bengal, India</p>
                  <p className="text-sm mt-2">
                    Email:{" "}
                    <a href="mailto:ranadebsaha@coding-junction.in" className="text-amber-600 dark:text-amber-400 hover:underline font-semibold">
                      ranadebsaha@coding-junction.in
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
