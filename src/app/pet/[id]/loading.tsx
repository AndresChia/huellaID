export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="animate-pulse">
            <div className="h-64 bg-gray-200 rounded-t-lg"></div>
            <div className="p-6 bg-white rounded-b-lg shadow-md">
              <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
