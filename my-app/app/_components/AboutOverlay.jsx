export default function AboutOverlay({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none transition-opacity duration-[420ms] ease-[cubic-bezier(.78,-0.01,.17,.99)] backdrop-blur-[60px]  ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
      }`}
      aria-hidden={!isOpen}
      onClick={onClose}
    >
      {/* semi-opaque layer + backdrop blur */}
      <div className="absolute inset-0" onClick={onClose} />
      {/* centered content */}
      <div
        className="relative mx-auto my-20 max-w-2xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl">About</h2>
        <p className="mt-4 text-sm">{/* about content */}</p>
      </div>
    </div>
  );
}