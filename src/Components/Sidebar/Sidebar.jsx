import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, Box, IconButton } from '@mui/material';
import './sidebar.scss';

const menuItems = [
    { text: 'Dashboard', icon: '/images/dashboard.png' },
    { text: 'Candidates', icon: '/images/candidates.png' },
    { text: 'Jobs', icon: '/images/jobs.png' },
    { text: 'Hiring Calculator', icon: '/images/calci.png' },
    { text: 'Assessment', icon: '/images/assessment.png' },
    { text: 'Administration', icon: '/images/admin.png' },
];

const Sidebar = ({ selectedItem, setSelectedItem }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleDrawerToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleListItemClick = (text) => {
        setSelectedItem(text);
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: isOpen ? 240 : 70,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: isOpen ? 240 : 70,
                    boxSizing: 'border-box',
                    overflowX: 'hidden',
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isOpen ? 'space-between' : 'center',
                    padding: 2,
                }}
            >
                <IconButton onClick={handleDrawerToggle}>
                    <img src="/images/ham.png" height='14px' />
                </IconButton>
                {isOpen && (
                    <img height='25px' src="/images/main-logo.png" />
                )}
            </Box>
            <Divider />
            <List>
                {menuItems.map((item, index) => (
                    <ListItem
                        button
                        key={index}
                        selected={selectedItem === item.text}
                        onClick={() => handleListItemClick(item.text)}
                    >
                        <img src={item.icon} height='18x' style={{ marginRight: '10px' }} />
                        {isOpen && <ListItemText primary={item.text} />}
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
