import { motion } from 'motion/react';

interface HeroProps {
    name: string;
    heroTitle: string;
    heroSubtitle: string;
    badgeText: string;
}

export default function Hero({ name, heroTitle, heroSubtitle, badgeText }: HeroProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 items-start py-4 relative"
        >
            {/* Name badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-wider mb-2 text-primary-light">
                <span className="w-2 h-2 rounded-full animate-pulse bg-primary" />
                {badgeText}
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white text-glow leading-[1.08]">
                {heroTitle.split(' ').slice(0, -1).join(' ')}{' '}
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-500">
                    {heroTitle.split(' ').at(-1)}.
                </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
                {heroSubtitle}
            </p>
        </motion.div>
    );
}
