import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import ArrowOutward from "../components/icons/ArrowOutward.astro";
import CVIcon from "../components/icons/CVIcon.astro";
import Email from "../components/icons/Email.astro";
import Github from "../components/icons/Github.astro";
import Linkedin from "../components/icons/Linkedin.astro";
import CodeIcon from "../components/icons/CodeIcon.astro";
import PaletteIcon from "../components/icons/PaletteIcon.astro";
import TerminalIcon from "../components/icons/TerminalIcon.astro";
import MobileIcon from "../components/icons/MobileIcon.astro";
import WebIcon from "../components/icons/WebIcon.astro";
import InteractiveIcon from "../components/icons/InteractiveIcon.astro";
import PerformanceIcon from "../components/icons/PerformanceIcon.astro";

export type IconComponent = AstroComponentFactory;

export const skillIconMap: Record<string, IconComponent> = {
    code: CodeIcon,
    palette: PaletteIcon,
    terminal: TerminalIcon,
    mobile: MobileIcon,
    cpu: MobileIcon,
};

export const serviceIconMap: Record<string, IconComponent> = {
    web: WebIcon,
    mobile: MobileIcon,
    interactive: InteractiveIcon,
    backend: TerminalIcon,
    design: PaletteIcon,
    performance: PerformanceIcon,
};

export const defaultSkillIcon = CodeIcon;
export const defaultServiceIcon = WebIcon;

export const commonIconMap = {
    email: Email,
    cv: CVIcon,
    github: Github,
    linkedin: Linkedin,
    code: CodeIcon,
    external: ArrowOutward,
};

export function withIcon<T extends { iconIdentifier?: string }>(
    items: T[],
    map: Record<string, IconComponent>,
    fallback: IconComponent,
): Array<T & { Icon: IconComponent }> {
    return items.map((item) => ({
        ...item,
        Icon: map[item.iconIdentifier ?? ""] ?? fallback,
    }));
}