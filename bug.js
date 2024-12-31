```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // This will cause a warning, because the router.push is called before the component mounts
    router.push('/another-page');
  };

  return (
    <button onClick={handleClick}>Go to another page</button>
  );
}

export default MyComponent;```