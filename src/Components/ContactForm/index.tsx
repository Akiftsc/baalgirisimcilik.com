"use client"

import React from 'react'
import { Formik } from 'formik';
import addUser from '@/Firebase/firestore/addUser';

type FormValues = {
    classroom: string,
    email: string,
    instagram: string,
    name: string,
    notes: string,
    phone_number: string
};

function ContactForm() {

    const registerUser = async (values: FormValues, { setSubmitting }: any) => {
        try {
            const { result, error } = await addUser(values);

            if (error) {
            return console.log(error)
            }
            alert("kaydolduğun için teşekkürler " + values.name)
            localStorage.setItem('user', JSON.stringify(values))
            setSubmitting(false)
        } catch (error) {
            alert("Bir hata oluştu. Lütfen tekrar deneyin.")
        }
    }


  return (
        <Formik
                initialValues={{
                    name: '',
                    email: '',
                    classroom: '',
                    phone_number: '',
                    instagram: '',
                    notes: ''
                }}
                validate={(values): FormValues => {
                    const errors:Partial<FormValues> = {};

                    // Full Name validation
                    if (!values.name.trim()) {
                    errors.name = 'Lütfen bir isim girin.';
                    }

                    // Email validation
                    if (!values.email.trim()) {
                    errors.email = 'Email zorunludur';
                    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
                    errors.email = 'geçersiz email formatı';
                    }

                    // Class validation
                    if (!values.classroom.trim()) {
                    errors.classroom = 'Sınıf Zorunlu';
                    }

                    // Phone validation
                    if (!values.phone_number.trim()) {
                    errors.phone_number = 'Telefon numarası zorunludur';
                    } else if (!/^\d{10}$/.test(values.phone_number)) {
                    errors.phone_number = 'Geçersiz telefon numarası';
                    }

                    // Instagram validation
                    if (!values.instagram.trim()) {
                    errors.instagram = 'İnstagram zorunludur';
                    }

                    return errors as FormValues;
                }}
                onSubmit={registerUser}
                >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    errors
                }) => (
                    <form className="w-full contactForm" onSubmit={handleSubmit}>
                    <div className='p-4 flex gap-3 flex-col'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">İsim - Soyisim</label>
                        <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        type="text"
                        id="name"
                        className="contactInput"
                        placeholder="Mehmet Akif Taşçı"
                        required
                        />
                        <span className='error'> {errors.name}</span>

                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                        <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        type="text"
                        id="email"
                        className="contactInput"
                        placeholder="akif@gmail.com"
                        required
                        />
                        <span className='error'> {errors.email}</span>

                        <label htmlFor="classroom" className="block mb-2 text-sm font-medium text-white">Sınıf</label>
                        <input
                        type="text"
                        id="classroom"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.classroom}
                        className="contactInput"
                        placeholder="10/C"
                        required
                        />
                        <span className='error'> {errors.classroom}</span>

                        <label htmlFor="phone_number" className="block mb-2 text-sm font-medium text-white">Telefon No</label>
                        <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone_number}
                        type="text"
                        id="phone_number"
                        className="contactInput"
                        placeholder="5526077464"
                        required
                        />
                        <span className='error'> {errors.phone_number}</span>

                        <label htmlFor="instagram" className="block mb-2 text-sm font-medium text-white">İnstagram</label>
                        <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.instagram}
                        type="text"
                        id="instagram"
                        className="contactInput"
                        placeholder="@m.akif.tasci"
                        required
                        />
                        <span className='error'> {errors.instagram}</span>

                        <label htmlFor="notes" className="block mb-2 text-sm font-medium text-white">Notlar</label>
                        <textarea
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.notes}
                        rows={5}
                        id="notes"
                        className="contactInput"
                        placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam asperiores eaque nulla."
                        />
                    </div>
                     <button type="submit" className="submitButton">
                        Gönder
                    </button>
                    </form>
                )}
     </Formik>
    
  )
}

export default ContactForm