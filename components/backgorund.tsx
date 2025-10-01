import React from 'react'

const Background = () => {
  return (
    <div
      className="fixed inset-0 w-full h-screen -z-[10]"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
      }}
    />
  )
}

export default Background
