import Link from 'next/link';
import { useRouter } from 'next/router';

type NavLinkProps = {
  name: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ name }) => {
  const router = useRouter();

  const path = `/${name.toLowerCase()}`;
  const style =
    router.asPath === path
      ? 'inline-block py-2 px-4 text-white font-bold no-underline'
      : 'inline-block text-white no-underline hover:text-gray-900 py-2 px-4';

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(path);
  };

  return (
    <li className="mr-3">
      <Link href={path}>
        <a className={style} onClick={handleClick}>
          {name}
        </a>
      </Link>
    </li>
  );
};
