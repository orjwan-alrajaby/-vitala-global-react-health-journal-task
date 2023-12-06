const NAV_LINKS = {
  home: {
    name: 'Home',
    href: "/"
  },
  createActivity: {
    name: "Create Activity",
    href: "/create-activity"
  },
  myActivities: {
    name: 'My Activities',
    href: "/my-activities"
  },
}

const ROUTE_LINKS = {
  ...NAV_LINKS,
  myActivity: {
    name: "My Activity",
    href: "/my-activity/:id"
  },
  editActivity: {
    name: 'Edit My Activity',
    href: "/my-activities/:id/edit"
  },
  deleteActivity: {
    name: 'Delete My Activity',
    href: "/my-activities/:id/delete"
  },
  notFound: {
    name: "404 Resource Not Found",
    href: "/not-found"
  }
}
export {
  NAV_LINKS,
  ROUTE_LINKS
}