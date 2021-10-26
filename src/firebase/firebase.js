import { initializeApp } from "firebase/app";
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAec8As00oby3rf6uEyg2u1fidUKUr366Y",
    authDomain: "usersapp-d78d6.firebaseapp.com",
    databaseURL: "https://usersapp-d78d6-default-rtdb.firebaseio.com",
    projectId: "usersapp-d78d6",
    storageBucket: "usersapp-d78d6.appspot.com",
    messagingSenderId: "775497369938",
    appId: "1:775497369938:web:01f6b62601f5d2bf0f128b",
    measurementId: "G-HM4SEK51Y2"
};

 initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

export { auth };

export default db;

// // Child Added
// database.ref('Expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// // Child Changed
// database.ref('Expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
//Child Removed
// database.ref('Expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('Expenses')
//     .on('value',((snapshot) => {
//         const expenses = [];
//         snapshot.forEach(child => {
//             expenses.push({
//                 id: child.key,
//                 ...child.val()
//             });
//         });
//         console.log(expenses)
//     }));
// database.ref('Expenses')
//         .once('value')
//         .then((snapshot) => {
//             const expenses = [];

//             snapshot.forEach(child => {
//                 expenses.push({
//                     id: child.key,
//                     ...child.val()
//                 });
//             });
// console.log(expenses)
//         });

// database.ref('Expenses').push({
//     description:'Coffee',
//     note: "Tried Expensive Coffee",
//     amount: 25.69,
//     createdAt: "12/12/2021"
// })
// database.ref('Expenses').push({
//     description:'Rent',
//     note: "",
//     amount: 190515,
//     createdAt: "19/10/2021"
// })
// database.ref('Expenses').push({
//     description:'Water',
//     note: "Monthly Water Bill",
//     amount: 59.32,
//     createdAt: "30/10/2021"
// })



// database.ref('notes/-Mlx2WOa6vjg-gQiRQLR').remove()
// database.ref('notes').push({
//     title:'Course Topics',
//     body: "React Native , Node , Python"
// })

//  Challange
// database.ref().on('value', (snapshot) => {
//     const val = (snapshot.val())
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })



// database.ref('location/Country')
//         .once('value')
//         .then((snapshot) => console.log(snapshot.val()))
//         .catch((e) => console.log('Error',e))

// database.ref().set({
//     name: 'Adhikar Shinde',
//     age: 22,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: "Kopergaon",
//         Country: 'india'
//     }
// }).then(() => {
//     console.log("data is saved");
// }).catch((e) => {
//     console.log(e);
// })

// database.ref().update({
//     stressLevel: 9
//     'job/company':'Amazon',
//     'location/city': 'Seattle'
// })

// database.ref('isSingle')
//    .remove()
//    .then(() => {
//        console.log('is single removed')
//    }).catch ((e) => {
//        console.log('Error accured',e)
//    })

// database.ref('age').set(null)

