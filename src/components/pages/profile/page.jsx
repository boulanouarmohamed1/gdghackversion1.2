import { useState } from "react";
import ProfilePopup from "../profile/ProfilePopup";

function page() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Example userId for API call
  const userId = "63f14f05bff2300012cda555"; 

  return (
    <div>
      <button onClick={() => setIsProfileOpen(true)}>View Profile</button>
      <ProfilePopup
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        userId={userId}
      />
    </div>
  );
}

export default page;
