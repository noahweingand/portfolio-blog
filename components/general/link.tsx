type LinkProps = {
  children: React.ReactNode;
  href: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};
