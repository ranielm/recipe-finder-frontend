import { Container, Link, Stack, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Stack alignItems="center">
        <Stack direction="column" alignItems="center">
          <Typography>
            <Trans>home.title</Trans>
          </Typography>
          <Link
            underline="always"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('home.action')}
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Home;
