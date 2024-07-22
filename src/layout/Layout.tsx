import { Helmet, HelmetProvider } from 'react-helmet-async';
import config from '@/config/config';

import Menu from '@/components/menu/index';  // Cambiar la importación de Menu a Navbar

export default function Layout({ children, title }: { children: React.ReactNode; title: string; }) {
    const { PAGE_NAME } = config;
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title} - {PAGE_NAME}</title>
            </Helmet>
            <main className="w-full flex flex-col">
                <Menu />  {/* Cambiar la instancia de Menu a Navbar */}
                <div className='flex flex-col gap-y-5 gap-x-2 px-4 items-center justify-center'>
                    {children}
                </div>
            </main>
        </HelmetProvider>
    )
}
