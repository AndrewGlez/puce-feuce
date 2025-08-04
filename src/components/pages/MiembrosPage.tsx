import Card from "../ui/MemberCard";
import { useMiembros } from "../../hooks/useMiembros";
import { LoadingSpinner } from "../ui";
import { API_URL } from "../../config/apiUrl";

export default function MiembrosPage() {
  const { data: miembros = [], error, isLoading } = useMiembros();

  if (isLoading) {
    return (
      <section className="w-full min-h-screen bg-white py-10">
        <div className="container mx-auto px-8 xl:px-20 2xl:px-8 flex flex-col items-center">
          <div className="flex items-center justify-center min-h-[400px]">
            <LoadingSpinner />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full bg-white py-10">
        <div className="container mx-auto px-8 xl:px-20 2xl:px-8 flex flex-col items-center">
          <div className="text-center text-red-600">
            Error al cargar los miembros
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-10">
      <div className="container mx-auto px-8 xl:px-20 2xl:px-8 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-normal text-center mb-12 text-feuce-hover font-geologica">
          Miembros Directivos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-geologica">
          {miembros.map((miembro) => (
            <Card
              key={miembro._id}
              member={{
                name: miembro.name,
                role: miembro.role,
                department: miembro.department,
                email: miembro.email,
                image: miembro.image ? `${API_URL}${miembro.image}` : undefined,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
