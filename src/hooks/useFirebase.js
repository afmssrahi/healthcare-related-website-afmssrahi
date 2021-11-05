import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const auth = getAuth();

	const createUserWithFirebaseEmailAndPassword = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const updateProfileDetails = (name) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
		});
	};

	const singInUsingEmailAndPassword = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googleProvider = new GoogleAuthProvider();
	const singInUsingGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((err) => console.log(err));
	};

	const setIsLoadingFunc = (loading) => {
		console.log(loading);
		setIsLoading(loading);
	};

	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				setIsLoading(false);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribed;
	}, [auth]);

	return {
		user,
		singInUsingGoogle,
		logOut,
		createUserWithFirebaseEmailAndPassword,
		updateProfileDetails,
		singInUsingEmailAndPassword,
		isLoading,
		setIsLoadingFunc,
	};
};

export default useFirebase;
