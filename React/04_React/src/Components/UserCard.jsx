import React, { useState } from "react";

export default function UserCard({
  profile,
  firstName,
  lastName,
  age,
  email,
  mobile,
}) {

  return (
    <>
      <div className="flex flex-col items-center justify-center p-10 gap-6 rounded-lg bg-gray-200 shadow-2xl hover:shadow-sm duration-300 transition-shadow ease-in-out">
        <div className="rounded-full overflow-hidden object-cover">
          <img src={profile} alt="profile" />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <span className="font-semibold">Name:</span> {firstName} {lastName}
          </div>
          <div>
            <span className="font-semibold">Age:</span> {age}
          </div>
          <div>
            <span className="font-semibold">Email:</span> {email}
          </div>
          <div>
            <span className="font-semibold">Mobile:</span> {mobile}
          </div>
        </div>
      </div>
    </>
  );
}
