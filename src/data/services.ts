export interface Service {
    title: string;
    description: string;
    icon: string; // SVG path or ID
    details: string[];
}

export const services: Service[] = [
    {
        title: "Arquitectura de Automatización",
        description: "Diseño e implementación de flujos complejos utilizando n8n, Make y Python para eliminar tareas repetitivas.",
        icon: "automation",
        details: ["Optimización de procesos", "Integración de APIs", "Flujos Inteligentes"]
    },
    {
        title: "Desarrollo Web Premium",
        description: "Sitios web de alto rendimiento con Astro y React, enfocados en velocidad, SEO y una estética brutalista minimalista.",
        icon: "web",
        details: ["Rendimiento Ultra Rápido", "SEO Estratégico", "Diseño Editorial"]
    },
    {
        title: "Manejo de Redes Sociales",
        description: "Gestión estratégica y automatizada de presencia digital, capturando leads directamente desde interacciones sociales.",
        icon: "social",
        details: ["Captura de Leads DM", "Contenido Técnico", "Crecimiento Orgánico"]
    },
    {
        title: "Integraciones de Datos (3D)",
        description: "Visualización y orquestación de datos en tiempo real entre CRMs, bases de datos y dashboards interactivos.",
        icon: "data",
        details: ["Sincronización Real-time", "Dashboards 3D", "Seguridad de Datos"]
    }
];
