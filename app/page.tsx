import { Metadata } from "next";
import Counter from "./Counter";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to our Next.js application",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Our App
        </h1>

        <div className="grid gap-8">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Interactive Counter</h2>
            <p className="text-gray-600 mb-6">
              This is a client-side component that demonstrates state management
              in React. Try clicking the buttons below to increment or decrement
              the counter.
            </p>
            <Counter />
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">About This Page</h2>
            <p className="text-gray-600">
              This is a server-rendered page that includes a client-side
              interactive component. The counter above is rendered on the client
              side, while this text is rendered on the server.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
