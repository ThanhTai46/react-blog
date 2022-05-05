import Header from "components/layout/Header";
import Layout from "components/layout/Layout";
import HomeBanner from "module/HomeBanner";
import styled from "styled-components";
const HomePageStyles = styled.div``;
const HomePage = () => {
  return (
    <div>
      <HomePageStyles>
        <Layout>
          <HomeBanner />
        </Layout>
      </HomePageStyles>
    </div>
  );
};

export default HomePage;
