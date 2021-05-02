import React, { useState } from "react";
import {AppBar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography,Avatar} from "@material-ui/core";
import {MdHome,MdArchive} from "react-icons/md";
import{VscNewFile} from "react-icons/vsc";
import { IconContext } from "react-icons/lib";
import {useHistory} from "react-router-dom";
import {CgProfile} from "react-icons/cg";
import {FiMenu} from "react-icons/fi";
import "./Menu.css";
function Menu(props){
    const history=useHistory();
    const [currentPage,setCurrentPage]=useState("/home");
    const [open,setOpen]=useState(false)
    function handleClick(pathName){
        history.push(pathName);
        setCurrentPage(pathName);
    }

    function handleDrawer(isOpen){
        setOpen(isOpen);
    }
    const pages=[{
        pathName: "/home",
        icon: <MdHome/>,
        text:"Minhas anotações",
        iconSize:"1.5em"
    },
    {
        pathName: "/profile",
        icon: <VscNewFile/>,
        text:"Nova anotação",
        iconSize:"1.5em"
    },
    {
        pathName: "/profile",
        icon: <MdArchive/>,
        text:"Arquivo",
        iconSize:"1.5em"
    },
    {
        pathName: "/profile",
        icon: <CgProfile/>,
        text:"Perfil",
        iconSize:"1.5em"
    }
    ];

    return(
        <>
            <AppBar position="static">
                <Toolbar style={{backgroundColor:"white"}}>
                    <IconButton edge="start" aria-label="menu" onClick={()=>handleDrawer(!open)}>
                        <FiMenu/>
                    </IconButton>
                    <div className="userContainer">
                        <p className="userName">
                            Mydoria Izuku
                        </p>
                        <Avatar alt="Mydoria" src="images/deku.jpg" />
                    </div>
                </Toolbar>
            </AppBar>
            {props.children}
            <Drawer open={open} onClose={()=>handleDrawer(false)}>
                <List className="list">
                    {pages.map((listItem)=>{
                        return(
                        <ListItem button selected={currentPage===listItem.pathName} onClick={() =>{handleClick(listItem.pathName)}}>
                            <IconContext.Provider value={{color:"#343434", size:listItem.iconSize}}>
                                {listItem.icon}
                            </IconContext.Provider>
                            <ListItemText className="listItemText">
                                <Typography>
                                    {listItem.text}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        );
                    })}
                </List>
            </Drawer>
        </>
    );
}
export default Menu;