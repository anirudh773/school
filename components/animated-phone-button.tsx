// "use client"

// import { useState, useEffect, useRef } from "react"
// import { Phone, Sparkles } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { cn } from "@/lib/utils"

// interface AnimatedPhoneButtonProps {
//   phoneNumber: string
//   className?: string
//   showText?: boolean
//   floating?: boolean
//   color?: "blue" | "green" | "purple" | "orange" | "rainbow" | "gradient"
// }

// export default function AnimatedPhoneButton({
//   phoneNumber,
//   className,
//   showText = false,
//   floating = false,
//   color = "rainbow",
// }: AnimatedPhoneButtonProps) {
//   const [isAnimating, setIsAnimating] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)
//   const [colorIndex, setColorIndex] = useState(0)
//   const [showTwinkle, setShowTwinkle] = useState(false)
//   const [position, setPosition] = useState({ x: 0, y: 0 })
  
//   const buttonRef = useRef<HTMLDivElement>(null)
  
//   const gradientColors = [
//     "from-blue-500 to-cyan-400", 
//     "from-purple-500 to-pink-500", 
//     "from-red-500 to-orange-500",
//     "from-green-500 to-emerald-400",
//     "from-yellow-400 to-amber-500"
//   ]

//   const rainbowAnimation = "animate-rainbow-border"
  
//   const staticColors = {
//     blue: "bg-blue-500 hover:bg-blue-600",
//     green: "bg-green-500 hover:bg-green-600",
//     purple: "bg-purple-500 hover:bg-purple-600",
//     orange: "bg-orange-500 hover:bg-orange-600",
//     rainbow: "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
//     gradient: `bg-gradient-to-r ${gradientColors[colorIndex]}`
//   }

//   useEffect(() => {
//     // Check if screen is mobile size
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }
    
//     // Initialize on mount
//     checkMobile()
    
//     // Setup event listener for resize
//     window.addEventListener('resize', checkMobile)

//     // Twinkling effect
//     const twinkleInterval = setInterval(() => {
//       setShowTwinkle(true)
      
//       setTimeout(() => {
//         setShowTwinkle(false)
//       }, 700)
//     }, 3000) // Show twinkle every 3 seconds
    
//     // Bouncing movement
//     let bounceTimeout: NodeJS.Timeout | null = null
//     const bounceInterval = setInterval(() => {
//       // Random offset values
//       setPosition({
//         x: (Math.random() * 10) - 5,
//         y: (Math.random() * 10) - 5
//       })
      
//       // Reset position after the bounce
//       bounceTimeout = setTimeout(() => {
//         setPosition({ x: 0, y: 0 })
//       }, 500)
      
//     }, 2000) // Random bounce every 2 seconds
    
//     // Start animation
//     const animationInterval = setInterval(() => {
//       setIsAnimating(true)

//       // Reset animation
//       setTimeout(() => {
//         setIsAnimating(false)
//       }, 1000)
//     }, 4000) // Repeat every 4 seconds
    
//     // Cycle through gradient colors if gradient or rainbow selected
//     let colorCycleInterval: NodeJS.Timeout | null = null
//     if (color === "gradient" || color === "rainbow") {
//       colorCycleInterval = setInterval(() => {
//         setColorIndex(prev => (prev + 1) % gradientColors.length)
//       }, 2000) // Change color every 2 seconds
//     }

//     return () => {
//       clearInterval(animationInterval)
//       clearInterval(twinkleInterval)
//       clearInterval(bounceInterval)
//       if (bounceTimeout) clearTimeout(bounceTimeout)
//       if (colorCycleInterval) clearInterval(colorCycleInterval)
//       window.removeEventListener('resize', checkMobile)
//     }
//   }, [color, gradientColors.length])

//   const getButtonColor = () => {
//     return staticColors[color]
//   }

//   // Create the twinkling stars
//   const renderTwinkles = () => {
//     if (!showTwinkle) return null
    
