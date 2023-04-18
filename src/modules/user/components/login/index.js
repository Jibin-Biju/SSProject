
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function SinginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handlesubmit() {
        //    signin logic
    }



    return (
        <div className={`LoginSignUpPage`}>
            <div className={'infoDiv'}>
                <motion.form
                    initial={{ x: -1000 }}
                    transition={{ duration: .5 }}
                    animate={{ x: 0 }}
                    onSubmit={e => { e.preventDefault(); handlesubmit() }}
                >
                    <div className={'tagDiv'}>
                        <h1
                            style={{
                                fontSize: "2rem",
                                fontWeight: 600,
                                textTransform: "capitalize"
                            }}
                        >Login In
                            <span
                                style={{
                                    fontSize: ".9rem",
                                    marginLeft: ".5rem",
                                    color: "var(--secondary)"
                                }}
                            >
                                \  <Link to={"/"}>Go Home</Link>
                            </span>
                        </h1>

                        <p>A place to share knowledge and connect</p>
                    </div>
                    <div className={'textCenter'}>Sigin with Email</div>
                    <div className={'inputArea'}>
                        <h4>Email*</h4>
                        <input
                            autoComplete='on'
                            className='shadow1'
                            type="email"
                            placeholder='mail@gmail.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={'inputArea'}>
                        <h4>Password*</h4>
                        <input
                            autoComplete='on'
                            className='shadow1'
                            type="password"
                            placeholder='abcdef1.'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className={'inputArea'}>
                        <input type="submit" className="btn" value="Sign in" />
                    </div>
                    <div className={`inputArea link `}>
                        <p>Don't remember password?
                            <Link to="/forgotpassword">Reset password</Link>
                        </p>
                    </div>
                    <div className={`inputArea link `}>
                        <p>Don't have an account?  <Link to="/signup">Signup</Link></p>
                    </div>
                </motion.form>
            </div >

        </div >
    )
}

export default SinginPage