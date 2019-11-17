import { useState, useEffect } from 'react'
import { getCategories } from '../../../actions/category'
import { getCategoriesData } from '../../../actions/admin'
import { getCookie } from '../../../actions/auth'
import {Doughnut} from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ColorHash from 'color-hash'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default () => {
    const colorHash = new ColorHash({ hue: [{ min: 30, max: 90 }, { min: 180, max: 210 }, { min: 270, max: 285 }] });
  const classes = useStyles();
  const [month_, setMonth] = React.useState(11);
  const [year_, setYear] = React.useState(2019);
  const [chartData, setChartData] = useState([])
  const token = getCookie('token')
  useEffect(() => {
    getCategories().then(catagories => {
      if (catagories.error) {
        return console.log(catagories.error)
      }
      return catagories
    }).then(catagories => { 
      if (catagories) { 
        getCategoriesData(token, month_, year_).then((res) => { 
          if (res.error) {
            console.log(res.error)
          }
          else { 
            console.log(res)
            const result = [res, catagories].reduce((a, b) => a.map((c, i) => Object.assign({}, c, b[i])));
            setChartData(result)
            console.log(result)

          }
        })
      }
    })
  }, [month_, year_])
  return (
    <>
      <Doughnut data={{
	labels: chartData.map(({name},i)=>name),
	datasets: [{
		data:chartData.map(({count},i)=>count),
		backgroundColor:  chartData.map(({ name, _id }, i) => colorHash.hex(name)),
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
}} />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">chose Month</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month_}
          onChange={(event) => setMonth(parseInt(event.target.value))}
        >
          {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, i) => <MenuItem key={i} value={i + 1}>{month}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">chose Month</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year_}
          onChange={(event) => setYear(parseInt(event.target.value))}
        >
          {Array(10).fill('').map((month, i) => <MenuItem key={i} value={2019 + i}>{2019 + i}</MenuItem>)}
        </Select>
      </FormControl>
    </>
  )
};