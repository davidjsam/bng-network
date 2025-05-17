export function Background() {
  return (
    <div className="fixed inset-0 z-[-1] w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50">
        <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
      </div>
    </div>
  )
}
