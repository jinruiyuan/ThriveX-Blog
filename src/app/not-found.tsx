'use client'

import NotFound from '@/assets/image/404.png'

function NotFoundPage() {
    return (
        <html>
            <body className='bg-white'>
                <div className='mt-24 mx-auto flex flex-col items-center'>
                    <h1 className='text-[3vw] font-medium mb-8'>Page not found!</h1>
                    <img src={NotFound.src} alt="" className='w-[35vw]' />
                </div>
            </body>
        </html>
    )
}

export default NotFoundPage