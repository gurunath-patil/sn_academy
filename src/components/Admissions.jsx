import React from 'react';

export function Admissions({ t }) {
    return (
        <section id='admissions' className='border-y border-slate-200 bg-[#faf9f5]'>
            <div className='wrap section'>
                <p className='eyebrow'>{t.admissionLabel}</p>
                <h2>{t.admissionTitle}</h2>
                <div className='mt-10 grid gap-6 md:grid-cols-4'>
                    {t.steps.map((s, i) => (
                        <div key={s}>
                            <span className='number'>0{i + 1}</span>
                            <h3 className='mt-5 text-xl font-bold'>{s}</h3>
                            <p className='mt-3 text-slate-600 leading-7'>{t.stepDesc[i]}</p>
                        </div>
                    ))}
                </div>
                <div className='mt-16 grid gap-8 lg:grid-cols-[1fr_1.6fr]'>
                    <h3 className='text-3xl font-bold'>{t.faqTitle}</h3>
                    <div>
                        {t.faqs.map(([q, a]) => (
                            <details key={q} className='border-b border-slate-200 py-5'>
                                <summary className='cursor-pointer font-semibold'>{q}</summary>
                                <p className='pt-4 leading-7 text-slate-600'>{a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
