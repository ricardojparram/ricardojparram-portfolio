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
            className="flex flex-col gap-6 items-start py-10 relative"
        >
            {/* Name badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/15 text-xs font-bold uppercase tracking-wider mb-2 text-green-500">
                <span className="w-2 h-2 rounded-full animate-pulse bg-green-500" />
                {badgeText}
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white text-glow leading-[1.1]">
                {heroTitle.split(' ').slice(0, -1).join(' ')}{' '}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                    {heroTitle.split(' ').at(-1)}.
                </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                {heroSubtitle}
            </p>
        </motion.div>
    );
}
