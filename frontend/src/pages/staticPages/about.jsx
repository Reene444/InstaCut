// material-ui
import Typography from '@mui/material/Typography';

// project import
import MainCard from 'components/MainCard';





export default function AboutPage() {

  return (
    <MainCard title="About">
      <Typography variant="body2">
        It is about Albums!
      </Typography>
    </MainCard>
  );
}
