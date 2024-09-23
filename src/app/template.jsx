"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { animatePageIn } from "./lib/animations"

export default function Template({ children }) {
  const [prevPathname, setPrevPathname] = useState("")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Ensure the pathname hook is only used after the component mounts (client-side only)
    setIsMounted(true)
  }, [])

  const pathname = usePathname()

  useEffect(() => {
    if (!isMounted) return; // Skip until the component is mounted

    const isAdminRoute = pathname.startsWith("/admin")

    if (prevPathname !== pathname && !isAdminRoute) {
      animatePageIn(prevPathname, () => {
        setPrevPathname(pathname)
      })
    } else if (!isAdminRoute) {
      animatePageIn()
    }
  }, [pathname, prevPathname, isMounted])

  // If it's an admin route, don't apply the template or animation
  const isAdminRoute = isMounted && pathname.startsWith("/admin")
  if (isAdminRoute) {
    return <>{children}</>
  }

  return (
    <div className="relative">
      {/*<div
        id="horizontal-overlay"
        className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-gray-600 opacity-0 z-50"
      />*/}
      <div id="page-content">
        {children}
      </div>
    </div>
  )
}
