import { List, Link, ListItem, ListItemButton, ListItemIcon, ListItemText, Card } from "@mui/material"

import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { FaRegIdCard } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoMdSwitch } from 'react-icons/io';
import { AiOutlineDisconnect } from 'react-icons/ai';
import { BsPersonDashFill } from 'react-icons/bs';

// Images
import SoftTypography from "components/SoftTypography";
import { useEffect, useState } from "react";


const menuData = [
  { icon: <BsFillRocketTakeoffFill />, text: "Profile", link: "#profile"  },
  { icon: <FaRegIdCard />, text: "Basic Info", link: "#basicInfo"  },
  { icon: <RiLockPasswordFill />, text: "Change password", link: "#passwordChange"  },
  { icon: <IoMdSwitch />, text: "2FA", link: "#twoFA"  },
  { icon: <AiOutlineDisconnect />, text: "Sessions", link: "#sessions"  },
  { icon: <BsPersonDashFill />, text: "Delete account", link: "#deleteAccount"  },
]

function ProfileMenu () {

  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handlePosition() {
      return window.innerWidth > 1000 ? setFixed(true) : setFixed(false);
    }

    // The event listener that's calling the handlePosition function when resizing the window.
    window.addEventListener("resize", handlePosition);

    // Call the handlePosition function to set the state with the initial value.
    handlePosition();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handlePosition);
  }, []);

    return (
      <Card sx={{p: 3, position: fixed? "fixed": "static", zIndex: 2}} >
        <List>

          {
            menuData.map((item, index)=>
              <ListItem disablePadding key={item.text}>
                <Link href={item.link} color="inherit" width={"100%"}>
                  <ListItemButton color="dark" >
                    <ListItemIcon color="dark">
                      {item.icon}
                    </ListItemIcon>
                    {/* <ListItemText primary={item.text}  /> */}
                    <SoftTypography variant="body2" color="dark">
                      {item.text}
                    </SoftTypography>
                  </ListItemButton>
                </Link>
              </ListItem>
            )
          }
        </List>
      </Card>

    )

}

export default ProfileMenu