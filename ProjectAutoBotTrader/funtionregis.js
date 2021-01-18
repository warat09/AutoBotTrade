//regis
const email = document.getElementById("email")
const password = document.getElementById("password")
const names = document.getElementById("names")
const locations = document.getElementById("locations")
const fileuser = document.getElementById("fileuser")
const username = document.getElementById("username")
const balance = '0'

const database = firebase.database()
//const rootRef = database.ref('user')

addBtn.addEventListener('click',(e) => {
    e.preventDefault();
    //const autoId = rootRef.push().key
    return database.ref('/users/'+ username.value).once('value').then((snapshot) => {
        var registerusername = (snapshot.val()&& snapshot.val().username);
        var registeremail = (snapshot.val()&& snapshot.val().email);
        var registerpassword = (snapshot.val()&& snapshot.val().password);
        var registerlocation = (snapshot.val()&& snapshot.val().locations);
        var registername = (snapshot.val()&& snapshot.val().names);
      // ...
      console.log(registerusername)
        if(username.value == registerusername || email.value == registeremail){
            window.alert('ไอดีนี้มีแล้ว')
        }
        else if(username.value == '' || names.value == '' || password.value == '' || locations.value == null || email.value == ''){
            window.alert('กรุณากรอกให้ครบ')
        }
        else if(username.value == 'beba' && password.value == 'autobotsigz'){
            window.alert('ไอดีนี้มีแล้ว')
        }
        else{
            database.ref('/users/'+ username.value).set({ 
                username:username.value,
                email:email.value,
                password:password.value,
                name:names.value,
                locations:locations.value,
                balance:balance
                
            })
            window.alert('สมัครเรียบร้อยแล้ว')
        }
    });
});

