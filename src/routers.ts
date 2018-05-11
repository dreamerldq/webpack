import IndexPage from "./routers/IndexPage/index"
import Login from "./routers/Login"
import News from "./routers/News/index"
import Protected from "./routers/Protected/index"
import User from "./routers/User"
import Teachers from "./routers/Teachers/routers"
const routers = [
  {path: "/", component: IndexPage, name: "主页"},
  {path: "/news",  component: News, name: "新闻"},
  {path: "/login", component: Login, name: "登录"},
  {path: "/protexted", component: Protected, name: "权限界面"},
  {path: "/user", component: User, name: "用户管理"},
  {path: "/teacherteam", component: Teachers, name: "教师列表"},
]
export default routers
