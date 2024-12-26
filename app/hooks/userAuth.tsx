import {useSelector} from 'react-redux';

export default function userAuth() {
    // Access the `user` property from the `auth` slice of the Redux store.
    const { user } = useSelector((state: any) => state.auth);

    // If a user object exists, return `true`, otherwise return `false`.
    if (user) {
        return true;
    } else {
        return false;
    }
}