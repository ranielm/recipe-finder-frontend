import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledModalBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  alignItems: 'center',
  overflow: 'auto',
  backgroundColor:
    theme.palette.mode === 'dark'
      ? theme.palette.background.paper
      : theme.palette.background.default,
  '& .MuiListItemText-root': {
    textAlign: 'center',
  },
  '& .MuiListItem-root': {
    padding: theme.spacing(1, 0),
  },
  '& img': {
    width: '100%',
    maxHeight: '300px',
    objectFit: 'cover',
    borderRadius: theme.shape.borderRadius,
  },
}));
