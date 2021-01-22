/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-state */
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import React, { Component } from 'react';
import * as THREE from "three";

import './utils/MeshLine';
import Topbar from './Topbar';
import Footer from './Footer';
import {boxMullerRandom} from './utils/randomWalk';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  grid: {
    marginTop: 10,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)',
    },
  },
  gridItem: {
    zIndex: 100,
    backgroundColor: "transparent",
  },
  background: {
    // background: 'url(bits.png) no-repeat',
    backgroundColor: "rgba(19, 20, 19, 1)",
    backgroundSize: 'cover',
    height: "100%",
    overflow: "hidden",
    minWidth: "100%",
  },
  paperMain: {
    minHeight: '60vh',
    width: '100%',
    textAlign: 'left',
    color: theme.palette.primary.light,
    display: 'flex',
    background: "transparent",
  },
  paper: {
    minHeight: 20,
    paddingTop: 400,
    zIndex: 100,
    textAlign: 'left',
    color: theme.palette.primary.dark,
    background: "transparent",
    padding: 10,
    borderBottom: "1px solid rgba(2, 204, 204, 1)"
  },
  title: {
    color: theme.palette.primary.light,
  },
  rangeLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(2),
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing(1),
  },
  actionButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing(1),
    width: 152,
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  block: {
    padding: theme.spacing(2),
  },
  box: {
    marginBottom: 40,
    margin: 'auto',
    maxWidth: 1000,
    textAlign: 'center',
  },
  boxMain: {
    width: '100%',
    minHeight: 300,
    margin: 'auto',
    textAlign: 'center',
    maxWidth: 1000,
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if( process.env.JEST_WORKER_ID === undefined ) {
      // === THREE.JS CODE START ===
      let renderer = new THREE.WebGLRenderer({antialias: true});
      renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.setClearColor(0x131313);
      this.mount.appendChild( renderer.domElement );
      
      const resizeCanvas = () => {
        renderer.setSize( window.innerWidth, window.innerHeight );
      };
      window.addEventListener('resize', resizeCanvas);

      // randomly generate walks
      let points1 = [];
      let points2 = [];
      let points3 = [];
      let points4 = [];
      let points5 = [];
      let points6 = [];

      for(var i = 0; i<window.innerWidth; i++){
        if(i === 0){
          points1.push(new THREE.Vector3(-window.innerWidth/2, 100, 0));
          points2.push(new THREE.Vector3(-window.innerWidth/2, 100, 0));
          points3.push(new THREE.Vector3(-window.innerWidth/2, 100, 0));
          points4.push(new THREE.Vector3(-window.innerWidth/2, 100, 0));
          points5.push(new THREE.Vector3(-window.innerWidth/2, 100, 0));
          points6.push(new THREE.Vector3(-window.innerWidth/2, 100, 0));
        } else {
          // construct line segements so we can simulate then walking segment-by-segment
          points1.push(new THREE.Vector3(points1.slice(-1)[0].x+1, points1.slice(-1)[0].y + boxMullerRandom(), 0));
          points1.push(new THREE.Vector3(points1.slice(-1)[0].x, points1.slice(-1)[0].y, 0));
          points2.push(new THREE.Vector3(points2.slice(-1)[0].x+1, points2.slice(-1)[0].y + boxMullerRandom(), 0));
          points2.push(new THREE.Vector3(points2.slice(-1)[0].x, points2.slice(-1)[0].y, 0));
          points3.push(new THREE.Vector3(points3.slice(-1)[0].x+1, points3.slice(-1)[0].y + boxMullerRandom(), 0));
          points3.push(new THREE.Vector3(points3.slice(-1)[0].x, points3.slice(-1)[0].y, 0));
          points4.push(new THREE.Vector3(points4.slice(-1)[0].x+1, points4.slice(-1)[0].y + boxMullerRandom(), 0));
          points4.push(new THREE.Vector3(points4.slice(-1)[0].x, points4.slice(-1)[0].y, 0));
          points5.push(new THREE.Vector3(points5.slice(-1)[0].x+1, points5.slice(-1)[0].y + boxMullerRandom(), 0));
          points5.push(new THREE.Vector3(points5.slice(-1)[0].x, points5.slice(-1)[0].y, 0));
          points6.push(new THREE.Vector3(points6.slice(-1)[0].x+1, points6.slice(-1)[0].y + boxMullerRandom(), 0));
          points6.push(new THREE.Vector3(points6.slice(-1)[0].x, points6.slice(-1)[0].y, 0));
        }
      }
      // end generate random walks

      // camera
      let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, .1, 2000);
      camera.position.set( -window.innerWidth/4, 100, 500);
      camera.lookAt( -window.innerWidth/4, 0, 0);
      // end camera
      
      let scene = new THREE.Scene();

      // Cube for reference
      // var cubeGeometry = new THREE.BoxGeometry(100, 100, 100);
      // var cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true, fog: false} );
      // var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
      // scene.add( cube );
      // end cube

      // grid
      let grid = new THREE.GridHelper(2200, 200);
      grid.position.y = -100;
      grid.position.z = -500;
      scene.add( grid );
      // fog to fade grid into "infinity"
      scene.fog = new THREE.Fog(0x131313, 20, 1000);
      // end grid

      const vertexShader = `
      precision mediump float;
      precision mediump int;
     
      attribute vec4 color;
      uniform float index;

      varying vec4 vColor;
      varying float vXValue;
      varying float vIndex;
     
      void main()    {
        vColor = color;
        vIndex = index;
        vXValue = position.x;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }`;

      const fragmentShader = `
      precision mediump float;
      precision mediump int;
     
      varying vec4 vColor;
      varying float vXValue;
      varying float vIndex;
     
      void main()    {
        vec4 color = vec4( vColor );
        if(vXValue > vIndex){
          gl_FragColor = vec4(255, 255, 255, 0);
        } else {
          gl_FragColor = color;
        }
      }
      `;

      let index = -(window.innerWidth/2);

      let material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
        uniforms: {
          index: {value: index},
        }
      });

      // TODO Color effects
      let colors2 = new Float32Array(window.innerWidth * 4 * 2).fill(255);
      let colors1 = new Float32Array(window.innerWidth * 4 * 2).fill(255);
      let colors4 = new Float32Array(window.innerWidth * 4 * 2).fill(255);
      let colors3 = new Float32Array(window.innerWidth * 4 * 2).fill(255);
      let colors6 = new Float32Array(window.innerWidth * 4 * 2).fill(255);
      let colors5 = new Float32Array(window.innerWidth * 4 * 2).fill(255);
      for(var i = 0; i < colors1.length; i = i + 4){
        colors1[i + 0] = 0;

        colors2[i + 0] = 176/255;
        colors2[i + 1] = 172/255;
        colors2[i + 2] = 176/255;

        colors3[i + 0] = 226/255;
        colors3[i + 1] = 221/255;
        colors3[i + 2] = 223/255;

        colors4[i + 0] = 133/255;
        colors4[i + 1] = 235/255;
        colors4[i + 2] = 217/255;

        colors5[i + 0] = 61/255;
        colors5[i + 1] = 137/255;
        colors5[i + 2] = 141/255;

        colors6[i + 0] = 47/255;
        colors6[i + 1] = 64/255;
        colors6[i + 2] = 77/255;
      }
     
      // load line geometries
      let geometry1 = new THREE.BufferGeometry().setFromPoints( points1 );
      geometry1.setAttribute("color", new THREE.BufferAttribute(colors1, 4, true));

      let geometry2 = new THREE.BufferGeometry().setFromPoints( points2 );
      geometry2.setAttribute("color", new THREE.BufferAttribute(colors2, 4, true));

      let geometry3 = new THREE.BufferGeometry().setFromPoints( points3 );
      geometry3.setAttribute("color", new THREE.BufferAttribute(colors3, 4, true));

      let geometry4 = new THREE.BufferGeometry().setFromPoints( points4 );
      geometry4.setAttribute("color", new THREE.BufferAttribute(colors4, 4, true));

      let geometry5 = new THREE.BufferGeometry().setFromPoints( points5 );
      geometry5.setAttribute("color", new THREE.BufferAttribute(colors5, 4, true));

      let geometry6 = new THREE.BufferGeometry().setFromPoints( points6 );
      geometry6.setAttribute("color", new THREE.BufferAttribute(colors6, 4, true));

      // construct segments
      let line1 = new THREE.LineSegments(geometry1, material);
      let line2 = new THREE.LineSegments(geometry2, material);
      let line3 = new THREE.LineSegments(geometry3, material);
      let line4 = new THREE.LineSegments(geometry4, material);
      let line5 = new THREE.LineSegments(geometry5, material);
      let line6 = new THREE.LineSegments(geometry6, material);

      // add to scene
      scene.add( line1 );
      scene.add( line2 );
      scene.add( line3 );
      scene.add( line4 );
      scene.add( line5 );
      scene.add( line6 );

      // render
      renderer.render( scene, camera );
      let animate = function () {
        requestAnimationFrame( animate );
        line1.material.uniforms.index.value = index;
        index+=1;

        if(index > -window.innerWidth/8 && index < window.innerWidth/3){
          camera.translateX(.5);
        } else if (index > window.innerWidth/4) {

        }

        renderer.render( scene, camera );
      };
      animate();
      // === THREE.JS EXAMPLE CODE END ===
    }
  }

  render() {
    const { classes } = this.props;
    const { productsDialog, contactDialog } = this.state;
    return (
      <>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">
            <div className={classes.background} ref={ref => (this.mount = ref)} style={{float: "left", position: "absolute"}}></div>
            <Grid item xs={12} className={classes.gridItem}>
              <Paper className={classes.paperMain}>
                <div className={classes.boxMain}>
                  <Typography style={{ fontWeight: 'bold' }} variant="h1" gutterBottom>
                    Lan Kwai Fund
                  </Typography>
                  <Typography className={classes.mainSubtitle} variant="h3" gutterBottom>
                    Algorithmic Cryptocurrency Investments
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography variant="h4" className={classes.title} gutterBottom>
                  Discretionary and Systematic Trading Strategies
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom color="primary">
                  Investments are now closed.
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Main));
