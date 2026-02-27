"use client"

import { useEffect, useCallback } from "react"
import { X } from "lucide-react"

interface CertificateModalProps {
    isOpen: boolean
    onClose: () => void
    imageSrc: string
    title: string
}

export function CertificateModal({ isOpen, onClose, imageSrc, title }: CertificateModalProps) {
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose()
            }
        },
        [onClose]
    )

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown)
            document.body.style.overflow = "hidden"
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.body.style.overflow = "unset"
        }
    }, [isOpen, handleKeyDown])

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50 scale-60 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`Certificate: ${title}`}
        >
            <div
                className="relative max-w-4xl w-full bg-zinc-900 border border-white/10 rounded-lg overflow-hidden animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <h3 className="text-lg font-medium text-white">{title}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <div className="p-4">
                    <img
                        src={imageSrc}
                        alt={`Certificate for ${title}`}
                        className=" rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}
