import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { content } from './content'
import './styles.css'
import toast, { Toaster } from 'react-hot-toast';
import {
    Header,
    Hero,
    Courses,
    About,
    Faculty,
    Admissions,
    Contact,
    Footer,
} from './components'

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

    return (
        <>
            <Toaster position="top-center" reverseOrder={true} />
            <Header
                lang={lang}
                setLang={setLang}
                menu={menu}
                setMenu={setMenu}
                t={t}
                ids={ids}
            />
            <main>
                <Hero t={t} />
                <Courses t={t} setCourse={setCourse} />
                <About t={t} lang={lang} />
                <Faculty t={t} />
                <Admissions t={t} />
                <Contact
                    t={t}
                    lang={lang}
                    course={course}
                    setCourse={setCourse}
                />
            </main>
            <Footer t={t} ids={ids} />
        </>
    )
}

createRoot(document.getElementById('root')).render(<App />)
