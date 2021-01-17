//regis
const email = document.getElementById("email")
const password = document.getElementById("password")
const names = document.getElementById("names")
const locations = document.getElementById("locations")
const fileuser = document.getElementById("fileuser")
const username = document.getElementById("username")

const database = firebase.database()
//const rootRef = database.ref('user')

addBtn.addEventListener('click',(e) => {
    e.preventDefault();
    //const autoId = rootRef.push().key
    database.ref('/users/'+ username.value).set({ 
        username:username.value,
        email:email.value,
        password:password.value,
        name:names.value,
        locations:locations.value,
        fileuser:fileuser.value
    })
    window.alert('เรียบร้อยแล้ว')
});

