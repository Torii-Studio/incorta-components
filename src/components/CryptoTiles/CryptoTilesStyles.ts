/* eslint-disable import/no-anonymous-default-export */
export default () => ({
  red: {
    color: '#e13422'
  },
  lighter: {
    color: '#999999',
  },
  price: {
    color: '#333333',
    position: 'absolute',
    width: 215,
    height: 24,
    left: 105,
    bottom: 8,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: 20,
    lineHeight: '23px',
    /* identical to box height */
    alignItems: 'center'
  },
  boundingBox: {
    display: 'block',
    float: 'left',
    margin: '0px 10px 10px 0px',
    width: 330,
    height: 100,
    position: 'relative',
    background: '#ffffff',
    border: '1px solid #cccccc',
    boxSizing: 'border-box',
    borderRadius: 10,
    padding: 10,
  },
  coinName: {
    position: 'absolute',
    width: 120,
    height: 20,
    left: 105,
    top: 10,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: 18,
    color: '#666666',
    lineHeight: '21px',
  },
  tradingPair: {
    color: '#999999',
    position: 'absolute',
    width: 80,
    height: 20,
    right: 10,
    top: 10,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: '12px',
    alignItems: 'center',
    textAlign: 'right',
  },
  changeFrame: {
    position: 'absolute',
    width: 215,
    height: 20,
    left: 105,
    top: 32,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: '18px',
    alignItems: 'center',
    color: '#469650'
  },
  sparkline: {
    position: 'absolute',
    width: 100,
    height: 20,
    right: 10,
    bottom: 10,
  },
  iconBox: {
    display: 'flex',
    position: 'absolute',
    width: 80,
    height: 80,
    left: 10,
    top: 10,
    padding: 16,
    background: '#e1e4ea',
    borderRadius: 10,
  }
});
