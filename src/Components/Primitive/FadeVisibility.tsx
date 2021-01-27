import { FC, JSX, useMemo } from 'preact/compat';
import { useInView } from 'react-intersection-observer';

const FadeVisibility: FC<JSX.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  const { ref, entry } = useInView({
    threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
  });
  const _className = useMemo(() => {
    const ratio = Math.floor((entry?.intersectionRatio ?? 0) * 10);
    const opacity =
      ratio === 1
        ? 'opacity-10'
        : ratio === 2
        ? 'opacity-20'
        : ratio === 3
        ? 'opacity-30'
        : ratio === 4
        ? 'opacity-40'
        : ratio === 5
        ? 'opacity-50'
        : ratio === 6
        ? 'opacity-60'
        : ratio === 7
        ? 'opacity-70'
        : ratio === 8
        ? 'opacity-80'
        : ratio === 9
        ? 'opacity-90'
        : ratio === 10
        ? 'opacity-100'
        : 'opacity-0';

    return `${className} ${opacity} transition-opacity duration-300`;
  }, [entry, className]);

  return (
    <div {...props} ref={ref} className={_className}>
      {children}
    </div>
  );
};

export default FadeVisibility;
