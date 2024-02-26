import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import 'bootstrap/dist/css/bootstrap.min.css'
import Crausel123 from './Crausel123';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NextLink from 'next/link'





const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Dashboard() {
 //googleAuth
    const [user, setUser] = useState({
      name:'',
      photo:''
    })

    useEffect(()=>{
      const userData = localStorage.getItem("user")
      if(userData){
        console.log(JSON.parse(userData))
        setUser(JSON.parse(userData))
      }
    },[])
 //googleAuth

  const [showdata, setShowData] = useState([])

  const showSubcategoryData = (Pcategoryid) =>{
    
    axios.get(`http://localhost:5500/api/customer/subcategoryData/${Pcategoryid}`)
    .then((res)=>{
      console.log(res)
      setShowData(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    }) 
  }

  useEffect(()=>{
    showSubcategoryData()
  },[])



  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{background:"#2874f0"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            TP_Bazar
          </Typography>
           <Typography variant="h6" noWrap component="div">
            <div style={{ display:'flex', flexDirection:"row"}}>
              <div className="form-group" style={{marginLeft:"300px", width:"450px"}}>
              <input type="text" style={{borderRadius:'0'}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Search'/>
              </div>
              <div>
                <button type="button" className="btn btn-light" style={{borderRadius:'0'}}><SearchIcon  style={{color:"#2874f0"}}/></button>
                  {/* <button type='submit' style={{background:"white", border:"none"}}></button> */}
              </div>
            </div>
          </Typography>
          <div style={{marginLeft:"30px"}}>
            <AccountCircleIcon />
            <span> Login</span>
          </div>
          <Typography variant="h6" noWrap component="div" style={{marginLeft:"200px"}}>
           <ShoppingCartIcon style={{}} />
           {/* <span>Cart</span> */}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {/* GoogleAuth */}
            <h5 style={{color:"black"}}>{user.displayName}</h5>
            <img src={user.photoURL} style={{width:'30px', height:"30px", borderRadius:"50%", marginLeft:"20px"}}/>
            {/* googleAuth */}
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
         <div className='shadow-lg p-3 mb-5 bg-white rounded' 
         style={{width:"100%", height:"120px", display:'flex', flexDirection:"row", justifyContent:'space-around'}}>
          <div>
            <div>
              <div style={{width:"64px", height:'64px'}}>
                <img alt= 'Grocery' src='https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100'/>
              </div>
            </div>
            <span>
              <span>Grocery</span>
            </span>
          </div>
           <div>
            <div>
              <div style={{width:"64px", height:'64px'}}>
                <img alt= 'Mobiles' src='https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100'/>
              </div>
            </div>
            <span>
              <span>Mobiles</span>
            </span>
          </div>
          <div>
            <div>
              <div style={{width:"64px", height:'64px'}}>
                <img alt= 'Fashion' src='https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100'/>
              </div>
            </div>
            <span>
              <span>Fashion</span>
            </span>
          </div>
          <div>
            <div>
              <div style={{width:"64px", height:'64px'}}>
                <img alt= 'Electronics' src='https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100'/>
              </div>
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                Electronics
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {
                  showdata.map((item)=>
                  <Dropdown.Item>
                  <NextLink href={"/[Id]"} as={`${item.Subcategoryid}`}>{item.Subcategoryname}</NextLink>
                  </Dropdown.Item>
                  )
                }
                
              </Dropdown.Menu>
            </Dropdown>
            {/* <span>
              <span>Electronics</span>
            </span> */}
          </div>
           <div>
            <div>
              <div style={{width:"64px", height:'64px'}}>
                <img alt= 'Home & Furniture' src='https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100'/>
              </div>
            </div>
            <span>
              <span>Home & Furniture</span>
            </span>
          </div>
          <div>
            <div>
              <div style={{width:"64px", height:'64px'}}>
                <img alt= 'Appliances' src='https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100'/>
              </div>
            </div>
            <span>
              <span>Appliances</span>
            </span>
          </div>
          <div>
            <div>
              <div style={{width:"64px", height:'64px'}}>
                <img alt= 'Travel' src='https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100'/>
              </div>
            </div>
            <span>
              <span>Travel</span>
            </span>
          </div>
           <div>
            <div>
              <div style={{width:"64px", height:'64px'}}>
                <img alt= 'Beauty, Toys & More' src='https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100'/>
              </div>
            </div>
            <span>
              <span>Beauty, Toys & More</span>
            </span>
          </div>
          <div>
            <div>
              <div style={{width:"64px", height:'64px'}}>
                <img alt= 'Two Wheelers' src='https://rukminim1.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100'/>
              </div>
            </div>
            <span>
              <span>Two Wheelers</span>
            </span>
          </div>
         </div>
        < Crausel123 />
      <div className='shadow-lg p-3 mb-5 bg-white rounded mt-3' 
      style={{width:"100%", height:"300px", display:'flex', flexDirection:"row", justifyContent:'space-around'}}>
        {/* <h4>Best Of Electronics</h4> */}
        <div className="card" style={{width:"200px"}}>
        <img src={"./laptop1.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick 's content.</p>
        </div>
       </div>
       <div className="card" style={{width:"200px"}}>
        <img src={"./iphone.webp"} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick 's content.</p>
        </div>
       </div>
       <div className="card" style={{width:"200px"}}>
        <img src={"./Led Tv.webp"} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick 's content.</p>
        </div>
       </div>
       <div className="card" style={{width:"200px"}}>
        <img src={"./Camera.webp"} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick 's content.</p>
        </div>
       </div>
       <div className="card" style={{width:"200px"}}>
        <img src={"./laptop1.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick 's content.</p>
        </div>
       </div>
      </div>

      <div>
        <div className="card-group">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{marginRight:"40px"}}>
            <img src={"./T_shirt.webp"} className="card-img-top" alt="..." style={{height:"300px"}}/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text" style={{height:"150px"}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <img src={"./Shoes.avif"} className="card-img-top" alt="Shoes" style={{height:"300px"}}/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text" style={{height:"150px"}}>This card has supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{marginLeft:"40px"}}>
            <img src={"./Jeans.webp"} className="card-img-top" alt="..." style={{height:"300px"}}/>
            <div className="card-body"  >
              <h5 className="card-title">Card title</h5>
              <p className="card-text" style={{height:"150px"}}>This der sjasdaNDUljasksuyiasuoxguqyiuo;jlAGUIYQ  JKNA SDFASASDSGDFSDASacard with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      <div className='' style={{display:'flex',flexDirection:"row",justifyContent:'space-around' }}>
        <div className='shadow-lg p-3 mb-5 bg-white rounded' style={{width:"400px", height:"600px" }}>
          <h5>Home Decor & Furnishing</h5>
          <div className='mt-4' style={{display:'flex',flexDirection:"row",justifyContent:'space-around'}}>
          <div className="card" style={{width:"200px",height:"250px", marginRight:"20px"}}>
              <img src={"./em-01.jpg"} className="card-img-top" alt="..." style={{height:"170px"}}/>
              <div className="card-body">
                <p className="" style={{fontWeight:"bold", marginBottom:'0px'}}>Emergency Light</p>
                <p className="" style={{fontWeight:"bold", color:'#108934'}}>Min.50% Off</p>
              </div>
            </div>
            <div className="card" style={{width:"200px", height:"250px"}}>
              <img src={"./Blanket.png"} className="card-img-top" alt="..." style={{height:"170px"}}/>
              <div className="card-body">
              <p className="" style={{fontWeight:"bold", marginBottom:'0px'}}>Blankets</p>
                <p className="" style={{fontWeight:"bold", color:'#108934'}}>Min.50% Off</p>
              </div>
            </div>
          </div>
             <div className='mt-4' style={{display:'flex',flexDirection:"row",justifyContent:'space-around'}}>
             <div className="card" style={{width:"200px",height:"250px", marginRight:"20px"}}>
              <img src={"./Moja.webp"} className="card-img-top" alt="..." style={{height:"170px"}}/>
              <div className="card-body">
              <p className="" style={{fontWeight:"bold", marginBottom:'0px'}}>Men's And Wo..</p>
                <p className="" style={{fontWeight:"bold", color:'#108934'}}>Min.50% Off</p>
              </div>
            </div>
            <div className="card" style={{width:"200px", height:"250px"}}>
              <img src={"./Bulb-01.webp"} className="card-img-top" alt="Bulb" style={{height:"170px"}}/>
              <div className="card-body">
              <p className="" style={{fontWeight:"bold", marginBottom:'0px'}}>Bulb</p>
                <p className="" style={{fontWeight:"bold", color:'#108934'}}>Min.50% Off</p>
              </div>
            </div>
             </div>
            
        </div>
        
        <div className='shadow-lg p-3 mb-5 bg-white rounded' style={{width:"400px", height:"600px" }}>
        <h5>End Of Season Bestsellers</h5>
          <div className='mt-4' style={{display:'flex',flexDirection:"row",justifyContent:'space-around'}}>
          <div className="card" style={{width:"200px",height:"250px", marginRight:"20px"}}>
              <img src={"./laptop1.jpg"} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Emergency Light</p>
              </div>
            </div>
            <div className="card" style={{width:"200px", height:"250px"}}>
              <img src={"./iphone.webp"} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick 's content.</p>
              </div>
            </div>
          </div>
             <div className='mt-4' style={{display:'flex',flexDirection:"row",justifyContent:'space-around'}}>
             <div className="card" style={{width:"200px",height:"250px", marginRight:"20px"}}>
              <img src={"./laptop1.jpg"} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick 's content.</p>
              </div>
            </div>
            <div className="card" style={{width:"200px", height:"250px"}}>
              <img src={"./iphone.webp"} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick 's content.</p>
              </div>
            </div>
             </div> 
        </div>
        <div className='shadow-lg p-3 mb-5 bg-white rounded' style={{width:"400px", height:"600px"}}>
            <img src='https://rukminim1.flixcart.com/www/530/780/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=80' alt='' style={{height:"580px", width:"100%"}}/>
        </div>
      </div>

      {/* footer */}

      <footer>
        <div style={{width:"100%", height:"300px", background:"black"}}>
          <div className='' style={{display:'flex', flexDirection:"row",justifyContent:'space-around',  color:"whitesmoke"}}>
            <p className='mt-2'>ABOUT</p>
            <p className='mt-2'>HELP</p>
            <p className='mt-2'>CONSUMER POLICY</p>
            <p className='mt-2'>SOCIAL</p>
            <p className='mt-2'>TERMS & CONDITION</p>
            <p className='mt-2'>CUSTOMER SUPPOERT</p>
          </div>
        </div>
      </footer>
      </Main>
    </Box>
  );
}