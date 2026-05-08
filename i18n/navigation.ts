import {createNavigation} from 'next-intl/navigation';
import {routing} from './routing';

// Locale-aware navigatsiya helperlari (Link, useRouter, redirect, getPathname)
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
