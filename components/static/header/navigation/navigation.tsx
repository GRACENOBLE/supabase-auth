import Categories from "@/components/static/header/navigation/categories-dropdown";
import { NavLinks } from "@/constants";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex gap-8 text-sm font-medium items-center">
      <Categories />
      {NavLinks.map(({ key, name, link }) => (
        <Link key={key} href={link}>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
