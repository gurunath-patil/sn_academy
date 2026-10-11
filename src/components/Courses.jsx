import React from 'react';

export function Courses({ t, setCourse }) {
    return (
        <section id='courses' className='wrap section'>
            <p className='eyebrow'>{t.programLabel}</p>
            <h2>{t.programTitle}</h2>
            <p className='lead'>{t.programIntro}</p>
            <div className='mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
                {t.courses.map((c, i) => (
                    <article key={i} className='course'>
                        <div className='flex items-center justify-between'>
                            <span className='number'>0{i + 1}</span>
                            <span className='text-xs font-semibold text-slate-500'>SN ACADEMY</span>
                        </div>
                        <h3 className='mt-6 text-2xl font-bold'>{c}</h3>
                        <p className='mt-3 text-slate-600'>{t.audiences[i]}</p>
                        <p className='mt-6 border-t border-slate-200 pt-5 text-sm leading-7'>
                            {t.syllabus[i]}
                        </p>
                        <p className='mt-3 text-xs text-slate-500'>{t.batch}</p>
                        <a
                            href='#contact'
                            onClick={() => setCourse(String(i))}
                            className='mt-6 flex font-semibold text-[#14264a]'>
                            {t.courseCta}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ms-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                            </svg>
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}
