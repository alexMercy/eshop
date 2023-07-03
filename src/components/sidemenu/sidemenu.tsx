
import * as React from 'react';
import {useState} from "react";
import {Button, Drawer, Menu, MenuProps} from "antd";


export function Sidemenu() {

    const [open, setOpen] = useState(false);
    const items: MenuProps['items'] = [
        {key: "1", label:"1" },
        {key: "2", label:"2" },
        {key: "3", label:"3" },
        {key: "4", label:"4" },
    ]

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={showDrawer}>left</Button>
            <Drawer
                title="Basic Drawer"
                placement="left"
                closable={false}
                onClose={onClose}
                open={open}
                key="drawer"
            >
                <Menu
                    items={items}>
                </Menu>
            </Drawer>
        </>
    );
}