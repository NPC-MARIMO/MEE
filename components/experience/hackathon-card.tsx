"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { TechBadge } from "./tech-badge"
import { CertificateModal } from "./certificate-modal"

interface HackathonCardProps {
    name: string
    organization: string
    date: string
    description: string
    techStack: string[]
    certificateImage: string
    isLast?: boolean
}

export function HackathonCard({
    name,
    organization,
    date,
    description,
    techStack,
    certificateImage,
    isLast = false,
}: HackathonCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [imageError, setImageError] = useState(false)

    return (
        <>
            <motion.div
                className="relative pl-8 pb-8 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
            >
                {/* Vertical line */}
                {!isLast && (
                    <motion.div
                        className="absolute left-1.75 top-3 bottom-0 w-px bg-linear-to-b from-[#00C483]/50 via-[#00C483]/30 to-transparent"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    />
                )}

                {/* Node */}
                <motion.div
                    className="absolute left-0 top-1.5 w-3.75 h-3.75 rounded-full border-2 border-[#00C483] bg-black group-hover:bg-[#00D3F2]/20 transition-colors"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <motion.div
                        className="absolute inset-1 rounded-full bg-linear-to-br from-[#00D3F2] to-[#00C483]"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    className="p-4 sm:p-6 rounded-xl bg-white/2 border border-white/10 hover:border-[#00C483]/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ borderColor: "rgba(0, 196, 131, 0.3)" }}
                >
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                        {/* Info Section */}
                        <div className="flex-1 space-y-3">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                <span className="text-sm font-mono text-[#00C483]">{date}</span>
                                <span className="hidden sm:block text-gray-600">•</span>
                                <span className="text-xs uppercase tracking-wider text-gray-500">{organization}</span>
                            </div>

                            <h4 className="text-xl font-semibold text-white group-hover:text-[#00C483] transition-colors">
                                {name}
                            </h4>

                            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                                {description}
                            </p>

                            <motion.div
                                className="flex flex-wrap gap-2 pt-2"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                {techStack.map((tech, index) => (
                                    <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                                    >
                                        <TechBadge label={tech} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Certificate Thumbnail */}
                        <div className="shrink-0">
                            <motion.button
                                onClick={() => setIsModalOpen(true)}
                                className="relative w-full lg:w-40 aspect-4/3 rounded-lg overflow-hidden border border-white/10 hover:border-[#00C483]/50 transition-all duration-300 group/cert bg-white/5 flex items-center justify-center"
                                aria-label={`View certificate for ${name}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {imageError ? (
                                    <span className="text-gray-400 text-sm font-medium text-center px-2">No preview available</span>
                                ) : (
                                    <>
                                        {certificateImage ? (
                                            <>
                                                <motion.img
                                                    src={certificateImage}
                                                    alt={`Certificate for ${name}`}
                                                    className="w-full h-full object-contain transition-transform duration-300 group-hover/cert:scale-105"
                                                    whileHover={{ scale: 1.1 }}
                                                    onError={() => setImageError(true)}
                                                />
                                                <motion.div
                                                    className="absolute inset-0 bg-black/40 opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-center justify-center"
                                                    initial={{ opacity: 0 }}
                                                    whileHover={{ opacity: 1 }}
                                                >
                                                    <span className="text-xs text-white font-medium">View Certificate</span>
                                                </motion.div>
                                            </>
                                        ) : (
                                            <span className="text-gray-400 text-sm font-medium text-center px-2">No preview available</span>
                                        )}
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <CertificateModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                imageSrc={certificateImage}
                title={name}
            />
        </>
    )
}
