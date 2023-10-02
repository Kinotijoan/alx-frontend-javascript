import uploadPhoto from './utils';
import createUser from './utils';

export default function handleProfileSignup(){
    const prom1 = uploadPhoto();
    const prom2 = createUser();

    Promise.all([prom1, prom2])
    .then(function (values) {
        console.log(values[0].body, values[1].firstName, values[1].lastName);})

    .catch(function(error){
        console.log('Signup system offline')
    })
}