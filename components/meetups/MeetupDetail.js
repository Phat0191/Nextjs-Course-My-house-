import Head from "next/head";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  const { image, title, address, description } = props;

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <section className={classes.detail}>
        <img src={image} alt={title} className={classes.image} />
        <h1>{title}</h1>
        <address>{address}</address>
        <p>{description}</p>
      </section>
    </>
  );
};

export default MeetupDetail;
