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
export default function MemberSection({ style = "" }: { style?: string }) {
  return (
    <section className={`py-10 bg-[#D9D9D9] ${style}`}>
      <div className="container mx-auto px-8 xl:px-20 2xl:px-8">
        <h2 className="text-5xl 2xl:text-5xl font-normal text-center mb-16 text-feuce-primary">
          Miembros Directivos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} member={member}></Card>
          ))}
        </div>
      </div>
    </section>
  );
}
