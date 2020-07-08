const app: Realm.App = new Realm.App({ id: "myapp-abcde" });

// Get all Users indexed by their id
const allUsers = app.allUsers();
Object.entries(allUsers).forEach(([userId, user]: [string, Realm.User]) => {
   console.log(`User with id ${userId} is ${user.isLoggedIn ? "logged in" : "logged out"}`);
});