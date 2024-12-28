import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';  // Make sure the path is correct

// Initialize React Query client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />  {/* Render the PostsComponent here */}
    </QueryClientProvider>
  );
}

export default App;
