import "../../../styles/globals.scss"
import React from 'react'
import AuthGuard from "./guard/AuthGuard"
import Aside from "@/UI/organisms/aside/aside"
import Navbar from "@/UI/molecules/navbar/navbar"


export default function PrivateLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <AuthGuard>
      <div className="main">
        <Aside />
        <Navbar/>
        <div className="container-projects">
          {children}
        </div>
      </div>
    </AuthGuard>
  )
}