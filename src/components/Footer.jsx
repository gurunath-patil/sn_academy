import React from 'react';

export function Footer({ t, ids }) {
    return (
        <footer className='bg-[#101d36] text-white'>
            <div className='wrap py-12'>
                <div className='flex flex-wrap justify-between gap-8'>
                    <div>
                        <p className='text-2xl font-bold'>
                            SN ACADEMY<span className='text-[#e7c977]'>.</span>
                        </p>
                        <p className='mt-3 text-slate-300'>{t.footer}</p>
                    </div>
                    <nav className='flex flex-wrap gap-5 text-sm'>
                        {t.nav.map((n, i) => (
                            <a key={n} href={'#' + ids[i]}>
                                {n}
                            </a>
                        ))}
                    </nav>
                </div>
                <p className='mt-8 max-w-3xl text-xs leading-6 text-slate-400'>{t.privacy}</p>
                <div className='mt-6 flex flex-wrap justify-between gap-3 border-t border-white/15 pt-6 text-xs text-slate-400'>
                    <span>
                        © {new Date().getFullYear()} SN Academy. {t.rights}
                    </span>
                </div>
            </div>
        </footer>
    );
}
