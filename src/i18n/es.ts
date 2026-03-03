const es = {
    nav: {
        work: 'Proyectos',
        about: 'Sobre mí',
        experience: 'Experiencia',
        services: 'Servicios',
        cta: 'Contáctame',
    },
    hero: {
        badge: 'Disponible para trabajar',
    },
    work: {
        title: 'Proyectos',
    },
    about: {
        title: 'Sobre mí',
        subtitle: 'Mi trayectoria',
        skills: {
            frontend: 'Frontend',
            design: 'Diseño',
            backend: 'Backend',
            mobile: 'Móvil',
        },
    },
    experience: {
        title: 'Experiencia laboral',
        current: 'Actual',
    },
    services: {
        title: 'Lo que hago',
    },
    contact: {
        title: 'Trabajemos juntos.',
        subtitle: '¿Tienes un proyecto en mente? Contáctame para crear tu próxima aplicación web o móvil.',
        email: 'Envíame un email',
        cv: 'Currículum',
    },
} as const;

export default es;

// Derive a structural type with all strings widened to `string`,
// so other locales can implement it with different string literals.
type DeepString<T> = { [K in keyof T]: T[K] extends object ? DeepString<T[K]> : string };
export type UIDict = DeepString<typeof es>;

