import React from 'react'
import Link from 'next/link'
import { useTranslation } from "react-i18next"
import { useRouter } from 'next/router';
import { useEffect,} from 'react';



export default function DashboardHeader() {
    const { t, i18n } = useTranslation()
  const router = useRouter();



  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
      }
    }
    return () => {};
  }, []);
    return (
        <div className="  bg-white">
            <div className='px-10  py-3'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <div className='pr-2  flex items-end '><img src="/logo-1.png" className='w-14 rounded-full shadow-lg' alt="" /></div>
                        <div className='pr-2 flex items-end'>
                            <div>
                                <div><p className='font-bold text-lg'>Coff eNow</p></div>
                                <div><p className='text-xs'>admincompany@mail.com</p></div>
                            </div>
                        </div>
                        <div className='pr-2 flex items-end'><p className='text-xs border-l-2 pl-2 '>{`${t("dashboard:Administratorrights")}`}</p></div>
                        <div className='pr-3  flex items-end '> <img src="/notification-icon.png" className='w-5 cursor-pointer hover:shadow-md' alt="" /></div>
                        <div className='pr-3  flex items-end '> <Link href="/companySetting"><a ><img src="/setting-icon.png" className='w-5 cursor-pointer hover:shadow-lg' alt="" /></a></Link></div>
                    </div>
                    <div className='pr-2  flex items-end  '><div className="flex cursor-pointer "><p className='text-xs px-2'>{`${t("dashboard:DownloadQRcodes")}`}</p><img src="/down-arrow.png" className='w-4' alt="" /></div></div>
                </div>
            </div>
        </div>
    )
}
