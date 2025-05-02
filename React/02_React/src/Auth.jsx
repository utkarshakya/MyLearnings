import React from "react";
import { Link, Outlet } from "react-router";

export default function Auth(){
    return (
        <>
        <h1>You can Authorise</h1>
        <Outlet />
        </>
    )
}