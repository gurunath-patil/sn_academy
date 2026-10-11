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

    async function submit(e, formDataObj) {
        if (e && e.preventDefault) e.preventDefault()
        
        const payload = {
            ...formDataObj,
            course: t.courses[formDataObj.course] || formDataObj.course
        }

        let result = await fetch(`https://formsubmit.co/ajax/saurabhnale1135@gmail.com`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (result.status == 200) {
            toast.success(t.formSuccessAlert)
        } else {
            toast.error(t.formErrorAlert)
        }
    }

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
                    submit={submit}
                />
            </main>
            <Footer t={t} ids={ids} />
        </>
    )
}

createRoot(document.getElementById('root')).render(<App />)
