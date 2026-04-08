import {
    AppWindow,
    ArrowUpRight,
    Code2,
    FileText,
    GaugeCircle,
    Github,
    Linkedin,
    Mail,
    Palette,
    Rocket,
    ServerCog,
    Smartphone,
    TerminalSquare,
    Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type IconComponent = LucideIcon;

export const skillIconMap: Record<string, IconComponent> = {
    code: Code2,
    palette: Palette,
    terminal: TerminalSquare,
    mobile: Smartphone,
    cpu: Smartphone,
};

export const serviceIconMap: Record<string, IconComponent> = {
    web: AppWindow,
    mobile: Smartphone,
    interactive: Zap,
    backend: ServerCog,
    design: Palette,
    performance: GaugeCircle,
};

export const defaultSkillIcon = Code2;
export const defaultServiceIcon = Rocket;

export const commonIconMap = {
    email: Mail,
    cv: FileText,
    github: Github,
    linkedin: Linkedin,
    code: Code2,
    external: ArrowUpRight,
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