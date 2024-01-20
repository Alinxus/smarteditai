import { useAuth } from 'next-auth/client';
 
// Page component
export default function ProtectedPage() {
  const [user] = useAuth();
  if (!user) {
    return <p>You must be logged in to view this page.</p>;
  }
  return <p>Welcome {user.name}!</p>;
}