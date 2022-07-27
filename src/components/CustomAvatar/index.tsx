import { Avatar } from "@mui/material";

const CustomAvatar = ({profileName}: {profileName: string}) => {
    const getInitials = (name: string) => {
        return name.split(" ").slice(0, 2).map((name) => name[0])
    };

    return(
        <Avatar sx={{bgcolor:"red"}} aril-label={profileName}>{getInitials(profileName)}</Avatar>
    )
}

export default CustomAvatar;