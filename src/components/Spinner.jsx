import { Spinner } from "flowbite-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <div className="text-center">
        <Spinner aria-label="Extra large spinner example" size="xl" />
        <p className="mt-2 text-gray-700">Loading</p>
      </div>
    </div>
  );
}
