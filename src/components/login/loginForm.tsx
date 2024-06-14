"use client";

import { LoginRequestDto } from "@/dtos/request/LoginRequestDto";
import { ChangeEvent, FormEvent, useState } from "react";
import { PostLogin } from "../../auth/postLogin";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function LoginForm() {
  const [formData, setFormData] = useState<LoginRequestDto>({
    UserNameOrEmail: "",
    Password: "",
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = await PostLogin(formData);
      if (token) {
        router.push("/home"); // Redirigir solo si el login fue exitoso
      } else {
        console.log("Login failed."); // Opcional: manejar el caso de fallo
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-sm mx-auto border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Inicio de sesión
      </h3>
      <div className="mb-5">
        <label
          htmlFor="UserNameOrEmail"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Correo o Usuario
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          id="UserNameOrEmail"
          name="UserNameOrEmail"
          placeholder="example@gmail.com"
          value={formData.UserNameOrEmail}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="Password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Contraseña
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="password"
          id="Password"
          name="Password"
          value={formData.Password}
          placeholder="Contraseña"
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          />
        </div>
        <label
          htmlFor="remember"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Recordar contraseña
        </label>
      </div>
      <div className="flex items-center justify-evenly">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Iniciar sesión
        </button>
        <Link
          href="/register"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          aria-current="page"
        >
          Registrarse
        </Link>
      </div>
    </form>
  );
}
