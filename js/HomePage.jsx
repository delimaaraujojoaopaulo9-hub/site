import { css } from '@emotion/react';
import { motion } from 'framer-motion';

const pageStyle = css`
  text-align: center;
  padding: 50px;
`;

const HomePage = () => {
  return (
    <motion.div css={pageStyle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1>Bem-vindo à loja</h1>
      <p>Esta é a página inicial.</p>
    </motion.div>
  );
};

export default HomePage;
