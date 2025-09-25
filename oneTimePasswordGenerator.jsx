const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
    const [otp, setOtp] = useState('');
    const timerRef = useRef(null);
    const [count, setCount] = useState(null);
    const [ctaDisabled, setCTADisabled] = useState(false)

    const generateOTP = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        setOtp(Math.floor(100000 + Math.random() * 900000).toString());
        setCount(5);

        timerRef.current = setInterval(() => {
            setCount(prevCount => {
                if (prevCount <= 1) {
                    setCTADisabled(false);
                    clearInterval(timerRef.current);
                    document.getElementById('otp-timer').textContent = "OTP expired. Please generate a new one.";
                    setOtp('');
                    return null;
                }

                document.getElementById('otp-timer').textContent = `OTP will expire in ${prevCount - 1} seconds.`;
                return prevCount - 1;
            })
        }, 1000);
        setCTADisabled(true);       
              
    }
    return (
        <div className="container">
            <h1 id="otp-title">OTP Generator</h1>
            <h2 id="otp-display">{otp ? otp : "Click 'Generate OTP' to get a code"}</h2>
            <p id="otp-timer" aria-live="assertive"></p>
            <button id="generate-otp-button" onClick={generateOTP}>Generate OTP</button>

        </div>
    )
};