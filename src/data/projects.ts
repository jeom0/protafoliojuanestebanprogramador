export interface Project {
    title: string;
    summary: string;
    tags: string[];
    url: string;
    year: string;
    impactBullets: string[];
    featured: boolean;
    image: string;
}

export const projects: Project[] = [
    {
        title: "Portal Web Conduser",
        summary: "Plataforma integral para educación vial. Un portal web robusto que orquesta inscripciones, pagos y gestión de usuarios en tiempo real.",
        tags: ["Portal Web", "Full-Stack", "Educación"],
        url: "https://csconduser.com/",
        year: "2024",
        impactBullets: [
            "Sistema centralizado de gestión académica.",
            "Integrantes de pagos automatizadas.",
            "Panel de control administrativo de alto rendimiento."
        ],
        featured: true,
        image: "/images/project-conduser.png"
    },
    {
        title: "Automatización de Soporte & Ventas",
        summary: "Servicio de orquestación con n8n y WhatsApp API para automatizar el ciclo completo de venta y soporte al cliente.",
        tags: ["n8n", "WhatsApp", "Ventas"],
        url: "#",
        year: "2024",
        impactBullets: [
            "Respuesta instantánea 24/7.",
            "Calificación automática de leads.",
            "Cierre de ventas sin intervención manual."
        ],
        featured: true,
        image: "/images/project-whatsapp.png"
    },
    {
        title: "Estratega de Crecimiento & Redes",
        summary: "Manejo integral de redes sociales con automatización de engagement y captura de leads.",
        tags: ["Social Media", "Automation", "Leads"],
        url: "#",
        year: "2024",
        impactBullets: [
            "Captura de más de 500 leads mensuales.",
            "Programación inteligente de contenido.",
            "Análisis de sentimiento automatizado."
        ],
        featured: false,
        image: "/images/project-instagram.png"
    }
];
