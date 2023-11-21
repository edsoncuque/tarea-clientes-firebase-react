
import SideNav from '../nav/SideNav'
import Box from '@mui/material/Box';
import NavBar from '../nav/NavBar';
import Grid from '@mui/material/Grid';
import AccordionDash from '../nav/AccordionDash';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Stack from '@mui/material/Stack';

import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

//import{ useAppStore} from '../../appStore.jsx';
import '../../assets/css/Dash.css';

import BarChart from '../charts/BarChart';
import GeoChart from '../charts/GeoChart';
import PieChart from '../charts/PieChart';
import PopulationChart from '../charts/PopulationChart';

import CountUp from 'react-countup'; 



export default function Home() {


  return (
    < div className='bgColor'>
      <NavBar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradient'>
                  <CardContent>
                    <div>
                      <div className='iconstyle'>Visitas</div>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                    <CountUp delay={0.4} end={22000} duration={0.6} />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                      Desde la ultima semana
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientlight'>
                  <CardContent>
                    <div>
                    <div className='iconstyle'>Visitas</div>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                    <CountUp delay={0.4} end={22000} duration={0.6} />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                    Desde la ultima semana
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
              <Box height={15} />
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradient'>
                  <CardContent>
                    <div>
                    <div className='iconstyle'>Visitas</div>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                    <CountUp delay={0.4} end={22000} duration={0.6} />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                      Desde la ultima semana
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientlight'>
                  <CardContent>
                    <div>
                    <div className='iconstyle'>Visitas</div>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                    <CountUp delay={0.4} end={22000} duration={0.6} />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                      Desde de la ultima semana
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={7}>
              <Stack spacing={2} >
                <Card >
                  <Stack sx={{ height: 32 + "vh" }}>
                    <PopulationChart />
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 40 + "vh" }}>
                <CardContent>
                <GeoChart />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 40 + "vh" }}>
                <CardContent>
                 <PieChart />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}
