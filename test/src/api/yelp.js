import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 0b_xnE_ZUiYWiBWF4D4Pgivap7_34hrFG9QxU1rgRE77_jYhIaFJkpkWu-QjNkh7xzpmwXk1yCDVvafJ_K5ETFAm02FWAgLW6KKevRRTwZHyhFTrvmMpbdYx6nTQXnYx'
  }
});
