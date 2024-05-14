export default function TermsOfService() {
    return (
        <main className="overflow-hidden duration-20 transition-all select-none py-5">



            <header>
                {/* add icon and title to page */}
                <title>Bear</title>
            </header>
            <iframe src='/TermsofService.html' title='Privacy Policy' className='w-full h-auto' frameBorder='0' style={{ height: 'calc(100vh - 100px)' }} scrolling='auto'></iframe> {/* Adjust height calculation based on NavBar and Footer */}

        </main>
    )
};
