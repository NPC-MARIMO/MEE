"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Accordion } from "./accordion"
import { TimelineItem } from "./timeline-item"
import { HackathonCard } from "./hackathon-card"
import hackathons from "@/data/hackathon.json"
import jobExperiences from "@/data/job-experience.json"



export function ExperienceSection() {
    const [openAccordion, setOpenAccordion] = useState<string | null>("hackathons")

    const handleToggle = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id)
    }


    return (
        <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12 sm:mb-16"
                >
                    <span className="inline-block font-mono text-sm text-[#00C483] mb-4">
                        {"// Experience"}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
                        Engineering Trajectory
                    </h2>
                    <p className="text-gray-400 text-lg sm:text-xl max-w-2xl text-pretty">
                        A path defined by increasingly complex systems and deeper technical mastery.
                    </p>
                </motion.div>

                {/* Accordions */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, staggerChildren: 0.1 }}
                    viewport={{ once: true }}
                >
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
                        <Accordion
                            title="Hackathons"
                            isOpen={openAccordion === "hackathons"}
                            onToggle={() => handleToggle("hackathons")}
                        >
                            <motion.div
                                className="pt-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {hackathons.map((hackathon, index) => (
                                    <motion.div
                                        key={hackathon.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <HackathonCard
                                            {...hackathon}
                                            isLast={index === hackathons.length - 1}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </Accordion>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
                        <Accordion
                            title="Job / Internship"
                            isOpen={openAccordion === "jobs"}
                            onToggle={() => handleToggle("jobs")}
                        >
                            <motion.div
                                className="pt-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {jobExperiences.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center py-12 gap-6">
                                        <p className="text-gray-300 text-lg sm:text-xl">
                                            Looking for exciting opportunities
                                        </p>
                                        <a
                                            href="/contact"
                                            className="px-6 py-3 bg-[#00C483] text-black font-semibold rounded-lg hover:bg-[#00a86b] transition-colors"
                                        >
                                            Hire Me
                                        </a>
                                    </div>
                                ) : (
                                    <>
                                        {jobExperiences.map((experience, index) => (
                                            <motion.div
                                                key={experience.id || index}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <TimelineItem
                                                    {...experience}
                                                    isCurrentlyHiring={true}
                                                    isLast={index === jobExperiences.length - 1}
                                                />
                                            </motion.div>
                                        ))}
                                        <div className="mt-8 text-center">
                                            <a
                                                href="/contact"
                                                className="inline-block px-6 py-3 bg-[#00C483] text-black font-semibold rounded-lg hover:bg-[#00a86b] transition-colors"
                                            >
                                                Hire Me
                                            </a>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        </Accordion>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
