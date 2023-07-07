import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Grid } from '@mui/material';
import SoftInput from 'components/SoftInput';
import SoftTypography from 'components/SoftTypography';
import SoftButton from 'components/SoftButton';


export default function DropDown({options}:{options: any;}) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
        }

        setOpen(false);
    };

return (
    <>
        <Grid container spacing={0} mt={1} mb={1} >
            <Grid item xs={5} lg={5} p={0} >
                <ButtonGroup variant="contained" sx={{width: "100%"}} ref={anchorRef} aria-label="split button">
                    <SoftButton
                        variant='outlined'
                        color='secondary'
                        sx={{p: 0, width: "100%", borderTopRightRadius: 0, borderBottomRightRadius: 0}}
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                    >
                        {/* {options[selectedIndex]} */}
                        {"Choose Currency"}
                        <ArrowDropDownIcon />
                    </SoftButton>
                </ButtonGroup>
                <Popper
                    sx={{ zIndex: 1}}
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                            placement === 'bottom' ? 'center top' : 'center bottom',
                            background:"#fff",
                            width: "100% !important"
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                {options.map((option, index) => (
                                    <MenuItem
                                    key={option}
                                    // disabled={index === 2}
                                    selected={index === selectedIndex}
                                    onClick={(event) => handleMenuItemClick(event, index)}
                                    >
                                    {option}
                                    </MenuItem>
                                ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                    )}
                </Popper>
            </Grid>
            <Grid item xs={7} lg={7} p={0} >
                <SoftInput type="text" placeholder="" sx={{ height: "100% !important", borderTopLeftRadius: 0, borderBottomLeftRadius: 0}} />
            </Grid>
        </Grid>

    </>
)
}