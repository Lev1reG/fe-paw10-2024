"use client";

export const LoginButton = ({ children }) => {

  const onClick = () => {
    // TODO: Implement login
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}
