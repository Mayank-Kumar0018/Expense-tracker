function Button({text , setterfnc}){
    return(
        <>
        <button onClick={() => setterfnc(prev => !prev)} className='bg-[#009A6E] px-5 py-3 rounded-lg text-[#EBE6E0] font-semibold hover:bg-[#188566]'>{text}</button>
        </>
    );
}
 export default Button;