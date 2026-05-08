'use client';

import {motion, useReducedMotion} from 'framer-motion';
import type {ReactNode} from 'react';
import {cn} from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Y harakat o'lchami (px) */
  y?: number;
  as?: 'div' | 'section' | 'article' | 'span' | 'li';
}

/**
 * Element ekranga kirganida ostidan ko'tarilib chiqadi.
 * prefers-reduced-motion holatda animatsiya o'chadi.
 */
export function Reveal({children, className, delay = 0, y = 24, as = 'div'}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={cn(className)}
      initial={{opacity: 0, y}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1]}}
    >
      {children}
    </MotionTag>
  );
}
