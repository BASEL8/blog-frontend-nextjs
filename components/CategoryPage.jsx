import Card from './blog/layout/Card'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'




const CategoryPage = ({blogs,category}) => {

  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      return <div key={i}>
        <Card blog={blog} />
      </div>
    })
  }
  return (
    <>
        <Typography align="center"  variant="h3" gutterBottom >
          {category.name}
        </Typography>
      <Box>
         {showAllBlogs()}
     </Box>
    </>
  )

}

export default CategoryPage;