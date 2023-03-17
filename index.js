// Import the Firebase Admin SDK
const admin = require("firebase-admin");
const credentials = require("./serviceAccountKey.json");

// Initialize the SDK
admin.initializeApp({
  credential: admin.credential.cert(credentials),
  databaseURL:
    "https://flowley-test-default-rtdb.europe-west1.firebasedatabase.app",
});

// Get a database reference
const db = admin.database();
const ref = db.ref("/");

// Read the data at the specified reference
ref.once(
  "value",
  (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  },
  (error) => {
    console.error(error);
  }
);
