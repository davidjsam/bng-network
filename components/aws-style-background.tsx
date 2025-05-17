export function AwsStyleBackground() {
  return (
    <div className="fixed inset-0 z-[-1] w-full h-full overflow-hidden pointer-events-none">
      {/* Base color */}
      <div className="absolute inset-0 bg-white"></div>

      {/* Left side dot wave */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin slice">
          <g transform="translate(0,0) scale(1.2)">
            {Array.from({ length: 25 }).map((_, rowIndex) => (
              <g key={`row-${rowIndex}`}>
                {Array.from({ length: 25 }).map((_, colIndex) => {
                  const x = colIndex * 20
                  const y = rowIndex * 20
                  const waveOffset = Math.sin(rowIndex * 0.5 + colIndex * 0.3) * 20
                  const opacity = 0.2 + Math.sin(rowIndex * 0.2 + colIndex * 0.3) * 0.15
                  const size = 1.5 + Math.sin(rowIndex * 0.2 + colIndex * 0.3) * 0.8

                  return (
                    <circle
                      key={`dot-${rowIndex}-${colIndex}`}
                      cx={x + waveOffset}
                      cy={y + waveOffset}
                      r={size}
                      fill={`rgba(100, 150, 255, ${opacity})`}
                    />
                  )
                })}
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Right side dot wave */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full">
        <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="xMaxYMax slice">
          <g transform="translate(0,0) scale(1.2)">
            {Array.from({ length: 25 }).map((_, rowIndex) => (
              <g key={`row-${rowIndex}`}>
                {Array.from({ length: 25 }).map((_, colIndex) => {
                  const x = colIndex * 20
                  const y = rowIndex * 20
                  const waveOffset = Math.cos(rowIndex * 0.5 + colIndex * 0.3) * 20
                  const opacity = 0.2 + Math.cos(rowIndex * 0.2 + colIndex * 0.3) * 0.15
                  const size = 1.5 + Math.cos(rowIndex * 0.2 + colIndex * 0.3) * 0.8

                  return (
                    <circle
                      key={`dot-${rowIndex}-${colIndex}`}
                      cx={x + waveOffset}
                      cy={y + waveOffset}
                      r={size}
                      fill={`rgba(150, 100, 255, ${opacity})`}
                    />
                  )
                })}
              </g>
            ))}
          </g>
        </svg>
      </div>
    </div>
  )
}
