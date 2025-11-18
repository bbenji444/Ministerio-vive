import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "525534135014"; // +52 55 3413 5014
  const message = "Hola, me gustaría obtener más información sobre Ministerio Vive A.C.";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed left-6 bottom-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-fade-in"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};
