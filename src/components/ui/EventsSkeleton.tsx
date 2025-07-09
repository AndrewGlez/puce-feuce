export default function EventsSkeleton() {
  return (
    <section className="w-auto flex flex-col items-center bg-white py-16">
      <h2 className="text-5xl font-normal text-center mb-12 text-feuce-primary font-geologica">
        Eventos
      </h2>
      <div className="w-auto flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-[90vw]">
        {[1, 2, 3].map((idx) => (
          <div
            key={idx}
            className="flex flex-col bg-white rounded-2xl overflow-hidden flex-1 shadow-[0_8px_24px_0_rgba(44,62,80,0.10),0_16px_40px_0_rgba(44,62,80,0.13)] animate-pulse"
          >
            <div className="h-56 w-6xl bg-gray-200" />
            <div className="flex flex-col flex-1 p-6">
              <div className="inline-block px-10 py-3 rounded-lg bg-gray-200 mb-3 w-32 h-6" />
              <div className="bg-gray-200 h-7 w-3/4 mb-2 rounded" />
              <div className="bg-gray-200 h-5 w-1/2 mb-2 rounded" />
              <div className="bg-gray-200 h-4 w-full mb-4 rounded flex-1" />
              <div className="bg-gray-200 h-5 w-1/3 rounded" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
