function Button({text , setterfnc = false , children}){
    return(
        <>
        <button onClick={() => {
            if (setterfnc !== false)setterfnc(prev => !prev)}}
         className='bg-[#009A6E] px-5 py-3 rounded-lg text-[#EBE6E0] font-semibold hover:bg-[#188566]'>{children}</button>
        </>
    );
}
 export default Button;