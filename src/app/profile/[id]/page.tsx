import React from 'react'

type ProfileProps = {
  params: {
    id: string;
  };
};

const Profile = ({ params }: ProfileProps) => {
  const { id } = params; // Extracting `username` from `params`
  return (
    <div>
      Hello {id}
    </div>
  );
};

export default Profile;









