import Vue from "vue";
import VueRouter from "vue-router";
import EventShow from "../views/EventShow"
import EventList from "../views/EventList"
import EventCreate from "../views/EventCreate"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: EventList
  },
  {
    path: "/event/:id",
    name: "List",
    component: EventShow,
    props: true
 
  },
  {
    path: "/event/create",
    name: "Create",
    component: EventCreate
 
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
