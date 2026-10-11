import React from 'react';

export function Hero({ t }) {
    return (
        <section id='home' className='hero'>
            <div className='wrap grid items-center gap-12 py-20 lg:grid-cols-[1.2fr_1fr]'>
                <div>
                    <p className='eyebrow text-[#e7c977]'>{t.eyebrow}</p>
                    <h1 className='mt-7 text-4xl leading-[1.35] font-bold md:text-6xl'>
                        {t.headline.map((h, i) => (
                            <span key={h} className={'block ' + (i === 2 ? 'text-[#e7c977]' : '')}>
                                {h}
                            </span>
                        ))}
                    </h1>
                    <p className='mt-7 max-w-xl text-lg leading-8 text-slate-300'>{t.intro}</p>
                    <div className='mt-9 flex flex-wrap gap-4'>
                        <a href='#contact' className='btn gold'>
                            {t.cta}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                            </svg>
                        </a>
                        <a href='#courses' className='btn border border-white/30 text-white'>
                            {t.explore}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='relative rounded-3xl border border-white/15 bg-white/5 p-7 md:p-10'>
                    <div className='mb-8 flex justify-between text-xs tracking-[.2em] text-[#e7c977]'>
                        <span>SN / ACADEMY</span>
                        <span>01 — 06</span>
                    </div>
                    <p className='text-3xl leading-relaxed font-semibold'>{t.heroNote}</p>
                    <div className='mt-8 grid grid-cols-2 gap-3'>
                        {t.courses.map((c, i) => (
                            <a
                                href='#courses'
                                key={c}
                                className='flex items-center gap-3 rounded-xl border border-white/15 p-4 text-sm hover:bg-white/10'>
                                <span className='text-[#e7c977]'>0{i + 1}</span>
                                {c}
                            </a>
                        ))}
                    </div>
                    <p className='mt-8 text-xs tracking-[.16em] text-slate-300'>{t.label}</p>
                </div>
            </div>
        </section>
    );
}
