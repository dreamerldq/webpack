import IndexPage from "./routers/IndexPage/index"
import Login from "./routers/Login"
import News from "./routers/News/index"
import Protected from "./routers/Protected/index"
const routers = [
  {path: "/", component: IndexPage, name: "主页"},
  {path: "/news", component: News, name: "新闻"},
  {path: "/login", component: Login, name: "登录"},
  {path: "/protexted", component: Protected, name: "权限界面"},
]
export default routers
