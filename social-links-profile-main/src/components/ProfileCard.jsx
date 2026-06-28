import jessicaImg from '../assets/images/avatar-jessica.jpeg'

const SOCIAL_LINKS = [
    { label: 'Github', href: '#'},
    { label: 'Frontend Mentor', href: '#'},
    { label: 'LinkedIn', href: '#'},
    { label: 'Twitter', href: '#'},
    { label: 'Instagram', href: '#'},
]
function ProfileCard(){
    return (
        <>
            <div className="min-w-[327px] max-w-[327px] p-300 md:min-w-[384px] md:max-w-[384px] md:p-500 flex flex-col items-center justify-center bg-gray-2 gap-y-300 rounded-150">
                <img src={jessicaImg} alt="Jessica Profile Image" className="w-[88px] h-[88px] rounded-full" />
                <div className="flex flex-col gap-y-50 justify-center items-center">
                    <h1 className="text-preset-1">Jessica Randall</h1>
                    <p className="text-green-1 text-preset-2-bold">London, United Kingdom</p>

                </div>
                
                <p className="text-preset-2">"Front-end developer and avid reader."</p>
                <div className="flex flex-col items-center justify-center gap-y-200 w-full">
                    {SOCIAL_LINKS.map(({ label, href }) => (
                        <a key={label} href={href} className="mainButton">
                            {label}
                        </a>

                    ))}

                    
                </div>
            
            </div>
        </>

    )
}
export default ProfileCard