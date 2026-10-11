import React from 'react';
import { academy } from '../content';

export function About({ t, lang }) {
    return (
        <section id='about' className='bg-[#f1f0ea]'>
            <div className='wrap section grid gap-12 lg:grid-cols-2'>
                <div>
                    <p className='eyebrow'>{t.aboutLabel}</p>
                    <h2>{t.aboutTitle}</h2>
                    <p className='lead'>{t.aboutIntro}</p>
                    <figure className='mt-8 overflow-hidden rounded-xl border border-slate-200'>
                        <img
                            src={academy.banner}
                            alt={lang === 'mr' ? 'SN Academy प्रवेश बॅनर' : 'SN Academy admission banner'}
                            className='w-full'
                        />
                    </figure>
                </div>
                <div className='grid content-center gap-7'>
                    {t.features.map((f, i) => (
                        <div className='flex gap-5' key={f}>
                            <span className='number shrink-0'>0{i + 1}</span>
                            <div>
                                <h3 className='text-xl font-bold'>{f}</h3>
                                <p className='mt-2 text-slate-600 leading-7'>{t.featureDesc[i]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
