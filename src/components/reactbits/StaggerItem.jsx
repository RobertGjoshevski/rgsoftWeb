import React from 'react'
import { motion } from 'framer-motion'

const StaggerItem = ({
    children,
    className = '',
    direction = 'up',
    distance = 30,
    duration = 0.6,
    delay = 0,
    ...props
}) => {
    const directions = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { y: 0, x: distance },
        right: { y: 0, x: -distance },
    }

    const initial = directions[direction] || directions.up

    const itemVariants = {
        hidden: { opacity: 0, ...initial },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.div
            className={className}
            variants={itemVariants}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export default StaggerItem

