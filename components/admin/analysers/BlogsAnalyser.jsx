import { useState, useEffect } from 'react'
import { getBlogsDateData } from '../../../actions/admin'
import { getCookie } from '../../../actions/auth'
import { Line } from 'react-chartjs-2';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import moment from 'moment'
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
  const classes = useStyles();
  const [month_, setMonth] = React.useState(11);
  const [year_, setYear] = React.useState(2019);
  const [chartDataThisMonth, setChartDataThisMonth] = useState({ date: [], data: [] })
  const token = getCookie('token')
  useEffect(() => {
    getBlogsDateData(token, month_, year_).then(res => {
      if (res.error) {
        return console.log(res.error)
      }
      if (res.data !== undefined) {
        setChartDataThisMonth({
          date: res.data.filter(({ _id: { month } }) => month === month_).sort((a, b) => (a._id.day > b._id.day) ? 1 : ((b._id.day > a._id.day) ? -1 : 0)).map(({ _id: { year, month, day } }, i) => day),
          data: res.data.filter(({ _id: { month } }) => month === month_).sort((a, b) => (a._id.day > b.last_nom) ? 1 : ((b._id.day > a._id.day) ? -1 : 0)).map(({ count }, i) => count)
        })
      }
    })
  }, [month_, year_])
  return (
    <>
      <Line data={{
        labels: chartDataThisMonth.date,
        datasets: [
          {
            label: 'Blogs dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 1,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: chartDataThisMonth.data
          }
        ]
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