const playlistModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(000, 000, 000, 0.6)',
    zIndex          : 10,
    display         : 'flex',
    justifyContent  : 'center',
    alignItems      : 'center',
  },

  content : {
    position        : 'relative',
     top             : 0,
     left            : 0,
     right           : 0,
     bottom          : 0,
     border          : '1px solid #ccc',
     width           : '250px',
     borderRadius    : 0,
     height          : '200px',
     zIndex          : 11,
     backgroundColor : '#ffffff',
     boxShadow       : '4px 4px 5px #282828',
     display         : 'flex',
     flexDirection   : 'column',
     justifyContent  : 'space-around'
  }
};

export default playlistModalStyle;
