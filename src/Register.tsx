import { useState } from "react";
import { ArrowLeft, ArrowRight, BarChart3, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

type FormData = {
  nombre: string;
  correo: string;
  cedula: string;
};

export default function Register() {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    correo: "",
    cedula: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.nombre.trim() || !form.correo.trim() || !form.cedula.trim()) {
      setError("Por favor completa todos los campos.");
      return;
    }

    // Validación simple de email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
      setError("Ingresa un correo válido.");
      return;
    }

    setLoading(true);

    try {
      // 👉 Aquí conectas tu backend / API / Formspree / etc.
      // Ejemplo con Formspree (gratis):
      // await fetch("https://formspree.io/f/TU_ID", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });

      // Por ahora solo simulamos el envío:
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Datos enviados:", form);

      setSubmitted(true);
    } catch (err) {
      setError("Hubo un error al enviar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200">
      {/* Header simple */}
      <header className="border-b border-white/5 bg-[#030712]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10">
              <BarChart3 size={20} className="text-emerald-400" />
            </div>
            <div>
              <div className="text-sm font-bold tracking-wide text-white">
                CORTECH
              </div>
              <div className="text-[9px] uppercase tracking-[0.25em] text-slate-500">
                Quant Hackathon
              </div>
            </div>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Volver
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-5 py-16">
        {submitted ? (
          // Estado de éxito
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-400/10">
              <CheckCircle2 size={32} className="text-emerald-400" />
            </div>
            <h1 className="mt-6 text-3xl font-black text-white">
              ¡Inscripción recibida!
            </h1>
            <p className="mt-4 text-slate-400">
              Hemos recibido tus datos. Te contactaremos pronto con más
              información.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-emerald-300"
            >
              Volver al inicio
              <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-10 text-center">
              <div className="text-xs font-bold tracking-[0.25em] text-emerald-400">
                REGISTRO
              </div>
              <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Inscríbete al Hackathon
              </h1>
              <p className="mt-3 text-slate-400">
                Completa los siguientes datos para participar.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Ej: Ana María Rodríguez"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-slate-600 outline-none transition focus:border-emerald-400/50 focus:bg-white/[0.05]"
                  required
                />
              </div>

              {/* Correo */}
              <div>
                <label
                  htmlFor="correo"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  value={form.correo}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-slate-600 outline-none transition focus:border-emerald-400/50 focus:bg-white/[0.05]"
                  required
                />
              </div>

              {/* Cédula */}
              <div>
                <label
                  htmlFor="cedula"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Cédula / Documento de identidad
                </label>
                <input
                  id="cedula"
                  name="cedula"
                  type="text"
                  value={form.cedula}
                  onChange={handleChange}
                  placeholder="Ej: 1234567890"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-slate-600 outline-none transition focus:border-emerald-400/50 focus:bg-white/[0.05]"
                  required
                />
              </div>

              {error && (
                <p className="rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar inscripción
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </main>
    </div>
  );
}