import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { example } from "../../store/driver/driverSlice";
import { driverSelector } from "../../store/driver/driverSelectors";
import { Column } from "../../components/Layout/Column/ColumnAtom";
import { Row } from "../../components/Layout/Row/RowAtom";
import { Container } from "../../components/Layout/Container/ContainerAtom";
import DriverCard from "../../components/Driver/Card/DriverCard";
import axios from "axios";
import { Driver } from "../../types/drivers";
import { useEffect } from "react";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const drivers = await axios.get(`${process.env.PUBLIC_BASE_URL}/api/drivers`);
  console.log(drivers.data);
  return {
    props: {
      drivers: drivers.data,
    },
  };
};

const Home: NextPage<{ drivers: Driver[] }> = ({ drivers }) => {
  const { valueExample } = useSelector(driverSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(drivers);
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <Row>
            {drivers.map((driver, index) => {
              // console.log(driver);
              return (
                <Column key={index} size={12} md={6} lg={3}>
                  <DriverCard data={driver} />
                </Column>
              );
            })}
          </Row>
          <a onClick={() => dispatch(example())}>
            <h2>REDUX TEST {valueExample}</h2>
          </a>
        </Container>
      </main>
    </div>
  );
};

export default Home;