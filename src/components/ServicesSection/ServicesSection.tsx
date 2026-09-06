import { motion } from "framer-motion";
import { Code2, Palette, Cpu, Layers } from "lucide-react";
import { MagicCard } from "../lightswind/magic-card";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    description: "Building production-ready, dynamic web applications with modern frontend frameworks and structured backend solutions.",
  },
  {
    icon: Palette,
    title: "UI/UX & Frontend Engineering",
    description: "Crafting pixel-perfect, responsive, and accessible user interfaces focused on smooth animations and user experience.",
  },
  {
    icon: Cpu,
    title: "Performance & Optimization",
    description: "Enhancing web application speed, optimizing asset loading, and ensuring flawless cross-browser compatibility.",
  },
  {
    icon: Layers,
    title: "API & Database Integration",
    description: "Developing robust RESTful APIs, handling 2FA/Authentication systems, and managing structured database operations.",
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient-primary">
          What I Do
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Delivering comprehensive digital solutions that cover the entire lifecycle of professional product engineering.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <MagicCard
                className="h-full p-8 rounded-[2rem] border border-border/80 bg-card/80"
                gradientSize={280}
                gradientColor="rgba(139, 92, 246, 0.12)"
                gradientFrom="#8b5cf6"
                gradientTo="#38bdf8"
              >
                <div className="flex flex-col h-full justify-between gap-6">
                  <div>
                    {/* Consistent Icon Styling with signature primary color */}
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
