import AllMessages from "@/src/components/AllMessages"
import Icons from "@/src/components/Icons"
import Messaging from "@/src/components/Messaging"
import React from "react"

const Dashboard = () => {
    return (
        <div className="h-[84.5vh] flex flex-col items-stretch">
          <AllMessages />
          <Messaging/>
        </div>
    )
}

export default Dashboard