import React from 'react';

export function Faculty({ t }) {
    return (
        <section className='wrap section'>
            <h2>{t.facultyTitle}</h2>
            <div className='mt-8 flex justify-start'>
                {t.faculty.map((f, i) => (
                    <article className='rounded-2xl border border-slate-200 p-7' key={f}>
                        <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#f5efd9] text-2xl text-[#14264a]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                            </svg>
                        </div>
                        <h3 className='text-xl font-bold'>{f}</h3>
                        <p className='mt-3 text-slate-500 leading-7'>{t.facultyBio}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
