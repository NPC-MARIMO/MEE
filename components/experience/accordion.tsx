"use client"

import { ReactNode, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

interface AccordionProps {
    title: string
    isOpen: boolean
    onToggle: () => void
    children: ReactNode
}

export function Accordion({ title, isOpen, onToggle, children }: AccordionProps) {
    const contentRef = useRef<HTMLDivElement>(null)

    return (
        <div className="border border-white/10 rounded-xl overflow-hidden bg-white/2 transition-all duration-300 hover:border-[#00C483]/30 hover:shadow-[0_0_20px_rgba(0,196,131,0.05)]">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D3F2] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-expanded={isOpen}
            >
                <span className="text-lg sm:text-xl font-semibold text-white">{title}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="w-5 h-5 text-[#00C483]" />
                </motion.div>
            </button>

            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div ref={contentRef} className="px-5 sm:px-6 pb-6">
                    {children}
                </div>
            </motion.div>
        </div>
    )
}
