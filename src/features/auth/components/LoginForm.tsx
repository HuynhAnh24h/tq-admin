import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../../validator/LoginSchema";
import type { LoginSchema } from "../../../validator/LoginSchema";

import { FaUserAlt, FaLock } from "react-icons/fa";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log("Login data:", data);
    // TODO: gọi API login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Admin Login
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Email</label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaUserAlt className="text-gray-400 mr-2" />
            <input
              type="email"
              {...register("email")}
              className="w-full outline-none"
              placeholder="Nhập email"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Mật khẩu</label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              {...register("password")}
              className="w-full outline-none"
              placeholder="Nhập mật khẩu"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
