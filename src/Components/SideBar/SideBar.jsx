import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import "./SideBar.css";
import { NavLink, Routes, Route } from 'react-router-dom';
import Profile from "../Pages/Profile";

function SideBar() {
    return (
        <div>
            <div className='row'>
                <div className='col-1 col-lg-2 mt-5 mb-5'>
                    <div style={{ height: '100vh', fontSize: '190%' }}>
                        <CDBSidebar textColor='white' backgroundColor='blue' style={{ paddingTop: '200px', minWidth: '100px', width: '230px' }} className='sidebar'>
                            <CDBSidebarContent className='sidebar-content' textColor='white'>
                                <CDBSidebarMenu>
                                    <NavLink to=''>
                                        <CDBSidebarMenuItem>Profile</CDBSidebarMenuItem>
                                    </NavLink>
                                    <hr />
                                    <NavLink to='gallery'>
                                        <CDBSidebarMenuItem>Gallery</CDBSidebarMenuItem>
                                    </NavLink>
                                    <hr />
                                    <NavLink to='posts'>
                                        <CDBSidebarMenuItem>Posts</CDBSidebarMenuItem>
                                    </NavLink>
                                    <hr />
                                    <NavLink to='todo'>
                                        <CDBSidebarMenuItem>Todo</CDBSidebarMenuItem>
                                    </NavLink>
                                </CDBSidebarMenu>
                            </CDBSidebarContent>
                        </CDBSidebar>
                    </div>
                </div>
                <div className='col-9 col-lg-10'>
                    <Routes>
                        <Route path='/' element={<Profile />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default SideBar;