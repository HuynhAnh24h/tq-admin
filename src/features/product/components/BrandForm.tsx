import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const brandSchema = z.object({
  name: z.string().min(2, "Tên thương hiệu phải có ít nhất 2 ký tự"),
});

type BrandFormData = z.infer<typeof brandSchema>;

interface BrandFormProps {
  onSubmit: (data: BrandFormData) => void;
  defaultValues?: Partial<BrandFormData>;
}

const BrandForm: React.FC<BrandFormProps> = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<BrandFormData>({
    resolver: zodResolver(brandSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Brand Name */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          Tên thương hiệu
        </label>
        <input 
          {...register("name")} 
          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 placeholder:text-gray-400"
          placeholder="Nhập tên thương hiệu..."
        />
        {errors.name && (
          <div className="flex items-center gap-2 text-rose-600 text-sm bg-rose-50 px-3 py-2 rounded-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.name.message}
          </div>
        )}
      </div>

      {/* Info Box */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200/50 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-900 mb-1">Thông tin thương hiệu</p>
            <p className="text-xs text-indigo-700">Thương hiệu giúp khách hàng nhận diện và tin tưởng sản phẩm của bạn hơn.</p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl py-3.5 font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        Lưu thương hiệu
      </button>
    </form>
  );
};

export default BrandForm;