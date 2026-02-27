"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { TechBadge } from "./tech-badge"

interface TimelineItemProps {
    date: string
    role: string
    organization: string
    description: string
    techStack: string[]
    isLast?: boolean
    isCurrentlyHiring?: boolean
}

export function TimelineItem({
    date,
    role,
    organization,
    description,
    techStack,
    isLast = false,
    isCurrentlyHiring = false,
}: TimelineItemProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            className="relative pl-8 pb-8 group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            {/* Vertical line */}
            {!isLast && (
                <div className="absolute left-1.75 top-3 bottom-0 w-px bg-linear-to-b from-[#00C483]/50 via-[#00C483]/30 to-transparent" />
            )}

            {/* Node */}
            <motion.div
                className="absolute left-0 top-1.5 w-3.75 h-3.75 rounded-full border-2 border-[#00C483] bg-black group-hover:bg-[#00D3F2]/20 transition-colors cursor-pointer"
                whileHover={{ scale: 1.3 }}
                onClick={() => isCurrentlyHiring && setIsOpen(!isOpen)}
            >
                <div className="absolute inset-1 rounded-full bg-linear-to-br from-[#00D3F2] to-[#00C483]" />
            </motion.div>

            {/* Content */}
            <div className="space-y-3">
                <motion.div
                    onClick={() => isCurrentlyHiring && setIsOpen(!isOpen)}
                    className={isCurrentlyHiring ? "cursor-pointer" : ""}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="text-sm font-mono text-[#00C483]">{date}</span>
                        <span className="hidden sm:block text-gray-600">•</span>
                        <span className="text-xs uppercase tracking-wider text-gray-500">{organization}</span>
                    </div>

                    <motion.h4
                        className="text-xl font-semibold text-white group-hover:text-[#00C483] transition-colors"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {role}
                    </motion.h4>
                </motion.div>

                {/* Accordion content */}
                {isCurrentlyHiring && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="bg-[#00C483]/10 border border-[#00C483]/30 rounded-lg p-4 mt-2">
                            <p className="text-gray-300 text-sm">
                                Currently looking for exciting opportunities in full-stack development, open to both full-time and remote positions.
                            </p>
                        </div>
                    </motion.div>
                )}

                {!isCurrentlyHiring && (
                    <>
                        <motion.p
                            className="text-gray-400 leading-relaxed text-sm sm:text-base"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            {description}
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-2 pt-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {techStack.map((tech) => (
                                <TechBadge key={tech} label={tech} />
                            ))}
                        </motion.div>
                    </>
                )}
            </div>
        </motion.div>
    )
}
