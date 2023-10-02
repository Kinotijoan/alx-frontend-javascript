import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
    const prom1 = signUpUser(firstName, lastName);
    const prom2 = uploadPhoto(filename);
    return Promise.all([prom1, prom2]).then((res) => {
        res.map((obj) => ({
            status: obj.status,
            value: obj.status === 'fulfilled' ? obj.value : String(obj.reason),
        }))
    });
}
