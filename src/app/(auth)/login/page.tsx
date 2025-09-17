import { BiBookOpen } from "react-icons/bi";

export default function LoginPage() {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center bg-[#F9F7F5]'>
      <h1 className='text-4xl font-bold text-green-700 mb-2 text-center flex items-center gap-2'>
           <BiBookOpen size={50}/> BookLoop
        </h1>
        <p className='text-green-900/60 mb-6 text-center'>Intercambia libros y comparte mundos!</p>
      <div className='bg-white/80 rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col'>
        <h2 className='text-2xl font-semibold text-green-700 mb-2 text-left'>
          Únete a la comunidad
        </h2>
        <p className='text-green-900/60 mb-6 text-left'>Descubre, intercambia y disfruta de miles de libros</p>
        <form className='w-full flex flex-col gap-4'>
          <input
            type='email'
            placeholder='Correo electrónico'
            className='px-4 py-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50 text-green-900'
            required
          />
          <input
            type='password'
            placeholder='Contraseña'
            className='px-4 py-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50 text-green-900'
            required
          />
          <button
            type='submit'
            className='bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-md'
          >
            Iniciar sesión
          </button>
        </form>
        <div className='mt-4 text-sm text-green-800'>
          ¿No tienes cuenta?{" "}
          <a
            href='#'
            className='underline text-green-700 hover:text-green-900'
          >
            Regístrate
          </a>
        </div>
      </div>
    </section>
  );
}
