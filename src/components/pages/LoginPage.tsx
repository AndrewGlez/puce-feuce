import { useState } from "react";
import { useNavigate } from "react-router";
import { postFetcher } from "../../services/fetcher";
import { LogoPlaceholder, LogoPlaceholder2 } from "../../assets";

export default function LoginPage() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const { token } = await postFetcher("/login", { correo, contraseña });
      // Set token in cookies
      document.cookie = `token=${token}; path=/`;
      navigate("/admin", { replace: true });
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const message = (err as any).response?.data?.message || "Error de login";
      setError(message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <div className="text-center mb-6">
          <div className="mx-auto bg-feuce-primary rounded-full p-1 h-40 w-40 flex items-center justify-center">
            <img
              src={LogoPlaceholder2}
              alt="PUCE Logo"
              className="h-32 w-32 object-contain"
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Iniciar Sesión
        </h2>
        {error && (
          <div className="text-red-500 mb-2 text-sm text-center">{error}</div>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Correo institucional *
          </label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="ejemplo@pucese.edu.ec"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contraseña *
          </label>
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="********"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 rounded-lg bg-feuce-primary text-white hover:bg-feuce-hover transition-colors duration-200 mt-6"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
