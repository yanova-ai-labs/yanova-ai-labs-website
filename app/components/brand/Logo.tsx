import Image from 'next/image';
import Link from 'next/link';

type LogoVariant = 'horizontal' | 'mark';

interface LogoProps {
  variant?: LogoVariant;
  dark?: boolean;
  href?: string;
  className?: string;
}

export function Logo({ variant = 'horizontal', dark = true, href = '/', className = '' }: LogoProps) {
  const src = variant === 'mark'
    ? '/brand/yanova-mark.svg'
    : dark
      ? '/brand/yanova-logo-dark.svg'
      : '/brand/yanova-logo-light.svg';

  const width = variant === 'mark' ? 36 : 196;
  const height = variant === 'mark' ? 36 : 48;

  const logo = <Image src={src} alt="Yanova AI Labs" width={width} height={height} priority className={className} />;

  if (!href) {
    return logo;
  }

  return <Link href={href}>{logo}</Link>;
}
