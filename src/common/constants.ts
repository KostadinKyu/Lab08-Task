export const apiUrl = "http://localhost:3000/";


export const TabStyles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #ccc',
    marginBottom: '10px',
    backgroundColor: '#f5f5f5'
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    // textTransform: 'initial',
    minWidth: 72,
    fontWeight: 500,
    marginRight: theme.spacing.unit * 2,
    color: '#444',
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: 500,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing(3),
  },
});

