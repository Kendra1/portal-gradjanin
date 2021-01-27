import { makeStyles } from '@material-ui/core/styles';
import { theme } from './theme';

export const useFormStyle = makeStyles({
  gridItem: {
    background: '#222327',
    height: theme.spacing(3.5),
    width: theme.spacing(20),
    marginBottom: theme.spacing(1),
    borderRadius: theme.spacing(0.25),
    paddingLeft: theme.spacing(0.75),
    paddingBottom: theme.spacing(1),
    alignItems: 'flex-end',
  },
  button: {
    height: theme.spacing(3.25),
    width: theme.spacing(20),
    marginBottom: theme.spacing(1),
  },
});
