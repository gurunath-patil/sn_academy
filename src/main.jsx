import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { academy, content } from './content'
import './styles.css'
import toast, { Toaster } from 'react-hot-toast';

const ids = ['home', 'courses', 'about', 'admissions', 'contact']
function App() {
    const [lang, setLang] = useState(() => {
        try {
            return localStorage.getItem('sn-language') === 'en' ? 'en' : 'mr'
        } catch {
            return 'mr'
        }
    })
    const [menu, setMenu] = useState(false)
    const [course, setCourse] = useState('')
    const t = content[lang]
    useEffect(() => {
        document.documentElement.lang = lang
        try {
            localStorage.setItem('sn-language', lang)
        } catch { }
    }, [lang])

    async function submit(e) {
        e.preventDefault()
        const formDataRaw = new FormData(e.target);

        const formDataObj = Object.fromEntries(formDataRaw.entries());
        formDataObj.course = t.courses[formDataObj.course]

        let result = await fetch(`https://formsubmit.co/ajax/saurabhnale1135@gmail.com`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formDataObj)
        });

        if (result.status == 200) {
            toast.success(t.formSuccessAlert)
        } else {
            toast.error(t.formErrorAlert)
        }
    }
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
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
            <main>
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
                <section id='contact' className='wrap section grid gap-12 lg:grid-cols-2'>
                    <div>
                        <p className='eyebrow'>{t.contactLabel}</p>
                        <h2>{t.contactTitle}</h2>
                        <p className='lead'>{t.contactIntro}</p>
                        <a className='mt-8 block text-3xl font-bold'>
                            {academy.phone}
                        </a>
                        <p className='mt-4 font-semibold'>
                            {academy.founder} • {lang === 'mr' ? 'संस्थापक व प्रशिक्षक' : 'Founder & Trainer'}
                        </p>
                        <p className='mt-6 text-xl'>{t.location}</p>
                        <div className="mt-10 w-full md:w-6/12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.206216203404!2d74.121095974122!3d16.566124525946265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc051c71a720ca3%3A0x9dea40f65a63e304!2sSN%20ACADEMY!5e0!3m2!1sen!2sin!4v1791644675263!5m2!1sen!2sin"
                                className="w-full md:w-lg h-[300px]"
                                style={{ border: 0, borderRadius: '0.8rem' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                            />
                        </div>
                    </div>
                    <form onSubmit={submit} className='rounded-3xl bg-[#f5f4ef] p-6 md:p-9'>
                        <h3 className='mb-7 text-2xl font-bold'>{t.formTitle}</h3>
                        <label>
                            {t.fields[0]}
                            <input name='name' required maxLength={100} autoComplete='name' />
                        </label>
                        <label>
                            {t.fields[1]}
                            <input
                                name='phone'
                                type='tel'
                                required
                                pattern='[0-9+() -]{10,20}'
                                autoComplete='tel'
                            />
                        </label>
                        <label>
                            {t.fields[2]}
                            <select
                                name='course'
                                required
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}>
                                <option value=''>{t.select}</option>
                                {t.courses.map((c, i) => (
                                    <option key={i} value={i}>
                                        {c}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label>
                            {t.fields[3]}
                            <textarea name='message' rows={3} maxLength={1000} />
                        </label>
                        <button className='btn navy w-full' type='submit'>
                            {t.submit}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </button>
                    </form>
                </section>
            </main>
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
        </>
    )
}
createRoot(document.getElementById('root')).render(<App />)
