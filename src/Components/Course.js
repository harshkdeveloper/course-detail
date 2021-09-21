import React from 'react'
import { FormControl,MenuItem,Select,InputLabel,Card,CardMedia,CardContent,Typography,Button,CardActions,makeStyles} from '@material-ui/core'
import one from './imagess/one.jpg'
import './course.css'
import { NavLink } from 'react-router-dom';
import two from './imagess/two.png'
import three from './imagess/three.png'
import four from './imagess/four.png'
import five from './imagess/five.png'
import six from './imagess/six.jpg'
import seven from './imagess/seven.png'
import eight from './imagess/eight.png'
import nine from './imagess/nine.png'
import ten from './imagess/ten.png'

const Course = () => {
   
    return (
        <>
        <NavLink to="course"><button className="btn btn-primary"style={{marginLeft:'1060px',marginTop:'10px',position:'absolute'}}>Add Course</button></NavLink>
        <div className="back">
            {/* <Button variant="contained"style={{backgroundColor:'pink',fontSize:'15px',fontStyle:'italic'}}>Contained</Button> */}
            <h1 style={{fontSize:'40px',marginLeft:'100px'}}> My Courses </h1>
           <FormControl style={{width:'120px',marginLeft:'110px'}}>
        <InputLabel>Sort by</InputLabel>
        <Select
        label="Sortby"
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>1-10</MenuItem>
          <MenuItem value={20}>2-20</MenuItem>
          <MenuItem value={30}>3-30</MenuItem>
        </Select>
        </FormControl>
        <FormControl style={{width:'120px',marginLeft:'50px'}}>
        <InputLabel>Type</InputLabel>
        <Select
        label="Type"
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Technology</MenuItem>
          <MenuItem value={20}>Business</MenuItem>
          <MenuItem value={30}>Enviroment</MenuItem>
        </Select>
        
      </FormControl>
      <FormControl style={{width:'120px',marginLeft:'50px',marginBottom:'10px',position:'relative'}}>

        <InputLabel>Published</InputLabel>
        <Select
        label="Type"
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>2018</MenuItem>
          <MenuItem value={20}>2019</MenuItem>
          <MenuItem value={30}>2020</MenuItem>
        </Select>
        
      </FormControl>
      {/* <div className="container"> */}
      <Card style={{width:'300px',height:'300px',position:'absolute',marginLeft:'100px',marginTop:'10px'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={one}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"style={{fontStyle:'bold',textAlign:'center'}}>
          Node js
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Node.js is an open-source, cross-platform,join theses course to learn more
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{marginLeft:'90px'}}>Published </Button>
       
      </CardActions>
     </Card>
     <Card style={{width:'300px',height:'300px',marginLeft:'500px',position:'absolute',marginTop:'10px'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={two}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"style={{fontStyle:'bold',textAlign:'center'}}>
          React Js
        </Typography>
        <Typography variant="body2" color="text.secondary">
       React js is used for developing web applicayion join our course to learn more
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"style={{marginLeft:'90px'}}>Published  </Button>
       
      </CardActions>
     </Card>
     <Card style={{width:'300px',height:'300px',marginBottom:'250px',marginLeft:'900px',position:'absolute',marginTop:'10px'}}>
      <CardMedia
        component="img"
        alt="react native"
        height="140"
        
        image={four}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"style={{fontStyle:'bold',textAlign:'center'}}>
          React Native
        </Typography>
        <Typography variant="body2" color="text.secondary">
        React Native is an open-source UI join course to learn more
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{marginLeft:'90px'}}>Published  </Button>
       
      </CardActions>
     </Card>
     <Card style={{width:'300px',height:'300px',marginTop:'350px',marginLeft:'100px',position:'absolute'}}>
      <CardMedia
        component="img"
        alt="l"
        height="140"
        image={five}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{fontStyle:'bold',textAlign:'center'}}>
          Laravel
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Laravel is a free, open-source PHP web framework join course to learn more
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"style={{marginLeft:'94px'}}>Published  </Button>
       
      </CardActions>
     </Card>
     <Card style={{width:'300px',height:'300px',marginTop:'350px',marginLeft:'500px',position:'absoulte'}}>
      <CardMedia
        component="img"
        alt="java"
        height="140"
        image={six}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"style={{fontStyle:'bold',textAlign:'center'}}>
          Java
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Java is a high-level, class-based join course to learn more
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"style={{marginLeft:'94px'}}>Published  </Button>
       
      </CardActions>
     </Card>
     <Card style={{width:'300px',height:'300px',marginTop:'-300px',marginLeft:'900px',position:'absoulte'}}>
      <CardMedia
        component="img"
        alt="javascript"
        height="140"
        image={seven}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{fontStyle:'bold',textAlign:'center'}}>
          JavaScript
        </Typography>
        <Typography variant="body2" color="text.secondary">
        JavaScript, often abbreviated as JS, is a programming language join our course....
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"style={{marginLeft:'90px'}}>Published  </Button>
       
      </CardActions>
     </Card>
     <Card style={{width:'300px',height:'300px',marginTop:'50px',marginLeft:'100px',position:'absoulte'}}>
      <CardMedia
        component="img"
        alt="php"
        height="140"
        image={eight}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"style={{fontStyle:'bold',textAlign:'center'}}>
          PHP
        </Typography>
        <Typography variant="body2" color="text.secondary">
        PHP is a general-purpose scripting language join course and learn more
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"style={{marginLeft:'94px'}}>Published  </Button>
       
      </CardActions>
     </Card>
     <Card style={{width:'300px',height:'300px',marginTop:'-300px',marginLeft:'500px',position:'absoulte'}}>
      <CardMedia
        component="img"
        alt="html"
        height="140"
        image={nine}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"style={{fontStyle:'bold',textAlign:'center'}}>
          HTML
        </Typography>
        <Typography variant="body2" color="text.secondary">
        HTML is the standard markup language for Web pages.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"style={{marginLeft:'90px'}}>Published  </Button>
       
      </CardActions>
     </Card>
     <Card style={{width:'300px',height:'300px',marginTop:'-300px',marginLeft:'900px',position:'absoulte'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={ten}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"style={{fontStyle:'bold',textAlign:'center'}}>
            C
        </Typography>
        <Typography variant="body2" color="text.secondary">
        C is a general-purpose, procedural computer join course to learn more
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"style={{marginLeft:'95px'}}>Published  </Button>
       
      </CardActions>
     </Card>
    {/* </div>  */
    }
    
            </div>
   </>
    )
}

export default Course
