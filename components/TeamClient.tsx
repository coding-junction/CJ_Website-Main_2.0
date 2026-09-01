"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import json from "../app/Team/team.json";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { TwitterLogoIcon, LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { useIsMobile } from "@/hooks/use-mobile";

const TeamClient = () => {
  const teamArray = json.teamArray;
  const isMobile = useIsMobile();

  const Gen = [
    { label: "President", key: "p" },
    { label: "Gen 1", key: "1" },
    { label: "Gen 2", key: "2" },
    { label: "Gen 3", key: "3" },
    { label: "Gen 4", key: "4" }
  ];

  const [selectedGen, setSelectedGen] = useState("p");

  const navigateGeneration = (direction: 'prev' | 'next') => {
    const currentIndex = Gen.findIndex(g => g.key === selectedGen);
    if (direction === 'prev') {
      const newIndex = currentIndex <= 0 ? Gen.length - 1 : currentIndex - 1;
      setSelectedGen(Gen[newIndex].key);
    } else {
      const newIndex = currentIndex >= Gen.length - 1 ? 0 : currentIndex + 1;
      setSelectedGen(Gen[newIndex].key);
    }
  };

  return (
    <>
      {/* Mobile Floating Generation Selector */}
      <AnimatePresence>
        {isMobile && (
          <motion.div
            className="fixed top-24 left-0 right-0 z-40 flex justify-center pointer-events-auto"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <motion.div
              className="flex items-center gap-3 bg-white/80 dark:bg-black/60 border border-black/[0.08] dark:border-white/[0.08] backdrop-blur-xl py-3 px-5 rounded-full shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground h-8 w-8 p-0 flex items-center justify-center"
                onClick={() => navigateGeneration('prev')}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <span className="text-foreground dark:text-white font-semibold px-3 min-w-[100px] text-center">
                {Gen.find(g => g.key === selectedGen)?.label}
              </span>

              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground h-8 w-8 p-0 flex items-center justify-center"
                onClick={() => navigateGeneration('next')}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex flex-1 relative">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex w-64 bg-white/50 dark:bg-[#0a0a0f]/80 backdrop-blur-sm p-6 flex-col border-r border-black/[0.06] dark:border-white/[0.06] md:sticky md:top-32 md:mt-32 md:h-[calc(100vh-8rem)]">
          <div className="mt-8 space-y-1.5">
            {Gen.map((gen) => (
              <Button
                key={gen.key}
                variant={selectedGen === gen.key ? "default" : "ghost"}
                onClick={() => setSelectedGen(gen.key)}
                className={`w-full justify-start h-10 text-base transition-all duration-300 ${
                  selectedGen === gen.key
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {gen.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto mt-24 md:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white">
              Meet Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
                Team
              </span>
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              The people behind Coding Junction who make it all happen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-2">
            {teamArray
              .filter(member => member.gen === selectedGen)
              .map((member, idx) => (
                <motion.div
                  key={member.name}
                  className="group glass-card hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: idx * 0.06,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 120,
                  }}
                  layout
                >
                  <div className="glass-card-inner backdrop-blur-sm flex flex-col items-center text-center gap-4 p-6 md:p-8 h-full">
                    {/* Hover glow */}
                    <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-indigo-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl" />

                    {/* Avatar */}
                    <motion.div
                      className="h-28 w-28 rounded-full overflow-hidden border-2 border-black/[0.06] dark:border-white/[0.06] group-hover:border-indigo-500/40 transition-all duration-500 shadow-lg group-hover:shadow-indigo-500/10"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.06 + 0.15, type: "spring", stiffness: 180 }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={112}
                        height={112}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>

                    {/* Info */}
                    <div>
                      <h3 className="text-lg font-bold text-foreground dark:text-white">
                        {member.name}
                      </h3>
                      {member.role && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {member.role}
                        </p>
                      )}
                    </div>

                    {/* Social links */}
                    <div className="flex justify-center gap-2 mt-auto">
                      {member.tw && (
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                          className="h-8 w-8 rounded-lg border-black/[0.08] dark:border-white/[0.08] hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
                        >
                          <Link href={member.tw} target="_blank" rel="noopener noreferrer">
                            <TwitterLogoIcon className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {member.li && (
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                          className="h-8 w-8 rounded-lg border-black/[0.08] dark:border-white/[0.08] hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300"
                        >
                          <Link href={member.li} target="_blank" rel="noopener noreferrer">
                            <LinkedInLogoIcon className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {member.gh && (
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                          className="h-8 w-8 rounded-lg border-black/[0.08] dark:border-white/[0.08] hover:bg-gray-900 hover:text-white hover:border-gray-900 dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                        >
                          <Link href={member.gh} target="_blank" rel="noopener noreferrer">
                            <GitHubLogoIcon className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {member.ig && (
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                          className="h-8 w-8 rounded-lg border-black/[0.08] dark:border-white/[0.08] hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300"
                        >
                          <Link href={member.ig} target="_blank" rel="noopener noreferrer">
                            <InstagramLogoIcon className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {member.em && (
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                          className="h-8 w-8 rounded-lg border-black/[0.08] dark:border-white/[0.08] hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all duration-300"
                        >
                          <Link href={`mailto:${member.em}`} target="_blank" rel="noopener noreferrer">
                            <Mail className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamClient;
