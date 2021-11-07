import React, { useEffect } from 'react'
import tw from "tailwind-styled-components";

// import router to route from google sign in to next page
import { useRouter } from 'next/router';
// popup for email login
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
// google provider
import { auth, provider } from '../firebase';

const Login = () => {
    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/');
            }
        })
    }, [])

    return (
        <Wrapper>
            <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
            <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
            <Title>Login to access your account</Title>
            <SignInButton onClick={() => signInWithPopup(auth, provider)}>
                Sign in with Google
            </SignInButton>
        </Wrapper>
    )
}

export default Login;

/** Wrapper Styling */
const Wrapper = tw.div`
flex flex-col h-screen bg-gray-200 p-4
`
/** Button Styling */
const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full 
`
/** Image and Title Styling */
const UberLogo = tw.img`
h-20 w-auto object-contain self-start
`
const Title = tw.div`
text-5xl pt-4 text-gray-500
`
const HeadImage = tw.img`
object-contain w-full 
`