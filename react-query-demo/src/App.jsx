import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './PostsComponent';  // Assuming this is where you will handle the data fetching

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
