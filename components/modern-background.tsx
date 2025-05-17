export function ModernBackground() {
  return (
    <div className="fixed inset-0 z-[-1] w-full h-full overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40"></div>

      {/* Subtle wave effect - left side */}
      <div className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-blue-100/20 rounded-full blur-3xl"></div>

      {/* Subtle wave effect - right side */}
      <div className="absolute -right-1/4 bottom-1/4 w-1/2 h-1/2 bg-purple-100/20 rounded-full blur-3xl"></div>
    </div>
  )
}
