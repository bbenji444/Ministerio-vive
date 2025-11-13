import { useEffect, useRef, useState } from "react";
import { Users, Heart, Calendar, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 464,
    label: "Beneficiarios directos",
    suffix: "",
  },
  {
    icon: Heart,
    value: 1531,
    label: "Beneficiarios indirectos",
    suffix: "+",
  },
  {
    icon: Calendar,
    value: 20,
    label: "Años de trabajo",
    suffix: "+",
  },
  {
    icon: Sparkles,
    value: 50,
    label: "Eventos anuales",
    suffix: "+",
  },
];

const useCountUp = (end: number, duration: number = 2000, isVisible: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return count;
};

export const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
      aria-labelledby="impact-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="impact-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nuestro <span className="gradient-text">Impacto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde 2004, transformando vidas y construyendo esperanza en comunidades del Estado de México.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const count = useCountUp(stat.value, 2000, isVisible);
            
            return (
              <div
                key={stat.label}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: "forwards" }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2" aria-live="polite">
                  {count}{stat.suffix}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            Trabajamos en Clara Córdova (Nicolás Romero) y Los Jarros (Isidro Fabela), ofreciendo salud integral, educación, 
            nutrición, terapias, actividades recreativas y proyectos productivos para fortalecer a las comunidades más vulnerables.
          </p>
        </div>
      </div>
    </section>
  );
};
