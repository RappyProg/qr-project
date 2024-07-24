import qr from "../assets/image-qr-code.png";
function Qrcode() {
  return (
    <>
        <div className="absolute flex h-screen w-screen justify-center items-center">
            <div className="card p-2 bg-white flex flex-col items-center max-w-[20rem]">
                <figure>
                    <img src={qr} alt="qr.png" className="rounded-2xl mt-4 h-72"/>
                </figure>
            
                <div className="card-body text-center">
                    <h1 className="card-title text-[rgba(34,48,67,255)] font-extrabold text-[1.1rem]">Improve your front-end skills by building projects</h1>
                    <p className="text-[rgba(144,149,158,255)] font-bold">Scan the QR codeto visit Frontend Mentor and take your coding skills to the next level</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Qrcode