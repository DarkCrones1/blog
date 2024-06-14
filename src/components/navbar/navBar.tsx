"use client";
import Link from "next/link";

export function NavBar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            href="/home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              FeisTwitteX
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              href="/home/user"
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              Perfil de usuario
            </Link>
            <button
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={handleLogout}
            >
              <Link href="/">Cerrar sesión</Link>
            </button>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  href="/home"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Publicaciones
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
