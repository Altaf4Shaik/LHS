 const firebaseConfig = {
    apiKey: "AIzaSyBl_Di3v919AzZa5JYcbV2_94mJFA7F-4s",
    authDomain: "learning-horizons-shool.firebaseapp.com",
    databaseURL: "https://learning-horizons-shool-default-rtdb.firebaseio.com",
    projectId: "learning-horizons-shool",
    storageBucket: "learning-horizons-shool.appspot.com",
    messagingSenderId: "93337375144",
    appId: "1:93337375144:web:e34227f3a0ce57df7d8d9d"
  };

firebase.initializeApp(firebaseConfig);

const contactFormDB = firebase.database().ref('contactForm');
'
document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
 e.preventDefault();
 
 var name = getElementVal('name');
 var emailid = getElementVal('email');
 var subject = getElementVal('subject');
 var msgContent = getElementVal('message');  
 
 saveMessages(name, email, subject, message);
};

const saveMessages = (name, emailid, subject, msgContent) => {
 var newContactForm = contactFormDB.push();
 newContactForm.set({
  name : name,
  emailid : email,
  subject : subject,
  msgContent : message,
 });
};

const getElementVal = (id) => {
   return document.getElementById(id).value;
};
