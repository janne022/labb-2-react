import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

export default function Root() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [buffer, setBuffer] = useState<string>("");
  const secretCode = "1337";

  // Super funny easter egg
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newBuffer = (buffer + event.key).slice(-secretCode.length);
      setBuffer(newBuffer);

      if (newBuffer === secretCode) {
        setShowEasterEgg(true);
        setBuffer("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [buffer]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col">
        {showEasterEgg && (
          <Modal isOpen={showEasterEgg} onClose={() => setShowEasterEgg(false)}>
            <div className="p-6 text-center">
              <h2 className="text-3xl font-bold mb-4">Congratulations!</h2>
              <p className="text-lg text-gray-600 mb-4">
                You found the Easter Egg! 🥚
              </p>
              <button
                className="px-6 py-2 bg-primary hover:bg-primary-hover text-white rounded transition-colors"
                onClick={() => setShowEasterEgg(false)}
              >
                Close
              </button>
            </div>
          </Modal>
        )}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
