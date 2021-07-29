import Link from 'next/link';
import { useRouter } from 'next/router';

type NavLinkProps = {
  name: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ name }) => {
  const router = useRouter();

  const href = `/${name.toLowerCase}`;
  const style =
    router.asPath === name
      ? 'inline-block py-2 px-4 text-white font-bold no-underline'
      : 'inline-block text-white no-underline hover:text-gray-900 hover:text-underline py-2 px-4';

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <li className="mr-3">
      <Link href={href}>
        <a className={style} onClick={handleClick}>
          {name}
        </a>
      </Link>
    </li>
  );
};
