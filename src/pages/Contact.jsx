import React from 'react'

export default function Contact() {
  return (
    <main className="md:p-[4rem] p-[2rem] mx-auto max-w-screen-2xl transition-all duration-150 h-screen mb-10">
        {/* list contact information of the company, email, phone number, contact address */}
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="text-lg">Have a question or need help? Contact us!</p>
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Email</h2>
                <p> info@giftwithbear.com</p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Phone</h2>
                <p> +1 (314) 882-8953 </p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Address</h2>
                <p>4540 Lindell Blvd Apt 106, Saint Louis MO 63108</p>
            </div>
        </div>

                        
    </main>
  )
}
