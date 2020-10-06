import React from 'react'
import * as AiIcons from 'react-icon/ai'
export const MenuItems=[
    {
        "name":"About",
        "route":"/about",
        "id":"about"
        },
        {
        "name": "Parent",
        "route": "/parent",
        "id": "parent"
        },
        {
            "name": "Teacher",
            "route": "/teacher",
            "id": "teacher"
        },
        {
            "name": "SignIn",
            "route": "/signin",
            "id": "signin",
            "icon":<AiIcons.AiOutlineLogin/>
        
        },
        {
            "name": "SignOut",
            "route": "/signout",
            "id": "signout"
        }
];
