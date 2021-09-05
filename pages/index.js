import { Fragment } from 'react';
import Head from 'next/head';
// import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    'id': 1,
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    'title': 'cool',
    'address': 'kooot',
    'description': 'haha'
  },
  {
    'id': 2,
    'image': 'https://www.at-languagesolutions.com/wp-content/uploads/2016/06/http-1-1024x824.jpg',
    'title': 'cool22',
    'address': 'dsgjj',
    'description': 'yoyo'
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Reacter Meetups</title>
        <script src="https://api.memberstack.io/static/memberstack.js?custom" data-memberstack-id="b3106fe80872e737499e46e10380237c"> </script> 
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <MeetupList meetups={DUMMY_MEETUPS} />;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

// export async function getStaticProps() {
//   // fetch data from an API
//   const client = await MongoClient.connect(
//     'mongodb+srv://maximilian:TU6WdZF2EjFWsqUt@cluster0.ntrwp.mongodb.net/meetups?retryWrites=true&w=majority'
//   );
//   const db = client.db();

//   const meetupsCollection = db.collection('meetups');

//   const meetups = await meetupsCollection.find().toArray();

//   client.close();

//   return {
//     props: {
//       meetups: meetups.map((meetup) => ({
//         title: meetup.title,
//         address: meetup.address,
//         image: meetup.image,
//         id: meetup._id.toString(),
//       })),
//     },
//     revalidate: 1,
//   };
// }

export default HomePage;
