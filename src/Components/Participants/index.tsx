"use client"
import React from 'react'
import userImage from "../../../public/user.svg"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import getUsers, { User, getAllUsers } from '@/Firebase/firestore/getUsers'

function Participants() {

    const [users, setUsers] = useState<User[]>([])
    const [showMore, setShowMore] = useState(true)

    useEffect(() => {
        const fetchUsers = async () => {
        const { result, error } = await getUsers();
        console.log(result)
        if (error) {
            return console.log(error)
        }
        //@ts-ignore
        setUsers(result)
        }
        fetchUsers()
    }, [])

    async function getMoreUsers(){
        const result = await getAllUsers()
        setUsers(result)
        setShowMore(false);
    }

  return (
    <div className="companies">
        <h2 className='text-white text-xl md:text-[32px] font-semibold uppercase'>Üyeler</h2>
        <div className='participants-grid'>
            {users.map((user, index) => (
                <div key={index}>
                    <Image src={userImage} alt="User Photo" width={36} height={36} />
                    <span>
                        <h3 style={{maxWidth: "12ch"}}>{user.name}</h3>
                        {user.classroom && <p>{user.classroom}</p>} 
                    </span>
                </div>
            ) )}
         {(showMore && users.length <= 5) && (
            <button className='bg-white p-3 text-black font-semibold' onClick={getMoreUsers}>daha fazla göster</button>
         )}
        </div>
    </div>
  )
}

export default Participants