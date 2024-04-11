const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-slate-100 w-64 h-64 flex flex-col items-center p-4 rounded-lg border-2 border-slate-300">
        <h1 className="text-xl font-semibold">Count</h1>
        <p className="text-7xl font-semibold mt-3">0</p>
        <div className="mt-auto w-full flex items-center gap-x-4">
          <button className="btn">+</button>
          <button className="btn">-</button>
        </div>
      </div>
    </div>
  );
};
export default App;
