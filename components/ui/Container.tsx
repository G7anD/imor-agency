import {cn} from '@/lib/utils';
import type {HTMLAttributes} from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer';
}

export function Container({as: Tag = 'div', className, children, ...rest}: ContainerProps) {
  return (
    <Tag className={cn('container-page', className)} {...rest}>
      {children}
    </Tag>
  );
}
