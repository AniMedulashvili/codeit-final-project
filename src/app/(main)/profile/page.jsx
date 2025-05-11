
import image from "next/image"
import styles from './page.module.css'
import SignOut from "@/components/SignOut/SignOut";

const Profile = async () => {
    let profile;
    try {
        const data = await fetch ("https://dummyjson.com/users/1")
        profile = await data.json();

        if(profile.message) {
            throw Error(profile.message)
        }
    }  catch (error) {
      throw Error(error);
    }


    return <div className={styles.container}> 
        <img
            src={profile.image} className={styles.image}
            alt="Profile Image"
            width={100}
            height={100}
        />
        <section className={styles.section}>
        <div className={styles.infoWrapper}>
            <p className={styles.p}>სახელი: {profile.firstName}</p>
        </div> 
          <div className={styles.infoWrapper}>
            <p className={styles.p}>მაიდენნეიმი: {profile.maidenName}</p>
        </div>
        <div className={styles.infoWrapper}>
            <p className={styles.p}>გვარი: {profile.lastName}</p>
        </div>
        <div className={styles.infoWrapper}>
            <p className={styles.p}>ტელეფონი: {profile.phone}</p>
        </div>
        <div className={styles.infoWrapper}>
            <p className={styles.p}>მეილი: {profile.email}</p>
        </div>
        <div className={styles.infoWrapper}>
            <p className={styles.p}>დაბადების თარიღი: {profile.birthDate}</p>
           
        </div>
        <div className={styles.infoWrapper}>
            <p className={styles.p}>მისამართი: {profile.address.country}; {profile.address.state}; {profile.address.address}</p>
        </div>
        <div className={styles.infoWrapper}>
            <p className={styles.p}>უნივერსიტეტი: {profile.university}</p>
        </div>
        <div className={styles.infoWrapper}>
            <p className={styles.p}>კომპანია: {profile.company.name}</p>
        </div>
        <div className={styles.infoWrapper}>
            <p className={styles.pa}> კომპანიის მისმართი: {profile.company.address.city}; {profile.company.address.state}; {profile.company.address.address}</p>
        </div>
         </section>
        <SignOut />
    </div>
    
}

export default Profile;