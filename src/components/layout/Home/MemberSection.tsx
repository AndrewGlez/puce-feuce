import Card from "../../ui/MemberCard";
import { useMiembros } from "../../../hooks/useMiembros";
import { LoadingSpinner } from "../../ui";

export default function MemberSection() {
  const { data: miembros = [], error, isLoading } = useMiembros();

  if (isLoading) {
    return (
      <section className={`py-10 bg-[#D9D9D9] font-geologica`}>
        <div className="container mx-auto px-8 xl:px-20 2xl:px-8">
          <h2 className="text-5xl 2xl:text-5xl font-normal text-center mb-16 text-feuce-primary">
            Miembros Directivos
          </h2>
          <div className="flex items-center justify-center min-h-[400px]">
            <LoadingSpinner />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`py-10 bg-[#D9D9D9] font-geologica`}>
        <div className="container mx-auto px-8 xl:px-20 2xl:px-8">
          <h2 className="text-5xl 2xl:text-5xl font-normal text-center mb-16 text-feuce-primary">
            Miembros Directivos
          </h2>
          <div className="text-center text-red-600">
            Error al cargar los miembros
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-10 bg-[#D9D9D9] font-geologica`}>
      <div className="container mx-auto px-8 xl:px-20 2xl:px-8">
        <h2 className="text-5xl 2xl:text-5xl font-normal text-center mb-16 text-feuce-primary">
          Miembros Directivos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {miembros.map((miembro) => (
            <Card 
              key={miembro._id} 
              member={{
                name: miembro.name,
                role: miembro.role,
                department: miembro.department,
                email: miembro.email,
                image: miembro.image ? `http://localhost:3000${miembro.image}` : undefined,
              }} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
