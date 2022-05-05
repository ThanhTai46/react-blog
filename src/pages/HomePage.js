import Header from "components/layout/Header";
import Layout from "components/layout/Layout";
import HomeBanner from "module/HomeBanner";
import HomeFeature from "module/HomeFeature";
import HomeNewest from "module/HomeNewest";
import styled from "styled-components";
const HomePageStyles = styled.div``;
const HomePage = () => {
  return (
    <div>
      <HomePageStyles>
        <Layout>
          <HomeBanner></HomeBanner>
          <HomeFeature></HomeFeature>
          <HomeNewest></HomeNewest>
        </Layout>
      </HomePageStyles>
    </div>
  );
};
export default HomePage;
