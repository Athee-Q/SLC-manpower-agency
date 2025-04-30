export default function AuthLayout({ children }) {
    return (
      <>
          {children} {/* Only authentication components inside */}
      </>
    );
  }