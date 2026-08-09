"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Shield, ArrowLeft, Lock, Eye, Database, Users, Server, Baby, RefreshCw, Mail } from "lucide-react";

const sections = [
  { id: "intro", label: "Introduction" },
  { id: "collect", label: "Information We Collect" },
  { id: "usage", label: "How We Use It" },
  { id: "sharing", label: "Data Sharing" },
  { id: "security", label: "Data Security" },
  { id: "rights", label: "Your Rights" },
  { id: "third-party", label: "Third-Party Services" },
  { id: "children", label: "Children's Privacy" },
  { id: "changes", label: "Policy Changes" },
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

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-rose-500/10 dark:from-indigo-500/20 dark:via-purple-500/10 dark:to-rose-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-400/10 via-transparent to-transparent dark:from-indigo-400/20" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-4 md:px-6 pt-12 pb-20 md:pt-16 md:pb-28 relative">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl shadow-indigo-500/20 mb-6"
            >
              <Shield className="h-8 w-8 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
            >
              Privacy{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                Policy
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-base md:text-lg max-w-xl"
            >
              How we collect, use, and protect your personal information at Coding Junction.
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

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full text-background">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,30 1440,30 L1440,60 L0,60 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex gap-12 max-w-6xl mx-auto">
          {/* Sticky Table of Contents - Desktop */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden lg:block w-56 flex-shrink-0"
          >
            <div className="sticky top-8">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-4">
                On this page
              </p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-sm py-1.5 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </motion.aside>

          {/* Main content */}
          <div className="flex-1 max-w-3xl space-y-8">
            <PolicyCard id="intro" icon={Shield} color="indigo" index={0} title="Introduction">
              <p>
                Welcome to Coding Junction (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), the official tech
                community of University Institute of Technology, Burdwan (UIT, BU). We are committed to protecting
                your privacy and ensuring the security of your personal information.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                visit our website at{" "}
                <span className="text-indigo-500 dark:text-indigo-400 font-semibold">coding-junction.in</span> and
                participate in our events, workshops, and community activities.
              </p>
            </PolicyCard>

            <PolicyCard id="collect" icon={Database} color="blue" index={1} title="Information We Collect">
              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-2">Personal Information</h4>
              <p>When you register for our events, join our community, or interact with our website, we may collect:</p>
              <BulletList items={[
                "Full name and email address",
                "University enrollment details (roll number, department, year)",
                "Phone number (optional)",
                "Social media profiles (GitHub, LinkedIn, etc.)",
                "Profile photographs submitted for team or event pages",
              ]} />

              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-2 mt-6">Automatically Collected</h4>
              <p>When you visit our website, we may automatically collect:</p>
              <BulletList items={[
                "Browser type and version",
                "Device type and operating system",
                "Pages visited and time spent on the site",
                "IP address and approximate location",
                "Referring website or link",
              ]} />
            </PolicyCard>

            <PolicyCard id="usage" icon={Eye} color="violet" index={2} title="How We Use Your Information">
              <p>We use the collected information to:</p>
              <BulletList items={[
                "Register you for events, hackathons, and workshops",
                "Communicate updates about club activities and announcements",
                "Display member profiles on team and gallery pages",
                "Improve our website's performance and user experience",
                "Analyze site traffic and engagement patterns",
                "Send newsletters and event invitations (with your consent)",
              ]} />
            </PolicyCard>

            <PolicyCard id="sharing" icon={Users} color="cyan" index={3} title="Data Sharing & Disclosure">
              <p>
                We do <strong className="text-foreground">not</strong> sell, trade, or rent your personal information
                to third parties. We may share your data only in the following circumstances:
              </p>
              <div className="space-y-3 mt-4">
                <InfoChip label="With your consent" description="When you explicitly agree to share information (e.g., publishing your profile on the team page)" />
                <InfoChip label="Service providers" description="Trusted third-party services that help us operate our website (e.g., Clerk for authentication, Vercel for hosting, Firebase for data storage)" />
                <InfoChip label="Legal requirements" description="If required by law or to protect the rights and safety of Coding Junction and its members" />
              </div>
            </PolicyCard>

            <PolicyCard id="security" icon={Lock} color="emerald" index={4} title="Data Security">
              <p>We implement appropriate technical and organizational measures to protect your personal data:</p>
              <BulletList items={[
                "Encrypted data transmission (HTTPS / TLS)",
                "Secure authentication via Clerk",
                "Access controls limiting data visibility to authorized administrators",
                "Regular review of our security practices",
              ]} />
              <p className="mt-4 text-xs bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 p-3 rounded-lg border border-amber-200 dark:border-amber-500/20">
                ⚠️ No method of electronic transmission or storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </PolicyCard>

            <PolicyCard id="rights" icon={Shield} color="rose" index={5} title="Your Rights">
              <p>You have the right to:</p>
              <BulletList items={[
                "Access the personal data we hold about you",
                "Request correction of inaccurate data",
                "Request deletion of your personal data",
                "Withdraw consent for communications at any time",
                "Opt out of non-essential cookies",
              ]} />
              <p className="mt-3">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:ranadebsaha@coding-junction.in" className="text-indigo-500 dark:text-indigo-400 hover:underline font-semibold">
                  ranadebsaha@coding-junction.in
                </a>.
              </p>
            </PolicyCard>

            <PolicyCard id="third-party" icon={Server} color="orange" index={6} title="Third-Party Services">
              <p>Our website uses the following third-party services that may collect data independently:</p>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <ServiceBadge name="Clerk" purpose="Authentication" />
                <ServiceBadge name="Google Analytics" purpose="Traffic analysis" />
                <ServiceBadge name="Vercel" purpose="Hosting" />
                <ServiceBadge name="Firebase" purpose="Data storage" />
              </div>
              <p className="mt-4 text-sm">Each of these services has its own privacy policy governing how they handle your data.</p>
            </PolicyCard>

            <PolicyCard id="children" icon={Baby} color="pink" index={7} title="Children's Privacy">
              <p>
                Our services are not directed to individuals under the age of 13. We do not knowingly collect personal
                information from children. If we become aware of such collection, we will take steps to delete the
                information promptly.
              </p>
            </PolicyCard>

            <PolicyCard id="changes" icon={RefreshCw} color="teal" index={8} title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an
                updated &quot;Last updated&quot; date. We encourage you to review this page periodically for any changes.
              </p>
            </PolicyCard>

            <PolicyCard id="contact" icon={Mail} color="indigo" index={9} title="Contact Us">
              <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
              <div className="mt-4 p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 border border-indigo-100 dark:border-indigo-500/20">
                <p className="font-bold text-foreground">Coding Junction</p>
                <p className="text-sm mt-1">University Institute of Technology, Burdwan</p>
                <p className="text-sm">Purba Bardhaman, West Bengal, India</p>
                <p className="text-sm mt-2">
                  Email:{" "}
                  <a href="mailto:ranadebsaha@coding-junction.in" className="text-indigo-500 dark:text-indigo-400 hover:underline font-semibold">
                    ranadebsaha@coding-junction.in
                  </a>
                </p>
              </div>
            </PolicyCard>
          </div>
        </div>
      </div>
    </main>
  );
}

/* --- Sub-components --- */

function PolicyCard({
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
    indigo: "from-indigo-500 to-indigo-600 shadow-indigo-500/20",
    blue: "from-blue-500 to-blue-600 shadow-blue-500/20",
    violet: "from-violet-500 to-violet-600 shadow-violet-500/20",
    cyan: "from-cyan-500 to-cyan-600 shadow-cyan-500/20",
    emerald: "from-emerald-500 to-emerald-600 shadow-emerald-500/20",
    rose: "from-rose-500 to-rose-600 shadow-rose-500/20",
    orange: "from-orange-500 to-orange-600 shadow-orange-500/20",
    pink: "from-pink-500 to-pink-600 shadow-pink-500/20",
    teal: "from-teal-500 to-teal-600 shadow-teal-500/20",
  };

  return (
    <motion.section
      id={id}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="scroll-mt-8 rounded-2xl border border-border bg-gray-50/50 dark:bg-white/[0.02] p-6 md:p-8 transition-all duration-300 hover:border-gray-300 dark:hover:border-white/10 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-none"
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500/60 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InfoChip({ label, description }: { label: string; description: string }) {
  return (
    <div className="p-3 rounded-lg bg-white dark:bg-white/5 border border-border">
      <p className="font-semibold text-foreground text-sm">{label}</p>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
    </div>
  );
}

function ServiceBadge({ name, purpose }: { name: string; purpose: string }) {
  return (
    <div className="p-3 rounded-lg bg-white dark:bg-white/5 border border-border text-center">
      <p className="font-semibold text-foreground text-sm">{name}</p>
      <p className="text-xs text-muted-foreground">{purpose}</p>
    </div>
  );
}
