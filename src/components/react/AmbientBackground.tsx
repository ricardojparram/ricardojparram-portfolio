import { motion } from 'motion/react';

export default function AmbientBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <motion.div
                animate={{
                    y: [0, -24, 0],
                    x: [0, 18, 0],
                    scale: [1, 1.04, 1],
                }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-105 h-105 rounded-full top-[-12%] left-[-10%] mix-blend-screen filter blur-[120px] opacity-10 bg-zinc-300"
            />
            <motion.div
                animate={{
                    y: [0, 14, 0],
                    x: [0, -14, 0],
                    scale: [1, 1.03, 1],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute w-130 h-130 bg-zinc-500 rounded-full bottom-[-18%] right-[-14%] mix-blend-screen filter blur-[130px] opacity-8"
            />
        </div>
    );
}
