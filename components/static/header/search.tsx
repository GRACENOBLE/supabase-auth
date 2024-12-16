"use client";
import { Search } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-sbone/50 px-4 py-[6px] rounded-full text-sm flex items-center"
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input
          defaultValue=""
          placeholder="Search product"
          {...register("example")}
          className="bg-transparent outline-none"
        />
        <button type="submit" className=" rounded-full text-green-900">
          <Search size={18} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
