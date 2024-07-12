const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full bg-blue-600 py-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Welcome to My Website</h1>
          <p className="text-xl text-blue-200 mt-2">Your tagline goes here</p>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <p className="text-gray-700">Main content goes here.</p>
      </main>
    </div>
  );
};

export default Index;