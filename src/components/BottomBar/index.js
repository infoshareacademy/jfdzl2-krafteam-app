import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import DrinkIcon from '@material-ui/icons/LocalDrink';

import './style.css'

class BottomBar extends Component {
  render() {
    return (
      <BottomNavigation className="bottom-bar">
        <Link to='/beer-list'>
          <BottomNavigationAction label="Beer" value="beer" icon={<DrinkIcon style={{ color: '#fed136' }} />} />
        </Link>
        <Link to='/'>
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon style={{ color: '#fed136' }} />} />
        </Link>
        <Link to='/bar-list'>
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon style={{ color: '#fed136' }} />} />
        </Link>
        <Link to='/'>
          <BottomNavigationAction label="Home" value="home" icon={<HomeIcon style={{ color: '#fed136' }} />} />
        </Link>
      </BottomNavigation>
    );
  }
}

export default BottomBar;