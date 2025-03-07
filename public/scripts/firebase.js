// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  push,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
//import { initializeApp } from 'firebase-admin/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Reference  database
const database = getDatabase(app);

document.getElementById("appForm").addEventListener("submit", submitForm);

async function submitForm(e) {
  e.preventDefault();

  var Position = getElementVal("Position");
  var First_Name = getElementVal("First Name");
  var Last_Name = getElementVal("Last Name");
  var Pronouns = getElementVal("Pronouns");
  var Email = getElementVal("Email");
  var Phone_Number = getElementVal("Phone Number");
  var Address_Line_1 = getElementVal("Address Line 1");
  var Address_Line_2 = getElementVal("Address Line 2");
  var City = getElementVal("City");
  var State = getElementVal("State");
  var Zip_Code = getElementVal("Zip Code");
  var LinkedIn = getElementVal("LinkedIn");
  var GitHub = getElementVal("GitHub");
  var Other = getElementVal("Other");
  var Qualifications = getElementVal("Qualifications");
  var Work_Auth = getElementVal("work_auth");

  await saveMessages(
    First_Name,
    Last_Name,
    Pronouns,
    Email,
    Phone_Number,
    Address_Line_1,
    Address_Line_2,
    City,
    State,
    Zip_Code,
    Position,
    LinkedIn,
    GitHub,
    Other,
    Qualifications,
    Work_Auth
  );
  //   reset the form
  // document.getElementById("appForm").reset();
}

const saveMessages = async (
  First_Name,
  Last_Name,
  Pronouns,
  Email,
  Phone_Number,
  Address_Line_1,
  Address_Line_2,
  City,
  State,
  Zip_Code,
  Position,
  LinkedIn,
  GitHub,
  Other,
  Qualifications,
  Work_Auth
) => {
  console.log("fml");
  const newApplicationKey = await push(ref(database, "applications")).key;
  const applicationRef = await ref(
    database,
    "applications/" + newApplicationKey
  );

  await set(applicationRef, {
    First_Name: First_Name,
    Last_Name: Last_Name,
    Pronouns: Pronouns,
    Email: Email,
    Phone_Number: Phone_Number,
    Address_Line_1: Address_Line_1,
    Address_Line_2: Address_Line_2,
    City: City,
    State: State,
    Zip_Code: Zip_Code,
    Position: Position,
    LinkedIn: LinkedIn,
    GitHub: GitHub,
    Other: Other,
    Qualifications: Qualifications,
    Work_Auth: Work_Auth,
  });

  window.location.href = "/apply/3";
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
