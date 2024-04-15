import React from 'react'

export default function PrivacyPolicy() {
  return (
        <div style={{ paddingTop: '20px', paddingBottom: '50px' }}> {/* Adjust padding as per the actual height of NavBar and Footer */}
        <iframe src='/privacy-policy.html' title='Privacy Policy' className='w-full h-auto' frameBorder='0' style={{ height: 'calc(100vh - 100px)' }} scrolling='auto'></iframe> {/* Adjust height calculation based on NavBar and Footer */}
      </div>
  )
}
