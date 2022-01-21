const statusesId = {
  NEW: 1,
  DELETED: 2,
  REGISTERED: 3,
  IN_PROGRESS: 4,
  FINISHED: 5,
  ARCHIVED: 6,
  APPROVED: 7,
  REJECTED: 8,
}

const userRoles = {
  ADMIN: 'ADMIN',
  USER: 'USER',
}

const statusCategories = {
  SHARED: 'Shared',
  USER: 'User',
  PROJECT: 'Project',
  ITEM: 'Item',
}

const statuses = [
  {
    STATUS: 'New',
    CATEGORY_ID: 1,
  },
  {
    STATUS: 'Deleted',
    CATEGORY_ID: 1,
  },
  {
    STATUS: 'Registered',
    CATEGORY_ID: 2,
  },
  {
    STATUS: 'In progress',
    CATEGORY_ID: 3,
  },
  {
    STATUS: 'Finished',
    CATEGORY_ID: 3,
  },
  {
    STATUS: 'Archived',
    CATEGORY_ID: 3,
  },
  {
    STATUS: 'Approved',
    CATEGORY_ID: 4,
  },
  {
    STATUS: 'Rejected',
    CATEGORY_ID: 4,
  },
]

const billValue = {
  INCOME_TAX: 0.13,
  MILITARY_TAX: 0.015,
}

module.exports = {
  statusesId,
  userRoles,
  statusCategories,
  statuses,
  billValue,
}
