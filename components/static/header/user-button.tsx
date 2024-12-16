import { signInAction, signOutAction } from "@/app/actions";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ArrowRightFromLine, Info, Settings, UserRound } from "lucide-react";
import { GetSupabaseUser } from "@/actions";
import SignInButton from "@/components/sign-in-button";
import Image from "next/image";

const UserButton = async () => {
  const user = await GetSupabaseUser();
  console.log(user);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-sm font-medium">
          <UserRound size={20} />
          Account
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        {user ? (
          <div className="py-1">
            <Image
              src={user.user_metadata.avatar_url}
              alt={""}
              width={300}
              height={300}
              className="rounded-full w-16 h-16 mx-auto my-4"
            />

            <p className="mx-auto w-fit mb-4">{user.user_metadata.full_name}</p>
            <MenuItem>
              <a
                href="#"
                className="flex justify-between px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              >
                Account settings
                <Settings size={16} />
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="flex justify-between px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              >
                Support
                <Info size={16} />
              </a>
            </MenuItem>

            <form action={signOutAction}>
              <MenuItem>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none flex justify-between"
                >
                  Sign out
                  <ArrowRightFromLine size={16} className="text-red-500" />
                </button>
              </MenuItem>
            </form>
          </div>
        ) : (
          <SignInButton />
        )}
      </MenuItems>
    </Menu>
  );
};

export default UserButton;
