import Card from "../ui/MemberCard";

const teamMembers = [
  {
    name: "María López",
    role: "Presidenta",
    department: "Derecho",
    email: "mlopez@pucese.edu.ec",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=461&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Juan Pérez",
    role: "Vicepresidente",
    department: "Fisioterapia",
    email: "jperez@pucese.edu.ec",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Ana Quintero",
    role: "Tesorera",
    department: "Enfermería",
    email: "aquintero@pucese.edu.ec",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Mía Díaz",
    role: "Vocal",
    department: "Psicología",
    email: "mdiaz@pucese.edu.ec",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
];

export default function MiembrosPage() {
  return (
    <section className="w-full min-h-screen bg-white py-10">
      <div className="container mx-auto px-8 xl:px-20 2xl:px-8 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-normal text-center mb-12 text-feuce-hover font-geologica">
          Miembros Directivos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-geologica">
          {teamMembers.map((member, idx) => (
            <Card key={idx} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
