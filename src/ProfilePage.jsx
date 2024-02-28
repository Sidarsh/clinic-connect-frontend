import React from "react";

function ProfilePage() {
  // Assume user data is available in a context or state
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    // Add other user information as needed
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Display other user information */}
    </div>
  );
}

export default ProfilePage;
