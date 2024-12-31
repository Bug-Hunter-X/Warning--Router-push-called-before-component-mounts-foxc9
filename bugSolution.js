```javascript
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyComponent() {
  const router = useRouter();

  useEffect(() => {
    const routeToAnotherPage = async () => {
      if (router.isReady) {
        router.push('/another-page');
      }
    };
    routeToAnotherPage();
  }, [router.isReady]);

  const handleClick = () => {
    // This is now safe because it uses the useEffect hook
  };

  return (
    <button onClick={handleClick}>Go to another page</button>
  );
}

export default MyComponent;```