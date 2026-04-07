import { motion } from 'motion/react';

export default function AmbientBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Top-left primary glow */}
            <motion.div
                animate={{
                    y: [0, -50, 20, 0],
                    x: [0, 30, -20, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-[500px] h-[500px] rounded-full top-[-10%] left-[-10%] mix-blend-screen filter blur-[100px] opacity-40 bg-primary"
            />
            {/* Bottom-right purple glow */}
            <motion.div
                animate={{
                    y: [0, -50, 20, 0],
                    x: [0, 30, -20, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute w-[600px] h-[600px] bg-zinc-500 rounded-full bottom-[-10%] right-[-10%] mix-blend-screen filter blur-[100px] opacity-20"
            />
            {/* Mid-page accent glow */}
            <motion.div
                animate={{
                    y: [0, -50, 20, 0],
                    x: [0, 30, -20, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
                className="absolute w-80 h-80 bg-stone-400 rounded-full top-[40%] left-[60%] mix-blend-screen filter blur-[80px] opacity-12"
            />
        </div>
    );
}
