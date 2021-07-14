import MainGrid from '../src/components/MainGrid';

import Box from '../src/components/Box';

export default function Home() {
  return (
    <MainGrid>
      <div className="profileArea" style={{ gridArea: "profileArea" }}>
        <Box><img src="https://github.com/the-one-who-knoccks.png" alt="" /></Box>
      </div>
      <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
        <Box>Bem-vindo!</Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }}>
        <Box>Comunidades</Box>
      </div>
    </MainGrid>
  );
}
