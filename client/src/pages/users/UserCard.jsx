import React from 'react'
import { Card, CardMedia, Typography, CardContent, CardActions } from '@mui/material'
import { CardButton } from '../../styles/StyledComponents'
import { theme } from '../..'

const UserCard = ({user}) => {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: theme.colors.primary }}>
            <CardMedia
                component="img"
                height="200"
                image = {user.avatar}
                alt="avatar"
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{color: theme.colors.secondary}}>
                    {user.username}
                </Typography>
            </CardContent>

            <CardActions>
                <CardButton >Follow</CardButton>
                <CardButton >Message</CardButton>
            </CardActions>

        </Card>
    )
}

export default UserCard