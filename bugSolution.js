```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fix: Removing 'count' from the dependency array prevents infinite loop
    // The effect now only runs once after the component mounts. 
    // It can be modified to run only under different condition like external API call
    console.log('Component Mounted');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button> 
    </div>
  );
}
```