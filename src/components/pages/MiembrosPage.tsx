import React from "react";

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

function IconBriefcase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
      <rect x="3" y="6" width="14" height="10" rx="2" fill="#16324A" />
      <rect x="7" y="4" width="6" height="4" rx="1" fill="#16324A" />
    </svg>
  );
}
function IconDepartment(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
      <path d="M10 2L2 7l8 5 8-5-8-5z" fill="#16324A" />
      <path d="M2 13l8 5 8-5" stroke="#16324A" strokeWidth={1.5} />
    </svg>
  );
}
function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
      <rect x="2" y="5" width="16" height="10" rx="2" fill="#16324A" />
      <path d="M4 7l6 4 6-4" stroke="#fff" strokeWidth={1.5} />
    </svg>
  );
}

export default function MiembrosPage() {
  return (
    <section className="w-full min-h-screen bg-[#e5e7eb] flex flex-col items-center py-10">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#0A233F] font-geologica">Miembros Directivos</h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white rounded-2xl shadow-lg overflow-hidden p-0"
          >
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full flex flex-col items-center p-6">
              <div className="text-2xl font-bold text-[#0A233F] mb-2 text-center">
                {member.name}
              </div>
              <div className="flex flex-col gap-1 w-full max-w-xs">
                <div className="flex items-center gap-2 text-[#16324A] font-semibold">
                  <IconBriefcase />
                  <span>{member.role}</span>
                </div>
                <div className="flex items-center gap-2 text-[#16324A] font-semibold">
                  <IconDepartment />
                  <span>{member.department}</span>
                </div>
                <div className="flex items-center gap-2 text-[#16324A]">
                  <IconMail />
                  <a
                    href={`mailto:${member.email}`}
                    className="text-[#2563eb] hover:text-[#16324A] no-underline"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
