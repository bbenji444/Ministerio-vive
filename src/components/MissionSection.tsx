import { Heart, Eye, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Misión",
    description:
      "Ofrecer salud integral —mental, física y educativa— para prevenir violencia y promover el desarrollo de niños, niñas, adolescentes y familias en comunidades vulnerables.",
  },
  {
    icon: Eye,
    title: "Visión",
    description:
      "Ser una organización reconocida que transforma vidas a través de programas integrales, fortaleciendo comunidades y generando esperanza para un futuro digno.",
  },
  {
    icon: Award,
    title: "Valores",
    description:
      "Respeto • Solidaridad • Compromiso • Esperanza • Dignidad • Integridad • Libertad",
  },
];

export const MissionSection = () => {
  return (
    <section className="py-20 bg-muted" aria-labelledby="mission-heading">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-card rounded-xl p-8 shadow-card hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: "forwards" }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-center text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
