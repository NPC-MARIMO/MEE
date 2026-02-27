"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function FirstVisitLoader() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const visited = sessionStorage.getItem("mosscript-visited")
    if (!visited) {
      setShow(true)
      sessionStorage.setItem("mosscript-visited", "true")
      const timer = setTimeout(() => setShow(false), 2200)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <motion.h1
              className="font-mono text-2xl font-semibold tracking-wider text-foreground md:text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Mosscript
            </motion.h1>
            <motion.div
              className="mx-auto mt-4 h-px bg-primary"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
