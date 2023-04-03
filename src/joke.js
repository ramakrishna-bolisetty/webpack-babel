import axios from 'axios';
import  {URL} from './config.js'
function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    axios.get(`${URL}`, config).then(res => {

        document.getElementById('joke').innerHTML = res.data.joke;
    });
    console.log('gerenatejoke is called');
}
export default generateJoke;