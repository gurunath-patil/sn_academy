import React from 'react';
import { academy } from '../content';

export function Header({ lang, setLang, menu, setMenu, t, ids }) {
    return (
        <header className='sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur'>
            <div className='wrap flex items-center justify-between gap-4 py-3'>
                <a href='#home' aria-label='SN Academy home'>
                    <img
                        className='h-16 w-40 object-cover'
                        src={academy.logo}
                        alt='SN Academy — Learn. Prepare. Achieve.'
                    />
                </a>
                <nav className='hidden gap-6 lg:flex'>
                    {t.nav.map((n, i) => (
                        <a key={ids[i]} href={'#' + ids[i]} className='navlink'>
                            {n}
                        </a>
                    ))}
                </nav>
                <div className='flex items-center gap-2'>
                    <div className='flex rounded-full border border-slate-200 p-1' aria-label={t.language}>
                        {[
                            ['mr', 'मराठी'],
                            ['en', 'English'],
                        ].map(([v, n]) => (
                            <button
                                key={v}
                                aria-pressed={lang === v}
                                onClick={() => setLang(v)}
                                className={
                                    'rounded-full px-3 py-2 text-sm ' +
                                    (lang === v ? 'bg-[#14264a] text-white' : 'text-slate-600')
                                }>
                                {n}
                            </button>
                        ))}
                    </div>
                    <button
                        className='lg:hidden p-2'
                        aria-expanded={menu}
                        aria-label={t.menu}
                        onClick={() => setMenu(!menu)}>
                        ☰
                    </button>
                </div>
            </div>
            {menu && (
                <nav className='wrap flex flex-col gap-4 pb-5 lg:hidden'>
                    {t.nav.map((n, i) => (
                        <a key={ids[i]} href={'#' + ids[i]} onClick={() => setMenu(false)}>
                            {n}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
