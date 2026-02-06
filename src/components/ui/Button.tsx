import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'default' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  className,
  type = 'button',
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-heading font-semibold transition-all duration-200 rounded-lg';

  const variants = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5',
    outline:
      'border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 bg-transparent',
    ghost:
      'text-slate-600 hover:text-blue-600 bg-transparent',
  };

  const sizes = {
    default: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