//     return (
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(6)].map((_, i) => {
//           const size = Math.random() * 5 + 3
//           const top = Math.random() * 100
//           const left = Math.random() * 100
//           const delay = Math.random() * 0.5
          
//           return (
//             <div 
//               key={i}
//               className="absolute bg-white rounded-full animate-twinkle"
//               style={{
//                 width: `${size}px`,
//                 height: `${size}px`,
//                 top: `${top}%`,
//                 left: `${left}%`,
//                 opacity: 0,
//                 animationDelay: `${delay}s`
//               }}
//             />
//           )
//         })}
//       </div>
//     )
//   }

//   if (floating) {
//     return (
//       <div 
//         className={cn(
//           "fixed z-50 transition-all duration-300", 
//           isMobile ? "bottom-4 right-4" : "bottom-6 right-6", 
//           className
//         )}
//         ref={buttonRef}
//         style={{ 
//           transform: `translate(${position.x}px, ${position.y}px)`,
//         }}
//       >
//         <div className={cn(
//           "rounded-full p-1",
//           color === "rainbow" && rainbowAnimation
//         )}>
//           <Button
//             size={isMobile ? "default" : "lg"}
//             className={cn(
//               "rounded-full shadow-lg transition-all duration-300 relative overflow-hidden",
//               getButtonColor(),
//               "border-2 border-white/50",
//               isMobile ? "h-14 w-14" : "h-16 w-16",
//               isAnimating && "scale-125",
//               "animate-float",
//               color === "gradient" && "bg-gradient-to-r"
//             )}
//             asChild
//           >
//             <a href={`tel:${phoneNumber}`} aria-label="Call us">
//               <Phone className={cn(
//                 "transition-all duration-300 text-white z-10 relative", 
//                 isMobile ? "h-5 w-5" : "h-6 w-6",
//                 isAnimating && "animate-pulse"
//               )} />
//               {renderTwinkles()}
//               {isAnimating && (
//                 <div className="absolute inset-0 bg-white/20 animate-ping-slow" />
//               )}
//             </a>
//           </Button>
//         </div>
        
//         {showText && (
//           <div className={cn(
//             "absolute px-3 py-1 rounded-full shadow-md font-medium whitespace-nowrap",
//             isMobile ? "-top-10 right-0 text-xs" : "-top-12 right-0 text-sm",
//             "border border-gray-100 bg-white",
//             isAnimating && "animate-bounce-gentle"
//           )}>
//             <span className={cn(
//               "bg-clip-text text-transparent bg-gradient-to-r",
//               color === "rainbow" || color === "gradient" 
//                 ? gradientColors[colorIndex] 
//                 : `from-${color}-600 to-${color}-500`
//             )}>
//               Call us: {phoneNumber}
//             </span>
//             <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
//           </div>
//         )}
//       </div>
//     )
//   }

//   return (
//     <Button
//       variant="outline"
//       className={cn(
//         "gap-2 transition-all duration-300 overflow-hidden relative group",
//         isAnimating && "translate-x-1 -translate-y-1 shadow-lg",
//         isMobile ? "text-xs py-1 px-2" : "text-sm py-2 px-4",
//         color === "rainbow" && rainbowAnimation,
//         className
//       )}
//       style={{
//         transform: `translate(${position.x/2}px, ${position.y/2}px)`,
//         background: "none",
//         border: color === "rainbow" ? "none" : `2px solid ${color === "gradient" ? "#4F46E5" : ""}`
//       }}
//       asChild
//     >
//       <a href={`tel:${phoneNumber}`} className="flex items-center relative z-10">
//         <div className={cn(
//           "absolute inset-0 opacity-90 -z-10 group-hover:opacity-100 transition-opacity",
//           color === "rainbow" || color === "gradient" 
//             ? `bg-gradient-to-r ${gradientColors[colorIndex]}` 
//             : getButtonColor(),
//         )} />
//         <Phone className={cn(
//           "transition-all duration-300 text-white", 
//           isMobile ? "h-3 w-3 mr-1" : "h-4 w-4 mr-2",
//           isAnimating && "animate-wiggle"
//         )} />
//         {showTwinkle && (
//           <Sparkles 
//             className={cn(
//               "absolute text-yellow-200 animate-ping-slow opacity-70",
//               isMobile ? "h-4 w-4" : "h-5 w-5"
//             )} 
//             style={{ 
//               top: `${Math.random() * 80 + 10}%`, 
//               left: `${Math.random() * 80 + 10}%` 
//             }}
//           />
//         )}
//         {showText && (
//           <span className={cn(
//             isMobile ? "truncate max-w-[120px]" : "",
//             "text-white font-medium"
//           )}>
//             {phoneNumber}
//           </span>
//         )}
//       </a>
//     </Button>
//   )
// }

"use client"

import { useState, useEffect, useRef } from "react"
import { Phone, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedPhoneButtonProps {
  phoneNumber: string
  className?: string
  showText?: boolean
  floating?: boolean
  color?: "blue" | "green" | "purple" | "orange" | "rainbow" | "gradient"
  hyperActive?: boolean
}

export default function AnimatedPhoneButton({
  phoneNumber,
  className,
  showText = false,
  floating = false,
  color = "rainbow",
  hyperActive = true, // Default to high-speed animations
}: AnimatedPhoneButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [colorIndex, setColorIndex] = useState(0)
  const [showTwinkle, setShowTwinkle] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [showZap, setShowZap] = useState(false)
  
  const buttonRef = useRef<HTMLDivElement>(null)
  
  const gradientColors = [
    "from-blue-500 to-cyan-400", 
    "from-purple-500 to-pink-500", 
    "from-red-500 to-orange-500",
    "from-green-500 to-emerald-400",
    "from-yellow-400 to-amber-500"
  ]

  const rainbowAnimation = "animate-rainbow-border"
  
  const staticColors = {
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
    purple: "bg-purple-500 hover:bg-purple-600",
    orange: "bg-orange-500 hover:bg-orange-600",
    rainbow: "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
    gradient: `bg-gradient-to-r ${gradientColors[colorIndex]}`
  }

  useEffect(() => {
    // Check if screen is mobile size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initialize on mount
    checkMobile()
    
    // Setup event listener for resize
    window.addEventListener('resize', checkMobile)

    // Twinkling effect - much faster for hyperActive
    const twinkleInterval = setInterval(() => {
      setShowTwinkle(true)
      
      setTimeout(() => {
        setShowTwinkle(false)
      }, hyperActive ? 300 : 700)
    }, hyperActive ? 1000 : 3000)
    
    // Zap effect (electric bolt) for hyperActive mode
    let zapInterval: NodeJS.Timeout | null = null
    if (hyperActive) {
      zapInterval = setInterval(() => {
        setShowZap(true)
        
        setTimeout(() => {
          setShowZap(false)
        }, 200)
      }, 1500)
    }
    
    // Bouncing movement - much more frequent for hyperActive
    let bounceTimeout: NodeJS.Timeout | null = null
    const bounceInterval = setInterval(() => {
      // Random offset values - more extreme for hyperActive
      const magnitude = hyperActive ? 15 : 5
      setPosition({
        x: (Math.random() * magnitude * 2) - magnitude,
        y: (Math.random() * magnitude * 2) - magnitude
      })
      
      // Random rotation for hyperActive
      if (hyperActive) {
        setRotation((Math.random() * 20) - 10)
      }
      
      // Reset position after the bounce - faster for hyperActive
      bounceTimeout = setTimeout(() => {
        setPosition({ x: 0, y: 0 })
        setRotation(0)
      }, hyperActive ? 200 : 500)
      
    }, hyperActive ? 700 : 2000) // Random bounce much more frequently
    
    // Start animation - faster cycles for hyperActive
    const animationInterval = setInterval(() => {
      setIsAnimating(true)

      // Reset animation
      setTimeout(() => {
        setIsAnimating(false)
      }, hyperActive ? 500 : 1000)
    }, hyperActive ? 1500 : 4000)
    
    // Cycle through colors - much faster for hyperActive
    let colorCycleInterval: NodeJS.Timeout | null = null
    if (color === "gradient" || color === "rainbow") {
      colorCycleInterval = setInterval(() => {
        setColorIndex(prev => (prev + 1) % gradientColors.length)
      }, hyperActive ? 500 : 2000) // Much faster color cycling
    }

    return () => {
      clearInterval(animationInterval)
      clearInterval(twinkleInterval)
      clearInterval(bounceInterval)
      if (zapInterval) clearInterval(zapInterval)
      if (bounceTimeout) clearTimeout(bounceTimeout)
      if (colorCycleInterval) clearInterval(colorCycleInterval)
      window.removeEventListener('resize', checkMobile)
    }
  }, [color, gradientColors.length, hyperActive])

  const getButtonColor = () => {
    return staticColors[color]
  }

  // Create the twinkling stars
  const renderTwinkles = () => {
    if (!showTwinkle) return null
    
    return (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(hyperActive ? 12 : 6)].map((_, i) => {
          const size = Math.random() * 5 + 3
          const top = Math.random() * 100
          const left = Math.random() * 100
          const delay = Math.random() * 0.2 // Shorter delay for hyperActive
          
          return (
            <div 
              key={i}
              className={cn(
                "absolute bg-white rounded-full",
                hyperActive ? "animate-twinkle-fast" : "animate-twinkle"
              )}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                opacity: 0,
                animationDelay: `${delay}s`
              }}
            />
          )
        })}
      </div>
    )
  }

  if (floating) {
    return (
      <div 
        className={cn(
          "fixed z-50 transition-all", 
          hyperActive ? "duration-200" : "duration-300",
          isMobile ? "bottom-4 right-4" : "bottom-6 right-6", 
          className
        )}
        ref={buttonRef}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
        }}
      >
        <div className={cn(
          "rounded-full p-1",
          color === "rainbow" && (hyperActive ? "animate-rainbow-border-fast" : rainbowAnimation)
        )}>
          <Button
            size={isMobile ? "default" : "lg"}
            className={cn(
              "rounded-full shadow-lg transition-all relative overflow-hidden",
              hyperActive ? "duration-200" : "duration-300",
              getButtonColor(),
              "border-2 border-white/50",
              isMobile ? "h-14 w-14" : "h-16 w-16",
              isAnimating && (hyperActive ? "scale-150" : "scale-125"),
              hyperActive ? "animate-float-fast" : "animate-float",
              color === "gradient" && "bg-gradient-to-r"
            )}
            asChild
          >
            <a href={`tel:${phoneNumber}`} aria-label="Call us">
              <Phone className={cn(
                "transition-all duration-300 text-white z-10 relative", 
                isMobile ? "h-5 w-5" : "h-6 w-6",
                isAnimating && (hyperActive ? "animate-wiggle-fast" : "animate-wiggle")
              )} />
              {renderTwinkles()}
              {isAnimating && (
                <div className={cn(
                  "absolute inset-0 bg-white/20",
                  hyperActive ? "animate-ping-very-fast" : "animate-ping-slow"
                )} />
              )}
              {showZap && hyperActive && (
                <Zap 
                  className="absolute text-yellow-300 animate-pulse -top-4 -right-2 h-8 w-8"
                />
              )}
            </a>
          </Button>
        </div>
        
        {showText && (
          <div className={cn(
            "absolute px-3 py-1 rounded-full shadow-md font-medium whitespace-nowrap",
            isMobile ? "-top-10 right-0 text-xs" : "-top-12 right-0 text-sm",
            "border border-gray-100 bg-white",
            hyperActive ? "animate-bounce-fast" : "animate-bounce-gentle"
          )}>
            <span className={cn(
              "bg-clip-text text-transparent bg-gradient-to-r",
              color === "rainbow" || color === "gradient" 
                ? gradientColors[colorIndex] 
                : `from-${color}-600 to-${color}-500`
            )}>
              Call Now: {phoneNumber}
            </span>
            <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
          </div>
        )}
      </div>
    )
  }

  return (
    <Button
      variant="outline"
      className={cn(
        "gap-2 overflow-hidden relative group",
        "transition-all",
        hyperActive ? "duration-200" : "duration-300",
        isAnimating && "translate-x-1 -translate-y-1 shadow-lg",
        isMobile ? "text-xs py-1 px-2" : "text-sm py-2 px-4",
        color === "rainbow" && (hyperActive ? "animate-rainbow-border-fast" : rainbowAnimation),
        className
      )}
      style={{
        transform: `translate(${position.x/3}px, ${position.y/3}px) rotate(${rotation/2}deg)`,
        background: "none",
        border: color === "rainbow" ? "none" : `2px solid ${color === "gradient" ? "#4F46E5" : ""}`
      }}
      asChild
    >
      <a href={`tel:${phoneNumber}`} className="flex items-center relative z-10">
        <div className={cn(
          "absolute inset-0 opacity-90 -z-10 group-hover:opacity-100 transition-opacity",
          color === "rainbow" || color === "gradient" 
            ? `bg-gradient-to-r ${gradientColors[colorIndex]}` 
            : getButtonColor(),
        )} />
        <Phone className={cn(
          "transition-all duration-300 text-white", 
          isMobile ? "h-3 w-3 mr-1" : "h-4 w-4 mr-2",
          isAnimating && (hyperActive ? "animate-wiggle-fast" : "animate-wiggle")
        )} />
        {showTwinkle && (
          <Sparkles 
            className={cn(
              "absolute text-yellow-200",
              hyperActive ? "animate-ping-fast" : "animate-ping-slow",
              "opacity-70",
              isMobile ? "h-4 w-4" : "h-5 w-5"
            )} 
            style={{ 
              top: `${Math.random() * 80 + 10}%`, 
              left: `${Math.random() * 80 + 10}%` 
            }}
          />
        )}
        {showText && (
          <span className={cn(
            isMobile ? "truncate max-w-[120px]" : "",
            "text-white font-medium"
          )}>
            {phoneNumber}
          </span>
        )}
      </a>
    </Button>
  )
}