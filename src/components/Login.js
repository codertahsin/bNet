import { auth } from '../utils/firebase';
import firebase from 'firebase';
import { BiLogIn } from 'react-icons/bi';
import picture from '../image/login.jpg'

function Login() {

    const continueWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .catch(err => alert(err.message));
    }

    return (
        <div>
        <img className='rounded-lg ' src={picture} alt='' /><br /><br />
            <button
                type="button"
                className="flex items-center justify-center w-full p-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-opacity-10 hover:bg-opacity-20"
                onClick={continueWithGoogle}
            >
                <span> Continue with Google </span>
                <span className="text-green-300"><BiLogIn size={25}/></span>
            </button>
        </div>
    )
}

export default Login