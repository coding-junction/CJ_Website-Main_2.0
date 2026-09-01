"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  FileText, ArrowLeft, UserCheck, ShieldAlert, Trophy, Scale,
  Users, AlertTriangle, RefreshCw, Gavel, Mail, Handshake,
  Heart, Lightbulb, Target, Sprout,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const sections = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "about", label: "About Us" },
  { id: "accounts", label: "User Accounts" },
  { id: "acceptable-use", label: "Acceptable Use" },
  { id: "events", label: "Events & Competitions" },
  { id: "ip", label: "Intellectual Property" },
  { id: "community", label: "Community Guidelines" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "modifications", label: "Modifications" },
  { id: "governing-law", label: "Governing Law" },
  { id: "contact", label: "Contact Us" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

const communityValues: { icon: LucideIcon; title: string; description: string; color: string; iconColor: string }[] = [
  { icon: Heart, title: "Respect", description: "Treat all members with kindness and respect, regardless of skill level, background, or experience.", color: "from-blue-500/10 to-blue-500/5 border-blue-500/20 dark:from-blue-500/20 dark:to-blue-500/10 dark:border-blue-500/30", iconColor: "text-blue-500" },
  { icon: Lightbulb, title: "Collaboration", description: "Share knowledge freely, help fellow members grow, and contribute positively to the community.", color: "from-amber-500/10 to-amber-500/5 border-amber-500/20 dark:from-amber-500/20 dark:to-amber-500/10 dark:border-amber-500/30", iconColor: "text-amber-500" },
  { icon: Target, title: "Integrity", description: "Be honest in your work, give credit where it's due, and maintain academic integrity.", color: "from-emerald-500/10 to-emerald-500/5 border-emerald-500/20 dark:from-emerald-500/20 dark:to-emerald-500/10 dark:border-emerald-500/30", iconColor: "text-emerald-500" },
  { icon: Sprout, title: "Growth", description: "Embrace learning, accept constructive feedback, and strive for continuous improvement.", color: "from-violet-500/10 to-violet-500/5 border-violet-500/20 dark:from-violet-500/20 dark:to-violet-500/10 dark:border-violet-500/30", iconColor: "text-violet-500" },
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-500/10 dark:from-cyan-500/20 dark:via-blue-500/10 dark:to-indigo-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400/10 via-transparent to-transparent dark:from-cyan-400/20" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(6,182,212,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.8) 1px, transparent 1px)`,
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
              className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl shadow-cyan-500/20 mb-6"
            >
              <FileText className="h-8 w-8 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
            >
              Terms of{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                Service
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-base md:text-lg max-w-xl"
            >
              Rules and guidelines for using our website and participating in the Coding Junction community.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xs text-muted-foreground mt-4 flex items-center gap-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              Last updated: August 9, 2026
            </motion.p>
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
        <div className="flex gap-12 max-w-6xl mx-auto">
          {/* Sticky TOC */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden lg:block w-56 flex-shrink-0"
          >
            <div className="sticky top-8">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-4">On this page</p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="block text-sm py-1.5 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-gray-100 dark:hover:bg-white/5 transition-all">
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </motion.aside>

          {/* Main content */}
          <div className="flex-1 max-w-3xl space-y-8">
            <TermsCard id="acceptance" icon={Handshake} color="cyan" index={0} title="Acceptance of Terms">
              <p>
                By accessing and using the Coding Junction website (
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold">coding-junction.in</span>
                ) and participating in our community activities, you agree to be bound by these Terms of Service.
                If you do not agree with any part of these terms, please do not use our services.
              </p>
            </TermsCard>

            <TermsCard id="about" icon={Users} color="blue" index={1} title="About Coding Junction">
              <p>
                Coding Junction is the official technology community of University Institute of Technology, Burdwan
                (UIT, BU). We are a student-driven organization dedicated to fostering a culture of coding,
                innovation, and collaborative learning among students.
              </p>
            </TermsCard>

            <TermsCard id="accounts" icon={UserCheck} color="violet" index={2} title="User Accounts">
              <p>To access certain features of our website, you may be required to create an account. You agree to:</p>
              <BulletList items={[
                "Provide accurate, current, and complete information during registration",
                "Maintain the security of your account credentials and not share them with others",
                "Notify us immediately if you suspect unauthorized access to your account",
                "Accept responsibility for all activities that occur under your account",
              ]} color="violet" />
              <p className="mt-3">We reserve the right to suspend or terminate accounts that violate these terms or engage in suspicious activity.</p>
            </TermsCard>

            <TermsCard id="acceptable-use" icon={ShieldAlert} color="rose" index={3} title="Acceptable Use">
              <p>When using our website and participating in Coding Junction activities, you agree <strong className="text-foreground">not to</strong>:</p>
              <BulletList items={[
                "Submit false, misleading, or fraudulent information",
                "Attempt to gain unauthorized access to our systems or other users' accounts",
                "Upload or distribute malicious code, viruses, or any harmful software",
                "Engage in harassment, discrimination, or abusive behavior toward other members",
                "Plagiarize or submit others' work as your own in competitions or events",
                "Use our platform for any commercial purposes without prior written consent",
                "Scrape, crawl, or use automated tools to extract data without permission",
              ]} color="rose" />
            </TermsCard>

            <TermsCard id="events" icon={Trophy} color="amber" index={4} title="Events & Competitions">
              <p>Coding Junction organizes hackathons, workshops, coding competitions, and other events. By participating, you agree to:</p>
              <BulletList items={[
                "Follow the specific rules and guidelines of each event",
                "Submit only original work unless otherwise specified",
                "Respect the intellectual property rights of other participants",
                "Accept the decisions of judges and organizers as final",
                "Grant Coding Junction permission to photograph, record, and share event content for promotional purposes",
              ]} color="amber" />
              <p className="mt-4 text-xs bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 p-3 rounded-lg border border-rose-200 dark:border-rose-500/20">
                ⚠️ We reserve the right to disqualify participants who violate event rules or these Terms of Service.
              </p>
            </TermsCard>

            <TermsCard id="ip" icon={Scale} color="emerald" index={5} title="Intellectual Property">
              <p>
                All content on the Coding Junction website — including logos, graphics, text, images, and code — is the
                property of Coding Junction or its content creators and is protected by intellectual property laws.
              </p>
              <BulletList items={[
                "You may not reproduce, distribute, or create derivative works from our content without written permission",
                "User-submitted content (e.g., project submissions, blog posts) remains the intellectual property of the original creator",
                "By submitting content, you grant Coding Junction a non-exclusive, royalty-free license to display and share it within our community",
              ]} color="emerald" />
            </TermsCard>

            <TermsCard id="community" icon={Users} color="blue" index={6} title="Community Guidelines">
              <p>As a member of Coding Junction, you are expected to uphold our community values:</p>
              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                {communityValues.map((v) => {
                  const ValIcon = v.icon;
                  return (
                    <div key={v.title} className={`p-4 rounded-xl bg-gradient-to-br border ${v.color} transition-all hover:scale-[1.02]`}>
                      <ValIcon className={`h-6 w-6 ${v.iconColor}`} />
                      <p className="font-bold text-foreground text-sm mt-2">{v.title}</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{v.description}</p>
                    </div>
                  );
                })}
              </div>
            </TermsCard>

            <TermsCard id="liability" icon={AlertTriangle} color="orange" index={7} title="Limitation of Liability">
              <p>Coding Junction and its organizers, members, and affiliates shall not be liable for:</p>
              <BulletList items={[
                "Any indirect, incidental, or consequential damages arising from the use of our website or services",
                "Loss of data, projects, or submissions due to technical failures",
                "Actions or content posted by third parties or other users",
                "Interruptions in service due to maintenance, updates, or circumstances beyond our control",
              ]} color="orange" />
              <p className="mt-3">Our website and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind.</p>
            </TermsCard>

            <TermsCard id="modifications" icon={RefreshCw} color="teal" index={8} title="Modifications to Terms">
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
                upon posting on this page. Your continued use of our website after modifications constitutes acceptance
                of the updated terms.
              </p>
              <p>We encourage you to review these terms periodically. Significant changes will be communicated through our website or community channels.</p>
            </TermsCard>

            <TermsCard id="governing-law" icon={Gavel} color="indigo" index={9} title="Governing Law">
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes
                arising from these terms shall be subject to the exclusive jurisdiction of the courts in Purba Bardhaman,
                West Bengal, India.
              </p>
            </TermsCard>

            <TermsCard id="contact" icon={Mail} color="cyan" index={10} title="Contact Us">
              <p>If you have questions about these Terms of Service, please reach out:</p>
              <div className="mt-4 p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-500/10 dark:to-blue-500/10 border border-cyan-100 dark:border-cyan-500/20">
                <p className="font-bold text-foreground">Coding Junction</p>
                <p className="text-sm mt-1">University Institute of Technology, Burdwan</p>
                <p className="text-sm">Purba Bardhaman, West Bengal, India</p>
                <p className="text-sm mt-2">
                  Email:{" "}
                  <a href="mailto:ranadebsaha@coding-junction.in" className="text-cyan-600 dark:text-cyan-400 hover:underline font-semibold">
                    ranadebsaha@coding-junction.in
                  </a>
                </p>
              </div>
            </TermsCard>
          </div>
        </div>
      </div>
    </main>
  );
}

/* --- Sub-components --- */

function TermsCard({
  id, icon: Icon, color, index, title, children,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  index: number;
  title: string;
  children: React.ReactNode;
}) {
  const colorMap: Record<string, string> = {
    cyan: "from-cyan-500 to-cyan-600 shadow-cyan-500/20",
    blue: "from-blue-500 to-blue-600 shadow-blue-500/20",
    violet: "from-violet-500 to-violet-600 shadow-violet-500/20",
    rose: "from-rose-500 to-rose-600 shadow-rose-500/20",
    amber: "from-amber-500 to-amber-600 shadow-amber-500/20",
    emerald: "from-emerald-500 to-emerald-600 shadow-emerald-500/20",
    orange: "from-orange-500 to-orange-600 shadow-orange-500/20",
    teal: "from-teal-500 to-teal-600 shadow-teal-500/20",
    indigo: "from-indigo-500 to-indigo-600 shadow-indigo-500/20",
  };

  return (
    <motion.section
      id={id}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="scroll-mt-8 rounded-2xl border border-black/[0.08] dark:border-white/[0.06] bg-white/80 dark:bg-white/[0.02] p-6 md:p-8 transition-all duration-300 hover:border-black/[0.15] dark:hover:border-white/[0.1] hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/[0.02]"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`h-9 w-9 rounded-xl bg-gradient-to-br ${colorMap[color]} flex items-center justify-center shadow-lg`}>
          <Icon className="h-4 w-4 text-white" />
        </div>
        <h2 className="text-lg md:text-xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="space-y-3 text-muted-foreground text-sm md:text-[15px] leading-relaxed pl-12">
        {children}
      </div>
    </motion.section>
  );
}

function BulletList({ items, color = "cyan" }: { items: string[]; color?: string }) {
  const dotColor: Record<string, string> = {
    cyan: "bg-cyan-500/60",
    violet: "bg-violet-500/60",
    rose: "bg-rose-500/60",
    amber: "bg-amber-500/60",
    emerald: "bg-emerald-500/60",
    orange: "bg-orange-500/60",
  };
  return (
    <ul className="space-y-2 mt-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className={`mt-2 h-1.5 w-1.5 rounded-full ${dotColor[color] || "bg-cyan-500/60"} flex-shrink-0`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
