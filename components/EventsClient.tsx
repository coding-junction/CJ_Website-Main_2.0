"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Search, CalendarDays, MapPin, Sparkles } from "lucide-react";

export interface EventType {
  _id: string;
  title: string;
  date?: string;
  location?: string;
  description?: string;
  images?: {
    asset?: {
      _id: string;
      url: string;
    };
  }[];
}

/* ─── Animated Hero (used in Events/page.tsx) ─── */
export function EventsHero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-purple-500/10 dark:from-indigo-500/20 dark:via-violet-500/10 dark:to-purple-500/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-400/10 via-transparent to-transparent dark:from-indigo-400/20" />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 pt-32 pb-20 md:pt-40 md:pb-28 relative">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
          >
            Past{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500">
              Events
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-base md:text-lg max-w-xl"
          >
            Stay updated with our latest events, workshops, and meetups. Explore what we&apos;ve been up to.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-border backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs text-muted-foreground">
              Browse our event archive
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
  );
}

/* ─── Event Card ─── */
const EventCard = ({
  event,
  expanded,
  onClick,
  index,
}: {
  event: EventType;
  expanded: boolean;
  onClick: () => void;
  index: number;
}) => (
  <motion.div
    className="group glass-card cursor-pointer"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08, type: "spring", stiffness: 120 }}
    onClick={onClick}
  >
    <div className="glass-card-inner h-full flex flex-col">
      {/* Hover glow */}
      <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl" />

      {/* Main event image */}
      {event.images && event.images[0]?.asset?.url && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
          <Image
            src={event.images[0].asset.url}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Date badge on image */}
          {event.date && (
            <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-black/5 dark:border-white/10">
              <p className="text-xs font-bold text-foreground dark:text-white leading-none">
                {new Date(event.date).toLocaleDateString("en-IN", { day: "numeric" })}
              </p>
              <p className="text-[10px] uppercase text-muted-foreground leading-none mt-0.5">
                {new Date(event.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
              </p>
            </div>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-1 relative">
        <h3 className="text-xl font-bold text-foreground dark:text-white mb-2">
          {event.title}
        </h3>

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          {event.date && (
            <span className="flex items-center gap-1">
              <CalendarDays className="h-3 w-3" />
              {new Date(event.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          )}
          {event.location && (
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {event.location}
            </span>
          )}
        </div>

        <p className="text-sm text-muted-foreground flex-1 mb-3 leading-relaxed">
          {event.description}
        </p>

        {/* Expanded gallery */}
        <AnimatePresence>
          {expanded && event.images && event.images.length > 1 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-3 overflow-hidden"
            >
              <div className="text-xs font-semibold text-foreground dark:text-white uppercase tracking-wider mb-2">
                Gallery
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {event.images.slice(1).map(
                  (img, idx) =>
                    img.asset?.url && (
                      <div key={img.asset._id || idx} className="relative rounded-lg border border-black/[0.06] dark:border-white/[0.06] overflow-hidden w-full h-24 sm:h-28">
                        <Image
                          src={img.asset.url}
                          alt={`Gallery image ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand hint */}
        {event.images && event.images.length > 1 && (
          <div className="mt-3 text-xs font-medium text-indigo-500 dark:text-indigo-400 text-center">
            {expanded ? "Click to collapse" : "Click to view gallery"}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

/* ─── Events Client ─── */
export default function EventsClient({ initialEvents }: { initialEvents: EventType[] }) {
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredEvents = initialEvents.filter((event) => {
    const searchText = search.toLowerCase();
    return (
      event.title?.toLowerCase().includes(searchText) ||
      event.description?.toLowerCase().includes(searchText) ||
      event.location?.toLowerCase().includes(searchText)
    );
  });

  return (
    <>
      {/* Search */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-md group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-indigo-500" />
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0a0a0f] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all backdrop-blur-sm shadow-sm"
          />
        </div>
      </div>

      <AnimatePresence>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <EventCard
                key={event._id}
                event={event}
                expanded={expandedId === event._id}
                index={index}
                onClick={() =>
                  setExpandedId(expandedId === event._id ? null : event._id)
                }
              />
            ))
          ) : (
            <motion.div
              className="col-span-full text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-indigo-400" />
              </div>
              <p className="text-foreground dark:text-white font-semibold mb-1">No events found</p>
              <p className="text-sm text-muted-foreground">Try adjusting your search terms.</p>
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </>
  );
}
