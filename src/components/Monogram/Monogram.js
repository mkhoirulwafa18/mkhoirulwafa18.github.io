import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="50"
      height="71"
      viewBox="0 0 50 71"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M3.11 49.03c0.42,-0.2 0.92,-0.71 1.33,-1l5.12 -4.01c0.22,-0.18 0.36,-0.24 0.64,-0.47l3.31 -2.54c0.21,-0.15 0.39,-0.33 0.6,-0.49l9.77 -7.5 9.78 7.58c0.52,0.42 0.91,0.85 1.48,1.12l0 -4.55 -5.59 -4.34c-0.29,-0.23 -0.38,-0.34 -0.65,-0.54 -1.23,-0.86 -3.91,-3.13 -5.02,-3.84l-17.24 13.39 -0.04 -28.41 -3.52 -0.01 0.03 35.61z" />
          <path d="M24.28 35.42c-0.01,1.25 -0.09,2.97 0,4.18 0.03,0.41 0.16,0.43 0.43,0.63 0.25,0.19 0.32,0.24 0.56,0.44l8.17 6.28c1.27,0.91 6.35,4.97 6.97,5.33l0 -38.85 -3.62 0.02c0,5.27 0,10.54 0,15.81 0,1.88 0.12,15.1 -0.05,15.77l-12.46 -9.61z" />
          <path d="M8.25 38.12l4 -3.12c0.34,-0.28 0.66,-0.52 0.97,-0.77l10.08 -7.83c0.3,-0.24 0.79,-0.49 0.98,-0.88l0 -4.26 -6.28 4.77c-0.27,0.22 -0.51,0.39 -0.79,0.59l-2.32 1.79c-0.76,0.52 -2.39,1.94 -3.11,2.35l-0.01 -17.34 -3.52 0.01 0 24.69z" />
          <path d="M42.17 45.81c0,1.28 -0.18,1.15 0.67,1.79 0.52,0.39 2.46,1.99 2.82,2.16l0 -36.34 -3.49 0.01 0 32.38z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
