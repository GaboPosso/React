export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-lg font-bold">MyApp</div>
            <div className="space-x-4">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">About</a>
                <a href="#" className="hover:underline">Services</a>
                <a href="#" className="hover:underline">Contact</a>
            </div>
        </div>
    </nav>
  );
}

