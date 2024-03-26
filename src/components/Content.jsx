import React from 'react'
import {  
    Grid, 
    Typography,
    IconButton,
    Card,
    CardContent,
} from "@mui/material";
// icons
import { GiPayMoney } from "react-icons/gi";
import { TbPigMoney } from "react-icons/tb";
import { SiFuturelearn } from "react-icons/si";
import { FcCustomerSupport } from "react-icons/fc";
import { SiBitcoincash } from "react-icons/si";

// components
import Title from './Title'
import Paragraph from './Paragraph'


const Content = () => {
  return (    
        <Grid container spacing={0}   
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            py: 10,
            px: 2,
        }}
        >
            <Grid item xs={12} sm={12} md={5}
            component = 'section'
            >
                <Title
                text={
                    'What we are offering?'
                }
                textAlign={'start'}
                />

                <Typography 
                variant='h6'
                component='h4' 
                sx = {{
                    fontWeight: '400',
                    paddingTop: 1,
                }}
                >
                    Investment facilities
                </Typography>

                <Paragraph 
                text={
                    ' We have more 5000 reviews\
                    and our customers trust on our quality\
                    product and trust own our product.'
                }
                maxWidth = {'75%'}
                mx={0}
                textAlign={'start'}
                />
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid #ccc',
                }}>
                    <CardContent>
                        <IconButton>
                            <GiPayMoney
                            fontSize="40px"
                            color="secondary" />
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Personalized Financial Planning
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #ccc'
                }}>
                    <CardContent>
                        <IconButton>
                            <SiBitcoincash
                            fontSize="40px"
                            color="secondary" />
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Budgeting tools
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={2}
            sx={{
                display: {xs: 'none', sm: 'block'},
            }}  
            >
                <Card 
                square={ true }
                sx={{ 
                    boxShadow: 'none',
                    minHeight: 180,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}>
                    <CardContent>
                       
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>    
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #ccc'
                }}>
                    <CardContent>
                        <IconButton>
                            <TbPigMoney
                            fontSize="40px"
                            color="secondary" />
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Investment Guidance
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',                    
                    border: '1px solid #ccc',
                }}
                >
                    <CardContent>
                        <IconButton>
                            <SiFuturelearn
                            fontSize="40px"
                            color="secondary" />
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Retirement Planning
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #ccc',
                }}>
                    <CardContent>
                        <IconButton>
                            <FcCustomerSupport
                            fontSize="40px"
                            color="secondary" />
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Customer Support
                        </Typography>
                    </CardContent>
                </Card>
            </Grid> 
        </Grid>
    );
}

export default Content