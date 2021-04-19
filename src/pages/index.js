import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import Home from '../components/Home/Home'


export default function home({ pizzas }) { 
  return (
    <Layout>
      <Home pizzas={pizzas} />
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch('https://vacc-ecommercebackend.herokuapp.com/main/');
  const pizzas = await res.json();

  return {
    props: {
      pizzas,
    }
  };
}