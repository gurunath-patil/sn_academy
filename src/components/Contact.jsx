import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { academy } from '../content';

export function Contact({ t, lang, course, setCourse, submit }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        course: course || '',
        message: ''
    });

    useEffect(() => {
        setFormData(prev => ({ ...prev, course: course || '' }));
    }, [course]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (name === 'course') {
            setCourse(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneRegex = /^[0-9+() -]{10,20}$/;
        if (!phoneRegex.test(formData.phone)) {
            toast.error(lang === 'mr' ? 'कृपया मोबाईल नंबर तपासा' : 'Please enter a valid mobile number', {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
            return;
        }
        submit(e, formData);
    };

    return (
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
            <form onSubmit={handleSubmit} className='rounded-3xl bg-[#f5f4ef] p-6 md:p-9'>
                <h3 className='mb-7 text-2xl font-bold'>{t.formTitle}</h3>
                <label>
                    {t.fields[0]} <span className='text-red-500'>*</span>
                    <input
                        name='name'
                        required
                        maxLength={100}
                        autoComplete='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    {t.fields[1]} <span className='text-red-500'>*</span>
                    <input
                        name='phone'
                        type='tel'
                        required
                        autoComplete='tel'
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    {t.fields[2]} <span className='text-red-500'>*</span>
                    <select
                        name='course'
                        required
                        value={formData.course}
                        onChange={handleChange}>
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
                    <textarea
                        name='message'
                        rows={3}
                        maxLength={1000}
                        value={formData.message}
                        onChange={handleChange}
                    />
                </label>
                <button className='btn navy w-full' type='submit'>
                    {t.submit}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </button>
            </form>
        </section>
    );
}
