import IndexPage from "./routers/IndexPage/index"
import Login from "./routers/Login"
import News from "./routers/News/index"
import Protected from "./routers/Protected/index"
import User from "./routers/User"
import Teachers from "./routers/Teachers/routers"
import Todo from "./routers/Todo/index"
import Counter from "./routers/Rxjs/index"
const routers = [
  {path: "/", component: IndexPage, name: "主页"},
  {path: "/news",  component: News, name: "新闻"},
  {path: "/login", component: Login, name: "登录"},
  {path: "/protexted", component: Protected, name: "权限界面"},
  {path: "/user", component: User, name: "用户管理"},
  {path: "/teacherteam", component: Teachers, name: "教师列表"},
  {path: "/todo", component: Todo, name: "待办事项"},
  {path: "/counter", component: Counter, name: "计数器"},
]

export default routers
