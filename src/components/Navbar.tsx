import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { getServerSession } from "next-auth";
import UserAccountNav from "./UserAccountNav";

const Navbar = async () => {
  const sesstion = await getServerSession();

  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl mx-auto h-full flex items-center justify-between gap-2 ">
        {/* Logo */}
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Reddit
          </p>
        </Link>

        {/* Search bar */}
        {sesstion?.user ? (
          <UserAccountNav user={sesstion.user} />
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
