import { Metadata } from "next";

// Metadata for the page
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team",
};

// Simulated server-side data fetching
async function getContactInfo() {
  // In a real app, this could be a database query or API call
  return {
    email: "contact@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, City, Country",
  };
}

export default async function ContactPage() {
  // Fetch data on the server
  const contactInfo = await getContactInfo();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
            <p className="text-gray-600">
              We would love to hear from you. Please use the contact information
              below or fill out the form to reach us.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-gray-600">{contactInfo.email}</p>
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-gray-600">{contactInfo.phone}</p>
            </div>
            <div>
              <h3 className="font-medium">Address</h3>
              <p className="text-gray-600">{contactInfo.address}</p>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
