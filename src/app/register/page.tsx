"use client";
import Compaines from '@/Components/Companies';
import {useEffect, useState} from 'react';
import ContactForm from '@/Components/ContactForm';



function Page() {
  type ClassicUser = {
    name: string,
    email: string,
    classroom: string,
    phone_number: string,
    instagram: string,
    notes: string
  }
  type User = ClassicUser | null;

  const [user, setUser] = useState<User>(null)
 

  useEffect(() => {
    const userJSON = localStorage.getItem("user") || null;
    if (userJSON !== null) {
      setUser(JSON.parse(userJSON));
    }
  }, []);
  

  return (
    <main className="aboutPage">
      <h3 className="title animate-fade-up delay-100">
        Kayıt Ol
      </h3>
      <div className="flex md:flex-row flex-col gap-4 animate-fade-up delay-100">
            <div className="formWrapper animate-fade-up delay-100">
          {user !== null ? <h1 className='text-4xl md:text-[52px] font-bold text-center'>Merhaba {user.name}</h1> : <>
          
              <h1 className='text-4xl md:text-[52px] font-bold text-center'>Hadi Başlayalım</h1>
              <ContactForm />
    
          
          </>}
            </div>
   
        
        <div className="flex-1">
          <Compaines />
        </div>

      </div>
    </main>
  );
}

export default Page;
