"use client"

interface TechBadgeProps {
    label: string
}

export function TechBadge({ label }: TechBadgeProps) {
    return (
        <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10 transition-colors hover:border-[#00C483]/30 hover:text-[#00D3F2]">
            {label}
        </span>
    )
}
