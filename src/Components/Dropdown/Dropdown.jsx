import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './dropdown.scss';

const Dropdown = ({ title, options = [], setFilterConfig, field, selectedField }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuItemClick = (item) => {
        setFilterConfig(filter => ({ ...filter, [field]: item.id }));
        setAnchorEl(null);
    };

    const handleClose = (item) => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="job-type-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className="dropdown-button"
            >
                {title}
                <ArrowDropDownIcon className="dropdown-icon" />
            </Button>
            <Menu
                id="job-type-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem
                    key={'clear'}

                    onClick={() => handleMenuItemClick({ id: '', name: 'All' })}
                >All </MenuItem>
                {
                    options.map(option =>
                        <MenuItem
                            key={option.id}

                            selected={option.id === selectedField}
                            onClick={() => handleMenuItemClick(option)}
                        >{option.name}</MenuItem>)
                }
            </Menu>
        </div>
    );
};

export default Dropdown;
