import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function ScrollReveal({ children, delay = 0, duration = 0.8, distance = 50, direction = 'up' }) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const getInitialPosition = () => {
    switch(direction) {
      case 'up': return { y: distance, x: 0 }
      case 'down': return { y: -distance, x: 0 }
      case 'left': return { x: distance, y: 0 }
      case 'right': return { x: -distance, y: 0 }
      default: return { y: distance, x: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ ...getInitialPosition(), opacity: 0 }}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : { ...getInitialPosition(), opacity: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function ParallaxImage({ src, alt, speed = 0.5 }) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const elementCenter = rect.top + rect.height / 2
        const viewportCenter = window.innerHeight / 2
        const distance = viewportCenter - elementCenter
        setOffset(distance * speed)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <motion.div
      ref={ref}
      style={{ y: offset }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  )
}

export function HoverScale({ children, scale = 1.05 }) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, staggerDelay = 0.1 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, duration = 0.5 }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration },
    },
  }

  return (
    <motion.div variants={itemVariants}>
      {children}
    </motion.div>
  )
}