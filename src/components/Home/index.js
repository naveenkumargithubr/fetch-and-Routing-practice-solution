import './index.css'
import BlogList from '../BlogList'
import UserInfo from '../UserInfo'

const Home = () => (
  <div className="home-container" testID="loader">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
